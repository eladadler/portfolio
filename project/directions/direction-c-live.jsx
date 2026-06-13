// Direction C — LIVE scrolling prototype. Same "Studio Sheet" aesthetic,
// with the Poems section as a sticky vertical→horizontal→vertical scroll sequence.
const dirCLiveCSS = `
html, body { overflow-x: clip; }
.dirC { --bg:#EEEEEB; --ink:#16171A; --ink-rgb:22,23,26;
  --accent:#2B43E8; --accent-rgb:43,67,232; --accent-bright:#5C73FF;
  --surface:#FFFFFF; --invert-bg:#16171A; --invert-text:#EEEEEB; --invert-rgb:238,238,235;
  --tex-image:linear-gradient(rgba(var(--ink-rgb),0.05) 1px, transparent 1px); --tex-size:100% 64px;
  background:var(--bg); color:var(--ink); font-family:'Archivo', sans-serif; position:relative;
  transition:background .35s ease, color .35s ease; }
.dirC * { box-sizing:border-box; }
.dirC .mono { font-family:'IBM Plex Mono', monospace; }
.dirC .cobalt { color:var(--accent); }
.dirC .c-hl { box-shadow:inset 0 -0.38em rgba(var(--accent-rgb),0.22); }
.dirC .c-dotfield { position:fixed; inset:0; z-index:0; pointer-events:none; }
.dirC .c-content { position:relative; z-index:1; }

/* ---- Heading hover effects (applied to project titles) ---- */
.dirC .fx-heading { display:inline-block; cursor:default; }
.dirC .fx-highlight { background-image:linear-gradient(rgba(var(--accent-rgb),0.30), rgba(var(--accent-rgb),0.30));
  background-repeat:no-repeat; background-position:left 88%; background-size:0% 0.34em;
  transition:background-size .45s cubic-bezier(.2,.8,.2,1); }
.dirC .fx-highlight:hover { background-size:100% 0.34em; }
.dirC .fx-slide { transition:transform .35s cubic-bezier(.2,.8,.2,1), color .35s ease; }
.dirC .fx-slide::after { content:'\\2192'; display:inline-block; opacity:0; margin-left:0; color:var(--accent);
  transition:opacity .35s ease, margin-left .35s ease; }
.dirC .fx-slide:hover { transform:translateX(0.1em); color:var(--accent); }
.dirC .fx-slide:hover::after { opacity:1; margin-left:0.28em; }
.dirC .fx-split { transition:text-shadow .25s ease, letter-spacing .25s ease; }
.dirC .fx-split:hover { letter-spacing:0.01em;
  text-shadow:0.035em 0 var(--accent), -0.035em 0 var(--accent-bright); }
.dirC .fx-scramble { font-variant-ligatures:none; }
/* Hero (multiline) variant: wrap effects per line, drop the trailing arrow */
.dirC .fx-heading-block { display:inline; }
.dirC .fx-heading-block.fx-highlight { -webkit-box-decoration-break:clone; box-decoration-break:clone; }
.dirC .fx-heading-block.fx-slide::after { display:none; }

.dirC .c-topbar { display:flex; align-items:center; justify-content:space-between; padding:22px 80px;
  border-bottom:1px solid rgba(var(--ink-rgb),0.5); font-size:13px; position:sticky; top:0; background:var(--bg); z-index:20; }
.dirC .c-topbar nav { display:flex; gap:32px; }
.dirC .c-topbar a { color:inherit; text-decoration:none; }
.dirC .c-topbar a:hover { color:var(--accent); }
.dirC .c-logo { font-weight:700; letter-spacing:-0.01em; font-size:15px; }
.dirC .c-avail { display:flex; align-items:center; gap:8px; font-size:11.5px; }
.dirC .c-avail .dot { width:8px; height:8px; border-radius:50%; background:var(--accent); }

.dirC .c-hero { padding:100px 80px 84px; position:relative;
  background-image:var(--tex-image); background-size:var(--tex-size); }
.dirC .c-kicker { font-size:12px; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:28px; }
.dirC .c-hero h1 { font-size:clamp(64px, 7vw, 104px); line-height:0.98; letter-spacing:-0.035em; margin:0 0 40px; font-weight:600; max-width:12ch; }
.dirC .c-hero .sub { display:grid; grid-template-columns:1.2fr 1fr; gap:56px; align-items:end; }
.dirC .c-hero p { font-size:16px; line-height:1.7; margin:0; max-width:54ch; }
.dirC .c-stickers { display:flex; flex-wrap:wrap; gap:10px; justify-content:flex-end; }
.dirC .c-sticker { background:var(--surface); border:1px solid rgba(var(--ink-rgb),0.35); border-radius:999px;
  padding:9px 18px; font-size:12.5px; box-shadow:0 3px 8px rgba(var(--ink-rgb),0.08); }
.dirC .c-sticker:nth-child(1){transform:rotate(-2deg);} .dirC .c-sticker:nth-child(2){transform:rotate(1.5deg);}
.dirC .c-sticker:nth-child(3){transform:rotate(-1deg);} .dirC .c-sticker:nth-child(4){transform:rotate(2deg);}
.dirC .c-sticker.blue { background:var(--accent); color:#fff; border-color:var(--accent); }

.dirC .c-secthead { display:flex; align-items:baseline; justify-content:space-between; padding:0 80px; margin:92px 0 44px; }
.dirC .c-secthead .t { font-size:15px; font-weight:600; letter-spacing:0.02em; }
.dirC .c-secthead .n { font-size:12px; }

.dirC .c-cards { display:grid; grid-template-columns:1fr 1fr; gap:28px; padding:0 80px; }
.dirC .c-card { background:var(--surface); border:1px solid rgba(var(--ink-rgb),0.4); border-radius:6px; overflow:hidden;
  transition:transform .25s ease, box-shadow .25s ease; }
.dirC .c-card:hover { transform:translateY(-5px); box-shadow:0 16px 32px rgba(var(--ink-rgb),0.12); }
.dirC .c-card .body { padding:24px 26px 28px; }
.dirC .c-card .row { display:flex; align-items:baseline; justify-content:space-between; gap:14px; }
.dirC .c-card h3 { font-size:30px; margin:0; font-weight:600; letter-spacing:-0.02em; }
.dirC .c-card .num { font-size:12px; color:var(--accent); }
.dirC .c-card .meta { font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(var(--ink-rgb),0.55); margin:8px 0 14px; }
.dirC .c-card .desc { font-size:14px; line-height:1.65; margin:0 0 18px; color:rgba(var(--ink-rgb),0.85); }
.dirC .c-tags { display:flex; flex-wrap:wrap; gap:8px; }
.dirC .c-tag { font-size:11.5px; background:var(--bg); border:1px solid rgba(var(--ink-rgb),0.25); padding:5px 12px; border-radius:999px; }

/* ---- Projects: full-screen spreads (image one side, text the other) ---- */
.dirC .c-spreads { border-top:1px solid rgba(var(--ink-rgb),0.4); }
.dirC .c-spread { display:grid; grid-template-columns:1.05fr 1fr; min-height:84vh;
  border-bottom:1px solid rgba(var(--ink-rgb),0.4); background:var(--surface); }
.dirC .c-spread .imgside { position:relative; border-right:1px solid rgba(var(--ink-rgb),0.25);
  display:flex; }
.dirC .c-spread.flip .imgside { order:2; border-right:none; border-left:1px solid rgba(var(--ink-rgb),0.25); }
.dirC .c-parallax { position:absolute; inset:0; overflow:hidden; background:#231431; }
.dirC .c-parallax-bg { position:absolute; inset:-6%; background-size:cover; background-position:center;
  filter:blur(28px) brightness(0.8) saturate(1.05); transform:scale(1.08); }
.dirC .c-parallax-img { position:absolute; left:0; top:50%; translate:0 -50%;
  width:100%; height:auto; display:block; will-change:transform; transform:translate3d(0,0,0);
  box-shadow:0 24px 60px rgba(0,0,0,0.32); }
.dirC .c-card-img { width:100%; height:220px; object-fit:cover; display:block;
  border-bottom:1px solid rgba(var(--ink-rgb),0.25); }
.dirC .c-spread .txtside { display:flex; flex-direction:column; justify-content:center;
  padding:96px 80px; background-image:var(--tex-image); background-size:var(--tex-size); }
.dirC .c-spread .toprow { display:flex; align-items:baseline; justify-content:space-between; gap:20px;
  margin-bottom:26px; }
.dirC .c-spread .idx { font-size:13px; color:var(--accent); }
.dirC .c-spread .meta { font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:rgba(var(--ink-rgb),0.55); }
.dirC .c-spread h3 { font-size:clamp(44px, 4.4vw, 64px); line-height:1.0; letter-spacing:-0.03em;
  margin:0 0 28px; font-weight:600; }
.dirC .c-spread .desc { font-size:16.5px; line-height:1.75; margin:0 0 30px; max-width:46ch;
  color:rgba(var(--ink-rgb),0.88); }

.dirC .c-slots { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; padding:28px 80px 0; }
.dirC .c-slot { border:1.5px dashed rgba(var(--accent-rgb),0.5); border-radius:6px; padding:18px; font-size:12.5px;
  line-height:1.6; color:rgba(var(--ink-rgb),0.6); }
.dirC .c-slot .n { color:var(--accent); display:block; margin-bottom:6px; }

.dirC .c-about { margin:100px 80px 0; display:grid; grid-template-columns:1fr 1.1fr; gap:0;
  border:1px solid rgba(var(--ink-rgb),0.4); border-radius:6px; overflow:hidden; background:var(--surface); }
.dirC .c-about .left { padding:54px 56px; border-right:1px solid rgba(var(--ink-rgb),0.25); }
.dirC .c-about h2 { font-size:48px; letter-spacing:-0.03em; margin:0 0 24px; font-weight:600; }
.dirC .c-about p { font-size:15px; line-height:1.75; margin:0 0 16px; }
.dirC .c-about .right { padding:54px 56px; background:var(--invert-bg); color:var(--invert-text); display:flex; flex-direction:column; justify-content:center; }
.dirC .c-fact { display:flex; justify-content:space-between; gap:18px; padding:14px 0; font-size:13.5px;
  border-bottom:1px solid rgba(var(--invert-rgb),0.2); }
.dirC .c-fact:last-child { border-bottom:none; }
.dirC .c-fact .k { color:rgba(var(--invert-rgb),0.55); }

/* ---- Poems: sticky horizontal scroll sequence ---- */
.dirC .c-hwrap { position:relative; margin-top:100px; }
.dirC .c-hsticky { position:sticky; top:0; height:100vh; overflow:hidden;
  display:flex; flex-direction:column; }
.dirC .c-hhead { display:flex; align-items:baseline; justify-content:space-between;
  padding:96px 80px 0; flex:0 0 auto; }
.dirC .c-hhead .t { font-size:15px; font-weight:600; letter-spacing:0.02em; }
.dirC .c-hhead .n { font-size:12px; }
.dirC .c-hbody { flex:1; display:flex; align-items:center; min-height:0; }
.dirC .c-htrack { display:flex; align-items:stretch; gap:32px; padding:0 80px;
  will-change:transform; }
.dirC .c-hpoem { flex:0 0 540px; background:var(--surface); border:1px solid rgba(var(--ink-rgb),0.35); border-radius:6px;
  padding:46px 48px 38px; position:relative; display:flex; flex-direction:column;
  min-height:380px; max-height:62vh; }
.dirC .c-hpoem::before { content:attr(data-tag); position:absolute; top:-11px; left:26px; background:var(--accent);
  color:#fff; font-family:'IBM Plex Mono', monospace; font-size:10px; letter-spacing:0.18em; padding:4px 10px;
  border-radius:999px; transform:rotate(-1.5deg); }
.dirC .c-hpoem .pt { font-size:24px; font-weight:600; margin:0 0 20px; letter-spacing:-0.01em; }
.dirC .c-hpoem .pl { font-size:15px; line-height:2.05; white-space:pre-line; flex:1; }
.dirC .c-hpoem .rtl { direction:rtl; text-align:right; font-family:'Noto Sans Hebrew', sans-serif; }
.dirC .c-note { font-size:11px; color:rgba(var(--ink-rgb),0.45); margin-top:20px; }
.dirC .c-hslot { flex:0 0 420px; border:1.5px dashed rgba(var(--accent-rgb),0.5); border-radius:6px;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;
  font-size:12.5px; color:rgba(var(--ink-rgb),0.6); min-height:380px; max-height:62vh; text-align:center; padding:30px; }
.dirC .c-hslot .n { color:var(--accent); }
.dirC .c-hend { flex:0 0 auto; display:flex; align-items:center; padding-right:80px; }
.dirC .c-hend .big { font-size:64px; font-weight:600; letter-spacing:-0.03em; line-height:1.05;
  max-width:9ch; color:rgba(var(--ink-rgb),0.9); }
.dirC .c-hfoot { flex:0 0 auto; padding:0 80px 40px; }
.dirC .c-hrail { height:2px; background:rgba(var(--ink-rgb),0.15); position:relative; }
.dirC .c-hrail .fill { position:absolute; left:0; top:0; bottom:0; width:0%; background:var(--accent); }
.dirC .c-hmeta { display:flex; justify-content:space-between; margin-top:12px; font-size:11px;
  color:rgba(var(--ink-rgb),0.5); }

.dirC .c-strip { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; padding:0 80px; }
.dirC .c-shot { background:var(--surface); border:1px solid rgba(var(--ink-rgb),0.3); border-radius:6px; padding:10px 10px 14px; }
.dirC .c-shot:nth-child(even) { transform:rotate(0.8deg); }
.dirC .c-shot:nth-child(odd) { transform:rotate(-0.7deg); }
.dirC .c-shot .cap { font-size:11px; margin-top:10px; color:rgba(var(--ink-rgb),0.55); }

.dirC .c-footer { margin-top:108px; background:var(--invert-bg); color:var(--invert-text); padding:84px 80px 60px; }
.dirC .c-footer .big { font-size:clamp(60px, 6.5vw, 96px); line-height:0.98; letter-spacing:-0.03em; font-weight:600; margin:0 0 44px; max-width:14ch; }
.dirC .c-links { display:flex; gap:16px; }
.dirC .c-links a { color:var(--invert-bg); background:var(--invert-text); text-decoration:none; font-size:14px; font-weight:600;
  padding:13px 26px; border-radius:999px; }
.dirC .c-links a:hover { background:var(--accent); color:#fff; }
.dirC .c-foot-meta { display:flex; justify-content:space-between; margin-top:64px; font-size:11.5px; color:rgba(var(--invert-rgb),0.5); }
`;

// Palette presets — light neutrals + two dark variants.
const C_THEMES = {
  "Cool Paper": { bg:"#EEEEEB", ink:"#16171A", inkRgb:"22,23,26", accent:"#2B43E8", accentRgb:"43,67,232", accentBright:"#5C73FF", surface:"#FFFFFF", invertBg:"#16171A", invertText:"#EEEEEB", invertRgb:"238,238,235" },
  "Warm Sand": { bg:"#EDE6D8", ink:"#221B12", inkRgb:"34,27,18", accent:"#BF4D17", accentRgb:"191,77,23", accentBright:"#E07B3A", surface:"#FBF6EC", invertBg:"#221B12", invertText:"#EDE6D8", invertRgb:"237,230,216" },
  "Sage": { bg:"#E4E8DF", ink:"#171C14", inkRgb:"23,28,20", accent:"#2F6B43", accentRgb:"47,107,67", accentBright:"#4E9A66", surface:"#FAFCF6", invertBg:"#171C14", invertText:"#E4E8DF", invertRgb:"228,232,223" },
  "Ink (Dark)": { bg:"#141519", ink:"#E8E8E4", inkRgb:"232,232,228", accent:"#7184FF", accentRgb:"113,132,255", accentBright:"#97A4FF", surface:"#1E2026", invertBg:"#E8E8E4", invertText:"#141519", invertRgb:"20,21,25" },
  "Ember (Dark)": { bg:"#181314", ink:"#F0E7E2", inkRgb:"240,231,226", accent:"#E8814B", accentRgb:"232,129,75", accentBright:"#F2A074", surface:"#221B1C", invertBg:"#F0E7E2", invertText:"#181314", invertRgb:"24,19,20" },
};

const C_TEXTURES = {
  "Grid": { image:"linear-gradient(rgba(var(--ink-rgb),0.05) 1px, transparent 1px)", size:"100% 64px" },
  "Dots": { image:"radial-gradient(rgba(var(--ink-rgb),0.13) 1px, transparent 1px)", size:"22px 22px" },
  "Cursor": { image:"none", size:"auto" },
  "Plain": { image:"none", size:"auto" },
};

// Curated "leading colour" swatches — vivid accents that hold up on the dark theme.
const C_ACCENTS = ["#2B43E8", "#7184FF", "#22D3EE", "#4ADE80", "#F59E0B", "#F472B6"];
const C_PARALLAX_AMT = { "Off": 0, "Subtle": 0.55, "Strong": 1 };

function C_hexToRgbArr(h) {
  h = String(h).replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function C_rgb(h) { return C_hexToRgbArr(h).join(","); }
function C_lighten(h, amt) {
  const [r, g, b] = C_hexToRgbArr(h);
  const L = (v) => Math.round(v + (255 - v) * amt);
  return "rgb(" + L(r) + "," + L(g) + "," + L(b) + ")";
}

// Interactive dot field on a fixed canvas. Dots near the cursor are pulled
// toward it and glow in the accent colour, then ease back when it leaves.
function CDotField({ active, inkRgb, accentRgb, reduce }) {
  const canvasRef = React.useRef(null);
  const stateRef = React.useRef({ dots: [], mouse: { x: -9999, y: -9999 }, raf: 0, w: 0, h: 0 });

  React.useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const S = stateRef.current;
    const GAP = 34, R = 150;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      S.w = window.innerWidth; S.h = window.innerHeight;
      canvas.width = S.w * dpr; canvas.height = S.h * dpr;
      canvas.style.width = S.w + "px"; canvas.style.height = S.h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(S.w / GAP) + 1, rows = Math.ceil(S.h / GAP) + 1;
      const offx = (S.w - (cols - 1) * GAP) / 2, offy = (S.h - (rows - 1) * GAP) / 2;
      const dots = [];
      for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
        const bx = offx + c * GAP, by = offy + r * GAP;
        dots.push({ bx, by, x: bx, y: by });
      }
      S.dots = dots;
    };

    const draw = () => {
      ctx.clearRect(0, 0, S.w, S.h);
      const mx = S.mouse.x, my = S.mouse.y;
      for (const d of S.dots) {
        const dx = mx - d.bx, dy = my - d.by;
        const dist = Math.hypot(dx, dy);
        let tx = d.bx, ty = d.by, glow = 0;
        if (!reduce && dist < R) {
          const f = 1 - dist / R;
          const pull = f * f * 0.6;
          tx = d.bx + dx * pull; ty = d.by + dy * pull;
          glow = f;
        }
        d.x += (tx - d.x) * 0.15; d.y += (ty - d.y) * 0.15;
        const rad = 1.3 + glow * 2.2;
        ctx.beginPath();
        ctx.fillStyle = glow > 0.02
          ? "rgba(" + accentRgb + "," + (0.18 + glow * 0.55).toFixed(3) + ")"
          : "rgba(" + inkRgb + ",0.16)";
        ctx.arc(d.x, d.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      S.raf = requestAnimationFrame(draw);
    };

    const onMove = (e) => { S.mouse.x = e.clientX; S.mouse.y = e.clientY; };
    const onLeave = () => { S.mouse.x = -9999; S.mouse.y = -9999; };

    build(); draw();
    window.addEventListener("resize", build);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    return () => {
      cancelAnimationFrame(S.raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [active, inkRgb, accentRgb, reduce]);

  if (!active) return null;
  return <canvas ref={canvasRef} className="c-dotfield" aria-hidden="true"></canvas>;
}

// Sticky horizontal-scroll poems section.
// The wrapper's height = 100vh + horizontal distance, so vertical scroll
// "drives" the track sideways, then releases back to vertical flow.
function CPoemsHorizontal() {
  const D = window.PORTFOLIO_DATA;
  const wrapRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const fillRef = React.useRef(null);
  const countRef = React.useRef(null);
  const [wrapH, setWrapH] = React.useState("200vh");

  React.useEffect(() => {
    let dist = 0;
    let raf = 0;

    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      dist = Math.max(track.scrollWidth - document.documentElement.clientWidth, 0);
      setWrapH(window.innerHeight + dist + "px");
      apply();
    };

    const apply = () => {
      const wrap = wrapRef.current, track = trackRef.current;
      if (!wrap || !track || dist <= 0) return;
      const top = wrap.getBoundingClientRect().top + window.scrollY;
      const total = wrap.offsetHeight - window.innerHeight;
      const p = total > 0 ? Math.min(Math.max((window.scrollY - top) / total, 0), 1) : 0;
      track.style.transform = `translate3d(${-p * dist}px, 0, 0)`;
      if (fillRef.current) fillRef.current.style.width = (p * 100).toFixed(2) + "%";
      if (countRef.current) {
        const n = 4; // poem "stops"
        const i = Math.min(n, Math.floor(p * n) + 1);
        countRef.current.textContent = "0" + i + " / 0" + n;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="c-hwrap" id="poems" ref={wrapRef} style={{ height: wrapH }} data-screen-label="Poems — horizontal scroll">
      <div className="c-hsticky">
        <div className="c-hhead">
          <span className="t">Poems, occasionally</span>
          <span className="n mono cobalt">scroll ↓ = →</span>
        </div>
        <div className="c-hbody">
          <div className="c-htrack" ref={trackRef}>
            <div className="c-hpoem" data-tag="EN — POEM">
              <h4 className="pt">{D.poems.en.title}</h4>
              <div className="pl">{D.poems.en.lines.join("\n")}</div>
              <div className="c-note mono">{D.poems.note}</div>
            </div>
            <div className="c-hpoem" data-tag="HE — שיר">
              <h4 className="pt rtl">{D.poems.he.title}</h4>
              <div className="pl rtl">{D.poems.he.lines.join("\n")}</div>
              <div className="c-note mono">{D.poems.note}</div>
            </div>
            <div className="c-hslot mono">
              <span className="n">[ poem 03 ]</span>
              <span>open slot — drop a poem here</span>
            </div>
            <div className="c-hslot mono">
              <span className="n">[ poem 04 ]</span>
              <span>open slot — he or en</span>
            </div>
            <div className="c-hend">
              <div className="big">Back to <span className="cobalt">scrolling down</span>. ↓</div>
            </div>
          </div>
        </div>
        <div className="c-hfoot">
          <div className="c-hrail"><div className="fill" ref={fillRef}></div></div>
          <div className="c-hmeta mono">
            <span ref={countRef}>01 / 04</span>
            <span>(he + en)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Heading with selectable hover effect. CSS-driven for Highlight/Slide/Split,
// JS character-decode for Scramble. Accepts either `text` (string) or `parts`
// (array of {text, hl}) so the hero's nested highlight survives the effect.
function FxHeading({ text, parts, fx, block }) {
  const segs = parts || [{ text: text }];
  const refs = React.useRef([]);
  const rafRef = React.useRef(0);
  React.useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const runScramble = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*<>/0123456789";
    const total = segs.reduce((n, s) => n + s.text.length, 0);
    const start = performance.now(), dur = Math.min(300 + total * 14, 900);
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const reveal = p * total;
      let base = 0;
      segs.forEach((s, si) => {
        let out = "";
        for (let i = 0; i < s.text.length; i++) {
          const ch = s.text[i];
          if (ch === " " || ch === "&" || ch === "," || ch === ".") { out += ch; continue; }
          out += (base + i) < reveal ? ch : chars[(Math.random() * chars.length) | 0];
        }
        const el = refs.current[si]; if (el) el.textContent = out;
        base += s.text.length;
      });
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
      else segs.forEach((s, si) => { const el = refs.current[si]; if (el) el.textContent = s.text; });
    };
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  };

  const isScramble = fx === "Scramble";
  const cls = "fx-heading"
    + (block ? " fx-heading-block" : "")
    + (isScramble ? " fx-scramble" : (fx && fx !== "None" ? " fx-" + fx.toLowerCase() : ""));
  const inner = segs.map((s, si) => (
    <span key={si} ref={(el) => (refs.current[si] = el)} className={s.hl ? "c-hl" : undefined}>{s.text}</span>
  ));
  return <span className={cls} onMouseEnter={isScramble ? runScramble : undefined}>{inner}</span>;
}

// Scroll parallax: the project image drifts vertically inside its frame as the
// section passes through the viewport. Falls back to a static image when the
// amount is 0 or the user prefers reduced motion.
function ParallaxImage({ src, alt, amount }) {
  const wrapRef = React.useRef(null);
  const imgRef = React.useRef(null);
  React.useEffect(() => {
    const wrap = wrapRef.current, img = imgRef.current;
    if (!wrap || !img) return;
    const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !amount) { img.style.transform = "translate3d(0,0,0)"; return; }
    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = wrap.getBoundingClientRect();
      const span = Math.abs(img.offsetHeight - rect.height); // room to drift (letterbox or overflow)
      if (!span) { img.style.transform = "translate3d(0,0,0)"; return; }
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const progress = (vh - rect.top) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      const maxShift = (span / 2) * 0.9;              // stay within the frame
      const shift = (clamped - 0.5) * 2 * maxShift * amount;
      img.style.transform = "translate3d(0," + shift.toFixed(1) + "px,0)";
    };
    const onScroll = () => { if (!ticking) { window.requestAnimationFrame(update); ticking = true; } };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    if (!img.complete) img.addEventListener("load", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      img.removeEventListener("load", update);
    };
  }, [amount, src]);
  return (
    <div className="c-parallax" ref={wrapRef}>
      <div className="c-parallax-bg" style={{ backgroundImage: "url('" + src + "')" }}></div>
      <img className="c-parallax-img" ref={imgRef} src={src} alt={alt} />
    </div>
  );
}

// Original 2×2 card grid.
function CProjectsGrid({ headingFx }) {
  const D = window.PORTFOLIO_DATA;
  return (
    <div className="c-cards" data-screen-label="Selected work — grid">
      {D.projects.map((p) => (
        <article className="c-card" key={p.num}>
          {p.image
            ? <img className="c-card-img" src={p.image} alt={p.title} />
            : <image-slot id={"c-card-" + p.num} shape="rect" fit="cover"
                placeholder={"Drop image — " + p.title}
                style={{ display: "block", width: "100%", height: "220px", borderBottom: "1px solid rgba(var(--ink-rgb),0.25)" }}></image-slot>}
          <div className="body">
            <div className="row">
              <h3><FxHeading text={p.title} fx={headingFx} /></h3>
              <span className="num mono">{p.num}</span>
            </div>
            <div className="meta mono">{p.meta}</div>
            <p className="desc">{p.desc}</p>
            <div className="c-tags mono">{p.tags.map((t) => <span className="c-tag" key={t}>{t}</span>)}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

// Full-screen spreads: image fills one half, text sits on the other.
function CProjectsSpread({ alternate = true, headingFx, parallax = 0 }) {
  const D = window.PORTFOLIO_DATA;
  return (
    <div className="c-spreads" data-screen-label="Selected work — spreads">
      {D.projects.map((p, i) => (
        <article className={"c-spread" + (alternate && i % 2 === 1 ? " flip" : "")} key={p.num}>
          <div className="imgside">
            {p.image
              ? <ParallaxImage src={p.image} alt={p.title} amount={parallax} />
              : <image-slot id={"c-spread-" + p.num} shape="rect" fit="cover"
                  placeholder={"Drop image — " + p.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}></image-slot>}
          </div>
          <div className="txtside">
            <div className="toprow mono">
              <span className="idx">({p.num} / 07)</span>
              <span className="meta">{p.meta}</span>
            </div>
            <h3><FxHeading text={p.title} fx={headingFx} /></h3>
            <p className="desc">{p.desc}</p>
            <div className="c-tags mono">{p.tags.map((t) => <span className="c-tag" key={t}>{t}</span>)}</div>
          </div>
        </article>
      ))}
    </div>
  );
}

const C_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "Ink (Dark)",
  "texture": "Cursor",
  "accent": "",
  "projectsLayout": "Spreads",
  "alternateSides": true,
  "headingFx": "Scramble",
  "parallax": "Subtle"
}/*EDITMODE-END*/;

function DirectionCLive() {
  const D = window.PORTFOLIO_DATA;
  const [tweaks, setTweak] = useTweaks(C_TWEAK_DEFAULTS);
  const theme = C_THEMES[tweaks.theme] || C_THEMES["Cool Paper"];
  const tex = C_TEXTURES[tweaks.texture] || C_TEXTURES["Grid"];
  const accentHex = tweaks.accent || theme.accent;
  const accentRgb = C_rgb(accentHex);
  const accentBright = tweaks.accent ? C_lighten(accentHex, 0.24) : theme.accentBright;
  const isDark = tweaks.theme.includes("Dark");
  const reduce = typeof window !== "undefined" && window.matchMedia
    && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const rootStyle = {
    "--bg": theme.bg, "--ink": theme.ink, "--ink-rgb": theme.inkRgb,
    "--accent": accentHex, "--accent-rgb": accentRgb, "--accent-bright": accentBright,
    "--surface": theme.surface,
    "--invert-bg": theme.invertBg, "--invert-text": theme.invertText, "--invert-rgb": theme.invertRgb,
    "--tex-image": tex.image, "--tex-size": tex.size,
  };
  return (
    <div className="dirC" style={rootStyle}>
      <style>{dirCLiveCSS}</style>
      <GrainOverlay opacity={isDark ? 0.09 : 0.05} />
      <CDotField active={tweaks.texture === "Cursor"} inkRgb={theme.inkRgb} accentRgb={accentRgb} reduce={reduce} />

      <div className="c-content">
      <header className="c-topbar" data-screen-label="Top bar">
        <span className="c-logo">Elad Adler<span className="cobalt">®</span></span>
        <nav>
          <a href="#work">Work</a><a href="#about">About</a><a href="#poems">Poems</a><a href="#photos">Photos</a><a href="#contact">Contact</a>
        </nav>
        <span className="c-avail mono"><span className="dot"></span>AVAILABLE — 2026</span>
      </header>

      <section className="c-hero" data-screen-label="Hero">
        <div className="c-kicker mono">ux/ui design · product strategy · jerusalem</div>
        <h1><FxHeading block fx={tweaks.headingFx} parts={[
          { text: "Intuitive products, " },
          { text: "built on human psychology", hl: true },
          { text: "." },
        ]} /></h1>
        <div className="sub">
          <p>{D.bioShort}</p>
          <div className="c-stickers mono">
            <span className="c-sticker">B.Des — Bezalel</span>
            <span className="c-sticker blue">M.A. Psychodrama</span>
            <span className="c-sticker">AI-driven tools</span>
            <span className="c-sticker">Social-tech</span>
          </div>
        </div>
      </section>

      <div className="c-secthead" id="work">
        <span className="t">Selected work</span><span className="n mono cobalt">(01–04 of 07)</span>
      </div>
      {tweaks.projectsLayout === "Spreads" ? (
        <CProjectsSpread alternate={tweaks.alternateSides} headingFx={tweaks.headingFx} parallax={C_PARALLAX_AMT[tweaks.parallax] ?? 0.12} />
      ) : (
        <CProjectsGrid headingFx={tweaks.headingFx} />
      )}
      <div className="c-slots mono">
        {D.projectSlots.map((s) => (
          <div className="c-slot" key={s.num}><span className="n">{s.num}</span>{s.note}</div>
        ))}
      </div>

      <section className="c-about" id="about" data-screen-label="About">
        <div className="left">
          <h2>Psychology first, pixels second.</h2>
          <p>{D.bioLong}</p>
          <p className="mono cobalt" style={{ fontSize: 13 }}>→ design is empathy with a grid system.</p>
        </div>
        <div className="right">
          <div className="c-fact"><span className="k mono">Education</span><span>B.Des Bezalel · M.A. Psychodrama</span></div>
          <div className="c-fact"><span className="k mono">Focus</span><span>Care, community, learning</span></div>
          <div className="c-fact"><span className="k mono">Tools</span><span>Figma · Claude Code · Base44</span></div>
          <div className="c-fact"><span className="k mono">Currently</span><span>Open to good problems</span></div>
        </div>
      </section>

      <CPoemsHorizontal />

      <div className="c-secthead" id="photos" style={{ marginTop: 0 }}>
        <span className="t">Through the lens</span><span className="n mono cobalt">(film + digital)</span>
      </div>
      <div className="c-strip" data-screen-label="Photos">
        {D.photos.slice(0, 4).map((ph) => (
          <figure className="c-shot" key={ph.id} style={{ margin: 0 }}>
            <image-slot id={"c-shot-" + ph.id} shape="rounded" radius="5" fit="cover"
              placeholder="Drop photo"
              style={{ display: "block", width: "100%", height: "180px" }}></image-slot>
            <figcaption className="cap mono">{ph.caption}</figcaption>
          </figure>
        ))}
      </div>

      <footer className="c-footer" id="contact" data-screen-label="Footer">
        <h2 className="big">Have a good problem? <span style={{ color: "var(--accent-bright)" }}>Let's talk.</span></h2>
        <div className="c-links">
          {D.links.map((l) => <a href={l.href} key={l.label}>{l.label} ↗</a>)}
        </div>
        <div className="c-foot-meta mono">
          <span>© 2026 Elad Adler</span>
          <span>Jerusalem, IL</span>
          <span>v0.2 — studio sheet · live scroll</span>
        </div>
      </footer>
      </div>

      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakSelect label="Palette" value={tweaks.theme}
          options={["Cool Paper", "Warm Sand", "Sage", "Ink (Dark)", "Ember (Dark)"]}
          onChange={(v) => setTweak("theme", v)} />
        <TweakSelect label="Background" value={tweaks.texture}
          options={["Grid", "Dots", "Cursor", "Plain"]}
          onChange={(v) => setTweak("texture", v)} />
        <TweakColor label="Accent" value={tweaks.accent || theme.accent}
          options={C_ACCENTS}
          onChange={(v) => setTweak("accent", v)} />
        <TweakSection label="Projects" />
        <TweakRadio label="Layout" value={tweaks.projectsLayout}
          options={["Grid", "Spreads"]}
          onChange={(v) => setTweak("projectsLayout", v)} />
        <TweakToggle label="Alternate sides" value={tweaks.alternateSides}
          onChange={(v) => setTweak("alternateSides", v)} />
        <TweakRadio label="Image parallax" value={tweaks.parallax}
          options={["Off", "Subtle", "Strong"]}
          onChange={(v) => setTweak("parallax", v)} />
        <TweakSelect label="Heading hover" value={tweaks.headingFx}
          options={["None", "Scramble", "Highlight", "Slide", "Split"]}
          onChange={(v) => setTweak("headingFx", v)} />
      </TweaksPanel>
    </div>
  );
}

window.DirectionCLive = DirectionCLive;
