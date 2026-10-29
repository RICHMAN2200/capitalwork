import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Search, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { PILLARS, SUB_SERVICES, CONTACT } from "@/lib/services-data";
import { SECTORS } from "@/lib/sectors";

type Entry = { label: string; sub: string; to: string; params?: Record<string, string> };

const ENTRIES: Entry[] = [
  ...PILLARS.map((p) => ({
    label: p.title,
    sub: p.short,
    to: p.slug === "seo" ? "/services/seo" : "/services/$pillar",
    params: p.slug === "seo" ? undefined : { pillar: p.slug },
  })),
  ...SUB_SERVICES.map((s) => ({
    label: s.title,
    sub: s.tagline,
    to: "/services/$pillar/$service",
    params: { pillar: s.pillar, service: s.slug },
  })),
  ...SECTORS.map((s) => ({ label: s.title, sub: s.line, to: "/marketing/$sector", params: { sector: s.slug } })),
];

function match(e: Entry, q: string) {
  const needle = q.toLowerCase().trim();
  if (!needle) return true;
  return needle.split(/\s+/).every((w) => `${e.label} ${e.sub}`.toLowerCase().includes(w));
}

export function LeadCapture() {
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [sent, setSent] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    timer.current = window.setTimeout(() => {
      if (!sessionStorage.getItem("cwc-lead-popup")) {
        setOpen(true);
        sessionStorage.setItem("cwc-lead-popup", "1");
      } else {
        setNudge(true);
      }
    }, 14000);
    return () => window.clearTimeout(timer.current);
  }, []);

  const results = useMemo(() => ENTRIES.filter((e) => match(e, query)).slice(0, 6), [query]);
  const canSend = name.trim().length > 1 && enquiry.trim().length > 3;

  const waHref = useMemo(() => {
    const parts = [`Hello CapitalworkCreations, I am ${name.trim()}.`];
    if (phone.trim()) parts.push(`You can reach me on ${phone.trim()}.`);
    parts.push(enquiry.trim());
    return `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(parts.join(" "))}`;
  }, [name, phone, enquiry]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6" role="dialog" aria-modal="true" aria-label="Quick contact and search">
          <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full sm:max-w-lg bg-background rounded-t-3xl sm:rounded-3xl shadow-elegant border border-primary/15 max-h-[92vh] overflow-y-auto">
            <div className="bg-primary text-primary-foreground p-6 rounded-t-3xl sm:rounded-t-3xl">
              <button onClick={() => setOpen(false)} aria-label="Close" className="absolute right-4 top-4 text-primary-foreground/80 hover:text-primary-foreground">
                <X className="h-5 w-5" />
              </button>
              <p className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-primary-foreground/85"><Sparkles className="h-3.5 w-3.5" /> Quick help</p>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-snug">Tell us what you need. We reply fast.</h2>
              <p className="mt-1.5 text-sm text-primary-foreground/85">Share your details and continue the conversation on WhatsApp.</p>
            </div>

            <div className="p-6">
              <label className="block">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-foreground/70"><Search className="h-3.5 w-3.5" /> Looking for something specific?</span>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try 'website', 'SEO' or 'Google Ads'"
                  className="mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </label>
              {query.trim() && (
                <ul className="mt-2 divide-y divide-border rounded-md border border-border">
                  {results.length === 0 && <li className="px-4 py-3 text-sm text-foreground/70">No match. Describe what you need below and we will help.</li>}
                  {results.map((r) => (
                    <li key={`${r.to}-${r.label}`}>
                      <Link
                        to={r.to}
                        params={r.params ?? {}}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted transition"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-foreground truncate">{r.label}</span>
                          <span className="block text-xs text-foreground/65 truncate">{r.sub}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-primary shrink-0 opacity-60 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <form
                className="mt-6 space-y-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!canSend) return;
                  setSent(true);
                  window.open(waHref, "_blank", "noopener,noreferrer");
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Your name</span>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={80}
                      placeholder="e.g. Amina"
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">Phone <span className="normal-case font-medium text-foreground/50">(optional)</span></span>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      maxLength={20}
                      inputMode="tel"
                      placeholder="+254 ..."
                      className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-widest text-foreground/70">What do you need help with?</span>
                  <textarea
                    required
                    value={enquiry}
                    onChange={(e) => setEnquiry(e.target.value)}
                    maxLength={600}
                    rows={3}
                    placeholder="Tell us about your business or the goal you want to reach"
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/45 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </label>
                <button
                  type="submit"
                  disabled={!canSend}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-secondary px-5 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-secondary/90 disabled:opacity-40"
                >
                  <MessageCircle className="h-4 w-4" /> Send on WhatsApp
                </button>
                {sent && <p className="text-center text-sm text-foreground/75">WhatsApp is opening with your message. If it did not open, <a href={waHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary underline underline-offset-2">tap here</a>.</p>}
                <p className="text-center text-xs text-foreground/55">Prefer to talk? Call <a href={`tel:${CONTACT.phone}`} className="font-semibold text-primary">{CONTACT.phone}</a> or email <a href={`mailto:${CONTACT.email}`} className="font-semibold text-primary">{CONTACT.email}</a>.</p>
              </form>
            </div>
          </div>
        </div>
      )}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className={`fixed bottom-6 left-6 z-40 hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-elegant transition hover:scale-105 ${nudge ? "animate-pulse" : ""}`}
        >
          <MessageCircle className="h-4 w-4" /> Quick help
        </button>
      )}
    </>
  );
}
