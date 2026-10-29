import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { WhatsAppCta } from "@/components/ServiceElements";
import { SECTORS, parseSector, type Node, type Section } from "@/lib/sectors";
import eventsImage from "@/assets/events-editorial.jpg";
import ngosImage from "@/assets/ngos-editorial.jpg";
import tvetsImage from "@/assets/tvets-editorial.jpg";

const images: Record<string, string> = { events: eventsImage, ngos: ngosImage, tvets: tvetsImage };

export const Route = createFileRoute("/marketing/$sector")({
  loader: ({ params }) => {
    const sector = SECTORS.find((s) => s.slug === params.sector);
    if (!sector) throw notFound();
    return { slug: sector.slug };
  },
  head: ({ params }) => {
    const sector = SECTORS.find((s) => s.slug === params.sector);
    const title = `${sector?.title ?? "Page not found"} in Nairobi and Kenya | CapitalworkCreations`;
    return { meta: [{ title }, { name: "description", content: sector?.line ?? "Explore digital growth services." }, { property: "og:title", content: title }, { property: "og:description", content: sector?.line ?? "Explore digital growth services." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] };
  },
  component: SectorPage,
  notFoundComponent: () => <Layout><div className="mx-auto max-w-3xl px-6 py-24"><h1 className="text-4xl">Page not found</h1><Link to="/">Back to home</Link></div></Layout>,
});

function Inline({ value }: { value: string }) {
  return <>{value.split(/\*\*(.+?)\*\*/g).map((part, i) => i % 2 ? <strong key={i}>{part}</strong> : part)}</>;
}

function Nodes({ nodes, dark = false }: { nodes: Node[]; dark?: boolean }) {
  return <>{nodes.map((n, i) => n.t === "cta" ? <div key={i} className="mt-7"><WhatsAppCta label={n.v} dark={dark} /></div> : n.t === "h2" ? <h2 key={i} className="mt-4 mb-6 max-w-4xl font-display text-3xl font-semibold leading-tight md:text-4xl">{n.v}</h2> : <p key={i} className="mt-3 max-w-3xl leading-relaxed"><Inline value={n.v} /></p>)}</>;
}

function SectionBody({ section, index }: { section: Section; index: number }) {
  const faq = index === 5;
  const tiers = index === 2;
  const isFinal = index === 6;
  return <section className={isFinal ? "bg-primary text-primary-foreground" : index === 2 || index === 4 ? "bg-muted/45" : "bg-background"}>
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className={isFinal ? "max-w-3xl" : "max-w-4xl"}>
        {!/^SECTION|^FINAL CTA/.test(section.label) && <h2 className="max-w-4xl font-display text-3xl font-semibold leading-tight md:text-4xl">{section.label}</h2>}
        <Nodes nodes={section.intro.filter((n) => n.t !== "cta")} dark={isFinal} />
      </div>
      {faq ? <div className="mt-8 max-w-4xl border-t border-border">{section.cards.map((c) => <details key={c.title} className="group border-b border-border py-5"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-xl font-semibold">{c.title}<span className="shrink-0 text-primary group-open:rotate-45">+</span></summary><div className="mt-4 text-muted-foreground"><Nodes nodes={c.nodes} /></div></details>)}</div>
      : tiers ? <div className="mt-12 grid gap-10 md:grid-cols-3">{section.cards.map((c, i) => <article key={c.title} className="flex flex-col border-t-2 border-primary pt-6"><span className="text-xs font-semibold text-secondary">0{i + 1}</span><h3 className="mt-4 font-display text-4xl font-semibold">{c.title}</h3><div className="mt-4 flex flex-1 flex-col text-sm [&>div:last-child]:mt-auto [&>div:last-child]:pt-6"><Nodes nodes={c.nodes} /></div></article>)}</div>
      : <div className="mt-10 max-w-5xl">{section.cards.map((c, i) => <article key={c.title} className="grid gap-4 border-t border-border py-7 md:grid-cols-[2rem_15rem_1fr] md:gap-6"><span className="pt-1 text-xs font-semibold text-secondary">{String(i + 1).padStart(2, "0")}</span><h3 className="font-display text-xl font-semibold md:text-2xl">{c.title}</h3><div className="[&>p:first-child]:mt-0"><Nodes nodes={c.nodes} /></div></article>)}</div>}
      <Nodes nodes={section.intro.filter((n) => n.t === "cta")} dark={isFinal} />
    </div>
  </section>;
}

function SectorPage() {
  const { slug } = Route.useLoaderData();
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) return null;
  const [hero, ...rest] = parseSector(sector.raw);
  if (!hero) return null;
  const title = hero.intro.find((n) => n.t === "h2")?.v ?? hero.label;
  return <Layout>
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 md:pt-20">
        <p className="text-xs font-bold uppercase tracking-widest text-secondary">{sector.title}</p>
        <h1 className="mt-5 max-w-5xl font-display text-4xl font-semibold leading-tight text-balance md:text-6xl">{title}</h1>
        <div className="mt-5 max-w-3xl text-base md:text-lg"><Nodes nodes={hero.intro.filter((n) => n.t !== "h2")} /></div>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-12"><img src={images[slug]} alt={slug === "events" ? "Illustrative conference audience and speaker" : slug === "ngos" ? "Illustrative community programme team" : "Illustrative practical vocational training workshop"} width={1536} height={1024} className="aspect-[2.3/1] w-full object-cover" /></div>
    </section>
    {rest.map((section, i) => <SectionBody key={section.label} section={section} index={i + 1} />)}
  </Layout>;
}