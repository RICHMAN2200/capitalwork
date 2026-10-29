import events from "@/content/events.md?raw";
import ngos from "@/content/ngos.md?raw";
import tvets from "@/content/tvets.md?raw";

export const SECTORS = [
  { slug: "events", tag: "EVENTS", title: "Marketing for Events", line: "Turn attention into registrations, attendance and what comes next.", raw: events },
  { slug: "ngos", tag: "NGOs AND NPOs", title: "Marketing for NGOs and NPOs", line: "Turn your mission into visibility, trust and meaningful support.", raw: ngos },
  { slug: "tvets", tag: "TVETs AND TRADE SCHOOLS", title: "Marketing for TVETs, Career and Trade Schools", line: "Turn course interest into enquiries, applications and enrolment.", raw: tvets },
];

export type Node =
  | { t: "p"; v: string }
  | { t: "li"; v: string }
  | { t: "cta"; v: string }
  | { t: "h2"; v: string };
export type Card = { title: string; nodes: Node[] };
export type Section = { label: string; intro: Node[]; cards: Card[] };

export function parseSector(raw: string) {
  const lines = raw.split("\n");
  const sections: Section[] = [];
  let cur: Section | null = null;
  let card: Card | null = null;
  let skip = false;
  const push = (n: Node) => {
    if (!cur) return;
    (card ? card.nodes : cur.intro).push(n);
  };
  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;
    if (line === "---") { skip = false; continue; }
     if (/^#{1,3}\s/.test(line)) skip = false;
    if (/^(#{1,3}\s*)?(visual direction|visual|optional( subtle)? animation)\b/i.test(line)) { skip = true; continue; }
    if (skip) continue;
    const m = line.match(/^(#{1,3})\s+(.*)$/);
    if (m) {
      const lvl = m[1].length, text = m[2].replace(/\*\*/g, "");
      if (lvl === 1) {
        cur = { label: text, intro: [], cards: [] }; card = null; sections.push(cur);
       } else if (lvl === 2) {
        if (text.toUpperCase() === "HERO") continue;
         if (cur && /^(LAUNCH|GROW|SCALE)$/.test(text)) {
          card = { title: text, nodes: [] }; cur.cards.push(card);
        } else { card = null; push({ t: "h2", v: text }); }
      } else {
        if (!cur) continue;
        if (sections.length === 2 && cur.intro.length === 0 && cur.cards.length === 0 && sections.indexOf(cur) === 1) {}
        card = { title: text, nodes: [] }; cur.cards.push(card);
      }
      continue;
    }
    const cta = line.match(/^\*\*(?:CTA:\s*)?((?:Plan |Find Where |Launch Your |Grow Your |Scale Your |Talk Through |Make Your Work |Grow Student |Improve Your Student ).+?|Start a Conversation)\*\*$/);
    if (cta) {
      const target = card && /^(LAUNCH|GROW|SCALE)$/.test(card.title) ? card.nodes : cur?.intro;
      target?.push({ t: "cta", v: cta[1] });
      continue;
    }
    if (/^[•\-*]\s+/.test(line)) { push({ t: "li", v: line.replace(/^[•\-*]\s+/, "") }); continue; }
    push({ t: "p", v: line.replace(/\\/g, "") });
  }
  return sections;
}
