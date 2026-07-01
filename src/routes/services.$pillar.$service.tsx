import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { QuickActions } from "@/components/QuickActions";
import { PILLARS, SUB_SERVICES } from "@/lib/services-data";

export const Route = createFileRoute("/services/$pillar/$service")({
  loader: ({ params }) => {
    const pillar = PILLARS.find((p) => p.slug === params.pillar);
    const service = SUB_SERVICES.find((s) => s.slug === params.service && s.pillar === params.pillar);
    if (!pillar || !service) throw notFound();
    const related = SUB_SERVICES.filter((s) => s.pillar === pillar.slug && s.slug !== service.slug);
    return { pillar, service, related };
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
            areaServed: ["Kitengela", "Nairobi", "Kenya"],
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
  const { pillar, service, related } = Route.useLoaderData();
  const Icon = pillar.icon;

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold flex items-center gap-2 flex-wrap">
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <Link to="/services/$pillar" params={{ pillar: pillar.slug }} className="hover:text-white">{pillar.title}</Link>
          </div>
          <div className="mt-6 flex items-start gap-5">
            <div className="h-14 w-14 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-balance font-semibold leading-tight">{service.title}</h1>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">{service.tagline}</p>
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

            <h3 className="mt-12 font-display text-2xl text-foreground font-semibold">What you'll get</h3>
            <ul className="mt-5 space-y-3">
              {service.outcomes.map((o: string) => (
                <li key={o} className="flex items-start gap-3 bg-muted rounded-xl p-4">
                  <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground font-medium">{o}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 font-display text-2xl text-foreground font-semibold">Built for Kenyan businesses</h3>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              CapitalworkCreations is based in <strong>Kitengela</strong> and works with clients across <strong>Nairobi</strong> and the rest of <strong>Kenya</strong>. Every campaign is built around how Kenyan buyers actually search, scroll, and decide — no recycled global playbooks.
            </p>
          </div>

          <aside className="space-y-6">
            <div className="bg-muted rounded-2xl p-6 border border-primary/15">
              <h4 className="font-display text-xl text-foreground font-semibold">Talk to us</h4>
              <p className="mt-2 text-sm text-foreground/75">Get a real human response in under an hour.</p>
              <div className="mt-4">
                <QuickActions />
              </div>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6">
              <h4 className="font-display text-xl font-semibold">Free Performance Audit</h4>
              <p className="mt-2 text-sm text-white/85">30 minutes. No pitch deck. Just a clear plan.</p>
              <Link to="/audit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-white text-primary px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

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
