// Shared content for Elad Adler portfolio direction explorations.
// Real copy from Elad; placeholder slots clearly marked.

const PORTFOLIO_DATA = {
  name: "Elad Adler",
  role: "UX/UI Designer & Product Strategist",
  location: "Jerusalem, IL",
  bioShort:
    "Multidisciplinary UX/UI designer (B.Des., Bezalel) and product strategist with an M.A. in Psychodrama. I combine human psychology with functional design to build intuitive digital experiences.",
  bioLong:
    "I lead social-tech ventures and non-profits, leveraging AI-driven tools, user advocacy and empathetic problem-solving. My favourite work sits where people are most human: care teams, communities, learning.",
  credentials: ["B.Des — Bezalel", "M.A. — Psychodrama", "AI-driven workflows", "Social-tech & non-profits"],
  projects: [
    {
      num: "01",
      title: "Sababa & All",
      meta: "Web app · UX/UI lead · Claude Code",
      desc: "Transformed manual matchmaking into a streamlined digital workflow — better organisation, privacy-first, and actually adopted by the team.",
      tags: ["UX/UI lead", "Workflow design", "Privacy-first"],
      placeholder: "sababa & all — hero screen",
      image: "assets/phones-mockup.png",
    },
    {
      num: "02",
      title: "Balance",
      meta: "Web app · Base44 · vibe coding",
      desc: "Medication management for a Jerusalem \u201CSoteria\u201D house. Medication errors dropped from 5% to 0% — faster and safer for all three user personas.",
      tags: ["Health & care", "3 personas", "5% → 0% errors"],
      placeholder: "balance — med tracking UI",
    },
    {
      num: "03",
      title: "ShiftWise",
      meta: "Scheduling platform · Base44",
      desc: "AI-assisted shift scheduling for therapeutic and residential care teams — availability, swaps and fairness management, minus the spreadsheet headache.",
      tags: ["Complex system", "AI-assisted", "Fairness engine"],
      placeholder: "shiftwise — schedule board",
    },
    {
      num: "04",
      title: "BibleConnect",
      meta: "Web app for \u201C929\u201D · Claude Code",
      desc: "An interactive Bible learning app — study, exploration and AI-powered conversation that makes an ancient text personal and accessible.",
      tags: ["Learning", "AI conversation", "Content UX"],
      placeholder: "bibleconnect — study view",
    },
  ],
  // Slots 05–07: reserved, content to be supplied by Elad later
  projectSlots: [
    { num: "05", note: "open slot — drop your next case study here" },
    { num: "06", note: "open slot — side project / experiment" },
    { num: "07", note: "open slot — visual / branding piece" },
  ],
  poems: {
    note: "sample lines — to be replaced with Elad's poems",
    en: {
      title: "untitled (cursor)",
      lines: ["the cursor blinks", "like someone breathing", "in another room —", "I leave the light on."],
    },
    he: {
      title: "בין פיקסל לפיקסל",
      lines: ["בֵּין פִּיקְסֶל לְפִיקְסֶל", "נִשְׁאָר רֶוַח קָטָן", "שֶׁאֶפְשָׁר לָגוּר בּוֹ."],
    },
  },
  photos: [
    { id: "ph1", caption: "photo 01 — street, jlm" },
    { id: "ph2", caption: "photo 02 — portrait" },
    { id: "ph3", caption: "photo 03 — texture" },
    { id: "ph4", caption: "photo 04 — light" },
    { id: "ph5", caption: "photo 05 — wide" },
  ],
  links: [
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

// Subtle paper-grain overlay (feTurbulence noise), shared by all directions.
const GRAIN_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

function GrainOverlay({ opacity = 0.07, blend = "multiply" }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: GRAIN_URI,
        opacity: opacity,
        mixBlendMode: blend,
        pointerEvents: "none",
        zIndex: 5,
      }}
    ></div>
  );
}

// Striped image placeholder with a monospace explainer label.
function PhotoSlot({ label, height = 220, tone = "dark", style }) {
  const line = tone === "dark" ? "rgba(20,18,14,0.10)" : "rgba(240,236,226,0.12)";
  const border = tone === "dark" ? "1px solid rgba(20,18,14,0.35)" : "1px solid rgba(240,236,226,0.35)";
  const text = tone === "dark" ? "rgba(20,18,14,0.55)" : "rgba(240,236,226,0.6)";
  return (
    <div
      style={{
        height: height,
        border: border,
        backgroundImage: `repeating-linear-gradient(45deg, transparent 0 10px, ${line} 10px 11px)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.06em",
        color: text,
        textTransform: "lowercase",
        ...style,
      }}
    >
      [ {label} ]
    </div>
  );
}

Object.assign(window, { PORTFOLIO_DATA, GrainOverlay, PhotoSlot, GRAIN_URI });
