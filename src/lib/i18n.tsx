import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ka" | "en";

type Dict = Record<string, { ka: string; en: string }>;

export const translations: Dict = {
  // Nav
  nav_home: { ka: "მთავარი", en: "Home" },
  nav_menu: { ka: "მენიუ", en: "Menu" },
  nav_about: { ka: "ჩვენ შესახებ", en: "About" },
  nav_contact: { ka: "კონტაქტი", en: "Contact" },
  nav_review: { ka: "შეფასება", en: "Review" },
  call: { ka: "დარეკვა", en: "Call" },
  open_menu: { ka: "მენიუს გახსნა", en: "Open menu" },
  lang_toggle: { ka: "EN", en: "ქა" },

  // Home
  home_title: { ka: "Bakers Bros | კაფე-საცხობი საგურამოში", en: "Bakers Bros | Cafe-Bakery in Saguramo" },
  home_desc: {
    ka: "ახლადგამომცხვარი ხაჭაპური, ნამცხვრები და საფირმო ყავა საგურამოში. Bakers Bros — საუკეთესო ქართული კაფე-საცხობი.",
    en: "Freshly baked khachapuri, pastries and specialty coffee in Saguramo. Bakers Bros — the best Georgian cafe-bakery.",
  },
  rating_badge: { ka: "4.9 შეფასება | 10–20 ₾ ერთ პერსონაზე", en: "4.9 rating | 10–20 ₾ per person" },
  hero_h1: { ka: "ახლადგამომცხვარი, გაკეთებული სიყვარულით", en: "Freshly baked, made with love" },
  hero_p: {
    ka: "დაუვიწყარი გემო ძმებისგან.",
    en: "Unforgettable taste from the brothers.",
  },
  view_menu: { ka: "იხილეთ მენიუ", en: "View menu" },
  order_online: { ka: "ონლაინ შეკვეთა", en: "Order Online" },
  open_until: { ka: "ღია 21:30-მდე", en: "Open until 9:30 PM" },
  location: { ka: "საგურამო, საქართველო", en: "Saguramo, Georgia" },
  testimonials_h2: { ka: "რას ამბობენ ჩვენი სტუმრები", en: "What our guests say" },
  testimonials_p: {
    ka: "4.9 ქულა 63 კმაყოფილი სტუმრისგან — აი, რა აბრუნებს მათ ჩვენთან.",
    en: "4.9 rating from 63 happy guests — here's what brings them back.",
  },
  t1_name: { ka: "ნათია კ.", en: "Natia K." },
  t1_text: {
    ka: "საუკეთესო კრუასანები მთელ უბანში! ატმოსფერო თბილი და მყუდროა. 30 წუთის სავალზე მივდივართ მათი ცომეულისთვის.",
    en: "Best croissants in the whole area! The atmosphere is so warm and cozy. We drive 30 minutes just for their pastries.",
  },
  t2_name: { ka: "გიორგი მ.", en: "Giorgi M." },
  t2_text: {
    ka: "შევუკვეთე საფირმო დაბადების დღის ტორტი — დიდებული და გემრიელი იყო. პერსონალი წარმოუდგენელია. ნამდვილად გირჩევთ!",
    en: "Ordered a custom birthday cake — it was stunning and delicious. The staff is amazing. Highly recommended!",
  },
  t3_name: { ka: "მარიამ ტ.", en: "Mariam T." },
  t3_text: {
    ka: "მათი ყავა წარმოუდგენელია და ნამცხვრები ყოველთვის ახალია. იდეალური ადგილია შაბათ-კვირას მეგობრებთან სამხრად.",
    en: "Their coffee is incredible and the pastries are always fresh. The perfect weekend brunch spot with friends.",
  },
  cta_h2: { ka: "გეგმავთ განსაკუთრებულ ღონისძიებას?", en: "Planning a special event?" },
  cta_p: {
    ka: "ჩვენ ვიზრუნებთ კერძებზე. საფირმო ტორტებიდან სრულ კეთერინგამდე — საცხობს თქვენს ზეიმზე მოგიყვანთ.",
    en: "We'll take care of the food. From custom cakes to full catering — we'll bring the bakery to your celebration.",
  },
  call_us: { ka: "დარეკეთ +995 511 10 94 90", en: "Call +995 511 10 94 90" },

  // About
  about_title: { ka: "ჩვენ შესახებ | Bakers Bros", en: "About | Bakers Bros" },
  about_desc: {
    ka: "გაიცანით Bakers Bros კაფე-საცხობი საგურამოში. ჩვენი ისტორია, ღირებულებები და ერთგულება ახალი, ხელით გაკეთებული ცომეულის მიმართ.",
    en: "Meet Bakers Bros cafe-bakery in Saguramo. Our story, values, and dedication to fresh, handmade pastries.",
  },
  about_h1: { ka: "Bakers Bros-ის შესახებ", en: "About Bakers Bros" },
  about_hero_p: {
    ka: "ოჯახური კაფე-საცხობი, რომელიც ქართული გემოების სითბოს მოაქვს საგურამოში. ყოველი ხაჭაპური, ყოველი ნამცხვარი და ყოველი ფინჯანი ყავა ვნებითაა გაკეთებული.",
    en: "A family cafe-bakery bringing the warmth of Georgian flavors to Saguramo. Every khachapuri, every pastry, and every cup of coffee is made with passion.",
  },
  story_h2: { ka: "ჩვენი ისტორია", en: "Our story" },
  story_p1: {
    ka: "Bakers Bros პატარა საოჯახო სამზარეულოში დაიწყო ერთი ოცნებით: ჩვენი თემისთვის ნამდვილი, ხელნაკეთი ქართული გემოები გაგვეცნო. ის, რაც შაბათ-კვირას ადგილობრივ ბაზრობებზე ხაჭაპურის გაყიდვით დაიწყო, დღევანდელ მყუდრო კაფე-საცხობად გადაიქცა.",
    en: "Bakers Bros began in a small family kitchen with one dream: to share real, handmade Georgian flavors with our community. What started as weekend khachapuri sales at local markets has grown into the cozy cafe-bakery you see today.",
  },
  story_p2: {
    ka: "გვჯერა, რომ კარგი საკვები კარგი ინგრედიენტებით იწყება. ამიტომ ვირჩევთ ადგილობრივ ყველს, ფერმის ახალ კვერცხებს და ნამდვილ კარაქს — გვერდის ავლისა და კონსერვანტების გარეშე. ცომი ყოველდღე ახლად მზადდება, რაც ყოველ ხაჭაპურს უნიკალურ გემოს ანიჭებს.",
    en: "We believe great food starts with great ingredients. That's why we choose local cheese, farm-fresh eggs, and real butter — no shortcuts, no preservatives. Our dough is made fresh every day, giving every khachapuri its unique flavor.",
  },
  story_p3: {
    ka: "საგურამოში, 1-ლ ქუჩაზე, ვამაყობთ, რომ ამ თემის ნაწილი ვართ. იქნება ეს სწრაფი ყავა, საფირმო ტორტი თუ ღონისძიების კეთერინგი — აქ ვართ, რომ ყოველი წუთი უფრო ტკბილი გავხადოთ.",
    en: "On 1st Street in Saguramo, we're proud to be part of this community. Whether it's a quick coffee, a custom cake, or event catering — we're here to make every moment a little sweeter.",
  },
  values_h2: { ka: "რას ვემსახურებით", en: "What we stand for" },
  val1_t: { ka: "გაკეთებული სიყვარულით", en: "Made with love" },
  val1_d: {
    ka: "ყოველი პროდუქტი ხელით კეთდება ზრუნვით. ჩვენ არ ვამზადებთ მასობრივად — ვაცხობთ გულდასმით.",
    en: "Every item is handmade with care. We don't mass-produce — we bake mindfully.",
  },
  val2_t: { ka: "ხარისხი უპირველეს ყოვლისა", en: "Quality first" },
  val2_d: {
    ka: "პრემიუმ ინგრედიენტები, ტრადიციული მეთოდები და ნულოვანი კომპრომისი სიახლეზე.",
    en: "Premium ingredients, traditional methods, and zero compromise on freshness.",
  },
  val3_t: { ka: "თემზე ორიენტირებული", en: "Community focused" },
  val3_d: {
    ka: "ჩვენ მხოლოდ საცხობი არ ვართ — თქვენი მეზობლები ვართ. ვუჭერთ მხარს ადგილობრივებს.",
    en: "We're not just a bakery — we're your neighbors. We support local.",
  },
  info_addr: { ka: "მისამართი", en: "Address" },
  addr_line: { ka: "N31, 1-ლი ქუჩა", en: "31 1st Street" },
  addr_city: { ka: "საგურამო 3311, საქართველო", en: "Saguramo 3311, Georgia" },
  info_hours: { ka: "სამუშაო საათები", en: "Hours" },
  hours_line1: { ka: "ღია ყოველდღე", en: "Open daily" },
  hours_line2: { ka: "იხურება 21:30-ზე", en: "Closes 9:30 PM" },
  info_call: { ka: "დაგვირეკეთ", en: "Call us" },

  // Contact
  contact_title: { ka: "კონტაქტი | Bakers Bros", en: "Contact | Bakers Bros" },
  contact_desc: {
    ka: "დაგვიკავშირდით Bakers Bros-ს. შეუკვეთეთ საფირმო ტორტი ან ეწვიეთ ჩვენს კაფე-საცხობს საგურამოში.",
    en: "Get in touch with Bakers Bros. Order a custom cake or visit our cafe-bakery in Saguramo.",
  },
  contact_h1: { ka: "დაგვიკავშირდით", en: "Get in touch" },
  contact_hero_p: {
    ka: "გაქვთ კითხვა? გსურთ საფირმო ტორტი ან კეთერინგი? მოგვწერეთ — ვპასუხობთ 24 საათში.",
    en: "Have a question? Need a custom cake or catering? Write to us — we reply within 24 hours.",
  },
  call_direct: { ka: "დარეკეთ: +995 511 10 94 90", en: "Call: +995 511 10 94 90" },
  sent_h: { ka: "შეტყობინება გაიგზავნა!", en: "Message sent!" },
  sent_p: { ka: "მადლობა, რომ მოგვწერეთ. დაგიკავშირდებით 24 საათში.", en: "Thanks for reaching out. We'll be in touch within 24 hours." },
  send_another: { ka: "კიდევ ერთი შეტყობინების გაგზავნა", en: "Send another message" },
  form_h: { ka: "მოგვწერეთ", en: "Send us a message" },
  f_name: { ka: "სახელი და გვარი", en: "Full name" },
  f_name_ph: { ka: "თქვენი სახელი", en: "Your name" },
  f_email: { ka: "ელ. ფოსტა", en: "Email" },
  f_phone: { ka: "ტელეფონი", en: "Phone" },
  f_event: { ka: "ღონისძიების ტიპი", en: "Event type" },
  ev_choose: { ka: "აირჩიეთ", en: "Choose" },
  ev_birthday: { ka: "დაბადების დღე", en: "Birthday" },
  ev_wedding: { ka: "ქორწილი", en: "Wedding" },
  ev_corp: { ka: "კორპორატიული", en: "Corporate" },
  ev_cater: { ka: "კეთერინგი", en: "Catering" },
  ev_custom: { ka: "საფირმო ტორტი", en: "Custom cake" },
  ev_other: { ka: "სხვა", en: "Other" },
  f_msg: { ka: "შეტყობინება / დეტალები", en: "Message / details" },
  f_msg_ph: {
    ka: "მოგვწერეთ ღონისძიების შესახებ, სტუმრების რაოდენობა და რა გჭირდებათ...",
    en: "Tell us about your event, number of guests, and what you need...",
  },
  f_send: { ka: "გაგზავნა", en: "Send" },
  visit_us: { ka: "ეწვიეთ ჩვენ", en: "Visit us" },
  brand_full: { ka: "Bakers Bros კაფე-საცხობი", en: "Bakers Bros Cafe-Bakery" },
  phone_label: { ka: "ტელეფონი", en: "Phone" },
  email_label: { ka: "ელ. ფოსტა", en: "Email" },
  urgent_h: { ka: "გჭირდებათ სწრაფად?", en: "Need it fast?" },
  urgent_p: {
    ka: "იმავე დღის შეკვეთებისთვის ან სწრაფი კითხვებისთვის დაგვირეკეთ პირდაპირ. საფირმო შეკვეთებს ვიღებთ 48 საათით ადრე.",
    en: "For same-day orders or quick questions, call us directly. Custom orders need 48 hours notice.",
  },

  // Menu
  menu_title: { ka: "მენიუ | Bakers Bros", en: "Menu | Bakers Bros" },
  menu_desc: {
    ka: "ნამდვილი ქართული ხაჭაპური, ახალი ნამცხვრები, პიცა, საფირმო ყავა და ჩაი Bakers Bros საცხობში, საგურამოში.",
    en: "Authentic Georgian khachapuri, fresh pastries, pizza, specialty coffee and tea at Bakers Bros in Saguramo.",
  },
  menu_h1: { ka: "ჩვენი მენიუ", en: "Our menu" },
  menu_hero_p: {
    ka: "ნამდვილი ქართული გამოცხობა — ხაჭაპური, ახალი ნამცხვრები, პიცა და საფირმო ყავა. ახლადგამომცხვარი ყოველ დილით.",
    en: "Authentic Georgian baking — khachapuri, fresh pastries, pizza, and specialty coffee. Freshly baked every morning.",
  },
  menu_avg: { ka: "საშუალოდ: 10–20 ₾ ერთ პერსონაზე", en: "Average: 10–20 ₾ per person" },
  sec_khach: { ka: "ხაჭაპური და ცომეული", en: "Khachapuri & Pastries" },
  sec_pizza: { ka: "პიცა", en: "Pizza" },
  sec_sweets: { ka: "ტკბილეული", en: "Sweets" },
  sec_coffee: { ka: "ყავა", en: "Coffee" },
  sec_tea: { ka: "ჩაი", en: "Tea" },

  // Footer
  footer_tagline: {
    ka: "ახლადგამომცხვარი ხაჭაპური, ნამცხვრები და საფირმო ყავა საგურამოში. გაკეთებული სიყვარულით, მირთმეული თბილად.",
    en: "Freshly baked khachapuri, pastries and specialty coffee in Saguramo. Made with love, served warm.",
  },
  rating_text: { ka: "4.9 (63 შეფასება)", en: "4.9 (63 reviews)" },
  quick_links: { ka: "სწრაფი ბმულები", en: "Quick links" },
  contact_caps: { ka: "კონტაქტი", en: "Contact" },
  addr_full: { ka: "N31, 1-ლი ქუჩა, საგურამო 3311, საქართველო", en: "31 1st Street, Saguramo 3311, Georgia" },
  open_daily_full: { ka: "ღია ყოველდღე — იხურება 21:30-ზე", en: "Open daily — closes 9:30 PM" },
  rights: { ka: "ყველა უფლება დაცულია.", en: "All rights reserved." },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (k: keyof typeof translations) => string };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ka");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "ka" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };
  const toggle = () => setLang(lang === "ka" ? "en" : "ka");
  const t = (k: keyof typeof translations) => translations[k]?.[lang] ?? String(k);

  return <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
