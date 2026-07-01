import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import { CONTACT } from "@/lib/services-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/case-studies", label: "Results" },
  { to: "/audit", label: "Audit" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-primary/15">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="CapitalworkCreations logo" className="h-9 w-9 object-contain" />
          <span className="font-display text-lg tracking-tight text-primary leading-none">
            Capitalwork<span className="text-secondary">Creations</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-foreground hover:text-primary transition-colors font-medium"
              activeProps={{ className: "text-sm text-primary font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${CONTACT.phone}`}
            className="hidden lg:inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:opacity-80"
          >
            <Phone className="h-4 w-4" /> {CONTACT.phone}
          </a>
          <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-foreground transition shadow-soft">
            Book Free Audit
          </a>
        </nav>
        <button className="md:hidden p-2 text-primary" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-primary/15 bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm py-1 text-foreground font-medium">{l.label}</Link>
            ))}
            <a href={`tel:${CONTACT.phone}`} className="text-sm py-1 text-primary font-semibold flex items-center gap-2">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
            <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="rounded-md bg-primary px-4 py-2 text-sm text-center font-bold text-primary-foreground">Book Free Audit</a>
          </div>
        </div>
      )}
    </header>
  );
}
