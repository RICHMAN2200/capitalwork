import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PILLARS, CONTACT } from "@/lib/services-data";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/MotionPrimitives";
import { HeroSystem, HeroSystemMobile, BeforeAfter } from "@/components/home/Visuals";
import { GrowthGap } from "@/components/home/GrowthGap";
import { ProcessPath } from "@/components/home/ProcessPath";
import { SECTORS } from "@/lib/sectors";
import { LeadCapture } from "@/components/LeadCapture";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CapitalworkCreations | Digital Growth Systems in Nairobi and Kenya" },
      { name: "description", content: "Turn your growth goals into a connected digital system. SEO, websites, content, social, ads and lead capture built to attract customers, funders and opportunities across Nairobi and Kenya." },
      { name: "keywords", content: "digital marketing agency Kenya, marketing agency Nairobi, web design Nairobi, SEO Kenya, Google Ads Kenya, digital growth system" },
      { property: "og:title", content: "CapitalworkCreations | Turn growth goals into connected digital systems" },
      { property: "og:description", content: "Find your growth gap and build the digital system that closes it. Serving Nairobi and all of Kenya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "CapitalworkCreations",
          description: "Digital marketing and web design agency serving Nairobi and Kenya.",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          address: { "@type": "PostalAddress", addressLocality: "Kitengela", addressRegion: "Kajiado", addressCountry: "KE" },
          areaServed: ["Nairobi", "Kenya"],
        }),
      },
    ],
  }),
  component: Home,
});

const btnPrimary = "group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-elegant transition hover:bg-foreground";
const btnGhost = "inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground";
const eyebrow = "text-xs uppercase tracking-[0.25em] text-primary font-bold";

const quoteHref = (tier: string) =>
  `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(`Hello CapitalworkCreations, I would like a quote for the ${tier} growth system.`)}`;

const TIERS = [
  {
    level: 1 as const, name: "Foundation", h: "Build the digital foundation your growth needs.",
    who: "For businesses and organisations starting online, rebuilding their digital presence or unsure where to start.",
    includes: ["Website setup and optimisation", "Technical SEO", "Google visibility setup", "Google Business Profile setup or optimisation", "Brand setup and optimisation", "Social media setup and optimisation", "Conversion setup", "Lead capture setup", "Analytics and tracking setup"],
    outcome: "A connected digital foundation designed to attract attention, capture enquiries and give you a measurable starting point.",
    cta: "Request a Quote",
  },
  {
    level: 2 as const, name: "Growth", h: "Turn your digital presence into an acquisition system.",
    who: "For businesses and organisations with an existing digital foundation that need more qualified traffic, enquiries, customers, projects or opportunities.",
    includes: ["Technical and ongoing SEO", "Google Business Profile growth and maintenance", "Content strategy and ongoing content", "Social media maintenance and growth", "Search and paid advertising campaigns", "Landing pages and conversion improvements", "Lead capture and enquiry systems", "Performance tracking and reporting"],
    outcome: "A connected acquisition and conversion system designed to increase qualified traffic, enquiries and opportunities.",
    cta: "Request a Personalised Quote",
  },
  {
    level: 3 as const, name: "Dominate", h: "Get more from every part of your digital growth system.",
    who: "For organisations with established digital activity, meaningful growth targets and the resources to scale.",
    includes: ["Advanced technical SEO", "Advanced search optimisation", "Full funnel content strategy", "Paid acquisition campaigns", "Conversion rate optimisation", "Customer acquisition cost optimisation", "Lead journey optimisation", "Advanced tracking and attribution", "Performance analysis and optimisation", "Continuous testing and optimisation"],
    outcome: "A continuously optimised digital growth system designed to increase acquisition, improve conversion and get more from your existing investment.",
    cta: "Request a Quote",
  },
];

const RESULTS = [
  { client: "Nadraslife Coaching", category: "SEO + Digital Presence", metric: "Top 2", label: "Google rankings" },
  { client: "Nairobi South Institute", category: "GBP + SEO", metric: "#1", label: "Technical institute searches" },
  { client: "Manasseh (Restaurant)", category: "Web + Social", metric: "5★", label: "Client verified" },
  { client: "Kenyan Real Estate Group", category: "GBP + GEO", metric: "+412%", label: "Qualified leads in 90 days" },
  { client: "Artisan E commerce", category: "Social Ads + Web", metric: "5.4×", label: "ROAS across paid channels" },
  { client: "Hospitality Group", category: "Authority Infra", metric: "#1", label: "For all primary city queries" },
];

function Home() {
  return (
    <Layout>
      {/* 1. HERO: living system map */}
      <section className="relative overflow-hidden bg-muted/60 border-b border-primary/10">
                <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={eyebrow}>
              Digital growth systems · Nairobi and Kenya
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.04] text-foreground text-balance"
            >
              Turn your growth goals into a digital system that delivers.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 text-lg md:text-xl text-foreground/85 max-w-xl leading-relaxed"
            >
              Build and connect the digital systems your business or organisation needs to attract customers, funders and the support you need to grow.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-wrap gap-3">
              <Link to="/audit" className={btnPrimary}>
                Find Your Growth Gap <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#growth-systems" className={btnGhost}>Explore Growth Solutions</a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 max-w-xl space-y-2 border-l-2 border-primary/30 pl-5 text-sm md:text-base text-foreground/80">
              <p>Most businesses and organisations have gaps between being visible, engaging the right people and converting attention into real opportunities.</p>
              <p>The challenge is knowing where the gap is, what needs to change and where to invest next.</p>
              <p className="font-semibold text-foreground">The organisations that connect their digital activity to a clear growth goal know what needs to happen next.</p>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
            className="rounded-3xl border border-primary/15 bg-background/80 p-5 md:p-8 shadow-soft backdrop-blur">
            <div className="hidden sm:block"><HeroSystem /></div>
            <div className="sm:hidden"><HeroSystemMobile /></div>
          </motion.div>
        </div>
      </section>

      {/* 2. GROWTH GAP: diagnostic pathway */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal className="grid lg:grid-cols-2 gap-10 mb-14">
            <div>
              <span className={eyebrow}>The growth gap</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground text-balance">
                Good businesses can still lose growth through the gaps in their digital system.
              </h2>
            </div>
            <div className="text-lg text-foreground/80 lg:pt-10">
              <p>Your business or organisation already has something valuable to offer. You have the expertise, you have the service and you have the ambition to grow. But somewhere between being found, building interest and getting people to take action, the digital system can fail to turn attention into real opportunities.</p>
            </div>
          </Reveal>
          <Reveal><GrowthGap /></Reveal>
          <Reveal className="mt-12 flex flex-wrap items-center gap-4">
            <p className="font-display text-2xl font-semibold text-foreground mr-2">Not sure where your gap is?</p>
            <Link to="/audit" className={btnPrimary}>Find Your Growth Gap <ArrowRight className="h-4 w-4" /></Link>
            <a href="#growth-systems" className={btnGhost}>Explore Growth Solutions</a>
          </Reveal>
        </div>
      </section>

      {/* 4. GROWTH SYSTEMS: levels of maturity */}
      <section id="growth-systems" className="bg-muted/50 border-y border-primary/10 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal className="max-w-2xl mb-14">
            <span className={eyebrow}>Growth systems</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-semibold text-foreground">Start where the gap is.</h2>
            <p className="mt-5 text-lg text-foreground/80">You do not need every digital service. You need the right system for where your business or organisation is now and where you need it to go.</p>
          </Reveal>
          
          <div className="grid lg:grid-cols-3 gap-6 lg:items-stretch">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <article className={`flex flex-col rounded-3xl p-7 md:p-8 ${t.level === 3 ? "bg-primary text-primary-foreground shadow-elegant" : t.level === 2 ? "bg-muted text-foreground border-2 border-primary/30" : "bg-background text-foreground border border-primary/20"}`}
                  >
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold tracking-[0.3em] opacity-70">LEVEL 0{t.level}</span>
                    <span className="flex gap-1" aria-hidden>{[1,2,3].map((d) => <span key={d} className={`h-1.5 w-6 rounded-full ${d <= t.level ? "bg-current" : "bg-current opacity-20"}`} />)}</span>
                  </div>
                  <p className="mt-8 font-display text-5xl md:text-6xl font-bold leading-none">{t.name}</p>
                  <span className="my-6 block h-px w-full bg-current opacity-15" />
                  <h3 className="font-display text-2xl font-semibold leading-snug">{t.h}</h3>
                  <p className="mt-3 text-sm opacity-85">{t.who}</p>
                  <ul className="mt-5 space-y-1.5 text-sm">
                    {t.includes.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 mt-0.5 shrink-0 opacity-80" />{x}</li>)}
                  </ul>
                  <p className="mt-5 text-sm font-semibold">{t.outcome}</p>
                  <div className="mt-auto pt-6">
                    <p className="text-xs uppercase tracking-widest opacity-70">Investment</p>
                    <p className="text-sm font-semibold">Based on scope and requirements</p>
                    <a href={quoteHref(t.name)} target="_blank" rel="noopener noreferrer"
                      className={`mt-4 inline-flex w-full justify-center items-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition ${t.level === 3 ? "bg-primary-foreground text-primary hover:opacity-90" : "bg-primary text-primary-foreground hover:bg-foreground"}`}>
                      {t.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-16">
            <span className={eyebrow}>Growth systems by sector</span>
            <div className="mt-5 grid md:grid-cols-3 gap-px bg-primary/15 rounded-2xl overflow-hidden border border-primary/15">
              {SECTORS.map((x) => (
                <Link key={x.slug} to="/marketing/$sector" params={{ sector: x.slug }} className="group bg-background p-7 hover:bg-primary hover:text-primary-foreground transition text-foreground">
                  <div className="flex items-center justify-between text-xs font-bold tracking-[0.25em] opacity-70"><span>{x.tag}</span><ArrowUpRight className="h-4 w-4" /></div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{x.title}</h3>
                  <p className="mt-2 text-sm opacity-80">{x.line}</p>
                </Link>
              ))}
            </div>
          </div>
          <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 p-6">
            <div>
              <p className="font-display text-2xl font-semibold text-foreground">Need something more specific?</p>
              <p className="text-foreground/80">Explore the individual digital services available across the growth system.</p>
            </div>
            <Link to="/services" className={btnGhost}>View Individual Services <ArrowUpRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* 5. PROCESS: progression */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-system-grid-dark" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-16">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <span className="text-xs uppercase tracking-[0.25em] font-bold opacity-80">The next step</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-balance">Start with the goal. Find the gap. Build towards it.</h2>
            <p className="mt-6 text-lg opacity-90 max-w-md">Most clients do not start knowing exactly where to invest.</p>
            <div className="mt-10 rounded-2xl border border-primary-foreground/25 p-6 max-w-md">
              <p className="opacity-90">Get a clear view of where your digital system is leaking growth and what needs attention next.</p>
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3.5 text-sm font-bold text-primary hover:opacity-90 transition">
                Book Your Free Performance Audit <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <ProcessPath />
        </div>
      </section>

      {/* 6. SERVICES: components of the system (quiet) */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div className="max-w-xl">
              <span className={eyebrow}>Digital services</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">Digital capabilities for every stage of growth.</h2>
            </div>
            <p className="max-w-md text-foreground/80">Explore the individual services that can build, strengthen and scale your digital growth system.</p>
          </Reveal>
          <StaggerGroup className="grid gap-px bg-primary/15 rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3 border border-primary/15" stagger={0.04}>
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.slug}>
                  <Link to={p.slug === "seo" ? "/services/seo" : "/services/$pillar"} params={{ pillar: p.slug }}
                    className="group relative bg-background hover:bg-muted p-6 flex items-center gap-4 transition h-full">
                    <span className="text-[10px] font-bold tracking-widest text-foreground/50 w-8">C{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-10 w-10 rounded-full border border-primary/30 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition shrink-0">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block font-display text-base font-semibold text-foreground leading-tight">{p.title}</span>
                      <span className="block text-xs text-foreground/70 mt-0.5">{p.short}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-primary opacity-50 group-hover:opacity-100 transition shrink-0" />
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* 7. WHY CWC: disconnected vs connected */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <Reveal className="grid lg:grid-cols-2 gap-10 mb-12">
            <div>
              <span className={eyebrow}>Why clients choose us</span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold text-foreground text-balance">Your growth goal should determine the work, not the other way around.</h2>
            </div>
            <div className="text-foreground/85 space-y-3 lg:pt-10">
              <p className="font-display text-xl text-foreground">A website gets built. Content gets created. Advertising starts. SEO gets added.</p>
              <p>Each activity can make sense on its own.</p>
              <p>But when those activities are not connected to the same objective, investment can produce activity without moving the organisation closer to its goal.</p>
            </div>
          </Reveal>
          <Reveal><BeforeAfter /></Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Goal first.", d: "The growth objective comes before the service." },
              { n: "02", t: "Connected systems.", d: "The website, search, content, advertising, lead capture and conversion journey work toward the same objective." },
              { n: "03", t: "Ownership.", d: "The focus stays on what needs to move the objective forward, not simply on completing individual tasks." },
            ].map((p) => (
              <Reveal key={p.n} className="border-t-2 border-primary pt-5">
                <div className="text-xs font-bold tracking-[0.25em] text-primary">PRINCIPLE {p.n}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{p.t}</h3>
                <p className="mt-2 text-foreground/80">{p.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 grid lg:grid-cols-[1fr_auto] gap-8 items-center rounded-2xl bg-background p-8">
            <div>
              <div className="text-xs font-bold tracking-[0.25em] text-primary">THE RESULT</div>
              <p className="mt-2 font-display text-2xl text-foreground">Clearer priorities. Better use of digital investment. Connected execution. Measurable progress.</p>
              <p className="mt-4 text-foreground/80 max-w-2xl">If you are unsure where to start or where your next investment should go, a performance audit gives you a clear place to begin.</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/audit" className={btnPrimary}>Start With Your Growth Goal <ArrowRight className="h-4 w-4" /></Link>
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className={btnGhost}>Book Your Free Performance Audit</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. OUTCOMES AND PROOF (existing content preserved) */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div className="max-w-xl">
              <span className={eyebrow}>Proof, not promises</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground font-semibold">Outcomes we've delivered.</h2>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              See all case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {RESULTS.map((s) => (
              <StaggerItem key={s.client}>
                <article className="group bg-muted rounded-2xl p-7 hover:bg-primary hover:text-primary-foreground transition h-full text-foreground">
                  <div className="flex justify-between items-start">
                    <span className="text-xs uppercase tracking-wider opacity-70 font-semibold">{s.category}</span>
                    <TrendingUp className="h-5 w-5 opacity-60 group-hover:opacity-100 transition" />
                  </div>
                  <div className="mt-8 font-display text-4xl md:text-5xl font-bold">{s.metric}</div>
                  <p className="mt-2 text-sm opacity-75">{s.label}</p>
                  <h3 className="mt-6 font-display text-lg font-semibold">{s.client}</h3>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* 9. FINAL CTA: the pathway comes together */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
                <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-28 text-center">
          <ol className="mx-auto mb-14 flex flex-col md:flex-row items-center justify-center gap-0">
            {["Your growth goal", "Your digital system", "Your next opportunity"].map((s, i, arr) => (
              <li key={s} className="flex flex-col md:flex-row items-center">
                <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.2em] uppercase ${i === arr.length - 1 ? "bg-primary-foreground text-primary" : "border border-primary-foreground/50"}`}>{s}</motion.span>
                {i < arr.length - 1 && <span className="h-6 w-px md:h-px md:w-16 bg-primary-foreground/50" />}
              </li>
            ))}
          </ol>
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-balance">Your competitors are compounding. Are you?</h2>
            <p className="mt-6 text-lg opacity-90 max-w-xl mx-auto">Book a free performance audit to find exactly where you are leaking growth and what to do about it.</p>
            <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary-foreground px-7 py-4 text-sm font-bold text-primary hover:opacity-90 transition shadow-elegant">
              Book Your Free Performance Audit <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-8 opacity-80">Already know what you need?</p>
            <a href="#growth-systems" className="mt-2 inline-flex items-center gap-2 font-bold underline underline-offset-4">Explore Growth Solutions</a>
          </Reveal>
        </div>
      </section>
      <LeadCapture />
    </Layout>
  );
}
