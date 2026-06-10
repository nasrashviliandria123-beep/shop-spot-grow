import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Croissant, CakeSlice, Cookie, Sandwich, Milk } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Bakers Bros" },
      { name: "description", content: "Explore our menu of artisan breads, pastries, specialty coffee, cakes and more at Bakers Bros cafe-bakery." },
      { property: "og:title", content: "Menu | Bakers Bros" },
      { property: "og:description", content: "Artisan breads, pastries, specialty coffee & custom cakes." },
      { property: "og:url", content: "/menu" },
    ],
  }),
  component: MenuPage,
});

const menuSections = [
  {
    title: "Breads",
    icon: <Croissant className="h-5 w-5" />,
    items: [
      { name: "Classic Sourdough", price: "8 GEL", desc: "24-hour fermented, crusty artisan loaf" },
      { name: "Whole Grain Boule", price: "9 GEL", desc: "Seeds, oats & honey" },
      { name: "Rustic Baguette", price: "5 GEL", desc: "Crispy crust, soft airy interior" },
      { name: "Walnut Rye", price: "10 GEL", desc: "Dark rye with roasted walnuts" },
    ],
  },
  {
    title: "Pastries",
    icon: <Cookie className="h-5 w-5" />,
    items: [
      { name: "Butter Croissant", price: "5 GEL", desc: "Flaky, golden, made with French butter" },
      { name: "Almond Danish", price: "6 GEL", desc: "Frangipane filling & sliced almonds" },
      { name: "Cinnamon Roll", price: "5.50 GEL", desc: "Warm spice, cream cheese glaze" },
      { name: "Chocolate Éclair", price: "7 GEL", desc: "Choux pastry, dark chocolate ganache" },
    ],
  },
  {
    title: "Coffee & Drinks",
    icon: <Coffee className="h-5 w-5" />,
    items: [
      { name: "Espresso", price: "4 GEL", desc: "Double shot, rich & bold" },
      { name: "Cappuccino", price: "6 GEL", desc: "Silky foam, single origin beans" },
      { name: "Latte", price: "6.50 GEL", desc: "Steamed milk, your choice of flavor" },
      { name: "Iced Cold Brew", price: "7 GEL", desc: "12-hour steeped, smooth & strong" },
      { name: "Fresh Lemonade", price: "5 GEL", desc: "Homemade with mint & ginger" },
    ],
  },
  {
    title: "Cakes & Sweets",
    icon: <CakeSlice className="h-5 w-5" />,
    items: [
      { name: "Classic Tiramisu", price: "12 GEL", desc: "Espresso-soaked ladyfingers, mascarpone" },
      { name: "Napoleon Cake", price: "10 GEL", desc: "Crispy puff pastry layers, vanilla cream" },
      { name: "Chocolate Lava Cake", price: "14 GEL", desc: "Warm molten center, vanilla ice cream" },
      { name: "Assorted Macarons", price: "3.50 GEL each", desc: "Daily flavors: pistachio, raspberry, lemon" },
    ],
  },
  {
    title: "Savory",
    icon: <Sandwich className="h-5 w-5" />,
    items: [
      { name: "Cheese & Spinach Pie", price: "8 GEL", desc: "Flaky pastry, feta & fresh spinach" },
      { name: "Smoked Salmon Bagel", price: "15 GEL", desc: "Cream cheese, capers, red onion" },
      { name: "Avocado Toast", price: "12 GEL", desc: "Sourdough, poached egg, chili flakes" },
    ],
  },
  {
    title: "Breakfast",
    icon: <Milk className="h-5 w-5" />,
    items: [
      { name: "Granola Bowl", price: "10 GEL", desc: "Greek yogurt, honey, seasonal berries" },
      { name: "Full Breakfast Plate", price: "18 GEL", desc: "Eggs, sausage, toast, jam & butter" },
      { name: "Pancake Stack", price: "14 GEL", desc: "Maple syrup, fresh fruit, whipped cream" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-7xl px-4 text-center md:px-6">
          <h1 className="text-3xl font-bold text-foreground md:text-5xl text-balance" style={{ fontFamily: "'Lora', serif" }}>
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-balance">
            Everything is baked fresh daily using the finest local and imported ingredients.
            Ask our team about today's specials.
          </p>
          <p className="mt-2 text-sm font-medium text-primary">Average: 10–20 GEL per person</p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            {menuSections.map((section) => (
              <div key={section.title}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Lora', serif" }}>
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-b-0">
                      <div>
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
