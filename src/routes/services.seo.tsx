import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone, MessageCircle, TrendingUp, Quote, Zap, Target, Search, Bot } from "lucide-react";
import { Layout } from "@/components/Layout";
import { QuickActions } from "@/components/QuickActions";
import { CONTACT, SUB_SERVICES } from "@/lib/services-data";

const SITE_URL = "https://growth-bridge-forge.lovable.app";
const WA_URL = `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(
  "Hi CapitalworkCreations, I'd like to book an SEO & GEO Visibility Audit.",
)}`;

const PRINCETON_LIFTS = [
  {
    icon: TrendingUp,
    pct: "+40%",
    title: "Quantitative Statistics",
    body: "Embedding hard numbers, verified data points, and metrics is the single highest-impact GEO lever — LLMs are tuned to surface dense, specific data over generic claims.",
  },
  {
    icon: Quote,
    pct: "+37.5%",
    title: "Citation & Expert Quotes",
    body: "Inline references and direct quotations from credentialed experts get extracted and re-cited inside ChatGPT, Perplexity & Google AI Overviews answers.",
  },
  {
    icon: Zap,
    pct: "+28%",
    title: "Direct Answering (Inverted Pyramid)",
    body: "Leading with a one-sentence answer above the fold dramatically increases the odds an LLM lifts your text verbatim into its synthesised response.",
  },
];

const MATRIX = [
  { v: "Primary Objective", seo: "Rank a URL on page one of Google.", geo: "Get cited inline inside AI-generated answers." },
  { v: "Target Infrastructure", seo: "Crawlers (Googlebot) & inverted indexes.", geo: "LLMs, scrapers & embedding layers." },
  { v: "Core Metric", seo: "Click-through rate & keyword position.", geo: "Share of Voice & citation recall %." },
  { v: "Content Priority", seo: "Search intent & technical formatting.", geo: "Factual density, numbers, direct quotes." },
  { v: "User Interaction", seo: "Click → read full page.", geo: "Zero-click — instant synthesised answer." },
  { v: "Site Performance", seo: "Core Web Vitals & load times.", geo: "Ungated, clean access for model scraping." },
];

const FAILURES = [
  "Persuasive marketing language — filtered out by LLMs as fluff.",
  "Keyword stuffing — LLMs use embeddings, not raw counts. Near-zero lift.",
  "Heavy client-side JavaScript — bots may drop the page during initial crawl.",
  "Burying answers below the fold — 44% of AI citations come from the first third of a page.",
];

const MODULES = [
  {
    icon: Search,
    title: "Technical SEO Foundation",
    bullets: [
      "Core Web Vitals: LCP under 2.5s, server-side rendering, hydration cleanup.",
      "Log-file analysis, crawl-budget recovery, canonical & robots.txt fixes.",
      "Schema markup (Organization, LocalBusiness, Service, FAQ, Breadcrumb).",
    ],
  },
  {
    icon: Bot,
    title: "GEO — Generative Engine Optimization",
    bullets: [
      "Rewriting key pages in inverted-pyramid format — answer first, evidence second.",
      "Injecting statistics, expert quotations & cited sources to trigger LLM extraction.",
      "Entity-graph & vector-space mapping for ChatGPT, Perplexity & Google AI Overviews.",
    ],
  },
  {
    icon: Target,
    title: "Conversion & Attribution",
    bullets: [
      "GA4 event modelling, server-side GTM, consent-mode v2 setup.",
      "Lead-to-revenue pipelines wired into your WhatsApp, CRM & call tracking.",
      "Monthly Share-of-Voice + citation-recall reporting against named competitors.",
    ],
  },
];

const FAQS = [
  {
    q: "What is the fundamental difference between SEO and GEO?",
    a: "SEO optimises a webpage to rank as a blue link on Google. GEO structures the same content so Large Language Models (ChatGPT, Perplexity, Google AI Overviews) lift it verbatim into their synthesised answers. SEO targets the query; GEO targets the underlying semantic context.",
  },
  {
    q: "Do SEO and GEO conflict with each other?",
    a: "No — there is roughly 90–95% tactical overlap. Generative engines do not crawl the live web from scratch; they pull from traditional search indexes first. If your site cannot rank in Google, it will never enter an LLM's context window. SEO is the foundation GEO is built on.",
  },
  {
    q: "Which optimization gives the biggest visibility lift?",
    a: "Per the Princeton GEO benchmark, adding quantitative statistics drives a 40–41% visibility increase inside generative engines — the single highest lever. Direct expert quotations add another 27–28%.",
  },
  {
    q: "Does keyword stuffing still work?",
    a: "No. LLMs convert content into mathematical embeddings that weight overall context, not keyword counts. Persuasive marketing buzzwords also showed near-zero impact in controlled tests.",
  },
  {
    q: "How quickly will we see results in Kitengela & Nairobi?",
    a: "Technical-SEO wins (speed, crawlability, local schema) typically lift Google Business Profile and map-pack visibility within 30–45 days. GEO citations inside ChatGPT and Perplexity usually begin appearing 6–10 weeks after the first content rewrites are indexed.",
  },
  {
    q: "Can a small Kenyan business out-rank big brands using GEO?",
    a: "Yes — and this is the underdog advantage. Princeton's data shows GEO formatting gives the largest visibility boost to pages ranking lower in traditional search. A well-formatted page at position #7 routinely steals the AI Overview citation from a generic #1.",
  },
  {
    q: "What is included in the structural audit?",
    a: "A manual review of your server logs, Core Web Vitals, schema coverage, content-format readiness for LLM extraction, competitor citation gap, and a prioritised 90-day roadmap mapped to your revenue goals — not vanity rankings.",
  },
  {
    q: "Where are you based and do you meet clients in person?",
    a: "Our hub is in Kitengela, Kajiado County — minutes from the Nairobi Expressway. We service businesses across Nairobi, Kajiado, Machakos and the wider Kenyan market, and you are welcome to book an in-person session at our Kitengela office.",
  },
];

const TITLE = "SEO & GEO Optimization Services in Kitengela, Nairobi - Kenya | CapitalworkCreations";
const DESCRIPTION = "Rank #1 on Google AND get cited inside ChatGPT, Perplexity & Google AI Overviews. CapitalworkCreations delivers technical SEO + Generative Engine Optimization for businesses in Kitengela, Nairobi & across Kenya. Book a free visibility audit.";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "SEO services Kitengela, SEO agency Nairobi, GEO optimization Kenya, generative engine optimization, AI SEO Kenya, ChatGPT SEO, Perplexity citations, Google AI Overviews, technical SEO audit Nairobi, schema markup Kenya, Kajiado County SEO",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${SITE_URL}/services/seo` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services/seo` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${SITE_URL}/services/seo#service`,
              name: "SEO & GEO Optimization",
              description: DESCRIPTION,
              provider: {
                "@type": "LocalBusiness",
                "@id": `${SITE_URL}#org`,
                name: CONTACT.company,
                url: SITE_URL,
                telephone: CONTACT.phone,
                email: CONTACT.email,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kitengela",
                  addressRegion: "Kajiado County",
                  addressCountry: "KE",
                },
                areaServed: ["Kitengela", "Nairobi", "Kajiado County", "Kenya"],
              },
              serviceType: "Search Engine Optimization & Generative Engine Optimization",
              areaServed: [
                { "@type": "AdministrativeArea", name: "Kitengela" },
                { "@type": "AdministrativeArea", name: "Nairobi" },
                { "@type": "AdministrativeArea", name: "Kajiado County" },
                { "@type": "Country", name: "Kenya" },
              ],
              offers: {
                "@type": "Offer",
                url: `${SITE_URL}/services/seo`,
                availability: "https://schema.org/InStock",
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/services/seo#faq`,
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: "SEO & GEO Optimization", item: `${SITE_URL}/services/seo` },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: SeoGeoPage,
});

function SeoGeoPage() {
  const relatedServices = SUB_SERVICES.filter((s) => s.pillar === "seo");

  return (
    <Layout>
      {/* HERO — direct answer above the fold (GEO-optimized) */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-white/80 hover:text-white font-semibold">
            ← All Services
          </Link>
          <span className="mt-6 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            SEO + GEO · Kitengela · Nairobi · Kenya
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-tight text-balance">
            Rank #1 on Google. Get cited inside ChatGPT, Perplexity &amp; Google AI Overviews.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-3xl">
            CapitalworkCreations engineers your website to win both battles at once — traditional
            search rankings <strong>and</strong> the new generative-AI citation layer that already
            drives 40%+ of high-intent buyer questions in Kenya.
          </p>

          {/* Hard stats — factual density for GEO extraction */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
            {[
              { n: "+40%", l: "visibility lift from adding statistics (Princeton GEO study)" },
              { n: "44%", l: "of AI citations come from the first third of a page" },
              { n: "90–95%", l: "tactical overlap between SEO and GEO foundations" },
            ].map((s) => (
              <div key={s.n} className="rounded-xl bg-white/10 border border-white/20 p-4">
                <div className="font-display text-3xl font-bold">{s.n}</div>
                <div className="mt-1 text-xs text-white/80 leading-snug">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 max-w-2xl">
            <QuickActions variant="dark" label="Already know us? Skip the read — act now:" />
          </div>
        </div>
      </section>

      {/* THE SHIFT — what's actually happening */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">The Shift</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
                Your customers stopped clicking. They started asking.
              </h2>
              <p className="mt-5 text-foreground/80 leading-relaxed">
                When a Nairobi buyer now types <em>"best web designer in Kitengela"</em>, the answer
                no longer arrives as ten blue links. It arrives as one synthesised paragraph from
                Google AI Overviews, ChatGPT, or Perplexity — citing 2 to 4 brands inline.
              </p>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                If your brand is not one of those 2 to 4 citations, you do not exist for that query.
                Ranking #1 in the old SERP no longer guarantees the click — but being <strong>cited</strong>{" "}
                inside the AI answer does.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-muted p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold">The new buyer flow</div>
              <ol className="mt-5 space-y-4">
                {[
                  "User asks a question (voice, ChatGPT, Google AI Overview).",
                  "AI breaks it into sub-queries and fetches top documents.",
                  "An LLM summarises everything into one blended answer.",
                  "Only 2–4 sources get cited inline. The rest get zero traffic.",
                ].map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="h-7 w-7 shrink-0 rounded-full bg-primary text-primary-foreground font-bold text-sm flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-foreground/85 leading-relaxed pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCETON LIFTS — factual density */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What actually moves the needle</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold max-w-3xl">
            The 3 GEO levers Princeton proved actually work
          </h2>
          <p className="mt-4 text-foreground/80 max-w-3xl">
            Princeton, Georgia Tech & IIT Delhi tested every popular content tactic against generative
            engines. Most marketing advice failed. These three did not.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PRINCETON_LIFTS.map((l) => (
              <div key={l.title} className="rounded-2xl bg-background p-7 border border-primary/15">
                <div className="flex items-center justify-between">
                  <l.icon className="h-7 w-7 text-primary" />
                  <span className="font-display text-2xl font-bold text-primary">{l.pct}</span>
                </div>
                <h3 className="mt-4 font-display text-xl text-foreground font-semibold">{l.title}</h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-destructive/30 bg-background p-7">
            <h3 className="font-display text-xl text-foreground font-semibold">
              What we will <em>not</em> do for you (because Princeton proved it fails):
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {FAILURES.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-foreground/85">
                  <span className="text-destructive font-bold">✗</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MATRIX — SEO vs GEO */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">The Strategic Matrix</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold max-w-3xl">
            Traditional SEO vs Modern GEO — and why you need both
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-primary/15">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-5 py-4 font-bold">Vector</th>
                  <th className="px-5 py-4 font-bold">Traditional SEO</th>
                  <th className="px-5 py-4 font-bold">Modern GEO</th>
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((r, i) => (
                  <tr key={r.v} className={i % 2 === 0 ? "bg-background" : "bg-muted"}>
                    <td className="px-5 py-4 font-semibold text-foreground">{r.v}</td>
                    <td className="px-5 py-4 text-foreground/80">{r.seo}</td>
                    <td className="px-5 py-4 text-foreground/80">{r.geo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-foreground/70 italic">
            Conclusion: SEO is the foundation. GEO is the multiplier. You cannot get cited by an LLM
            if Google cannot find you first.
          </p>
        </div>
      </section>

      {/* WHAT WE ACTUALLY DO */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Engagement</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold max-w-3xl">
            The 3-track engagement — built to convert, not to impress
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {MODULES.map((m, i) => (
              <article key={m.title} className="bg-background rounded-2xl p-7 border border-primary/15 flex flex-col">
                <m.icon className="h-8 w-8 text-primary" />
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-primary font-bold">Track {i + 1}</div>
                <h3 className="mt-1 font-display text-xl text-foreground font-semibold">{m.title}</h3>
                <ul className="mt-5 space-y-3">
                  {m.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROXIMITY & AUTHORITY (template Section 4) */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">
            Local Proximity &amp; Authority
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold max-w-3xl">
            Why a Kitengela-based agency wins your Nairobi search results
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "📍",
                title: "Strategic Regional Proximity",
                body: "We are based in the commercial heart of Kitengela — minutes from the Nairobi Expressway. We serve Kajiado County, Nairobi County, Machakos and the wider Kenyan market without inflating retainers with daily CBD logistics.",
              },
              {
                icon: "🏆",
                title: "Documented Technical Authority",
                body: "Engagements are delivered by active SEO engineers, schema specialists and content strategists who ship production code — not theorists. Every recommendation maps to a tracked KPI in your dashboard.",
              },
              {
                icon: "💼",
                title: "Direct Local Business Networks",
                body: "We hold working relationships with Kitengela and Nairobi business associations, suppliers and chambers — accelerating your transition from a fresh audit to live, paying customer traction.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white/10 rounded-2xl p-7 border border-white/15">
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-3 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-3 text-white/85 leading-relaxed text-sm">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Direct Answers</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
            SEO &amp; GEO: the questions Kenyan founders actually ask us
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group bg-muted rounded-xl border border-primary/15 p-5">
                <summary className="cursor-pointer font-display text-lg text-foreground font-semibold list-none flex items-start gap-3">
                  <span className="text-primary font-bold">{String(i + 1).padStart(2, "0")}.</span>
                  <span className="flex-1">{f.q}</span>
                </summary>
                <p className="mt-3 pl-9 text-foreground/80 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SUB-SERVICES */}
      {relatedServices.length > 0 && (
        <section className="bg-muted">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-display text-3xl text-foreground font-semibold">
              Industry-specific SEO &amp; GEO tracks
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$pillar/$service"
                  params={{ pillar: "seo", service: s.slug }}
                  className="group bg-background rounded-xl p-6 border border-primary/15 hover:border-primary hover:shadow-soft transition flex flex-col gap-3"
                >
                  <h3 className="font-display text-lg text-foreground font-semibold leading-snug">{s.title}</h3>
                  <p className="text-sm text-foreground/75">{s.tagline}</p>
                  <span className="text-sm text-primary font-semibold mt-auto pt-2">Read more →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CONVERSION TERMINAL (template Section 5) */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Intake Open</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold text-balance">
            Book your free SEO &amp; GEO Visibility Audit
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Audit slots are capped each month so every engagement gets senior, one-on-one attention.
            You leave the call with a prioritised 90-day roadmap — whether you hire us or not.
          </p>
          <ul className="mt-8 max-w-2xl mx-auto text-left space-y-3">
            {[
              "Step 1 — Pick a 30-minute slot on the live calendar (or message us directly on WhatsApp).",
              "Step 2 — Receive your custom audit deck: technical SEO gaps, GEO citation gaps, competitor cite-share, and the exact next 90 days.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 bg-muted rounded-xl p-4 border border-primary/10">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-foreground font-medium">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-95 shadow-elegant transition"
            >
              Book Free Audit <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-[#25D366] text-white px-7 py-3.5 text-sm font-bold hover:bg-[#1ebe5a] transition"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp an SEO Specialist
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="inline-flex items-center gap-2 rounded-md border-2 border-primary bg-background text-primary px-7 py-3.5 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition"
            >
              <Phone className="h-4 w-4" /> Call {CONTACT.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-foreground/70 inline-flex items-center gap-2 justify-center">
            <MapPin className="h-4 w-4 text-primary" /> {CONTACT.location} · Servicing {CONTACT.serviceArea}
          </p>
        </div>
      </section>
    </Layout>
  );
}
