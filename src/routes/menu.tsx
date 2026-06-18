import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Cookie, Pizza, Wheat, Leaf, Plus, Minus, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { useLang } from "../lib/i18n";
import Reviews from "../components/Reviews";
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
import imeruli from "../assets/menu/imeruli.jpg.asset.json";
import megruli from "../assets/menu/megruli.jpg.asset.json";
import lazuri from "../assets/menu/lazuri.webp.asset.json";
import adjaruli from "../assets/menu/adjaruli.jpg.asset.json";
import lobiani from "../assets/menu/lobiani.jpg.asset.json";
import adjaruliLobiani from "../assets/menu/adjaruli-lobiani.jpg.asset.json";
import fries from "../assets/menu/fries.jpg.asset.json";
import ponchiki from "../assets/menu/ponchiki.jpg.asset.json";
import baklava from "../assets/menu/baklava.webp.asset.json";
import raffaello from "../assets/menu/raffaello.jpg.asset.json";
import tart from "../assets/menu/tart.webp.asset.json";
import redVelvet from "../assets/menu/red-velvet.jpg.asset.json";
import chocolateCake from "../assets/menu/chocolate-cake.jpg.asset.json";
import opium from "../assets/menu/opium.jpg.asset.json";
import snickers from "../assets/menu/snickers.jpg.asset.json";
import medovik from "../assets/menu/medovik.jpg.asset.json";
import banana from "../assets/menu/banana.jpg.asset.json";
import orangeCake from "../assets/menu/orange-cake.jpg.asset.json";
import khachapuriSkewer from "../assets/menu/khachapuri-skewer.webp.asset.json";
import lobianiSkewer from "../assets/menu/lobiani-skewer.jpg.asset.json";
import meatPie from "../assets/menu/meat-pie.jpg.asset.json";
import potatoPie from "../assets/menu/potato-pie.jpg.asset.json";
import ideali from "../assets/menu/ideali.jpg.asset.json";
import spartak from "../assets/menu/spartak.jpg.asset.json";
import irisi from "../assets/menu/irisi.jpg.asset.json";
import imeruliLobiani from "../assets/menu/imeruli-lobiani.jpg.asset.json";

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

type Size = { ka: string; en: string; price: string; priceNum: number };

type MenuItem =
  | { ka: string; en: string; price: string; priceNum: number; image?: string; sizes?: undefined; orderOnly?: boolean }
  | { ka: string; en: string; image?: string; sizes: Size[]; orderOnly?: boolean };

const menuSections = [
  {
    key: "sec_khach" as const,
    icon: <Wheat className="h-5 w-5" />,
    wide: true,
    items: [
      {
        ka: "იმერული ხაჭაპური",
        en: "Imeretian Khachapuri",
        image: imeruli.url,
        sizes: [
          { ka: "პატარა", en: "Small", price: "13.50 ₾", priceNum: 13.5 },
          { ka: "საშუალო", en: "Medium", price: "15.50 ₾", priceNum: 15.5 },
          { ka: "დიდი", en: "Large", price: "19.50 ₾", priceNum: 19.5 },
        ],
      },
      {
        ka: "იმერული ლობიანი",
        en: "Imeretian Lobiani",
        image: imeruliLobiani.url,
        sizes: [
          { ka: "პატარა", en: "Small", price: "8.50 ₾", priceNum: 8.5 },
          { ka: "საშუალო", en: "Medium", price: "10.00 ₾", priceNum: 10 },
          { ka: "დიდი", en: "Large", price: "12 ₾", priceNum: 12 },
        ],
      },
      {
        ka: "მეგრული ხაჭაპური",
        en: "Megrelian Khachapuri",
        image: megruli.url,
        sizes: [
          { ka: "პატარა", en: "S", price: "13.50 ₾", priceNum: 13.5 },
          { ka: "საშუალო", en: "M", price: "15.50 ₾", priceNum: 15.5 },
          { ka: "დიდი", en: "L", price: "19.50 ₾", priceNum: 19.5 },
        ],
      },
      {
        ka: "ლაზური ხაჭაპური",
        en: "Lazian Khachapuri",
        image: lazuri.url,
        sizes: [
          { ka: "პატარა", en: "S", price: "17 ₾", priceNum: 17 },
          { ka: "საშუალო", en: "M", price: "20 ₾", priceNum: 20 },
          { ka: "დიდი", en: "L", price: "24 ₾", priceNum: 24 },
        ],
      },
      {
        ka: "აჭარული ხაჭაპური",
        en: "Adjaran Khachapuri",
        image: adjaruli.url,
        sizes: [
          { ka: "მინი", en: "Mini", price: "12 ₾", priceNum: 12 },
          { ka: "პატარა", en: "S", price: "16.00 ₾", priceNum: 16 },
          { ka: "საშუალო", en: "M", price: "19.50 ₾", priceNum: 19.5 },
          { ka: "დიდი", en: "L", price: "26.00 ₾", priceNum: 26 },
          { ka: "ექსტრა", en: "Extra", price: "34 ₾", priceNum: 34 },
        ],
      },
      {
        ka: "აჭარული ლობიანი",
        en: "Adjaran Lobiani",
        image: adjaruliLobiani.url,
        price: "12 ₾",
        priceNum: 12,
      },
      {
        ka: "ლისტის ნახერვად ფენოვანი ლობიანი",
        en: "Lobiani",
        image: lobiani.url,
        price: "17.50 ₾",
        priceNum: 17.5,
      },
      {
        ka: "ნახერვად ფენოვანი ხაჭაპური",
        en: "Half-Layered Khachapuri",
        image: lobiani.url,
        price: "16 ₾",
        priceNum: 16,
      },
      {
        ka: "კუბდარი",
        en: "Kubdari",
        image: kudari.url,
        price: "19.50 ₾",
        priceNum: 19.5,
      },
      {
        ka: "ხორცის ღვეზელი",
        en: "Meat Pie",
        image: meatPie.url,
        price: "5.50 ₾",
        priceNum: 5.50,
      },
      {
        ka: "ხაჭაპური შამფურზე",
        en: "Khachapuri on Skewer",
        image: khachapuriSkewer.url,
        price: "15 ₾",
        priceNum: 15,
      },
      {
        ka: "ლობიანი შამფურზე",
        en: "Lobiani on Skewer",
        image: lobianiSkewer.url,
        price: "12 ₾",
        priceNum: 12,
      },
      {
        ka: "ჩებურეკი",
        en: "Chebureki",
        image: chebureki.url,
        price: "6.50 ₾",
        priceNum: 6.5,
      },
      {
        ka: "კარტოფილის ღვეზელი",
        en: "Potato Pie",
        image: potatoPie.url,
        price: "4 ₾",
        priceNum: 4,
      },
      {
        ka: "კარტოფილი ფრი",
        en: "French Fries",
        image: fries.url,
        price: "4 ₾",
        priceNum: 4,
      },
      {
        ka: "ფუნჩულა",
        en: "Ponchiki (Donut)",
        image: ponchiki.url,
        price: "3 ₾",
        priceNum: 3,
      },
      {
        ka: "აჩმა",
        en: "Achma",
        image: achma.url,
        price: "8.50 ₾",
        priceNum: 8.5,
      },

    ] as MenuItem[],
  },
  {
    key: "sec_pizza" as const,
    icon: <Pizza className="h-5 w-5" />,
    items: [
      { ka: "პიცა მარგარიტა", en: "Margherita", price: "22 ₾", priceNum: 22, image: margherita.url },
      { ka: "პიცა შამპინიონი", en: "Mushroom", price: "24 ₾", priceNum: 24, image: mushroom.url },
      { ka: "პიცა პეპერონი", en: "Pepperoni", price: "28 ₾", priceNum: 28, image: pepperoni.url },
      { ka: "პიცა კაპრიჩოზა", en: "Capricciosa", price: "30 ₾", priceNum: 30 },
      { ka: "პიცა ოთხი ყველი", en: "Four Cheese", price: "34 ₾", priceNum: 34, image: fourCheese.url },
    ] as MenuItem[],
  },
  {
    key: "sec_sweets" as const,
    icon: <Cookie className="h-5 w-5" />,
    items: [
      { ka: "შუ", en: "Choux", price: "4 ₾", priceNum: 4, image: shu.url },
      { ka: "ეკლერი", en: "Éclair", price: "4 ₾", priceNum: 4, image: eclair.url },
      { ka: "სიგარეტი", en: "Sigareti (Rolled Pastry)", price: "3.50 ₾", priceNum: 3.5, image: sigareti.url },
      { ka: "ფახლავა", en: "Baklava", price: "5 ₾", priceNum: 5, image: baklava.url },
      { ka: "ფორთოხლის ნამცხვარი", en: "Orange Cake", price: " ", priceNum: 4, image: orangeCake.url, orderOnly: true },
      { ka: "ბანანის კექსი", en: "Banana Cake", price: " ", priceNum: 10, image: banana.url, orderOnly: true },
      { ka: "მედოვიკი ნაჭერი", en: "Medovik Slice", price: "5.50 ₾", priceNum: 5.5, image: medovik.url },
      { ka: "სნიკერსი", en: "Snickers Cake", price: " ", priceNum: 6, image: snickers.url },
      { ka: "ოპიუმი", en: "Opium Cake", price: "5.50 ₾", priceNum: 5.5, image: opium.url },
      { ka: "შოკოლადის ნამცხვარი", en: "Chocolate Cake", price: "6 ₾", priceNum: 6, image: chocolateCake.url },
      { ka: "წითელი ხავერდი", en: "Red Velvet", price: "7 ₾", priceNum: 7, image: redVelvet.url },
      { ka: "ჩიზქეიქი", en: "Cheesecake", price: "7.50 ₾", priceNum: 7.5 },
      { ka: "ტარტი", en: "Tart", price: "6 ₾", priceNum: 6, image: tart.url },
      { ka: "ჭიქის ნამცხვარი", en: "Cup Cake", price: "6 ₾", priceNum: 6 },
      { ka: "რაფაელო", en: "Raffaello", price: "6.50 ₾", priceNum: 6.5, image: raffaello.url },
      { ka: "მინი ტორტი", en: "Mini Cake", price: "6.50 ₾", priceNum: 6.5 },
      { ka: "იდეალი", en: "Ideali Cake", price: "6 ₾", priceNum: 6, image: ideali.url },
      { ka: "სპარტაკი", en: "Spartak Cake", price: "6 ₾", priceNum: 6, image: spartak.url },
      { ka: "ირისი", en: "Iris Caramel", price: "6 ₾", priceNum: 6, image: irisi.url },
    ] as MenuItem[],
  },
  {
    key: "sec_coffee" as const,
    icon: <Coffee className="h-5 w-5" />,
    items: [
      { ka: "ყავა თურქული", en: "Turkish Coffee", price: " ", priceNum: 4 },
      { ka: "ამერიკანო", en: "Americano", price: "6 ₾", priceNum: 6 },
      { ka: "ესპრესო", en: "Espresso", price: "7 ₾", priceNum: 7 },
      { ka: "ლატე", en: "Latte", price: "9 ₾", priceNum: 9 },
      { ka: "კაპუჩინო", en: "Cappuccino", price: "7.50 ₾", priceNum: 7.5 },
      { ka: "ცივი ყავა", en: "Iced Coffee", price: "6 ₾", priceNum: 6 },
      { ka: "ცივი ყავა ნაყინით", en: "Iced Coffee with Ice Cream", price: "8 ₾", priceNum: 8 },
    ] as MenuItem[],
  },
  {
    key: "sec_tea" as const,
    icon: <Leaf className="h-5 w-5" />,
    items: [
      { ka: "შავი ჩაი", en: "Black Tea", price: "2 ₾", priceNum: 2 },
      { ka: "ხილის ჩაი", en: "Fruit Tea", price: "2 ₾", priceNum: 2 },
      { ka: "მწვანე ჩაი", en: "Green Tea", price: "2 ₾", priceNum: 2 },
      { ka: "მწვანე ჩაი ჟასმინით", en: "Jasmine Green Tea", price: "2 ₾", priceNum: 2 },
      { ka: "საფირმო ჩაი", en: "Signature Tea", price: "3 ₾", priceNum: 3 },
      { ka: "პიტნის ჩაი", en: "Mint Tea", price: "2 ₾", priceNum: 2 },
    ] as MenuItem[],
  },
];

function flattenItems(sections: typeof menuSections) {
  const flat: { ka: string; en: string; price: string; priceNum: number; image?: string; orderOnly?: boolean }[] = [];
  for (const section of sections) {
    for (const item of section.items) {
      if (("sizes" in item && item.sizes) || ("orderOnly" in item && item.orderOnly)) {
        if ("sizes" in item && item.sizes) {
          for (const size of item.sizes) {
            flat.push({
              ka: `${item.ka} (${size.ka})`,
              en: `${item.en} (${size.en})`,
              price: size.price,
              priceNum: size.priceNum,
              image: item.image,
            });
          }
        }
      } else {
        flat.push(item as { ka: string; en: string; price: string; priceNum: number; image?: string });
      }
    }
  }
  return flat;
}

type CartMap = Record<string, number>;

function MenuPage() {
  const { t, lang } = useLang();
  const [cart, setCart] = useState<CartMap>({});
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");


  const allItems = flattenItems(menuSections);

  const add = (key: string) => setCart((c) => ({ ...c, [key]: (c[key] || 0) + 1 }));
  const sub = (key: string) =>
    setCart((c) => {
      const n = (c[key] || 0) - 1;
      const next = { ...c };
      if (n <= 0) delete next[key];
      else next[key] = n;
      return next;
    });

  const totalQty = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((sum, [k, qty]) => {
    const item = allItems.find((i) => i.ka === k);
    return sum + (item ? item.priceNum * qty : 0);
  }, 0);

  const sendOrder = () => {
    const lines = Object.entries(cart).map(([k, qty]) => {
      const item = allItems.find((i) => i.ka === k);
      if (!item) return "";
      const label = lang === "en" ? item.en : item.ka;
      return `• ${label} x${qty} — ${(item.priceNum * qty).toFixed(2)} ₾`;
    });
    const msg =
      `🥐 Bakers Bros — ${lang === "en" ? "Online Order" : "ონლაინ შეკვეთა"}\n\n` +
      lines.join("\n") +
      `\n\n${lang === "en" ? "Total" : "ჯამი"}: ${totalPrice.toFixed(2)} ₾\n\n` +
      `${lang === "en" ? "Name" : "სახელი"}: ${name}\n` +
      `${lang === "en" ? "Phone" : "ტელეფონი"}: ${phone}` +
      (address ? `\n${lang === "en" ? "Address" : "მისამართი"}: ${address}` : "");
    const url = `https://wa.me/995511109490?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="border-b border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            {t("menu_h1")}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">{t("menu_hero_p")}</p>
          <p className="mt-2 text-sm font-medium text-primary">{t("menu_avg")}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {lang === "en" ? "Tap + to add items, then checkout via WhatsApp." : "დააჭირე + ნივთის დასამატებლად და გააფორმე შეკვეთა WhatsApp-ით."}
          </p>
        </div>
      </section>


      <section className="section-padding bg-background pb-32">
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
                  {section.items.map((item) => {
                    if ("sizes" in item && item.sizes) {
                      return (
                        <div key={item.ka} className="border-b border-border pb-3 last:border-b-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3 min-w-0">
                              {item.image ? (
                                <img
                                  src={item.image}
                                  alt={item.en}
                                  loading="lazy"
                                  className="h-14 w-14 shrink-0 rounded-md object-cover shadow-sm"
                                />
                              ) : null}
                              <h3 className="font-semibold text-foreground">{lang === "en" ? item.en : item.ka}</h3>
                            </div>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.sizes.map((size) => {
                              const key = `${item.ka} (${size.ka})`;
                              const qty = cart[key] || 0;
                              return (
                                <div key={size.ka} className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                                  <span className="text-sm font-medium text-foreground">
                                    {lang === "en" ? size.en : size.ka}
                                  </span>
                                  <span className="text-sm font-bold text-primary">{size.price}</span>
                                  {qty > 0 ? (
                                    <div className="flex items-center gap-1">
                                      <button
                                        onClick={() => sub(key)}
                                        className="flex h-5 w-5 items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground"
                                        aria-label="Remove"
                                      >
                                        <Minus className="h-3 w-3" />
                                      </button>
                                      <span className="min-w-[1.25rem] text-center text-sm font-bold">{qty}</span>
                                      <button
                                        onClick={() => add(key)}
                                        className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90"
                                        aria-label="Add"
                                      >
                                        <Plus className="h-3 w-3" />
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() => add(key)}
                                      className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90"
                                      aria-label="Add"
                                    >
                                      <Plus className="h-3 w-3" />
                                    </button>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                    const qty = cart[item.ka] || 0;
                    return (
                      <div key={item.ka} className="flex items-start justify-between gap-4 border-b border-border pb-3 last:border-b-0">
                        <div className="flex items-start gap-3 min-w-0">
                          {"image" in item && item.image ? (
                            <img
                              src={item.image}
                              alt={item.en}
                              loading="lazy"
                              className="h-14 w-14 shrink-0 rounded-md object-cover shadow-sm"
                            />
                          ) : null}
                          <h3 className="font-semibold text-foreground">{lang === "en" ? item.en : item.ka}</h3>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          <span className="text-sm font-bold text-primary whitespace-nowrap">{item.price}</span>
                          {"orderOnly" in item && item.orderOnly ? (
                            <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                              {lang === "en" ? "On Order" : "შეკვეთით"}
                            </span>
                          ) : qty > 0 ? (
                            <div className="flex items-center gap-1 rounded-full bg-primary/10 px-1 py-1">
                              <button
                                onClick={() => sub(item.ka)}
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-background text-primary hover:bg-primary hover:text-primary-foreground"
                                aria-label="Remove"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="min-w-[1.25rem] text-center text-sm font-bold">{qty}</span>
                              <button
                                onClick={() => add(item.ka)}
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground hover:opacity-90"
                                aria-label="Add"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => add(item.ka)}
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow hover:opacity-90"
                              aria-label="Add"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
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

      <div id="reviews" />
      <Reviews />



      {/* Floating cart button */}
      {totalQty > 0 && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-2xl hover:opacity-95"
        >
          <ShoppingBag className="h-5 w-5" />
          <span className="font-bold">
            {totalQty} {lang === "en" ? "items" : "ნივთი"}
          </span>
          <span className="font-bold">· {totalPrice.toFixed(2)} ₾</span>
          <span className="rounded-full bg-background/20 px-3 py-1 text-sm font-semibold">
            {lang === "en" ? "Order online" : "შეუკვეთე"}
          </span>
        </button>
      )}

      {/* Checkout modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-lg overflow-hidden rounded-t-2xl bg-card shadow-2xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <h3 className="text-lg font-bold">{lang === "en" ? "Your Order" : "შენი შეკვეთა"}</h3>
              <button onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-muted" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="max-h-[50vh] space-y-2 overflow-y-auto p-4">
              {Object.entries(cart).map(([k, qty]) => {
                const item = allItems.find((i) => i.ka === k);
                if (!item) return null;
                return (
                  <div key={k} className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium">{lang === "en" ? item.en : item.ka}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => sub(k)} className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center font-bold">{qty}</span>
                      <button onClick={() => add(k)} className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Plus className="h-3 w-3" />
                      </button>
                      <span className="w-16 text-right font-bold text-primary">{(item.priceNum * qty).toFixed(2)} ₾</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-3 border-t border-border p-4">
              <div className="flex justify-between text-base font-bold">
                <span>{lang === "en" ? "Total" : "ჯამი"}</span>
                <span className="text-primary">{totalPrice.toFixed(2)} ₾</span>
              </div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={lang === "en" ? "Your name" : "სახელი"}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={lang === "en" ? "Phone number" : "ტელეფონის ნომერი"}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={lang === "en" ? "Delivery address (optional)" : "მისამართი (არასავალდებულო)"}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              />
              <button
                onClick={sendOrder}
                disabled={!name || !phone}
                className="btn-primary w-full justify-center disabled:opacity-50"
              >
                {lang === "en" ? "Send order via WhatsApp" : "გაგზავნე შეკვეთა WhatsApp-ით"}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                {lang === "en" ? "Or call +995 511 10 94 90" : "ან დარეკე +995 511 10 94 90"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
