import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "კონტაქტი | Bakers Bros" },
      { name: "description", content: "დაგვიკავშირდით Bakers Bros-ს. მიიღეთ შეთავაზება, შეუკვეთეთ საფირმო ტორტი ან ეწვიეთ ჩვენს კაფე-საცხობს საგურამოში." },
      { property: "og:title", content: "კონტაქტი | Bakers Bros" },
      { property: "og:description", content: "მიიღეთ უფასო შეთავაზება ან დაგვიკავშირდით საფირმო შეკვეთებისთვის." },
      { property: "og:url", content: "/contact" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            დაგვიკავშირდით
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">
            გაქვთ კითხვა? გსურთ საფირმო ტორტი ან კეთერინგის შეთავაზება? დაგვიწერეთ — ვპასუხობთ 24 საათში.
          </p>
          <div className="mt-4">
            <a href="tel:+995511109490" className="btn-primary">
              <Phone className="h-4 w-4" />
              დარეკეთ: +995 511 10 94 90
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                {submitted ? (
                  <div className="py-10 text-center">
                    <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                    <h2 className="mt-4 text-xl font-bold text-card-foreground" style={{ fontFamily: "'Lora', serif" }}>
                      შეტყობინება გაიგზავნა!
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      მადლობა მოგვწერეთ. დაგიკავშირდებით 24 საათში.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", eventType: "", message: "" }); }}
                      className="mt-6 text-sm font-medium text-primary hover:underline"
                    >
                      კიდევ ერთი შეტყობინების გაგზავნა
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-card-foreground" style={{ fontFamily: "'Lora', serif" }}>
                      მოითხოვეთ უფასო შეთავაზება
                    </h2>
                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            სახელი და გვარი
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="თქვენი სახელი"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            ელ. ფოსტა
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="you@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            ტელეფონი
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                            placeholder="+995 5XX XX XX XX"
                          />
                        </div>
                        <div>
                          <label htmlFor="eventType" className="mb-1.5 block text-sm font-medium text-card-foreground">
                            ღონისძიების ტიპი
                          </label>
                          <select
                            id="eventType"
                            value={form.eventType}
                            onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                            className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                          >
                            <option value="">აირჩიეთ</option>
                            <option value="birthday">დაბადების დღე</option>
                            <option value="wedding">ქორწილი</option>
                            <option value="corporate">კორპორატიული</option>
                            <option value="catering">კეთერინგი</option>
                            <option value="custom">საფირმო ტორტი</option>
                            <option value="other">სხვა</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                          შეტყობინება / დეტალები
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                          placeholder="მოგვწერეთ ღონისძიების შესახებ, სტუმრების რაოდენობა და რა გჭირდებათ..."
                        />
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto">
                        <Send className="h-4 w-4" />
                        გაგზავნა
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-card-foreground" style={{ fontFamily: "'Lora', serif" }}>
                  ეწვიეთ ჩვენ
                </h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Bakers Bros კაფე-საცხობი</p>
                      <p className="text-sm text-muted-foreground">N31, 1-ლი ქუჩა<br />საგურამო 3311, საქართველო</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">სამუშაო საათები</p>
                      <p className="text-sm text-muted-foreground">ღია ყოველდღე<br />დახურვა 21:30</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">ტელეფონი</p>
                      <a href="tel:+995511109490" className="text-sm text-primary hover:underline">+995 511 10 94 90</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">ელ. ფოსტა</p>
                      <a href="mailto:hello@bakersbros.ge" className="text-sm text-primary hover:underline">hello@bakersbros.ge</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-primary/5 p-6">
                <h3 className="text-lg font-bold text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                  გჭირდებათ სწრაფად?
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  იმავე დღის შეკვეთებისთვის ან სწრაფი კითხვებისთვის დაგვირეკეთ პირდაპირ. საფირმო შეკვეთებს ვიღებთ 48 საათით ადრე.
                </p>
                <a href="tel:+995511109490" className="btn-primary mt-4 inline-flex w-full justify-center">
                  <Phone className="h-4 w-4" />
                  დარეკვა
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
