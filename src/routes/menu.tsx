import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Cookie, Pizza, Wheat, Leaf } from "lucide-react";
import { useLang } from "../lib/i18n";
import sigareti from "../assets/menu/sigareti.jpg.asset.json";
import eclair from "../assets/menu/eclair.jpg.asset.json";
import shu from "../assets/menu/shu.jpg.asset.json";
import fourCheese from "../assets/menu/four-cheese.jpg.asset.json";
import pepperoni from "../assets/menu/pepperoni.jpg.asset.json";
import mushroom from "../assets/menu/mushroom.png.asset.json";
import margherita from "../assets/menu/margherita.jpg.asset.json";
import achma from "../assets/menu/achma.jpg.asset.json";
import chebureki from "../assets/menu/chebureki.jpg.asset.json";
import kudari from "../assets/menu/kudari.jpg.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "მენიუ | Bakers Bros" },
      { name: "description", content: "ნამდვილი ქართული ხაჭაპური, ნამცხვრები, პიცა და ყავა." },
      { property: "og:url", content: "/menu" },
    ],
  }),
  component: MenuPage,
});

const menuSections = [
  {
    key: "sec_khach" as const,
    icon: <Wheat className="h-5 w-5" />,
    wide: true,
    items: [
      { ka: "იმერული ხაჭაპური (პატარა)", en: "Imeretian Khachapuri (small)", price: "12 ₾" },
      { ka: "იმერული ხაჭაპური (საშუალო)", en: "Imeretian Khachapuri (medium)", price: "14 ₾" },
      { ka: "იმერული ხაჭაპური (დიდი)", en: "Imeretian Khachapuri (large)", price: "17 ₾" },
      { ka: "მეგრული ხაჭაპური (პატარა / საშუალო / დიდი)", en: "Megrelian Khachapuri (S / M / L)", price: "13 / 16 / 20 ₾" },
      { ka: "ლაზური ხაჭაპური (პატარა / საშუალო / დიდი)", en: "Lazian Khachapuri (S / M / L)", price: "16 / 20 / 28 ₾" },
      { ka: "აჭარული ხაჭაპური (მინი / პატარა / საშუალო / დიდი / ექსტრა)", en: "Adjaran Khachapuri (mini / S / M / L / XL)", price: "10 / 14.50 / 17.50 / 23 / 30 ₾" },
      { ka: "ლობიანი (პატარა / საშუალო / დიდი)", en: "Lobiani (S / M / L)", price: "8.50 / 10 / 12 ₾" },
      { ka: "აჭარული ლობიანი", en: "Adjaran Lobiani", price: "12 ₾" },
      { ka: "ნახევრად ფენოვანი ხაჭაპური", en: "Semi-flaky Khachapuri", price: "6 ₾" },
      { ka: "ნახევრად ფენოვანი ლობიანი", en: "Semi-flaky Lobiani", price: "5 ₾" },
      { ka: "ქუდარი", en: "Kudari", price: "17 ₾", image: kudari.url },
      { ka: "ხაჭაპური შამფურზე", en: "Khachapuri on Skewer", price: "15 ₾" },
      { ka: "ლობიანი შამფურზე", en: "Lobiani on Skewer", price: "12 ₾" },
      { ka: "გურული ლვეშელი", en: "Gurian Lveshi", price: "12 ₾" },
      { ka: "ხორცის ლვეშელი", en: "Meat Lveshi", price: "4.50 ₾" },
      { ka: "კარტოფილის ლვეშელი", en: "Potato Lveshi", price: "3.50 ₾" },
      { ka: "ჩებურეკი", en: "Chebureki", price: "6 ₾", image: chebureki.url },
      { ka: "აჩმა", en: "Achma", price: "8.50 ₾", image: achma.url },
      { ka: "კარტოფილი ფრი", en: "French Fries", price: "4 ₾" },
      { ka: "პონჩიკი", en: "Ponchiki (Donut)", price: "3 ₾" },
    ],
  },
  {
    key: "sec_pizza" as const,
    icon: <Pizza className="h-5 w-5" />,
    items: [
      { ka: "პიცა მარგარიტა", en: "Margherita", price: "19 ₾" },
      { ka: "პიცა შამპინიონი", en: "Mushroom", price: "22 ₾" },
      { ka: "პიცა პეპერონი", en: "Pepperoni", price: "25 ₾" },
      { ka: "პიცა კაპრიჩოზა", en: "Capricciosa", price: "28 ₾" },
      { ka: "პიცა ოთხი ყველი", en: "Four Cheese", price: "31.50 ₾" },
    ],
  },
  {
    key: "sec_sweets" as const,
    icon: <Cookie className="h-5 w-5" />,
    items: [
      { ka: "შუ", en: "Choux", price: "4 ₾" },
      { ka: "ეკლერი", en: "Éclair", price: "4 ₾" },
      { ka: "სიგარეტი", en: "Sigareti (Rolled Pastry)", price: "3.50 ₾" },
      { ka: "ფახლავა", en: "Baklava", price: "5 ₾" },
      { ka: "ფორთოხლის ნამცხვარი", en: "Orange Cake", price: "4 ₾" },
      { ka: "ბანანის კექსი", en: "Banana Cake", price: "10 ₾" },
      { ka: "მედოვიკი ნაჭერი", en: "Medovik Slice", price: "5.50 ₾" },
      { ka: "სნიკერსი", en: "Snickers Cake", price: "6 ₾" },
      { ka: "ოპიუმი", en: "Opium Cake", price: "5.50 ₾" },
      { ka: "შოკოლადის ნამცხვარი", en: "Chocolate Cake", price: "6 ₾" },
      { ka: "წითელი ხავერდი", en: "Red Velvet", price: "7 ₾" },
      { ka: "ჩიზქეიქი", en: "Cheesecake", price: "7.50 ₾" },
      { ka: "ტარტი", en: "Tart", price: "6 ₾" },
      { ka: "ჭიქის ნამცხვარი", en: "Cup Cake", price: "6 ₾" },
      { ka: "რაფაელო", en: "Raffaello", price: "6.50 ₾" },
      { ka: "მინი ტორტი", en: "Mini Cake", price: "6.50 ₾" },
    ],
  },
  {
    key: "sec_coffee" as const,
    icon: <Coffee className="h-5 w-5" />,
    items: [
      { ka: "ყავა თურქული", en: "Turkish Coffee", price: "4 ₾" },
      { ka: "ამერიკანო", en: "Americano", price: "6 ₾" },
      { ka: "ესპრესო", en: "Espresso", price: "7 ₾" },
      { ka: "ლატე", en: "Latte", price: "9 ₾" },
      { ka: "კაპუჩინო", en: "Cappuccino", price: "7.50 ₾" },
      { ka: "ცივი ყავა", en: "Iced Coffee", price: "6 ₾" },
      { ka: "ცივი ყავა ნაყინით", en: "Iced Coffee with Ice Cream", price: "8 ₾" },
    ],
  },
  {
    key: "sec_tea" as const,
    icon: <Leaf className="h-5 w-5" />,
    items: [
      { ka: "შავი ჩაი", en: "Black Tea", price: "2 ₾" },
      { ka: "ხილის ჩაი", en: "Fruit Tea", price: "2 ₾" },
      { ka: "მწვანე ჩაი", en: "Green Tea", price: "2 ₾" },
      { ka: "მწვანე ჩაი ჟასმინით", en: "Jasmine Green Tea", price: "2 ₾" },
      { ka: "საფირმო ჩაი", en: "Signature Tea", price: "3 ₾" },
      { ka: "პიტნის ჩაი", en: "Mint Tea", price: "2 ₾" },
    ],
  },
];

function MenuPage() {
  const { t, lang } = useLang();
  return (
    <>
      <section className="border-b border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            {t("menu_h1")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">{t("menu_hero_p")}</p>
          <p className="mt-2 text-sm font-medium text-primary">{t("menu_avg")}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {menuSections.map((section) => (
              <div key={section.key} className={section.wide ? "md:col-span-2" : ""}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">{section.icon}</div>
                  <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                    {t(section.key)}
                  </h2>
                </div>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.ka} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0">
                      <h3 className="font-semibold text-foreground">{lang === "en" ? item.en : item.ka}</h3>
                      <span className="shrink-0 text-sm font-bold text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              📍 {t("addr_full")} · 📞 <a href="tel:+995511109490" className="font-semibold text-primary hover:underline">511 10 94 90</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
