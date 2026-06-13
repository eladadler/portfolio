// Direction C — "Studio Sheet" · cool neutral, ink, cobalt accent, polished Swiss with DIY stickers
const dirCCSS = `
.dirC { background:#EEEEEB; color:#16171A; font-family:'Archivo', sans-serif; position:relative; overflow:hidden; }
.dirC * { box-sizing:border-box; }
.dirC .mono { font-family:'IBM Plex Mono', monospace; }
.dirC .cobalt { color:#2B43E8; }
.dirC .c-hl { box-shadow:inset 0 -0.38em rgba(43,67,232,0.22); }

.dirC .c-topbar { display:flex; align-items:center; justify-content:space-between; padding:22px 80px;
  border-bottom:1px solid rgba(22,23,26,0.5); font-size:13px; }
.dirC .c-topbar nav { display:flex; gap:32px; }
.dirC .c-topbar a { color:inherit; text-decoration:none; }
.dirC .c-topbar a:hover { color:#2B43E8; }
.dirC .c-logo { font-weight:700; letter-spacing:-0.01em; font-size:15px; }
.dirC .c-avail { display:flex; align-items:center; gap:8px; font-size:11.5px; }
.dirC .c-avail .dot { width:8px; height:8px; border-radius:50%; background:#2B43E8; }

.dirC .c-hero { padding:100px 80px 84px; position:relative;
  background-image:linear-gradient(rgba(22,23,26,0.05) 1px, transparent 1px); background-size:100% 64px; }
.dirC .c-kicker { font-size:12px; letter-spacing:0.2em; text-transform:uppercase; margin-bottom:28px; }
.dirC .c-hero h1 { font-size:104px; line-height:0.98; letter-spacing:-0.035em; margin:0 0 40px; font-weight:600; max-width:12ch; }
.dirC .c-hero .sub { display:grid; grid-template-columns:1.2fr 1fr; gap:56px; align-items:end; }
.dirC .c-hero p { font-size:16px; line-height:1.7; margin:0; max-width:54ch; }
.dirC .c-stickers { display:flex; flex-wrap:wrap; gap:10px; justify-content:flex-end; }
.dirC .c-sticker { background:#FFFFFF; border:1px solid rgba(22,23,26,0.35); border-radius:999px;
  padding:9px 18px; font-size:12.5px; box-shadow:0 3px 8px rgba(22,23,26,0.08); }
.dirC .c-sticker:nth-child(1){transform:rotate(-2deg);} .dirC .c-sticker:nth-child(2){transform:rotate(1.5deg);}
.dirC .c-sticker:nth-child(3){transform:rotate(-1deg);} .dirC .c-sticker:nth-child(4){transform:rotate(2deg);}
.dirC .c-sticker.blue { background:#2B43E8; color:#fff; border-color:#2B43E8; }

.dirC .c-secthead { display:flex; align-items:baseline; justify-content:space-between; padding:0 80px; margin:92px 0 44px; }
.dirC .c-secthead .t { font-size:15px; font-weight:600; letter-spacing:0.02em; }
.dirC .c-secthead .n { font-size:12px; }

.dirC .c-cards { display:grid; grid-template-columns:1fr 1fr; gap:28px; padding:0 80px; }
.dirC .c-card { background:#FFFFFF; border:1px solid rgba(22,23,26,0.4); border-radius:6px; overflow:hidden;
  transition:transform .25s ease, box-shadow .25s ease; }
.dirC .c-card:hover { transform:translateY(-5px); box-shadow:0 16px 32px rgba(22,23,26,0.12); }
.dirC .c-card .body { padding:24px 26px 28px; }
.dirC .c-card .row { display:flex; align-items:baseline; justify-content:space-between; gap:14px; }
.dirC .c-card h3 { font-size:30px; margin:0; font-weight:600; letter-spacing:-0.02em; }
.dirC .c-card .num { font-size:12px; color:#2B43E8; }
.dirC .c-card .meta { font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:rgba(22,23,26,0.55); margin:8px 0 14px; }
.dirC .c-card .desc { font-size:14px; line-height:1.65; margin:0 0 18px; color:rgba(22,23,26,0.85); }
.dirC .c-tags { display:flex; flex-wrap:wrap; gap:8px; }
.dirC .c-tag { font-size:11.5px; background:#EEEEEB; border:1px solid rgba(22,23,26,0.25); padding:5px 12px; border-radius:999px; }

.dirC .c-slots { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; padding:28px 80px 0; }
.dirC .c-slot { border:1.5px dashed rgba(43,67,232,0.5); border-radius:6px; padding:18px; font-size:12.5px;
  line-height:1.6; color:rgba(22,23,26,0.6); }
.dirC .c-slot .n { color:#2B43E8; display:block; margin-bottom:6px; }

.dirC .c-about { margin:100px 80px 0; display:grid; grid-template-columns:1fr 1.1fr; gap:0;
  border:1px solid rgba(22,23,26,0.4); border-radius:6px; overflow:hidden; background:#fff; }
.dirC .c-about .left { padding:54px 56px; border-right:1px solid rgba(22,23,26,0.25); }
.dirC .c-about h2 { font-size:48px; letter-spacing:-0.03em; margin:0 0 24px; font-weight:600; }
.dirC .c-about p { font-size:15px; line-height:1.75; margin:0 0 16px; }
.dirC .c-about .right { padding:54px 56px; background:#16171A; color:#EEEEEB; display:flex; flex-direction:column; justify-content:center; }
.dirC .c-fact { display:flex; justify-content:space-between; gap:18px; padding:14px 0; font-size:13.5px;
  border-bottom:1px solid rgba(238,238,235,0.2); }
.dirC .c-fact:last-child { border-bottom:none; }
.dirC .c-fact .k { color:rgba(238,238,235,0.55); }

.dirC .c-poems { display:grid; grid-template-columns:1fr 1fr; gap:28px; padding:0 80px; }
.dirC .c-poem { background:#fff; border:1px solid rgba(22,23,26,0.35); border-radius:6px; padding:38px 40px;
  position:relative; }
.dirC .c-poem::before { content:attr(data-tag); position:absolute; top:-11px; left:26px; background:#2B43E8;
  color:#fff; font-family:'IBM Plex Mono', monospace; font-size:10px; letter-spacing:0.18em; padding:4px 10px;
  border-radius:999px; transform:rotate(-1.5deg); }
.dirC .c-poem .pt { font-size:22px; font-weight:600; margin:0 0 18px; letter-spacing:-0.01em; }
.dirC .c-poem .pl { font-size:14.5px; line-height:2.05; white-space:pre-line; }
.dirC .c-poem .rtl { direction:rtl; text-align:right; font-family:'Noto Sans Hebrew', sans-serif; }
.dirC .c-note { font-size:11px; color:rgba(22,23,26,0.45); margin-top:20px; }

.dirC .c-strip { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; padding:0 80px; }
.dirC .c-shot { background:#fff; border:1px solid rgba(22,23,26,0.3); border-radius:6px; padding:10px 10px 14px; }
.dirC .c-shot:nth-child(even) { transform:rotate(0.8deg); }
.dirC .c-shot:nth-child(odd) { transform:rotate(-0.7deg); }
.dirC .c-shot .cap { font-size:11px; margin-top:10px; color:rgba(22,23,26,0.55); }

.dirC .c-footer { margin-top:108px; background:#16171A; color:#EEEEEB; padding:84px 80px 60px; }
.dirC .c-footer .big { font-size:96px; line-height:0.98; letter-spacing:-0.03em; font-weight:600; margin:0 0 44px; max-width:14ch; }
.dirC .c-links { display:flex; gap:16px; }
.dirC .c-links a { color:#16171A; background:#EEEEEB; text-decoration:none; font-size:14px; font-weight:600;
  padding:13px 26px; border-radius:999px; }
.dirC .c-links a:hover { background:#2B43E8; color:#fff; }
.dirC .c-foot-meta { display:flex; justify-content:space-between; margin-top:64px; font-size:11.5px; color:rgba(238,238,235,0.5); }
`;

function DirectionC() {
  const D = window.PORTFOLIO_DATA;
  return (
    <div className="dirC">
      <style>{dirCCSS}</style>
      <GrainOverlay opacity={0.05} />

      <header className="c-topbar">
        <span className="c-logo">Elad Adler<span className="cobalt">®</span></span>
        <nav>
          <a href="#">Work</a><a href="#">About</a><a href="#">Poems</a><a href="#">Photos</a><a href="#">Contact</a>
        </nav>
        <span className="c-avail mono"><span className="dot"></span>AVAILABLE — 2026</span>
      </header>

      <section className="c-hero">
        <div className="c-kicker mono">ux/ui design · product strategy · jerusalem</div>
        <h1>Intuitive products, <span className="c-hl">built on human psychology</span>.</h1>
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

      <div className="c-secthead">
        <span className="t">Selected work</span><span className="n mono cobalt">(01–04 of 07)</span>
      </div>
      <div className="c-cards">
        {D.projects.map((p) => (
          <article className="c-card" key={p.num}>
            <PhotoSlot label={p.placeholder} height={220} style={{ border: "none", borderBottom: "1px solid rgba(22,23,26,0.25)" }} />
            <div className="body">
              <div className="row">
                <h3>{p.title}</h3>
                <span className="num mono">{p.num}</span>
              </div>
              <div className="meta mono">{p.meta}</div>
              <p className="desc">{p.desc}</p>
              <div className="c-tags mono">{p.tags.map((t) => <span className="c-tag" key={t}>{t}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <div className="c-slots mono">
        {D.projectSlots.map((s) => (
          <div className="c-slot" key={s.num}><span className="n">{s.num}</span>{s.note}</div>
        ))}
      </div>

      <section className="c-about">
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

      <div className="c-secthead">
        <span className="t">Poems, occasionally</span><span className="n mono cobalt">(he + en)</span>
      </div>
      <div className="c-poems">
        <div className="c-poem" data-tag="EN — POEM">
          <h4 className="pt">{D.poems.en.title}</h4>
          <div className="pl">{D.poems.en.lines.join("\n")}</div>
          <div className="c-note mono">{D.poems.note}</div>
        </div>
        <div className="c-poem" data-tag="HE — שיר">
          <h4 className="pt rtl">{D.poems.he.title}</h4>
          <div className="pl rtl">{D.poems.he.lines.join("\n")}</div>
          <div className="c-note mono">{D.poems.note}</div>
        </div>
      </div>

      <div className="c-secthead">
        <span className="t">Through the lens</span><span className="n mono cobalt">(film + digital)</span>
      </div>
      <div className="c-strip">
        {D.photos.slice(0, 4).map((ph) => (
          <figure className="c-shot" key={ph.id} style={{ margin: 0 }}>
            <PhotoSlot label="drop photo" height={180} />
            <figcaption className="cap mono">{ph.caption}</figcaption>
          </figure>
        ))}
      </div>

      <footer className="c-footer">
        <h2 className="big">Have a good problem? <span style={{ color: "#5C73FF" }}>Let's talk.</span></h2>
        <div className="c-links">
          {D.links.map((l) => <a href={l.href} key={l.label}>{l.label} ↗</a>)}
        </div>
        <div className="c-foot-meta mono">
          <span>© 2026 Elad Adler</span>
          <span>Jerusalem, IL</span>
          <span>v0.1 — studio sheet</span>
        </div>
      </footer>
    </div>
  );
}

window.DirectionC = DirectionC;
