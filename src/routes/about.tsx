import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Award, Users, Heart, ArrowRight } from "lucide-react";
import heroKhachapuri from "../assets/hero-khachapuri.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Bakers Bros" },
      { name: "description", content: "Learn about Bakers Bros cafe-bakery in Saguramo. Our story, values and commitment to fresh, handmade baked goods." },
      { property: "og:title", content: "About Us | Bakers Bros" },
      { property: "og:description", content: "Our story, values and commitment to fresh, handmade baked goods in Saguramo." },
      { property: "og:url", content: "/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            About Bakers Bros
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-balance">
            A family-run cafe-bakery bringing the warmth of Georgian flavors to Saguramo.
            Every khachapuri, every pastry, every cup of coffee is made with passion.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <img
                src={heroKhachapuri}
                alt="Acharuli khachapuri fresh from the oven"
                loading="lazy"
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
                Our Story
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-balance">
                Bakers Bros started as a small home kitchen with a dream: to bring authentic, handcrafted 
                Georgian flavors to our community. What began as weekend khachapuri sales at local markets grew into 
                the cozy cafe-bakery you see today.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground text-balance">
                We believe that great food starts with great ingredients. That's why we source local cheese, 
                farm-fresh eggs, and real butter — no shortcuts, no preservatives. Our dough is made fresh daily, 
                giving every khachapuri its unique depth of flavor.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground text-balance">
                Located on 1li Street in Saguramo, we're proud to be part of this community. Whether 
                you're grabbing a quick coffee, ordering a custom cake, or catering an event — we're here 
                to make every moment a little sweeter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
              What We Stand For
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Heart className="h-6 w-6" />}
              title="Made with Love"
              description="Every item is handcrafted with care. We don't mass-produce — we bake with intention."
            />
            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="Quality First"
              description="Premium ingredients, time-honored techniques, and zero compromises on freshness."
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Community Focused"
              description="We're not just a bakery — we're your neighbors. Supporting local and giving back."
            />
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:grid-cols-3">
            <div className="text-center">
              <MapPin className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Location</h3>
              <p className="mt-1 text-sm text-muted-foreground">N31, 1li St<br />Saguramo 3311, Georgia</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Hours</h3>
              <p className="mt-1 text-sm text-muted-foreground">Open Daily<br />Closes 9:30 PM</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">Call Us</h3>
              <a href="tel:+995511109490" className="mt-1 inline-block text-sm text-primary hover:underline">
                +995 511 10 94 90
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-card-foreground" style={{ fontFamily: "'Lora', serif" }}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
