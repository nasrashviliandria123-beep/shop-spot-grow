import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Phone, Menu, X, Languages, MessageSquarePlus } from "lucide-react";
import { useLang } from "../lib/i18n";


export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t, lang, toggle } = useLang();

  const navLinks = [
    { label: t("nav_home"), to: "/" },
    { label: t("nav_menu"), to: "/menu" },
    { label: t("nav_about"), to: "/about" },
    { label: t("nav_contact"), to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Lora', serif" }}>
            Bakers Bros
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/menu"
            hash="reviews"
            className="rounded-md px-3 py-2 text-sm font-medium transition-colors text-foreground hover:bg-muted hover:text-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MessageSquarePlus className="h-4 w-4" />
              {t("nav_review")}
            </span>
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Languages className="h-4 w-4" />
            {lang === "ka" ? "EN" : "ქა"}
          </button>
          <a
            href="tel:+995511109490"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            {t("call")}
          </a>
        </div>

        {/* Mobile right side */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="inline-flex items-center gap-1 rounded-md border border-input bg-background px-2.5 py-1.5 text-xs font-semibold text-foreground"
          >
            <Languages className="h-3.5 w-3.5" />
            {lang === "ka" ? "EN" : "ქა"}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted"
            aria-label={t("open_menu")}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/menu"
              hash="reviews"
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium transition-colors text-foreground hover:bg-muted"
            >
              <span className="inline-flex items-center gap-1.5">
                <MessageSquarePlus className="h-4 w-4" />
                {t("nav_review")}
              </span>
            </Link>
            <a
              href="tel:+995511109490"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {t("call")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
