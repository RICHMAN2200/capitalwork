import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Sparkles, TrendingUp } from "lucide-react";
import { Layout } from "@/components/Layout";
import { QuickActions } from "@/components/QuickActions";
import { PILLARS, CONTACT } from "@/lib/services-data";
import heroImg from "@/assets/hero-forest.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CapitalworkCreations — Digital Marketing & Web Design Agency in Kitengela, Nairobi & Kenya" },
      { name: "description", content: "CapitalworkCreations is a results-driven digital marketing and web design agency in Kitengela, serving Nairobi and all of Kenya. SEO, Google Ads, social media, GBP, websites — built for measurable ROI." },
      { name: "keywords", content: "digital marketing agency Kenya, marketing agency Kitengela, web design Nairobi, SEO Kenya, Google Ads Kenya, social media management Kenya" },
      { property: "og:title", content: "CapitalworkCreations — Growth Marketing for Kenyan Brands" },
      { property: "og:description", content: "Performance-driven marketing & web design from Kitengela, serving all of Kenya." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "CapitalworkCreations",
          description: "Digital marketing and web design agency based in Kitengela, serving Nairobi and Kenya.",
          telephone: CONTACT.phone,
          email: CONTACT.email,
          address: { "@type": "PostalAddress", addressLocality: "Kitengela", addressRegion: "Kajiado", addressCountry: "KE" },
          areaServed: ["Kitengela", "Nairobi", "Kenya"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.05)",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-mist/85 via-mist/90 to-mist/95" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-36 md:pb-36">
          <div className="max-w-3xl animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary backdrop-blur font-semibold">
              <Sparkles className="h-3 w-3" /> Kitengela · Nairobi · All of Kenya
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-foreground text-balance font-bold">
              Digital Marketing &amp; Design in Nairobi, Kitengela.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground max-w-2xl leading-relaxed">
              The Top-Rated Digital Design and Business Growth Agency in Nairobi. We bridge the gap between stagnant online profiles and high-performing brands that lead the Kenyan market.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={CONTACT.calendly} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3.5 text-sm font-bold hover:bg-foreground shadow-elegant transition">
                Book a Free Audit <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3.5 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground transition">
                Explore Services
              </Link>
            </div>

            <div className="mt-10 max-w-2xl">
              <QuickActions />
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS — categories only */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">What We Do</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground font-semibold">Ten growth services. One agency.</h2>
            </div>
            <p className="max-w-md text-foreground/75 text-base">
              Tap any category to see how it works, what's included, and the specialized tracks built for your industry.
            </p>
          </div>

          <div className="grid gap-px bg-primary/15 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3 shadow-soft">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.slug}
                  to="/services/$pillar"
                  params={{ pillar: p.slug }}
                  className="group bg-background hover:bg-primary hover:text-primary-foreground p-7 flex items-center gap-5 transition"
                  style={{ animation: `rise 0.6s ${i * 50}ms both` }}
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-white group-hover:text-primary transition shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg leading-tight font-semibold">{p.title}</h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 transition shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRIDGE PROCESS */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">The Process</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance font-semibold">From hidden value to market leader.</h2>
            <p className="mt-6 text-white max-w-md">
              A three-stage methodology that takes the latent equity in your brand and converts it into compounding revenue.
            </p>
            <div className="mt-10">
              <QuickActions variant="dark" label="Ready to start? Pick the fastest way:" />
            </div>
          </div>
          <ol className="relative border-l-2 border-white/30 space-y-10 pl-8">
            {[
              { n: "01", t: "Extraction", d: "We pull out your brand's core value and competitive edge." },
              { n: "02", t: "Fragmentation", d: "We turn your value into content and ads that reach your target audience." },
              { n: "03", t: "Deployment", d: "We launch your presence across the web with a focus on measurable ROI." },
            ].map((s) => (
              <li key={s.n} className="relative">
                <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-white ring-4 ring-primary" />
                <div className="text-xs tracking-[0.2em] text-white/70 font-semibold">{s.n}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-white/90 max-w-md">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Proof, not promises</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl text-foreground font-semibold">Outcomes we've delivered.</h2>
            </div>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              See all case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { client: "Kitengela Real Estate Group", category: "GBP + GEO", metric: "+412%", label: "Qualified leads in 90 days" },
              { client: "Nairobi Wellness Clinic", category: "SEO + Web", metric: "3.1×", label: "Organic bookings YoY" },
              { client: "Premier Coaching Co.", category: "Google Ads", metric: "KSh 18", label: "Cost per qualified call" },
              { client: "Artisan E-commerce", category: "Social Ads + Web", metric: "5.4× ROAS", label: "Across paid channels" },
              { client: "Hospitality Group", category: "Authority Infra", metric: "#1", label: "For all primary city queries" },
              { client: "B2B Services Firm", category: "Consultation", metric: "2×", label: "Pipeline within one quarter" },
            ].map((s) => (
              <article key={s.client} className="group bg-muted rounded-2xl p-7 hover:bg-primary hover:text-primary-foreground transition">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-wider opacity-70 font-semibold">{s.category}</span>
                  <TrendingUp className="h-5 w-5 opacity-60 group-hover:opacity-100 transition" />
                </div>
                <div className="mt-8 font-display text-4xl md:text-5xl font-bold">{s.metric}</div>
                <p className="mt-2 text-sm opacity-75">{s.label}</p>
                <h3 className="mt-6 font-display text-lg font-semibold">{s.client}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-primary font-semibold">
            <MapPin className="h-4 w-4" /> Kitengela · Nairobi · All of Kenya
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-balance text-foreground font-semibold">
            Your competitors are compounding. Are you?
          </h2>
          <p className="mt-5 text-foreground/75 max-w-xl mx-auto text-lg">
            Book a free Performance Audit. We'll map exactly where you're leaking growth — and what to do about it.
          </p>
          <div className="mt-8 inline-block text-left">
            <QuickActions />
          </div>
        </div>
      </section>
    </Layout>
  );
}
