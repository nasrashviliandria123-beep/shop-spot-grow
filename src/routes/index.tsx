import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ChevronRight, Clock, MapPin } from "lucide-react";
import logoAsset from "../assets/bakers-bros-logo-black.png.asset.json";
import bgVideo from "../assets/bg-video.mp4.asset.json";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bakers Bros | კაფე-საცხობი საგურამოში" },
      { name: "description", content: "ახლადგამომცხვარი ხაჭაპური, ნამცხვრები და საფირმო ყავა საგურამოში." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLang();
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroKhachapuri}
            alt="Bakers Bros artisan bakery"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.65)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/25 to-background" />
        </div>

        {/* Rising steam particles */}
        <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
          <div className="steam-particle steam-1" />
          <div className="steam-particle steam-2" />
          <div className="steam-particle steam-3" />
          <div className="steam-particle steam-4" />
          <div className="steam-particle steam-5" />
          <div className="steam-particle steam-6" />
          <div className="steam-particle steam-7" />
          <div className="steam-particle steam-8" />
          <div className="steam-particle steam-9" />
          <div className="steam-particle steam-10" />
          <div className="steam-particle steam-11" />
          <div className="steam-particle steam-12" />
        </div>

        <img
          src={logoAsset.url}
          alt="Bakers Bros"
          className="absolute top-4 left-4 z-10 h-auto w-16 md:w-20 lg:w-24 drop-shadow-lg"
        />
        <div className="section-padding relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl py-16 text-center md:py-24">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bread/20 px-3 py-1 text-sm font-medium text-butter backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-butter text-butter" />
              {t("rating_badge")}
            </div>
            <h1 className="mt-6 text-2xl font-bold tracking-wide text-cream drop-shadow-md">
              Bakers Bros
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/90 text-balance">{t("hero_p")}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/menu" className="btn-primary w-full sm:w-auto">
                🛒 {t("order_online")}
                <ChevronRight className="h-4 w-4" />
              </Link>
              <Link to="/menu" className="btn-gold w-full sm:w-auto">
                {t("view_menu")}
              </Link>
              <a href="tel:+995511109490" className="btn-gold w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                {t("call")}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-cream/80">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {t("open_until")}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> {t("location")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
              {t("testimonials_h2")}
            </h2>
            <p className="mt-3 text-muted-foreground text-balance">{t("testimonials_p")}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard name={t("t1_name")} rating={5} text={t("t1_text")} />
            <TestimonialCard name={t("t2_name")} rating={5} text={t("t2_text")} />
            <TestimonialCard name={t("t3_name")} rating={5} text={t("t3_text")} />
          </div>
        </div>
      </section>

      {/* Quote / CTA Section */}
      <section className="section-padding relative overflow-hidden border-y border-border/50 bg-espresso">
        <div className="absolute inset-0 bg-gradient-to-r from-ember/10 via-transparent to-amber-glow/10" />
        <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            {t("cta_h2")}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/80 text-balance">{t("cta_p")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="tel:+995511109490" className="btn-gold w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              {t("call_us")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialCard({ name, rating, text }: { name: string; rating: number; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-1 text-bread">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-card-foreground">"{text}"</p>
      <p className="mt-4 text-sm font-semibold text-muted-foreground">— {name}</p>
    </div>
  );
}
