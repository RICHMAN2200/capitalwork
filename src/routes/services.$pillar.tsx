import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone, Calendar, Zap, Target, TrendingUp, Shield, Users, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { QuickActions } from "@/components/QuickActions";
import { PILLARS, SUB_SERVICES, CONTACT } from "@/lib/services-data";

export const Route = createFileRoute("/services/$pillar")({
  loader: ({ params }) => {
    const pillar = PILLARS.find((p) => p.slug === params.pillar);
    if (!pillar) throw notFound();
    const services = SUB_SERVICES.filter((s) => s.pillar === pillar.slug);
    return { pillar, services };
  },
  head: ({ params }) => {
    const pillar = PILLARS.find((p) => p.slug === params.pillar);
    if (!pillar) return { meta: [{ title: "Service not found" }] };
    const title = `${pillar.title} in Kitengela, Nairobi & Kenya | CapitalworkCreations`;
    const description = `${pillar.description} Trusted ${pillar.title.toLowerCase()} agency serving Kitengela, Nairobi, and all of Kenya.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: pillar.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${pillar.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: pillar.title,
            description: pillar.description,
            provider: {
              "@type": "LocalBusiness",
              name: CONTACT.company,
              telephone: CONTACT.phone,
              email: CONTACT.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kitengela",
                addressRegion: "Kajiado County",
                addressCountry: "KE",
              },
              areaServed: ["Kitengela", "Nairobi", "Kenya"],
            },
            areaServed: ["Kitengela", "Nairobi", "Kajiado County", "Kenya"],
          }),
        },
      ],
    };
  },
  component: PillarPage,
  notFoundComponent: () => (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl">Category not found</h1>
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

const PROCESS_STEPS = [
  { icon: Target, title: "Discovery & Audit", desc: "We map your funnel, competitors, and Kenyan market positioning before a single line of work begins." },
  { icon: Zap, title: "Strategy Blueprint", desc: "A written 30/60/90-day plan with KPIs, channels, budget allocation, and clear ownership." },
  { icon: TrendingUp, title: "Execution Sprint", desc: "Weekly delivery — campaigns live, content shipped, dashboards updated. No silent months." },
  { icon: Shield, title: "Optimize & Compound", desc: "Continuous A/B testing, reporting, and reinvestment into the channels actually printing revenue." },
];

const FAQS = [
  { q: "How fast will I see results?", a: "Most clients see measurable traction within 30–45 days. SEO and GEO work compounds for 6–12 months. Paid channels move within the first 7–14 days." },
  { q: "Do you work with businesses outside Kitengela?", a: "Yes. Our home base is Kitengela, Kajiado County, but we serve clients across Nairobi, Mombasa, Kisumu, and globally for diaspora-led brands." },
  { q: "What does the engagement look like?", a: "Month-to-month retainers with no long lock-ins. You get a dedicated strategist, weekly updates, and a live Notion or Slack channel." },
  { q: "How do you report results?", a: "Live dashboards covering traffic, leads, ranking, cost-per-acquisition, and revenue attribution — reviewed in a 30-minute strategy call each month." },
  { q: "What makes you different from other Kenyan agencies?", a: "We engineer systems, not deliverables. Every action ties back to a measurable revenue lever — not vanity metrics." },
];

function PillarPage() {
  const { pillar, services } = Route.useLoaderData();
  const Icon = pillar.icon;
  const calendlyHref = CONTACT.calendly;
  const waHref = `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(`Hi, I'd like to discuss ${pillar.title} for my business.`)}`;

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-24 md:pb-24">
          <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white font-semibold">
            ← All Services
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="h-14 w-14 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-balance font-semibold leading-tight">{pillar.title}</h1>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">{pillar.intro}</p>
            </div>
          </div>
          <div className="mt-10 max-w-2xl">
            <QuickActions variant="dark" />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Kitengela • Nairobi • All of Kenya</span>
            <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Reply within 4 business hours</span>
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> 120+ Kenyan brands served</span>
          </div>
        </div>
      </section>

      {/* DIRECT ANSWER (GEO-optimized) */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">The direct answer</span>
          <p className="mt-4 text-xl md:text-2xl text-foreground leading-relaxed font-medium">
            {pillar.description}
          </p>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            CapitalworkCreations is a Kitengela-based growth studio engineering {pillar.title.toLowerCase()} for service businesses, e-commerce brands, real estate firms, clinics, restaurants, and coaches across Kenya. We build systems that compound — not campaigns that expire.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Why it matters</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              What {pillar.title} unlocks for your business in Kenya
            </h2>
            <p className="mt-5 text-foreground/80 text-lg leading-relaxed">{pillar.description}</p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Kenyan buyers research before they buy. They Google, they ask ChatGPT, they scroll Instagram, they tap Maps. If you're not visible — credibly, repeatedly, with proof — the sale goes to whoever is. {pillar.title} is how you become the obvious choice.
            </p>
          </div>
          <ul className="space-y-4">
            {pillar.benefits.map((b: string) => (
              <li key={b} className="flex items-start gap-3 bg-muted rounded-xl p-5">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-foreground font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our process</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              A repeatable system, engineered for compounding returns
            </h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Every engagement runs through the same battle-tested four-phase framework. No mystery. No fluff. Just the work.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="bg-background rounded-xl p-6 border border-primary/10">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">Phase {i + 1}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg text-foreground font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUB SERVICES */}
      {services.length > 0 && (
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Specialized Tracks</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
                {pillar.title} services we deliver
              </h2>
              <p className="mt-3 text-foreground/75 max-w-2xl">
                Industry-specific tracks engineered around the way Kenyan buyers actually search, click, and decide.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s: typeof SUB_SERVICES[number]) => (
                <Link
                  key={s.slug}
                  to="/services/$pillar/$service"
                  params={{ pillar: pillar.slug, service: s.slug }}
                  className="group bg-muted rounded-xl p-6 border border-primary/15 hover:border-primary hover:shadow-soft transition flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{pillar.title.split(" ")[0]}</span>
                    <ArrowUpRight className="h-4 w-4 text-foreground/50 group-hover:text-primary transition" />
                  </div>
                  <h3 className="font-display text-lg leading-snug text-foreground font-semibold">{s.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{s.tagline}</p>
                  <span className="text-sm text-primary font-semibold mt-auto pt-2">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LOCAL PROXIMITY */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Local Authority</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              Based in Kitengela. Serving all of Kenya.
            </h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Our team operates out of the Kitengela commercial corridor in Kajiado County — minutes from the Nairobi Expressway, Athi River SEZ, and the EPZ industrial belt. That proximity matters: we know the buyers, the price ceilings, the platforms, and the local search intent better than any remote agency ever will.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 text-primary mt-1 shrink-0" /> <span><strong>Service area:</strong> Kitengela, Athi River, Syokimau, Mlolongo, Karen, Westlands, Kilimani, CBD, Kiambu, Mombasa, Kisumu, Nakuru, Eldoret.</span></li>
              <li className="flex items-start gap-3"><Phone className="h-4 w-4 text-primary mt-1 shrink-0" /> <span><strong>Direct line:</strong> {CONTACT.phone} — answered by a strategist, not a call center.</span></li>
              <li className="flex items-start gap-3"><Calendar className="h-4 w-4 text-primary mt-1 shrink-0" /> <span><strong>On-site meetings</strong> available at our Kitengela campus by appointment.</span></li>
            </ul>
          </div>
          <div className="bg-background rounded-2xl p-8 border border-primary/15">
            <h3 className="font-display text-xl text-foreground font-semibold">Why local proximity changes everything</h3>
            <p className="mt-3 text-sm text-foreground/75 leading-relaxed">
              Google's local algorithm rewards geographic relevance. AI engines (ChatGPT, Perplexity, Gemini) cite businesses with verifiable physical presence over anonymous remote agencies. When your growth partner is rooted in the same market as your buyers, every signal — citations, reviews, partnerships, press — compounds faster.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-muted rounded-lg p-4">
                <div className="font-display text-2xl text-primary font-semibold">120+</div>
                <div className="text-xs text-foreground/70 mt-1">Kenyan brands</div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="font-display text-2xl text-primary font-semibold">4hrs</div>
                <div className="text-xs text-foreground/70 mt-1">Reply window</div>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <div className="font-display text-2xl text-primary font-semibold">5★</div>
                <div className="text-xs text-foreground/70 mt-1">Avg client rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Who this is for</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              Built for operators who measure in revenue, not impressions
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Founders ready to scale", d: "You've proven product-market fit and need a marketing engine that grows past your personal network." },
              { t: "Service businesses", d: "Coaches, clinics, lawyers, consultants, contractors who live or die by qualified inbound leads." },
              { t: "E-commerce brands", d: "Kenyan online stores chasing profitable ROAS, not vanity traffic." },
              { t: "Real estate firms", d: "Agencies and developers competing for property buyers across Nairobi, Kitengela, and the diaspora." },
              { t: "Hospitality & F&B", d: "Restaurants, lodges, and venues that need Maps, reviews, and reels working in sync." },
              { t: "Established brands", d: "Companies whose existing marketing has plateaued and needs a senior strategic re-architecture." },
            ].map((x) => (
              <div key={x.t} className="bg-muted rounded-xl p-6">
                <h3 className="font-display text-lg text-foreground font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Frequently asked</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
            Questions Kenyan owners ask before they hire us
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="group bg-background rounded-xl p-5 border border-primary/10">
                <summary className="cursor-pointer font-display text-lg text-foreground font-semibold flex justify-between items-center">
                  {f.q}
                  <span className="text-primary group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-foreground/75 leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-balance font-semibold">
            Ready to grow with {pillar.title.toLowerCase()}?
          </h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto text-lg">
            Free 30-minute strategy session. We diagnose the bottleneck and outline the path — whether you hire us or not.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={calendlyHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white text-primary px-7 py-3.5 text-sm font-semibold hover:opacity-95 shadow-elegant transition">
              Book Free Audit <ArrowRight className="h-4 w-4" />
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white px-7 py-3.5 text-sm font-semibold hover:opacity-95 transition">
              WhatsApp a Strategist
            </a>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-md border border-white/30 text-white px-7 py-3.5 text-sm font-semibold hover:bg-white/10 transition">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
