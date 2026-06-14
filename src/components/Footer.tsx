import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Instagram, Facebook } from "lucide-react";
import { useLang } from "../lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="w-full border-t border-border bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
              Bakers Bros
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">{t("footer_tagline")}</p>
            <div className="mt-4 flex items-center gap-2 text-bread">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-1 text-sm font-medium text-cream/90">{t("rating_text")}</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bread">{t("quick_links")}</h4>
            <ul className="mt-4 space-y-2.5">
              <li><Link to="/" className="text-sm text-cream/80 transition-colors hover:text-cream">{t("nav_home")}</Link></li>
              <li><Link to="/menu" className="text-sm text-cream/80 transition-colors hover:text-cream">{t("nav_menu")}</Link></li>
              <li><Link to="/about" className="text-sm text-cream/80 transition-colors hover:text-cream">{t("nav_about")}</Link></li>
              <li><Link to="/contact" className="text-sm text-cream/80 transition-colors hover:text-cream">{t("nav_contact")}</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-bread">{t("contact_caps")}</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bread" />
                <span className="text-sm text-cream/80">{t("addr_full")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-bread" />
                <a href="tel:+995511109490" className="text-sm text-cream/80 transition-colors hover:text-cream">
                  +995 511 10 94 90
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-bread" />
                <span className="text-sm text-cream/80">{t("open_daily_full")}</span>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cream/10 p-2 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-cream/10 p-2 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          &copy; {new Date().getFullYear()} Bakers Bros. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
