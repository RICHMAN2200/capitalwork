import { useState } from "react";
import { motion } from "framer-motion";

type Gap = { key: string; label: string; q: string; body: string[]; close: string[]; tone: "list" | "lines" | "chips" };

const STAGES: Gap[] = [
  { key: "visibility", label: "Visibility", q: "Are the right people finding you?", tone: "list",
    body: ["Weak search presence.", "Low website traffic.", "Poor Google visibility.", "Content that is not reaching the right audience."],
    close: ["The gap is visibility."] },
  { key: "engagement", label: "Engagement", q: "Are people interested once they find you?", tone: "list",
    body: ["Low engagement.", "Weak messaging.", "Content that does not build enough interest or trust.", "Attention that does not develop into demand."],
    close: ["The gap is engagement."] },
  { key: "conversion", label: "Conversion", q: "Are interested people taking action?", tone: "list",
    body: ["Low enquiries.", "Visitors leaving without taking the next step.", "Weak calls to action.", "Leads getting lost."],
    close: ["The gap is conversion."] },
];
const CONDITIONS: Gap[] = [
  { key: "integration", label: "Integration", q: "Are your digital activities working together?", tone: "chips",
    body: ["Website", "Search", "Content", "Social media", "Advertising", "Lead generation"],
    close: ["All active, but not connected to one growth objective.", "The gap is integration."] },
  { key: "optimisation", label: "Optimisation", q: "Is your existing system producing as much as it could?", tone: "lines",
    body: ["The foundation is there.", "The investment is there.", "The opportunity is there.", "But performance can still improve."],
    close: ["The gap is optimisation."] },
];
const ALL = [...STAGES, ...CONDITIONS];

export function GrowthGap() {
  const [active, setActive] = useState("visibility");
  const g = ALL.find((x) => x.key === active)!;
  const stageIdx = STAGES.findIndex((s) => s.key === active);

  const condBtn = (c: Gap) => (
    <button
      key={c.key}
      onClick={() => setActive(c.key)}
      onMouseEnter={() => setActive(c.key)}
      aria-pressed={active === c.key}
      className={`rounded-full border px-4 py-1.5 text-xs font-bold tracking-[0.2em] uppercase transition ${active === c.key ? "bg-secondary text-secondary-foreground border-secondary" : "bg-background text-foreground border-primary/30 hover:border-primary"}`}
    >
      {c.label} <span className="font-medium normal-case tracking-normal opacity-70">· system condition</span>
    </button>
  );

  return (
    <div>
      <div className="relative rounded-3xl border border-primary/15 bg-background p-5 md:p-10">
        <div className="flex flex-wrap gap-2">{condBtn(CONDITIONS[0])}</div>

        {/* Journey track */}
        <div className="my-8 md:my-12 flex flex-col md:flex-row md:items-center gap-0">
          {STAGES.map((s, i) => {
            const on = active === s.key;
            const passed = stageIdx >= 0 && i < stageIdx;
            return (
              <div key={s.key} className="flex flex-col md:flex-row md:items-center md:flex-1">
                <button
                  onClick={() => setActive(s.key)}
                  onMouseEnter={() => setActive(s.key)}
                  aria-pressed={on}
                  className={`group flex items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left transition ${on ? "bg-primary text-primary-foreground border-primary shadow-elegant" : passed ? "bg-background border-primary text-foreground" : "bg-background border-primary/25 text-foreground hover:border-primary"}`}
                >
                  <span className="text-xs font-bold opacity-70">0{i + 1}</span>
                  <span className="font-display text-xl md:text-2xl font-semibold">{s.label}</span>
                </button>
                <span className="relative self-start ml-8 md:ml-0 md:self-auto h-8 w-0.5 md:h-0.5 md:w-auto md:flex-1 bg-primary/20 overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-primary origin-top md:origin-left"
                    animate={{ scaleX: passed || on ? 1 : 0, scaleY: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </span>
              </div>
            );
          })}
          <div className="rounded-2xl bg-secondary text-secondary-foreground px-5 py-4 font-display text-xl md:text-2xl font-semibold self-start md:self-auto">
            Growth
          </div>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">{condBtn(CONDITIONS[1])}</div>
      </div>

      {/* Detail panel */}
      <motion.div
        key={g.key}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-6 grid md:grid-cols-[1fr_1.2fr] gap-8 rounded-2xl bg-muted p-7 md:p-10"
        aria-live="polite"
      >
        <div>
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-primary">{g.label}</div>
          <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-foreground">{g.q}</h3>
        </div>
        <div>
          {g.tone === "chips" ? (
            <div className="flex flex-wrap gap-2">
              {g.body.map((b) => (
                <span key={b} className="rounded-full border border-primary/30 bg-background px-3 py-1.5 text-sm font-medium text-foreground">{b}</span>
              ))}
            </div>
          ) : (
            <ul className="space-y-2">
              {g.body.map((b) => (
                <li key={b} className="flex gap-3 text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {b}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 border-t border-primary/20 pt-4 space-y-1">
            {g.close.map((c, i) => (
              <p key={c} className={i === g.close.length - 1 ? "font-display text-xl font-bold text-primary" : "text-foreground/85"}>{c}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
