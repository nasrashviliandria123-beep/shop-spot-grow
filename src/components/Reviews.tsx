import { useEffect, useState } from "react";
import { Star, X, MessageSquarePlus, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

function Stars({ value, size = 16 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          style={{ width: size, height: size }}
          className={n <= value ? "fill-yellow-400 text-yellow-400" : "fill-none text-muted-foreground/40"}
        />
      ))}
    </div>
  );
}

function formatDate(iso: string, lang: "ka" | "en") {
  try {
    return new Date(iso).toLocaleDateString(lang === "en" ? "en-US" : "ka-GE", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export default function Reviews() {
  const { lang } = useLang();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data, error: err } = await supabase
        .from("reviews")
        .select("id, name, rating, comment, created_at")
        .order("created_at", { ascending: false })
        .limit(50);
      if (!active) return;
      if (!err && data) setReviews(data as Review[]);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  const avg = reviews.length
    ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
    : 0;

  const submit = async () => {
    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    if (!trimmedName || !trimmedComment || rating < 1) {
      setError(lang === "en" ? "Please fill in all fields and pick a rating." : "გთხოვ შეავსე ყველა ველი და აირჩიე რეიტინგი.");
      return;
    }
    if (trimmedName.length > 80) {
      setError(lang === "en" ? "Name is too long." : "სახელი ძალიან გრძელია.");
      return;
    }
    if (trimmedComment.length > 1000) {
      setError(lang === "en" ? "Comment is too long." : "კომენტარი ძალიან გრძელია.");
      return;
    }
    setSubmitting(true);
    setError(null);
    const { data, error: err } = await supabase
      .from("reviews")
      .insert({ name: trimmedName, rating, comment: trimmedComment })
      .select("id, name, rating, comment, created_at")
      .single();
    setSubmitting(false);
    if (err || !data) {
      setError(lang === "en" ? "Could not submit. Please try again." : "შენახვა ვერ მოხერხდა, სცადე თავიდან.");
      return;
    }
    setReviews((r) => [data as Review, ...r]);
    setOpen(false);
    setRating(0);
    setHover(0);
    setName("");
    setComment("");
  };

  const visible = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section className="border-t border-border bg-muted/20">
      <div className="section-padding mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl" style={{ fontFamily: "'Lora', serif" }}>
            {lang === "en" ? "Customer Reviews" : "მომხმარებლების შეფასებები"}
          </h2>
          {reviews.length > 0 && (
            <div className="mt-3 flex items-center gap-3">
              <Stars value={Math.round(avg)} size={20} />
              <span className="text-lg font-bold text-foreground">{avg.toFixed(1)}</span>
              <span className="text-sm text-muted-foreground">
                · {reviews.length} {lang === "en" ? "reviews" : "შეფასება"}
              </span>
            </div>
          )}
          <button
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition hover:opacity-95"
          >
            <MessageSquarePlus className="h-5 w-5" />
            {lang === "en" ? "Leave a Review" : "დატოვე შეფასება"}
          </button>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="flex justify-center py-10 text-muted-foreground">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : reviews.length === 0 ? (
            <p className="text-center text-muted-foreground">
              {lang === "en" ? "Be the first to leave a review!" : "იყავი პირველი, ვინც შეფასებას დატოვებს!"}
            </p>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-2">
                {visible.map((r) => (
                  <article key={r.id} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-foreground">{r.name}</h3>
                        <p className="text-xs text-muted-foreground">{formatDate(r.created_at, lang)}</p>
                      </div>
                      <Stars value={r.rating} />
                    </div>
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">{r.comment}</p>
                  </article>
                ))}
              </div>
              {reviews.length > 6 && (
                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setShowAll((v) => !v)}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    {showAll
                      ? lang === "en" ? "Show less" : "ნაკლების ჩვენება"
                      : lang === "en" ? `Show all ${reviews.length}` : `ყველას ჩვენება (${reviews.length})`}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4"
          onClick={() => !submitting && setOpen(false)}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-t-2xl bg-card shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <h3 className="text-lg font-bold">
                {lang === "en" ? "Leave a Review" : "დატოვე შეფასება"}
              </h3>
              <button
                onClick={() => !submitting && setOpen(false)}
                className="rounded-full p-1 hover:bg-muted"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 p-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  {lang === "en" ? "Rating" : "რეიტინგი"}
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(n)}
                      className="p-1"
                      aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    >
                      <Star
                        className={`h-8 w-8 transition ${
                          n <= (hover || rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-none text-muted-foreground/40"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {lang === "en" ? "Your name" : "სახელი"}
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={80}
                  placeholder={lang === "en" ? "Your name" : "შენი სახელი"}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {lang === "en" ? "Your review" : "შენი შეფასება"}
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  maxLength={1000}
                  rows={4}
                  placeholder={lang === "en" ? "Tell us what you think..." : "დაგვიწერე შენი აზრი..."}
                  className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
                <p className="mt-1 text-right text-xs text-muted-foreground">{comment.length}/1000</p>
              </div>
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
              <button
                onClick={submit}
                disabled={submitting || !name.trim() || !comment.trim() || rating < 1}
                className="btn-primary flex w-full items-center justify-center gap-2 disabled:opacity-50"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {lang === "en" ? "Submit Review" : "გაგზავნა"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
