import { Phone, Mail, MessageCircle, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/services-data";

type Variant = "light" | "dark";

export function QuickActions({ variant = "light", label = "Already know us? Skip the scroll —" }: { variant?: Variant; label?: string }) {
  const wa = `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
  const isDark = variant === "dark";
  const base = isDark
    ? "bg-white text-primary hover:bg-white/90"
    : "bg-primary text-primary-foreground hover:bg-foreground shadow-soft";
  const ghost = isDark
    ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
    : "bg-background border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground";
  const labelClass = isDark ? "text-white" : "text-foreground";

  return (
    <div className="rounded-2xl">
      <p className={`text-sm font-semibold mb-3 ${labelClass}`}>{label}</p>
      <div className="flex flex-wrap gap-2.5">
        <a href={`tel:${CONTACT.phone}`} className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition ${base}`}>
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white px-4 py-2.5 text-sm font-bold hover:bg-[#1ebe5a] transition">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a href={`mailto:${CONTACT.email}`} className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition ${ghost}`}>
          <Mail className="h-4 w-4" /> Email
        </a>
        <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition ${ghost}`}>
          <Calendar className="h-4 w-4" /> Book Call
        </a>
      </div>
    </div>
  );
}
