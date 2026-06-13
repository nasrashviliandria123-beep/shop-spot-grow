import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Cookie, Pizza, Wheat, Leaf } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "მენიუ | Bakers Bros" },
      { name: "description", content: "ნამდვილი ქართული ხაჭაპური, ახალი ნამცხვრები, პიცა, საფირმო ყავა და ჩაი Bakers Bros საცხობში, საგურამოში." },
      { property: "og:title", content: "მენიუ | Bakers Bros" },
      { property: "og:description", content: "ხაჭაპური, ნამცხვრები, პიცა, ყავა და ჩაი — ახლადგამომცხვარი ყოველდღე." },
      { property: "og:url", content: "/menu" },
    ],
  }),
  component: MenuPage,
});

const menuSections = [
  {
    title: "ხაჭაპური და ცომეული",
    icon: <Wheat className="h-5 w-5" />,
    items: [
      { name: "იმერული ხაჭაპური (პატარა)", en: "Imeretian Khachapuri (small)", price: "12 ₾" },
      { name: "იმერული ხაჭაპური (საშუალო)", en: "Imeretian Khachapuri (medium)", price: "14 ₾" },
      { name: "იმერული ხაჭაპური (დიდი)", en: "Imeretian Khachapuri (large)", price: "17 ₾" },
      { name: "მეგრული ხაჭაპური (პატარა / საშუალო / დიდი)", en: "Megrelian Khachapuri", price: "13 / 16 / 20 ₾" },
      { name: "ლაზური ხაჭაპური (პატარა / საშუალო / დიდი)", en: "Lazian Khachapuri", price: "16 / 20 / 28 ₾" },
      { name: "აჭარული ხაჭაპური (მინი / პატარა / საშუალო / დიდი / ექსტრა)", en: "Adjaran Khachapuri", price: "10 / 14.50 / 17.50 / 23 / 30 ₾" },
      { name: "ლობიანი (პატარა / საშუალო / დიდი)", en: "Bean-filled Bread (Lobiani)", price: "8.50 / 10 / 12 ₾" },
      { name: "აჭარული ლობიანი", en: "Adjaran Lobiani", price: "12 ₾" },
      { name: "ნახევრად ფენოვანი ხაჭაპური", en: "Semi-flaky Khachapuri", price: "6 ₾" },
      { name: "ნახევრად ფენოვანი ლობიანი", en: "Semi-flaky Lobiani", price: "5 ₾" },
      { name: "ქუდარი", en: "Kudari", price: "17 ₾" },
      { name: "ხაჭაპური შამფურზე", en: "Khachapuri on Skewer", price: "15 ₾" },
      { name: "ლობიანი შამფურზე", en: "Lobiani on Skewer", price: "12 ₾" },
      { name: "გურული ლვეშელი", en: "Gurian Lveshi", price: "12 ₾" },
      { name: "ხორცის ლვეშელი", en: "Meat Lveshi", price: "4.50 ₾" },
      { name: "კარტოფილის ლვეშელი", en: "Potato Lveshi", price: "3.50 ₾" },
      { name: "ჩებურეკი", en: "Chebureki", price: "6 ₾" },
      { name: "აჩმა", en: "Achma", price: "8.50 ₾" },
      { name: "კარტოფილი ფრი", en: "French Fries", price: "4 ₾" },
      { name: "პონჩიკი", en: "Ponchiki (Donut)", price: "3 ₾" },
    ],
  },
  {
    title: "პიცა",
    icon: <Pizza className="h-5 w-5" />,
    items: [
      { name: "პიცა მარგარიტა", en: "Margherita", price: "19 ₾" },
      { name: "პიცა შამპინიონი", en: "Mushroom", price: "22 ₾" },
      { name: "პიცა პეპერონი", en: "Pepperoni", price: "25 ₾" },
      { name: "პიცა კაპრიჩოზა", en: "Capricciosa", price: "28 ₾" },
      { name: "პიცა ოთხი ყველი", en: "Four Cheese", price: "31.50 ₾" },
    ],
  },
  {
    title: "ტკბილეული",
    icon: <Cookie className="h-5 w-5" />,
    items: [
      { name: "შუ", en: "Choux", price: "4 ₾" },
      { name: "ეკლერი", en: "Éclair", price: "4 ₾" },
      { name: "სიგარეტი", en: "Sigareti (Rolled Pastry)", price: "3.50 ₾" },
      { name: "ფახლავა", en: "Baklava", price: "5 ₾" },
      { name: "ფორთოხლის ნამცხვარი", en: "Orange Cake", price: "4 ₾" },
      { name: "ბანანის კექსი", en: "Banana Cake", price: "10 ₾" },
      { name: "მედოვიკი ნაჭერი", en: "Medovik Slice", price: "5.50 ₾" },
      { name: "სნიკერსი", en: "Snickers Cake", price: "6 ₾" },
      { name: "ოპიუმი", en: "Opium Cake", price: "5.50 ₾" },
      { name: "შოკოლადის ნამცხვარი", en: "Chocolate Cake", price: "6 ₾" },
      { name: "წითელი ხავერდი", en: "Red Velvet", price: "7 ₾" },
      { name: "ჩიზქეიქი", en: "Cheesecake", price: "7.50 ₾" },
      { name: "ტარტი", en: "Tart", price: "6 ₾" },
      { name: "ჭიქის ნამცხვარი", en: "Cup Cake", price: "6 ₾" },
      { name: "რაფაელო", en: "Raffaello", price: "6.50 ₾" },
      { name: "მინი ტორტი", en: "Mini Cake", price: "6.50 ₾" },
    ],
  },
  {
    title: "ყავა",
    icon: <Coffee className="h-5 w-5" />,
    items: [
      { name: "ყავა თურქული", en: "Turkish Coffee", price: "4 ₾" },
      { name: "ამერიკანო", en: "Americano", price: "6 ₾" },
      { name: "ესპრესო", en: "Espresso", price: "7 ₾" },
      { name: "ლატე", en: "Latte", price: "9 ₾" },
      { name: "კაპუჩინო", en: "Cappuccino", price: "7.50 ₾" },
      { name: "ცივი ყავა", en: "Iced Coffee", price: "6 ₾" },
      { name: "ცივი ყავა ნაყინით", en: "Iced Coffee with Ice Cream", price: "8 ₾" },
    ],
  },
  {
    title: "ჩაი",
    icon: <Leaf className="h-5 w-5" />,
    items: [
      { name: "შავი ჩაი", en: "Black Tea", price: "2 ₾" },
      { name: "ხილის ჩაი", en: "Fruit Tea", price: "2 ₾" },
      { name: "მწვანე ჩაი", en: "Green Tea", price: "2 ₾" },
      { name: "მწვანე ჩაი ჟასმინით", en: "Jasmine Green Tea", price: "2 ₾" },
      { name: "საფირმო ჩაი", en: "Signature Tea", price: "3 ₾" },
      { name: "პიტნის ჩაი", en: "Mint Tea", price: "2 ₾" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="border-b border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            ჩვენი მენიუ
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">
            ნამდვილი ქართული გამოცხობა — ხაჭაპური, ახალი ნამცხვრები, პიცა და საფირმო ყავა. ახლადგამომცხვარი ყოველ დილით.
          </p>
          <p className="mt-2 text-sm font-medium text-primary">საშუალოდ: 10–20 ₾ ერთ პერსონაზე</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {menuSections.map((section) => (
              <div key={section.title} className={section.title.startsWith("ხაჭაპური") ? "md:col-span-2" : ""}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-3">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <span className="shrink-0 text-sm font-bold text-primary whitespace-nowrap">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              📍 საგურამო, 1-ლი ქუჩა № 31 · 📞 <a href="tel:+995511109490" className="font-semibold text-primary hover:underline">511 10 94 90</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
