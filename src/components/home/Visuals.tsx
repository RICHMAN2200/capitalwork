import { motion } from "framer-motion";

/* ---------- HERO: living system map ---------- */
const INPUTS = ["SEARCH", "CONTENT", "SOCIAL", "WEBSITE", "ADS", "LEADS"];
const OUTPUTS = ["CUSTOMERS", "FUNDERS", "OPPORTUNITIES"];

export function HeroSystem() {
  const gx = 320, gy = 260;
  return (
    <svg viewBox="0 0 640 520" className="w-full h-auto" role="img" aria-label="Search, content, social, website, ads and leads connect to one growth goal, which leads to customers, funders and opportunities">
      {INPUTS.map((label, i) => {
        const y = 60 + i * 80;
        const d = `M140 ${y} C 230 ${y}, 220 ${gy}, ${gx - 58} ${gy}`;
        return (
          <g key={label}>
            <path d={d} className="stroke-primary/15" fill="none" strokeWidth={1.5} />
            <path d={d} className="stroke-primary flow-line" fill="none" strokeWidth={1.5} style={{ animationDelay: `${i * 0.3}s` }} />
            <rect x={24} y={y - 16} width={116} height={32} rx={16} className="fill-background stroke-primary/40" strokeWidth={1} />
            <circle cx={42} cy={y} r={4} className="fill-secondary node-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
            <text x={54} y={y + 4} className="fill-foreground" fontSize={11} fontWeight={600} letterSpacing={1.5}>{label}</text>
          </g>
        );
      })}
      {OUTPUTS.map((label, i) => {
        const y = 150 + i * 110;
        const d = `M${gx + 58} ${gy} C 430 ${gy}, 420 ${y}, 480 ${y}`;
        return (
          <g key={label}>
            <path d={d} className="stroke-primary/15" fill="none" strokeWidth={2} />
            <path d={d} className="stroke-secondary flow-line" fill="none" strokeWidth={2} />
            <rect x={480} y={y - 18} width={140} height={36} rx={6} className="fill-primary" />
            <text x={550} y={y + 4} textAnchor="middle" className="fill-primary-foreground" fontSize={11} fontWeight={700} letterSpacing={1.5}>{label}</text>
          </g>
        );
      })}
      <circle cx={gx} cy={gy} r={80} className="stroke-primary/25 spin-slow" fill="none" strokeWidth={1} strokeDasharray="2 6" />
      <circle cx={gx} cy={gy} r={58} className="fill-primary" />
      <circle cx={gx} cy={gy} r={66} className="stroke-primary/30 node-pulse" fill="none" strokeWidth={1} />
      <text x={gx} y={gy - 4} textAnchor="middle" className="fill-primary-foreground" fontSize={12} fontWeight={700} letterSpacing={2}>GROWTH</text>
      <text x={gx} y={gy + 14} textAnchor="middle" className="fill-primary-foreground" fontSize={12} fontWeight={700} letterSpacing={2}>GOAL</text>
    </svg>
  );
}

export function HeroSystemMobile() {
  return (
    <div className="flex flex-col items-center" aria-hidden>
      <div className="grid grid-cols-3 gap-2 w-full">
        {INPUTS.map((l) => (
          <span key={l} className="rounded-full border border-primary/40 bg-background py-1.5 text-center text-[10px] font-semibold tracking-widest text-foreground">{l}</span>
        ))}
      </div>
      <span className="h-8 w-px bg-primary/40" />
      <span className="rounded-full bg-primary px-6 py-3 text-xs font-bold tracking-[0.2em] text-primary-foreground">GROWTH GOAL</span>
      <span className="h-8 w-px bg-primary/40" />
      <div className="grid grid-cols-3 gap-2 w-full">
        {OUTPUTS.map((l) => (
          <span key={l} className="rounded-md bg-primary/90 py-2 text-center text-[9px] font-bold tracking-wider text-primary-foreground">{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- GOAL ORBIT: goal determines the system ---------- */
const COMPONENTS = ["Website", "Search", "Content", "Social", "Advertising", "Lead Capture", "Conversion"];

export function GoalOrbit() {
  const c = 260, r = 185;
  return (
    <svg viewBox="0 0 520 520" className="w-full h-auto max-w-[520px] mx-auto" role="img" aria-label="The growth goal sits at the centre, connected to website, search, content, social, advertising, lead capture and conversion">
      <circle cx={c} cy={c} r={r} className="stroke-primary/15" fill="none" strokeDasharray="2 6" />
      {COMPONENTS.map((label, i) => {
        const a = (i / COMPONENTS.length) * Math.PI * 2 - Math.PI / 2;
        const x = c + r * Math.cos(a), y = c + r * Math.sin(a);
        return (
          <g key={label}>
            <line x1={c} y1={c} x2={x} y2={y} className="stroke-primary/15" strokeWidth={1.5} />
            <line x1={x} y1={y} x2={c} y2={c} className="stroke-primary flow-line" strokeWidth={1.5} style={{ animationDelay: `${i * 0.25}s` }} />
            <circle cx={x} cy={y} r={38} className="fill-background stroke-primary/50" strokeWidth={1} />
            <circle cx={x} cy={y - 16} r={3} className="fill-secondary node-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
            <text x={x} y={y + 5} textAnchor="middle" className="fill-foreground" fontSize={11} fontWeight={600}>{label}</text>
          </g>
        );
      })}
      <circle cx={c} cy={c} r={70} className="fill-primary" />
      <text x={c} y={c - 4} textAnchor="middle" className="fill-primary-foreground" fontSize={13} fontWeight={700} letterSpacing={2}>GROWTH</text>
      <text x={c} y={c + 15} textAnchor="middle" className="fill-primary-foreground" fontSize={13} fontWeight={700} letterSpacing={2}>GOAL</text>
    </svg>
  );
}

/* ---------- TIER GRAPH: growing system complexity ---------- */
export function TierGraph({ level }: { level: 1 | 2 | 3 }) {
  const count = level === 1 ? 4 : level === 2 ? 7 : 11;
  const cx = 130, cy = 80, r = level === 1 ? 44 : level === 2 ? 56 : 64;
  const pts = Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2 - Math.PI / 2;
    return { x: cx + r * 1.4 * Math.cos(a), y: cy + r * Math.sin(a) };
  });
  const edges: [number, number][] = [];
  if (level >= 2) pts.forEach((_, i) => edges.push([i, (i + 1) % count]));
  if (level === 3) pts.forEach((_, i) => edges.push([i, (i + 3) % count]));
  return (
    <svg viewBox="0 0 260 160" className="w-full h-auto" aria-hidden>
      {edges.map(([a, b], i) => (
        <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} className="stroke-primary/25" strokeWidth={1} />
      ))}
      {pts.map((p, i) => (
        <g key={i}>
          <line x1={cx} y1={cy} x2={p.x} y2={p.y} className="stroke-primary flow-line" strokeWidth={1.25} style={{ animationDelay: `${i * 0.2}s` }} />
          <circle cx={p.x} cy={p.y} r={6} className="fill-background stroke-primary" strokeWidth={1.5} />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={12} className="fill-primary" />
    </svg>
  );
}

/* ---------- BEFORE / AFTER ---------- */
const SCATTER = [
  { l: "Website", x: 50, y: 50 },
  { l: "Social", x: 200, y: 40 },
  { l: "SEO", x: 120, y: 130 },
  { l: "Ads", x: 240, y: 170 },
  { l: "Content", x: 50, y: 210 },
];

export function BeforeAfter() {
  const chain = ["Growth Goal", "Connected digital system", "Visibility", "Engagement", "Conversion", "Growth"];
  return (
    <div className="grid md:grid-cols-2 gap-px bg-primary/15 rounded-2xl overflow-hidden">
      <div className="bg-muted p-8">
        <div className="text-xs font-bold tracking-[0.25em] text-foreground/70">BEFORE</div>
        <svg viewBox="0 0 300 260" className="mt-6 w-full h-auto" role="img" aria-label="Website, social, SEO, ads and content scattered without connection">
          <line x1={80} y1={60} x2={130} y2={85} className="stroke-foreground/30" strokeDasharray="3 5" />
          <line x1={200} y1={60} x2={170} y2={100} className="stroke-foreground/30" strokeDasharray="3 5" />
          <line x1={150} y1={150} x2={200} y2={165} className="stroke-foreground/30" strokeDasharray="3 5" />
          <line x1={70} y1={190} x2={95} y2={160} className="stroke-foreground/30" strokeDasharray="3 5" />
          {SCATTER.map((n) => (
            <g key={n.l}>
              <rect x={n.x - 36} y={n.y - 14} width={72} height={28} rx={14} className="fill-background stroke-foreground/30" />
              <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize={11} fontWeight={600} className="fill-foreground/70">{n.l}</text>
            </g>
          ))}
        </svg>
        <p className="mt-4 font-display text-xl font-semibold text-foreground">Disconnected activity</p>
      </div>
      <div className="bg-primary p-8 text-primary-foreground">
        <div className="text-xs font-bold tracking-[0.25em] opacity-80">AFTER</div>
        <ol className="mt-6 flex flex-col items-start">
          {chain.map((s, i) => (
            <motion.li
              key={s}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <span className={`inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold ${i === 0 || i === chain.length - 1 ? "bg-primary-foreground text-primary" : "border border-primary-foreground/40"}`}>
                <span className="h-2 w-2 rounded-full bg-current" /> {s}
              </span>
              {i < chain.length - 1 && <span className="ml-6 h-5 w-px bg-primary-foreground/50" />}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
