import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Star, ChevronRight, Clock, MapPin, ArrowRight } from "lucide-react";
import heroKhachapuri from "../assets/hero-khachapuri.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bakers Bros | Cafe-Bakery in Saguramo" },
      { name: "description", content: "Fresh khachapuri, pastries & specialty coffee in Saguramo. Visit Bakers Bros for the best Georgian cafe-bakery experience. Custom orders available." },
      { property: "og:title", content: "Bakers Bros | Cafe-Bakery in Saguramo" },
      { property: "og:description", content: "Fresh khachapuri, pastries & specialty coffee. Visit us or call for custom orders." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBakery}
            alt="Bakers Bros artisan bakery interior"
            className="h-full w-full object-cover"
            style={{ filter: "brightness(0.5)" }}
          />
        </div>
        <div className="section-padding relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl py-16 text-center md:py-24">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-bread/20 px-3 py-1 text-sm font-medium text-butter backdrop-blur-sm">
              <Star className="h-3.5 w-3.5 fill-butter text-butter" />
              4.9 Rating | 10–20 GEL per person
            </div>
            <h1
              className="text-4xl font-bold leading-tight text-cream md:text-5xl lg:text-6xl text-balance"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Freshly Baked, Made with Love
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-cream/90 text-balance">
              Artisan breads, flaky pastries & specialty coffee at Bakers Bros.
              Your neighborhood cafe-bakery in Saguramo — where every bite feels like home.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+995511109490" className="btn-gold w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-cream/80">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> Open until 9:30 PM
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" /> Saguramo, Georgia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
              What Our Customers Say
            </h2>
            <p className="mt-3 text-muted-foreground text-balance">
              Rated 4.9 by 63 happy visitors — here's what keeps them coming back.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <TestimonialCard
              name="Natia K."
              rating={5}
              text="Best croissants in the area! The atmosphere is so warm and cozy. We drive 30 minutes just for their sourdough."
            />
            <TestimonialCard
              name="Giorgi M."
              rating={5}
              text="Ordered a custom birthday cake — it was stunning and delicious. The staff went above and beyond. Highly recommend!"
            />
            <TestimonialCard
              name="Mariam T."
              rating={5}
              text="Their coffee is incredible and the pastries are always fresh. A perfect spot for weekend brunch with friends."
            />
          </div>
        </div>
      </section>

      {/* Quote / CTA Section */}
      <section className="section-padding bg-espresso text-cream">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            Planning a Special Event?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-cream/80 text-balance">
            Let us handle the food. From custom cakes to full catering — we bring the bakery to your celebration.
            Get a free, no-obligation quote in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/contact" className="btn-gold w-full sm:w-auto">
              Get a Free Quote
              <ChevronRight className="h-4 w-4" />
            </Link>
            <a href="tel:+995511109490" className="inline-flex items-center justify-center gap-2 rounded-md border border-cream/30 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-cream/10 w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Call +995 511 10 94 90
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
