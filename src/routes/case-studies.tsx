import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowUpRight, Quote, Star, MapPin } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Results & Case Studies — CapitalworkCreations Kenya" },
      { name: "description", content: "Real results from Kenyan brands — life coaches, technical institutes, restaurants, and more — ranking #1 in Nairobi & Kenya with CapitalworkCreations." },
      { property: "og:title", content: "Results & Case Studies — CapitalworkCreations" },
      { property: "og:description", content: "Real growth outcomes for ambitious Kenyan brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Nadraslife Coaching" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody: "After months of looking for someone who would do it right, we landed on CapitalworkCreations. Now we're ranking top 2 in local and topical search for life coaches.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Nairobi South Institute" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody: "Very informative and helpful. Our brand is now ranking top in Kitengela and Nairobi when it comes to technical institutes. CapitalworkCreations are truly the people built for this job.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Manasseh — Restaurant Owner" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody: "I highly recommend CapitalWorkCreations to anyone looking for reliable, creative, and professional web design and social media graphics. Definitely a 5-star experience!",
            },
          ],
        }),
      },
    ],
  }),
  component: CaseStudies,
});

const FEATURED = [
  {
    client: "Nadraslife Coaching",
    category: "Digital Brand Presence • SEO • GEO",
    headline: "From invisible to ranking Top 2 for life coaches in Kenya",
    metric: "Top 2",
    label: "Local + topical search for life coaches",
    quote:
      "Capitalworkscreations was great. After months of looking for someone who would do it right, we landed on them. Now we're ranking top 2 in local and topical search for life coaches.",
    author: "Founder, Nadraslife Coaching",
    location: "Nairobi, Kenya",
    work: [
      "End-to-end digital brand presence build",
      "Topical SEO architecture around coaching intent",
      "Local + GEO optimization for Nairobi audience",
      "Content engine engineered for compounding traffic",
    ],
  },
  {
    client: "Nairobi South Institute",
    category: "Audit • GBP • Website • Socials • SEO",
    headline: "Now ranking #1 for technical institutes across Nairobi",
    metric: "#1",
    label: "Technical institute search — Nairobi & Kenya",
    quote:
      "They gave me an audit regarding my online marketing — specifically the Google Business Profile, website, socials, and SEO. Very informative and helpful, and I would for sure recommend this to other businesses looking to scale their brand online. Our brand is now ranking top in Kitengela and Nairobi when it comes to technical institutes. Capitalworkscreations are truly the people built for this job.",
    author: "Director, Nairobi South Institute",
    location: "Kitengela & Nairobi",
    work: [
      "Full online presence audit (GBP, web, social, SEO)",
      "Google Business Profile rebuild & optimization",
      "Website restructure for technical-education intent",
      "Social and SEO strategy aligned to local enrollment demand",
    ],
  },
  {
    client: "Manasseh — Restaurant Owner",
    category: "Website • Social Graphics • Online Presence",
    headline: "A restaurant brand that finally looks (and converts) like the food deserves",
    metric: "5★",
    label: "Verified client experience",
    quote:
      "I came to Capitalworks after hundreds of searches looking for someone legit who would fix my website and online presence. I reached out and got a quick reply — and the results did not tarry either. I highly recommend CapitalWorkCreations to anyone looking for reliable, creative, and professional web design and social media graphics. Definitely a 5-star experience!",
    author: "Manasseh, Restaurant Owner",
    location: "Kenya",
    work: [
      "Website redesign engineered for bookings & orders",
      "Brand-aligned social media graphics system",
      "Fast turnaround and continuous creative support",
      "Online presence rebuilt for trust and conversion",
    ],
  },
];

const STUDIES = [
  { client: "Kitengela Real Estate Group", category: "GBP + GEO", metric: "+412%", label: "Qualified leads in 90 days" },
  { client: "Nairobi Wellness Clinic", category: "SEO + Web", metric: "3.1×", label: "Organic bookings YoY" },
  { client: "Premier Coaching Co.", category: "Google Ads", metric: "KSh 18", label: "Cost per qualified call" },
  { client: "Artisan E-commerce", category: "Social Ads + Web", metric: "5.4× ROAS", label: "Across paid channels" },
  { client: "Hospitality Group", category: "Authority Infra", metric: "#1", label: "For all primary city queries" },
  { client: "B2B Services Firm", category: "Consultation", metric: "2×", label: "Pipeline within one quarter" },
];

function CaseStudies() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">Results</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-balance font-semibold">
            Outcomes, not adjectives.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-white/85 max-w-2xl">
            Real Kenyan brands. Real rankings. Real revenue. Selected partnerships from our work across Kitengela, Nairobi, and beyond.
          </p>
        </div>
      </section>

      {/* FEATURED TESTIMONIALS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Featured partnerships</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              What our clients actually say
            </h2>
            <p className="mt-3 text-foreground/75">
              Direct quotes. Verifiable outcomes. The kind of receipts that matter when you're choosing who to trust with your growth.
            </p>
          </div>

          <div className="space-y-8">
            {FEATURED.map((f, idx) => (
              <article
                key={f.client}
                className="grid lg:grid-cols-5 gap-8 bg-muted rounded-2xl p-8 md:p-10 border border-primary/10"
              >
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-1 text-primary">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <span className="block mt-3 text-xs uppercase tracking-wider text-foreground/60 font-semibold">{f.category}</span>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl text-foreground font-semibold text-balance">
                    {f.headline}
                  </h3>
                  <div className="mt-6 flex items-baseline gap-3">
                    <span className="font-display text-5xl md:text-6xl text-primary font-semibold">{f.metric}</span>
                    <span className="text-sm text-foreground/70">{f.label}</span>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm text-foreground/65">
                    <MapPin className="h-4 w-4" /> {f.location}
                  </div>
                </div>

                <div className="lg:col-span-3 bg-background rounded-xl p-6 md:p-8 border border-primary/10">
                  <Quote className="h-7 w-7 text-primary/40" />
                  <p className="mt-3 text-foreground/90 leading-relaxed italic">
                    “{f.quote}”
                  </p>
                  <p className="mt-4 text-sm font-semibold text-foreground">— {f.author}</p>
                  <div className="mt-6 pt-6 border-t border-border">
                    <span className="text-xs uppercase tracking-wider text-foreground/60 font-semibold">What we delivered</span>
                    <ul className="mt-3 space-y-2">
                      {f.work.map((w) => (
                        <li key={w} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary mt-1">▸</span> {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS GRID */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">More wins</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-foreground font-semibold">
              Selected outcomes from across the portfolio
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STUDIES.map((s) => (
              <article key={s.client} className="group bg-background rounded-2xl p-8 hover:bg-primary hover:text-primary-foreground transition border border-primary/10">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-wider opacity-60">{s.category}</span>
                  <ArrowUpRight className="h-5 w-5 opacity-50 group-hover:opacity-100 transition" />
                </div>
                <div className="mt-8 font-display text-4xl md:text-5xl font-semibold">{s.metric}</div>
                <p className="mt-2 text-sm opacity-75">{s.label}</p>
                <h3 className="mt-6 font-display text-lg">{s.client}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-balance font-semibold">Want results like these?</h2>
          <p className="mt-4 text-white/85 text-lg max-w-xl mx-auto">
            Book a free 30-minute audit. We'll diagnose where you're leaking growth — and show you exactly how to fix it.
          </p>
          <Link to="/audit" className="inline-flex mt-8 rounded-md bg-white text-primary px-8 py-4 text-sm font-semibold hover:opacity-95 shadow-elegant">
            Book Your Performance Audit
          </Link>
        </div>
      </section>
    </Layout>
  );
}
