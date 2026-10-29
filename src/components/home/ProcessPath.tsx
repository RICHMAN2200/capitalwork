import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const MARKERS = [
  { tag: "GOAL", title: "They know where they want to go.", text: "The process starts there." },
  { tag: "GAP", step: "Step 01", title: "Find the gap", text: "Define the growth goal and identify the biggest gap between where you are and where you need to be." },
  { tag: "SYSTEM", step: "Step 02", title: "Build the system", text: "Determine which digital systems need to be built, connected or improved to close that gap." },
  { tag: "MEASURE", step: "Step 03", title: "Measure and improve", text: "Track what matters, improve what is working and identify the next constraint holding back growth." },
  { tag: "IMPROVE", title: "You do not need to guess what to do next.", text: "" },
];

export function ProcessPath() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative pl-10 md:pl-16">
      <span className="absolute left-3 md:left-5 top-2 bottom-2 w-0.5 bg-primary-foreground/20" />
      <motion.span
        className="absolute left-3 md:left-5 top-2 bottom-2 w-0.5 bg-primary-foreground origin-top"
        style={{ scaleY: reduce ? 1 : scaleY }}
      />
      {MARKERS.map((m, i) => (
        <li key={m.tag} className="relative pb-12 last:pb-0">
          <span className={`absolute -left-[34px] md:-left-[50px] top-0 flex h-7 w-7 items-center justify-center rounded-full ring-4 ring-primary ${m.step ? "bg-primary-foreground" : "bg-secondary"}`}>
            <span className={`h-2 w-2 rounded-full ${m.step ? "bg-primary" : "bg-primary-foreground"}`} />
          </span>
          <div className="text-[11px] font-bold tracking-[0.3em] text-primary-foreground/70">
            {m.tag}{m.step ? ` · ${m.step.toUpperCase()}` : ""}
          </div>
          <h3 className={`mt-2 font-display font-semibold text-primary-foreground ${m.step ? "text-2xl md:text-3xl" : "text-xl md:text-2xl opacity-90"}`}>
            {m.title}
          </h3>
          {m.text && <p className="mt-2 max-w-lg text-primary-foreground/85">{m.text}</p>}
          {i === 0 && <span className="sr-only">Most clients do not start knowing exactly where to invest.</span>}
        </li>
      ))}
    </ol>
  );
}
