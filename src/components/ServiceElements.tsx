import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/services-data";

export function WhatsAppCta({ label, topic, dark = false }: { label: string; topic?: string; dark?: boolean }) {
  const href = `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(`Hello, I would like to discuss ${topic ?? label}.`)}`;
  return <Button asChild size="lg" className={`h-auto min-h-11 whitespace-normal py-3 text-left ${dark ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" : ""}`}><a href={href} target="_blank" rel="noopener noreferrer">{label}<ArrowRight /></a></Button>;
}

export function ServiceFaq({ items }: { items: { q: string; a: string }[] }) {
  return <div className="mt-8 border-t border-border">{items.map((f) => <details key={f.q} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-display text-xl font-semibold"><span>{f.q}</span><Plus className="mt-1 size-5 shrink-0 text-primary transition-transform group-open:rotate-45" /></summary><p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{f.a}</p></details>)}</div>;
}