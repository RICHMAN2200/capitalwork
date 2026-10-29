import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, MapPin, Phone, MessageCircle, TrendingUp, Quote, Zap, Target, Search, Bot } from "lucide-react";
import { Layout } from "@/components/Layout";
import { WhatsAppCta } from "@/components/ServiceElements";
import { QuickActions } from "@/components/QuickActions";
import { CONTACT, SUB_SERVICES } from "@/lib/services-data";

const SITE_URL = "https://growth-bridge-forge.lovable.app";
const WA_URL = `https://wa.me/${CONTACT.phoneDigits}?text=${encodeURIComponent(
  "Hi CapitalworkCreations, I'd like to book an SEO & GEO Visibility Audit.",
)}`;

const CONTENT_PRIORITIES = [
  { icon: TrendingUp, title: "Useful, accurate information", body: "Give customers clear details about your services, prices where available and the questions they need answered. Use verified facts rather than vague claims." },
  { icon: Quote, title: "Evidence customers can trust", body: "Show genuine experience, relevant customer feedback and accurate business information so people can understand why your business is worth considering." },
  { icon: Zap, title: "Clear answers first", body: "Put the answer near the start of the page, then explain it. This helps visitors find what they need and helps search tools understand your content." },
];
const MATRIX = [
  { v: "Purpose", seo: "Help your pages appear in relevant Google searches.", geo: "Help your business information be understood in AI search answers." },
  { v: "How people find you", seo: "Search results and local map listings.", geo: "Answers from ChatGPT, Perplexity and Google AI Overviews." },
  { v: "What we review", seo: "Search visibility, website visits and enquiries.", geo: "Relevant mentions and links to your business in AI answers." },
  { v: "Content", seo: "Useful pages that match what customers are searching for.", geo: "Clear answers supported by accurate, trustworthy information." },
  { v: "Website access", seo: "Pages search engines can find, understand and load quickly.", geo: "Accessible business information that AI search tools can interpret." },
];
const FAILURES = [
  "Repeating keywords instead of answering the customer's question.",
  "Making claims that cannot be supported by your actual work.",
  "Leaving important pages difficult for search tools to access.",
  "Hiding useful answers beneath lengthy promotional copy.",
];

const MODULES = [
  {
    icon: Search,
    title: "Website & Search Foundations",
    bullets: [
      "Review page speed, loading stability and the way important content is delivered so visitors and search engines can access it.",
      "Review crawl activity, duplicate page signals and search access settings to identify pages that search engines may miss.",
      "Add structured details for your business, services and page navigation so search engines can understand them.",
    ],
  },
  {
    icon: Bot,
    title: "GEO: Clear Information for AI Search",
    bullets: [
      "Give important pages clear answers first, with useful detail and supporting evidence below.",
      "Present verified facts and relevant experience clearly, without adding unsupported claims.",
      "Review how your business, services and topics are described across your website and AI search results.",
    ],
  },
  {
    icon: Target,
    title: "Enquiries & Performance Tracking",
    bullets: [
      "Set up website analytics and consent aware tracking for important visitor actions.",
      "Connect relevant enquiry tracking to WhatsApp, customer records and calls where the project requires it.",
      "Review search visibility, relevant AI mentions and competitor activity alongside the enquiries your business receives.",
    ],
  },
];

const FAQS = [
  { q: "What is the difference between SEO and GEO?", a: "SEO helps customers find your pages through search results. GEO helps make your business information clear and useful to AI search tools such as ChatGPT, Perplexity and Google AI Overviews. Both depend on useful content and an accessible website." },
  { q: "Can SEO and GEO work together?", a: "Yes. Clear pages, accurate business information and useful content support both. SEO strengthens your search presence while GEO considers how that same information can be understood in AI answers." },
  { q: "What should I improve first?", a: "Start with the gaps in your current setup. That may mean fixing website access, improving important service pages, making business details consistent or giving customers clearer answers." },
  { q: "Does repeating keywords help?", a: "Repeating keywords unnecessarily makes a page harder to read. The focus should be on naturally explaining what you offer, who it is for and the questions customers need answered." },
  { q: "How quickly will we see results?", a: "Timing depends on your website, competition, search demand and the work required. Search rankings and AI mentions are not guaranteed. We agree priorities and review progress against your starting point." },
  { q: "Can a small business benefit from GEO?", a: "Yes. A small business can make its services, experience and answers easier to understand online. Clear, reliable information gives customers and search tools more useful material to work with, but does not guarantee a particular ranking or mention." },
  { q: "What is included in the audit?", a: "A review of website access, page speed, business information, structured page details, important content and competitor visibility. You get a prioritised view of the gaps that matter to your business goals." },
  { q: "Can you work with clients beyond Kenya?", a: "Yes. We support businesses in Nairobi, Kenya and clients beyond Kenya. Your audience, location and growth goals shape the work." },
];

const TITLE = "SEO & GEO Optimization Services in Nairobi & Kenya | CapitalworkCreations";
const DESCRIPTION = "Improve how customers find and understand your business through Google and AI search. SEO and GEO services for Nairobi, Kenya and clients beyond Kenya.";

export const Route = createFileRoute("/services/seo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "SEO services Nairobi, SEO agency Kenya, GEO optimization Kenya, generative engine optimization, AI SEO Kenya, ChatGPT SEO, Perplexity citations, Google AI Overviews, technical SEO audit Nairobi, schema markup Kenya",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
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
                  addressLocality: "Nairobi",
                  addressRegion: "Nairobi",
                  addressCountry: "KE",
                },
                areaServed: ["Nairobi", "Kenya"],
              },
              serviceType: "Search Engine Optimization & Generative Engine Optimization",
              areaServed: [
                { "@type": "AdministrativeArea", name: "Nairobi" },
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
      
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-20 md:pb-24">
          <Link to="/services" className="text-xs uppercase tracking-[0.2em] text-primary-foreground/80 hover:text-primary-foreground font-semibold">
            ← All Services
          </Link>
          <span className="mt-6 inline-block rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            SEO + GEO · Nairobi · Kenya
          </span>
          <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-tight text-balance">
            Help customers find you on Google and understand you in AI search.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-primary-foreground/90 max-w-3xl">
            Your website should answer the questions customers ask before they enquire. SEO improves your visibility in search results. GEO helps your information make sense in answers from ChatGPT, Perplexity and Google AI Overviews.
          </p>

          <div className="mt-10 max-w-2xl">
            <QuickActions variant="dark" label="Ready to talk about your visibility?" />
          </div>
        </div>
      </section>

      
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">The Shift</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
                Your customers search, compare and ask questions.
              </h2>
              <p className="mt-5 text-foreground/80 leading-relaxed">Customers may search Google, browse map results or ask AI tools when comparing services in Nairobi. Your business needs accurate information and useful answers wherever they look.</p>
              <p className="mt-4 text-foreground/80 leading-relaxed">Search results and AI answers can offer different routes to discovery. The goal is to make your services easy to find, understand and act on, rather than relying on a ranking alone.</p>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-muted p-7">
              <div className="text-xs uppercase tracking-[0.2em] text-primary font-bold">The new buyer flow</div>
              <ol className="mt-5 space-y-4">
                {[
                  "A customer asks about a service or business.",
                  "The search tool looks for relevant information.",
                  "The customer sees results or a summary to explore.",
                  "Clear information helps the customer decide what to explore next.",
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

      
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What actually moves the needle</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold max-w-3xl">
            What makes your content more useful to customers
          </h2>
          <p className="mt-4 text-foreground/80 max-w-3xl">
            Useful content answers real questions, supports its claims and gives visitors a clear next step.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {CONTENT_PRIORITIES.map((l) => (
              <div key={l.title} className="border-t border-border py-7">
                <div className="flex items-center justify-between">
                  <l.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-display text-xl text-foreground font-semibold">{l.title}</h3>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{l.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-destructive/30 bg-background p-7">
            <h3 className="font-display text-xl text-foreground font-semibold">
              What we recommend avoiding
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

      
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">How the services work together</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold max-w-3xl">
            SEO and GEO support different ways customers discover you
          </h2>
          <div className="mt-10 overflow-x-auto border-y border-border">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-5 py-4 font-bold">What matters</th>
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
            A useful, accessible website supports both. Neither service guarantees rankings or inclusion in AI answers.
          </p>
        </div>
      </section>

      
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Engagement</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold max-w-3xl">
            Three areas of work that support discovery and enquiries
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {MODULES.map((m, i) => (
              <article key={m.title} className="border-t border-border py-7 flex flex-col">
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

      <section className="bg-primary text-primary-foreground"><div className="mx-auto max-w-7xl px-6 py-16"><h2 className="max-w-3xl font-display text-3xl font-semibold">Search visibility for your audience and market</h2><p className="mt-5 max-w-3xl leading-relaxed">We work with businesses in Nairobi, Kenya and clients beyond Kenya. Your services, customers and target locations guide the search work, so the content stays relevant to the people you want to reach.</p><div className="mt-7"><WhatsAppCta label="Let's look at your current visibility" topic="SEO and GEO visibility" dark /></div></div></section>

      
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Direct Answers</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
            SEO &amp; GEO: the questions Kenyan founders actually ask us
          </h2>
          <div className="mt-10 space-y-4">
            {FAQS.map((f, i) => (
              <details key={f.q} className="group border-b border-border py-5">
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

      
      {relatedServices.length > 0 && (
        <section className="bg-muted">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <h2 className="font-display text-3xl text-foreground font-semibold">
              Industry specific SEO &amp; GEO tracks
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

      
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Intake Open</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold text-balance">
            Book your free SEO &amp; GEO Visibility Audit
          </h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Tell us what you offer, who you need to reach and what your current visibility looks like. We can discuss where your website and search presence need attention.
          </p>
          <ul className="mt-8 max-w-2xl mx-auto text-left space-y-3">
            {[
              "Share your website and the visibility goal you want to improve.",
              "Discuss the important search, content and enquiry gaps before deciding what work is needed.",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 border-b border-border py-4">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span className="text-foreground font-medium">{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground hover:opacity-95 shadow-elegant transition"
            >
              Talk to us about your SEO <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-secondary text-primary-foreground px-7 py-3.5 text-sm font-bold hover:bg-secondary/90 transition"
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
            <MapPin className="h-4 w-4 text-primary" /> Nairobi, Kenya and clients beyond Kenya
          </p>
        </div>
      </section>
    </Layout>
  );
}
