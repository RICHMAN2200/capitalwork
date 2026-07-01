import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { QuickActions } from "@/components/QuickActions";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/services-data";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Free Performance Audit | CapitalworkCreations Kenya" },
      { name: "description", content: "Book a free 30-minute digital marketing audit with CapitalworkCreations. Find out where your business is leaking growth — across Kitengela, Nairobi & Kenya." },
      { name: "keywords", content: "free marketing audit Kenya, SEO audit Nairobi, digital audit Kitengela, marketing consultation Kenya" },
      { property: "og:title", content: "Free Performance Audit — CapitalworkCreations" },
      { property: "og:description", content: "Find out where you're leaking growth." },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
  }),
  component: Audit,
});

function Audit() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Layout>
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-medium">Performance Audit</span>
            <h1 className="mt-3 font-display text-5xl md:text-6xl text-foreground text-balance">
              We'll show you exactly where the leaks are.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              A free 30-minute strategic walkthrough. No pitch deck. Just a clear picture of where your growth is stuck — and the moves that unlock it.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Technical SEO & visibility scan",
                "Paid media efficiency review",
                "Conversion & funnel diagnostics",
                "90-day growth roadmap",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <QuickActions label="Prefer to skip the form?" />
            </div>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-soft border border-primary/15">
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl">Audit request received.</h3>
                <p className="mt-2 text-foreground/75">A consultant from CapitalworkCreations will reach out within one business day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const body = `Name: ${fd.get("name")}%0AEmail: ${fd.get("email")}%0ABusiness: ${fd.get("business")}%0AWebsite: ${fd.get("website")}%0A%0AWhat's stuck:%0A${fd.get("message")}`;
                  window.location.href = `mailto:${CONTACT.email}?subject=Performance Audit Request&body=${body}`;
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h2 className="font-display text-2xl text-foreground">Book your audit</h2>
                <Field label="Full name" name="name" />
                <Field label="Business email" name="email" type="email" />
                <Field label="Business / Brand" name="business" />
                <Field label="Website (optional)" name="website" />
                <div>
                  <label className="text-sm font-medium text-foreground">What's stuck?</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="mt-2 w-full rounded-md border border-primary/30 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button className="w-full rounded-md bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-95 transition">
                  Request My Audit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={!label.includes("optional")}
        className="mt-2 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
