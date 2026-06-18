import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Award, Users, Heart } from "lucide-react";
import heroKhachapuri from "../assets/hero-khachapuri.jpg";
import { useLang } from "../lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "ჩვენ შესახებ | Bakers Bros" },
      { name: "description", content: "გაიცანით Bakers Bros კაფე-საცხობი საგურამოში." },
      { property: "og:url", content: "/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background" />
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            {t("about_h1")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-balance">{t("about_hero_p")}</p>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-espresso">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/10 via-transparent to-amber-glow/10" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img src={heroKhachapuri} alt="Khachapuri" loading="lazy" className="rounded-2xl object-cover shadow-lg border border-cream/10" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-cream md:text-3xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
                {t("story_h2")}
              </h2>
              <p className="mt-4 leading-relaxed text-cream/70 text-balance">{t("story_p1")}</p>
              <p className="mt-4 leading-relaxed text-cream/70 text-balance">{t("story_p2")}</p>
              <p className="mt-4 leading-relaxed text-cream/70 text-balance">{t("story_p3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-espresso">
        <div className="absolute inset-0 bg-gradient-to-br from-ember/10 via-transparent to-amber-glow/10" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
              {t("values_h2")}
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard icon={<Heart className="h-6 w-6" />} title={t("val1_t")} description={t("val1_d")} />
            <ValueCard icon={<Award className="h-6 w-6" />} title={t("val2_t")} description={t("val2_d")} />
            <ValueCard icon={<Users className="h-6 w-6" />} title={t("val3_t")} description={t("val3_d")} />
          </div>
        </div>
      </section>

      <section className="section-padding relative bg-background">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-3">
            <div className="text-center">
              <MapPin className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">{t("info_addr")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t("addr_line")}<br />{t("addr_city")}</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">{t("info_hours")}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t("hours_line1")}<br />{t("hours_line2")}</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">{t("info_call")}</h3>
              <a href="tel:+995511109490" className="mt-1 inline-block text-sm text-primary hover:underline">
                +995 511 10 94 90
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-cream/10 bg-cream/5 p-6 text-center shadow-sm backdrop-blur-sm">
      <div className="mx-auto mb-4 inline-flex rounded-full bg-butter/10 p-3 text-butter">{icon}</div>
      <h3 className="text-lg font-semibold text-cream" style={{ fontFamily: "'Lora', serif" }}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-cream/70">{description}</p>
    </div>
  );
}
