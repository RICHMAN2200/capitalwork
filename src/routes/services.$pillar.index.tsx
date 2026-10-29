import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MapPin, Phone, Calendar, Zap, Target, TrendingUp, Shield, Users, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import { WhatsAppCta } from "@/components/ServiceElements";
import { QuickActions } from "@/components/QuickActions";
import { PILLARS, SUB_SERVICES, CONTACT } from "@/lib/services-data";

export const Route = createFileRoute("/services/$pillar/")({
  loader: ({ params }) => {
    const pillar = PILLARS.find((p) => p.slug === params.pillar);
    if (!pillar) throw notFound();
    return { slug: pillar.slug };
  },
  head: ({ params }) => {
    const pillar = PILLARS.find((p) => p.slug === params.pillar);
    if (!pillar) return { meta: [{ title: "Service not found" }] };
    const title = `${pillar.title} in Nairobi & Kenya | CapitalworkCreations`;
    const description = `${pillar.description} Trusted ${pillar.title.toLowerCase()} agency serving Nairobi and all of Kenya.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: pillar.keywords.join(", ") },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
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
              areaServed: ["Nairobi", "Kenya"],
            },
            areaServed: ["Nairobi", "Kenya"],
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
  { icon: Target, title: "Discovery & Audit", desc: "We review your customer journey, competitors and current marketing before deciding what needs attention." },
  { icon: Zap, title: "Your Growth Plan", desc: "A written plan with priorities, channels, budget and clear responsibilities." },
  { icon: TrendingUp, title: "Put the Plan to Work", desc: "Campaigns go live, content is delivered and progress is reviewed." },
  { icon: Shield, title: "Review & Improve", desc: "Compare what works, report on meaningful results and improve the channels that support your goals." },
];

const FAQS = [
  { q: "How fast will I see results?", a: "Timing depends on your current setup, competition, budget and the service involved. Your priorities and measurements are agreed before work begins." },
  { q: "Can you work with clients beyond Kenya?", a: "Yes. We work with businesses in Nairobi, Kenya and clients beyond Kenya." },
  { q: "What does the engagement look like?", a: "Monthly retainers with no long commitments. You get a dedicated strategist, weekly updates, and a live Notion or Slack channel." },
  { q: "How do you report results?", a: "Reports show traffic, enquiries, search visibility and advertising costs where relevant, so you can understand what is working." },
  { q: "What makes you different from other Kenyan agencies?", a: "Your growth goal guides the work. The focus is on useful enquiries, customer actions and measurable progress rather than activity alone." },
];

function PillarPage() {
  const { slug } = Route.useLoaderData();
  const pillar = PILLARS.find((p) => p.slug === slug);
  if (!pillar) throw notFound();
  const services = SUB_SERVICES.filter((s) => s.pillar === slug);
  const Icon = pillar.icon;
  
  const waHref = `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(`Hi, I'd like to discuss ${pillar.title} for my business.`)}`;

  return (
    <Layout>
      
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-20 md:pt-24 md:pb-24">
          <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80 hover:text-primary-foreground font-semibold">
            ← All Services
          </Link>
          <div className="mt-6 flex items-start gap-5">
            <div className="h-14 w-14 rounded-xl bg-primary-foreground/15 flex items-center justify-center shrink-0">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-display text-4xl md:text-6xl text-balance font-semibold leading-tight">{pillar.title}</h1>
              <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">{pillar.intro}</p>
            </div>
          </div>
          <div className="mt-10 max-w-2xl">
            <QuickActions variant="dark" />
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-primary-foreground/85">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Nairobi • Kenya</span>
          </div>
        </div>
      </section>

      
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">The direct answer</span>
          <p className="mt-4 text-xl md:text-2xl text-foreground leading-relaxed font-medium">
            {pillar.description}
          </p>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            We provide {pillar.title.toLowerCase()} for service businesses, online stores, real estate firms, clinics, restaurants and coaches across Kenya. Your website, content and campaigns should work towards the same business goal.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { t: "Where you are", d: "You already run something that works. The frustration is that the right people cannot find you easily, or find you but are not sure enough to choose you." },
              { t: "Where you want to be", d: "You want the people searching for what you offer to find you first, trust you quickly and reach out ready to talk." },
              { t: "How we help", d: "We put the pieces together for you and explain everything in plain language, so you can focus on running your business while the enquiries come in." },
            ].map((x) => (
              <div key={x.t} className="rounded-xl bg-muted/70 border border-primary/10 p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{x.t}</p>
                <p className="mt-2 text-sm text-foreground/80 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Why it matters</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              What {pillar.title} unlocks for your business in Kenya
            </h2>
            <p className="mt-5 text-foreground/80 text-lg leading-relaxed">{pillar.description}</p>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Customers research before they buy. They search Google, ask questions, browse social media and compare businesses on Maps. Clear information and a credible digital presence help them understand your offer and decide whether to contact you.
            </p>
          </div>
          <ul className="space-y-4">
            {pillar.benefits.map((b: string) => (
              <li key={b} className="flex items-start gap-3 border-b border-border py-5">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-foreground font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our process</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              A clear plan from your goal to the next improvement
            </h2>
            <p className="mt-4 text-foreground/75 leading-relaxed">
              Understand the goal, agree the plan, put it to work and use the results to improve.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div key={step.title} className="border-t border-border py-6">
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

      
      {services.length > 0 && (
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Services for your needs</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
                {pillar.title} services we deliver
              </h2>
              <p className="mt-3 text-foreground/75 max-w-2xl">
                Choose the service that fits your audience and the result you need to improve.
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

      <section className="bg-muted/50"><div className="mx-auto max-w-7xl px-6 py-16"><h2 className="font-display text-3xl font-semibold">For Nairobi, Kenya and clients beyond Kenya</h2><p className="mt-4 max-w-2xl leading-relaxed">Your audience, market and business goals shape the work. Tell us where you want to reach customers and what your current digital presence needs to improve.</p><div className="mt-6"><WhatsAppCta label={`Talk to us about ${pillar.title.toLowerCase()}`} topic={pillar.title} /></div></div></section>

      
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Who this is for</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              For businesses ready to improve how customers find and choose them
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Founders ready to scale", d: "You've proven product market fit and need a marketing plan that grows past your personal network." },
              { t: "Service businesses", d: "Coaches, clinics, lawyers, consultants, contractors who live or die by relevant enquiries." },
              { t: "E commerce brands", d: "Kenyan online stores chasing profitable advertising, not vanity traffic." },
              { t: "Real estate firms", d: "Agencies and developers competing for property buyers across Nairobi and the diaspora." },
              { t: "Hospitality & F&B", d: "Restaurants, lodges, and venues that need Maps, reviews, and reels working in sync." },
              { t: "Established brands", d: "Companies whose existing marketing has plateaued and needs a clearer plan for the next stage of growth." },
            ].map((x) => (
              <div key={x.t} className="border-t border-border py-6">
                <h3 className="font-display text-lg text-foreground font-semibold">{x.t}</h3>
                <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Frequently asked</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
            Questions Kenyan owners ask before they hire us
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <details key={f.q} className="group border-b border-border py-5">
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

      
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-balance font-semibold">
            Ready to grow with {pillar.title.toLowerCase()}?
          </h2>
          <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto text-lg">
            Free 30 minute strategy session. We review what is holding growth back and outline the next priorities, whether you hire us or not.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary-foreground text-primary px-7 py-3.5 text-sm font-semibold hover:opacity-95 shadow-elegant transition">
              Talk about your goals <ArrowRight className="h-4 w-4" />
            </a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-secondary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-95 transition">
              Discuss this service
            </a>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:bg-primary-foreground/10 transition">
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
