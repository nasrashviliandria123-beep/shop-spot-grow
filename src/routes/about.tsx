import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Award, Users, Heart, ArrowRight } from "lucide-react";
import heroKhachapuri from "../assets/hero-khachapuri.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "ჩვენ შესახებ | Bakers Bros" },
      { name: "description", content: "გაიცანით Bakers Bros კაფე-საცხობი საგურამოში. ჩვენი ისტორია, ღირებულებები და ერთგულება ახალი, ხელით გაკეთებული ცომეულის მიმართ." },
      { property: "og:title", content: "ჩვენ შესახებ | Bakers Bros" },
      { property: "og:description", content: "ჩვენი ისტორია და ერთგულება ახალი, ხელით გაკეთებული ცომეულის მიმართ საგურამოში." },
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
            Bakers Bros-ის შესახებ
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-balance">
            ოჯახური კაფე-საცხობი, რომელიც ქართული გემოების სითბოს მოაქვს საგურამოში.
            ყოველი ხაჭაპური, ყოველი ნამცხვარი და ყოველი ფინჯანი ყავა ვნებით კეთდება.
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
                alt="აჭარული ხაჭაპური ცხელ-ცხელი თონიდან"
                loading="lazy"
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
                ჩვენი ისტორია
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground text-balance">
                Bakers Bros დაიწყო პატარა საოჯახო სამზარეულოდან ერთი ოცნებით: 
                ჩვენს თემს ნამდვილი, ხელნაკეთი ქართული გემოები მიგვერთმია. რაც დაიწყო შაბათ-კვირას ხაჭაპურის გაყიდვით ადგილობრივ ბაზრობებზე, გადაიქცა მყუდრო კაფე-საცხობად, რომელსაც დღეს ხედავთ.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground text-balance">
                ჩვენ გვჯერა, რომ კარგი საკვები კარგი ინგრედიენტებით იწყება. ამიტომ ვირჩევთ ადგილობრივ ყველს, ფერმის ახალ კვერცხებს და ნამდვილ კარაქს — გვერდის ავლის გარეშე, კონსერვანტების გარეშე. ცომი ყოველდღე ახლად მზადდება, რაც ყოველ ხაჭაპურს მის უნიკალურ გემოს ანიჭებს.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground text-balance">
                საგურამოში, 1-ლი ქუჩაზე, ვამაყობთ რომ ამ თემის ნაწილი ვართ. იქნება ეს სწრაფი ყავა, საფირმო ტორტი თუ ღონისძიების კეთერინგი — აქ ვართ, რომ ყოველი წუთი უფრო ტკბილი გავხადოთ.
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
              რას ვემსახურებით
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Heart className="h-6 w-6" />}
              title="გაკეთებული სიყვარულით"
              description="ყოველი პროდუქტი ხელით კეთდება ზრუნვით. ჩვენ არ ვამზადებთ მასობრივად — ვაცხობთ გულდასმით."
            />
            <ValueCard
              icon={<Award className="h-6 w-6" />}
              title="ხარისხი უპირველეს ყოვლისა"
              description="პრემიუმ ინგრედიენტები, ტრადიციული მეთოდები და ნულოვანი კომპრომისი სიახლეზე."
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="თემზე ორიენტირებული"
              description="ჩვენ მხოლოდ საცხობი არ ვართ — თქვენი მეზობლები ვართ. ვუჭერთ მხარს ადგილობრივებს."
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
              <h3 className="mt-3 font-semibold text-foreground">მისამართი</h3>
              <p className="mt-1 text-sm text-muted-foreground">N31, 1-ლი ქუჩა<br />საგურამო 3311, საქართველო</p>
            </div>
            <div className="text-center">
              <Clock className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">სამუშაო საათები</h3>
              <p className="mt-1 text-sm text-muted-foreground">ღია ყოველდღე<br />დახურვა 21:30</p>
            </div>
            <div className="text-center">
              <Phone className="mx-auto h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold text-foreground">დაგვირეკეთ</h3>
              <a href="tel:+995511109490" className="mt-1 inline-block text-sm text-primary hover:underline">
                +995 511 10 94 90
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="btn-primary">
              მიიღეთ უფასო შეთავაზება
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
