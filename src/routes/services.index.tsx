import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { QuickActions } from "@/components/QuickActions";
import { PILLARS } from "@/lib/services-data";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Digital Marketing & Web Design in Kenya | CapitalworkCreations" },
      { name: "description", content: "Explore the 10 core services from CapitalworkCreations — SEO, Google Ads, social media, GBP, web design and more — built for Kitengela, Nairobi, and all of Kenya." },
      { name: "keywords", content: "digital marketing services Kenya, SEO services Nairobi, Google Ads Kitengela, web design Kenya, social media management" },
      { property: "og:title", content: "Services — CapitalworkCreations" },
      { property: "og:description", content: "Ten growth services for Kenyan businesses. Pick a category to learn more." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <Layout>
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Our Services</span>
          <h1 className="mt-3 font-display text-5xl md:text-6xl text-foreground max-w-3xl text-balance font-semibold">
            Ten categories. Pick yours.
          </h1>
          <p className="mt-5 text-lg text-foreground/80 max-w-2xl">
            Each category opens its own dedicated page with the specialized service tracks built for your industry — across Kitengela, Nairobi, and Kenya.
          </p>
          <div className="mt-8 max-w-2xl">
            <QuickActions />
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-px bg-primary/15 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3 shadow-soft">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              const cardClass =
                "group bg-background hover:bg-primary hover:text-primary-foreground p-7 flex items-center gap-5 transition";
              const inner = (
                <>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary group-hover:bg-white group-hover:text-primary flex items-center justify-center shrink-0 transition">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-lg font-semibold leading-tight">{p.title}</h2>
                  </div>
                  <ArrowUpRight className="h-4 w-4 opacity-60 group-hover:opacity-100 shrink-0" />
                </>
              );
              if (p.slug === "seo") {
                return (
                  <Link key={p.slug} to="/services/seo" className={cardClass}>
                    {inner}
                  </Link>
                );
              }
              return (
                <Link
                  key={p.slug}
                  to="/services/$pillar"
                  params={{ pillar: p.slug }}
                  className={cardClass}
                >
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
