import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ServiceFaq, WhatsAppCta } from "@/components/ServiceElements";
import { QuickActions } from "@/components/QuickActions";
import { PILLARS, SUB_SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/$pillar/$service")({
  loader: ({ params }) => {
    const pillar = PILLARS.find((p) => p.slug === params.pillar);
    const service = SUB_SERVICES.find((s) => s.slug === params.service && s.pillar === params.pillar);
    if (!pillar || !service) throw notFound();
    return { pillarSlug: pillar.slug, serviceSlug: service.slug };
  },
  head: ({ params }) => {
    const service = SUB_SERVICES.find((s) => s.slug === params.service && s.pillar === params.pillar);
    const pillar = PILLARS.find((p) => p.slug === params.pillar);
    if (!service || !pillar) return { meta: [{ title: "Service not found" }] };
    const title = `${service.title} | ${pillar.title} | CapitalworkCreations Kenya`;
    return {
      meta: [
        { title },
        { name: "description", content: service.description },
        { name: "keywords", content: service.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: service.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/services/${pillar.slug}/${service.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.description,
            areaServed: ["Nairobi", "Kenya"],
            provider: { "@type": "LocalBusiness", name: "CapitalworkCreations" },
          }),
        },
      ],
    };
  },
  component: ServicePage,
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Service not found</h1>
        <Link to="/services" className="text-primary mt-4 inline-block">← All services</Link>
      </div>
    </Layout>
  ),
  errorComponent: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <Link to="/services" className="text-primary mt-4 inline-block">← All services</Link>
      </div>
    </Layout>
  ),
});

function ServicePage() {
  const { pillarSlug, serviceSlug } = Route.useLoaderData();
  const pillar = PILLARS.find((p) => p.slug === pillarSlug);
  const service = SUB_SERVICES.find((s) => s.slug === serviceSlug && s.pillar === pillarSlug);
  if (!pillar || !service) throw notFound();
  const related = SUB_SERVICES.filter((s) => s.pillar === pillarSlug && s.slug !== serviceSlug);
  const Icon = pillar.icon;

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80 font-semibold flex items-center gap-2 flex-wrap">
            <Link to="/services" className="hover:text-primary-foreground">Services</Link>
            <span>/</span>
            {pillar.slug === "seo" ? <Link to="/services/seo" className="hover:text-primary-foreground">{pillar.title}</Link> : <Link to="/services/$pillar" params={{ pillar: pillar.slug }} className="hover:text-primary-foreground">{pillar.title}</Link>}
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div className="h-14 w-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-balance font-semibold leading-tight">{service.title}</h1>
              <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">{service.tagline}</p>
            </div>
          </div>
          <div className="mt-10 max-w-2xl">
            <QuickActions variant="dark" />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl text-foreground font-semibold">About this service</h2>
            <p className="mt-4 text-foreground/85 text-lg leading-relaxed">{service.description}</p>

            <div className="mt-6 rounded-2xl bg-muted/60 border border-primary/10 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">In simple terms</p>
              <p className="mt-2 text-foreground/80 leading-relaxed">
                This is the piece of {pillar.title.toLowerCase()} that solves one clear problem for you. You do not need to know the technical side: we handle the details, explain the plan in plain language, and you see the difference in the enquiries and customers that come in.
              </p>
            </div>

            <h3 className="mt-12 font-display text-2xl text-foreground font-semibold">What you'll get</h3>
            <ul className="mt-5 space-y-3">
              {service.outcomes.map((o: string) => (
                <li key={o} className="flex items-start gap-3 border-b border-border py-4">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground font-medium">{o}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-2xl text-foreground font-semibold">Built for Kenyan businesses</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Your audience and business goals guide the work. We serve clients in <strong>Nairobi, Kenya and beyond Kenya</strong>, with a focus on how your customers find information and decide what to do next.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="border-t border-border pt-6">
              <h4 className="font-display text-xl text-foreground font-semibold">Talk to us</h4>
              <p className="mt-2 text-sm text-foreground/75">Tell us what you want to improve and what is happening now.</p>
              <div className="mt-4">
                <QuickActions />
              </div>
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="font-display text-xl font-semibold">Free Performance Audit</h4>
              <p className="mt-2 text-sm text-muted-foreground">30 minutes. No pitch deck. Just a clear plan.</p>
              <div className="mt-4"><WhatsAppCta label={`Talk to us about ${service.title.toLowerCase()}`} topic={service.title} /></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-muted/40"><div className="mx-auto max-w-5xl px-6 py-16"><h2 className="font-display text-3xl font-semibold">Questions about {service.title.toLowerCase()}</h2><ServiceFaq items={[
        { q: `What does ${service.title.toLowerCase()} involve?`, a: `${service.description} The work focuses on ${service.outcomes.join(", ").toLowerCase()}.` },
        { q: "Can you work with what I already have?", a: "Your current setup is reviewed first, so useful assets can be kept and the gaps can be addressed without replacing everything unnecessarily." },
        { q: "What should I share before we start?", a: "Share your current website or profiles, the audience you want to reach and the goal you need the work to support. The required information and access can then be agreed for your project." },
        { q: "How will I know whether the work is helping?", a: "Relevant outcomes and measurements are agreed for your project. Progress can then be reviewed against your starting point and the customer actions that matter to your business." },
      ]} /><div className="mt-8"><WhatsAppCta label={`Talk to us about ${service.title.toLowerCase()}`} topic={service.title} /></div></div></section>

      {related.length > 0 && (
        <section className="bg-muted">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-display text-3xl text-foreground font-semibold">More {pillar.title.toLowerCase()} services</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s: typeof SUB_SERVICES[number]) => (
                <Link
                  key={s.slug}
                  to="/services/$pillar/$service"
                  params={{ pillar: pillar.slug, service: s.slug }}
                  className="group bg-background rounded-xl p-6 border border-primary/15 hover:border-primary hover:shadow-soft transition flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{pillar.title.split(" ")[0]}</span>
                    <ArrowUpRight className="h-4 w-4 text-foreground/50 group-hover:text-primary transition" />
                  </div>
                  <h3 className="font-display text-lg leading-snug text-foreground font-semibold">{s.title}</h3>
                  <p className="text-sm text-foreground/75">{s.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
