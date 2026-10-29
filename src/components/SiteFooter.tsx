import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { CONTACT, PILLARS } from "@/lib/services-data";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="CapitalworkCreations logo" className="h-9 w-9 object-contain bg-white rounded p-1" />
            <span className="font-display text-xl">CapitalworkCreations</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80 max-w-sm leading-relaxed">
            A digital marketing & web design agency based in Kitengela — servicing Nairobi and all of Kenya. We build measurable growth, not vanity metrics.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
            <p className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" /> {CONTACT.location} · {CONTACT.serviceArea}
            </p>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 font-sans uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            {PILLARS.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link to={p.slug === "seo" ? "/services/seo" : "/services/$pillar"} params={{ pillar: p.slug }} className="hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 font-sans uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/services" className="hover:text-white">All Services</Link></li>
            <li><Link to="/case-studies" className="hover:text-white">Results</Link></li>
            <li><Link to="/audit" className="hover:text-white">Free Audit</Link></li>
            <li>
              <a href={`https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-primary-foreground/70 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} CapitalworkCreations. All rights reserved.</span>
          <span>Built for Kenya. Serving nationwide.</span>
        </div>
      </div>
    </footer>
  );
}
