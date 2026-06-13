// Direction A — "Field Notes" · warm paper, ink, marker red, scrapbook collage
const dirACSS = `
.dirA { background:#F4EFE6; color:#1D1812; font-family:'IBM Plex Mono', monospace; position:relative; overflow:hidden; }
.dirA * { box-sizing:border-box; }
.dirA .serif { font-family:'Instrument Serif', serif; font-weight:400; }
.dirA .hand { font-family:'Caveat', cursive; }
.dirA .a-pad { padding:0 72px; }

.dirA .a-topbar { display:flex; align-items:center; justify-content:space-between; padding:26px 72px;
  border-bottom:1px dashed rgba(29,24,18,0.35); font-size:13px; letter-spacing:0.04em; }
.dirA .a-topbar nav { display:flex; gap:28px; }
.dirA .a-topbar a { color:inherit; text-decoration:none; }
.dirA .a-topbar a:hover { text-decoration:underline wavy #E0492A 1.5px; text-underline-offset:5px; }
.dirA .a-stamp { border:1.5px solid #1D1812; border-radius:999px; padding:4px 12px; font-size:11px;
  transform:rotate(-2deg); background:#F4EFE6; }

.dirA .a-hero { padding:84px 72px 72px; display:grid; grid-template-columns:1.4fr 1fr; gap:48px; align-items:center; }
.dirA .a-kicker { font-size:13px; letter-spacing:0.18em; text-transform:uppercase; margin-bottom:22px; }
.dirA .a-hero h1 { font-size:92px; line-height:1.02; margin:0 0 30px; letter-spacing:-0.01em; }
.dirA .a-hl { background:linear-gradient(transparent 58%, rgba(224,73,42,0.45) 58% 94%, transparent 94%); }
.dirA .a-hero p { font-size:15px; line-height:1.75; max-width:52ch; margin:0 0 28px; }
.dirA .a-chips { display:flex; flex-wrap:wrap; gap:10px; }
.dirA .a-chip { border:1.5px solid #1D1812; padding:7px 14px; font-size:12px; border-radius:2px; background:#FBF8F1;
  box-shadow:2px 2px 0 rgba(29,24,18,0.85); }
.dirA .a-chip:nth-child(even) { transform:rotate(1.2deg); }
.dirA .a-chip:nth-child(odd) { transform:rotate(-1deg); }

.dirA .a-polaroid { background:#FBF8F1; padding:14px 14px 48px; border:1px solid rgba(29,24,18,0.25);
  box-shadow:0 12px 28px rgba(29,24,18,0.18); transform:rotate(2.5deg); position:relative; }
.dirA .a-polaroid .cap { position:absolute; bottom:14px; left:16px; font-size:20px; transform:rotate(-1deg); }
.dirA .a-tape { position:absolute; width:96px; height:28px; background:rgba(224,201,127,0.55);
  border-left:1px dashed rgba(29,24,18,0.2); border-right:1px dashed rgba(29,24,18,0.2);
  top:-14px; left:50%; transform:translateX(-50%) rotate(-3deg); z-index:3; }

.dirA .a-secthead { display:flex; align-items:baseline; gap:20px; padding:0 72px; margin:90px 0 36px; }
.dirA .a-secthead .t { font-size:48px; }
.dirA .a-secthead .n { font-size:12px; letter-spacing:0.18em; text-transform:uppercase; }
.dirA .a-rule { flex:1; border-bottom:1.5px dashed rgba(29,24,18,0.4); }

.dirA .a-cards { display:grid; grid-template-columns:1fr 1fr; gap:40px 36px; padding:0 72px; }
.dirA .a-card { background:#FBF8F1; border:1.5px solid #1D1812; padding:22px; position:relative;
  box-shadow:4px 4px 0 rgba(29,24,18,0.85); transition:transform .25s ease; }
.dirA .a-card:hover { transform:rotate(0deg) translateY(-4px); }
.dirA .a-card:nth-child(odd) { transform:rotate(-0.6deg); }
.dirA .a-card:nth-child(even) { transform:rotate(0.7deg); }
.dirA .a-card .num { position:absolute; top:-18px; left:18px; background:#E0492A; color:#FBF8F1;
  font-size:13px; padding:4px 10px; transform:rotate(-3deg); letter-spacing:0.1em; }
.dirA .a-card h3 { font-size:36px; margin:18px 0 4px; }
.dirA .a-card .meta { font-size:11px; letter-spacing:0.12em; text-transform:uppercase; color:#8A5A3C; }
.dirA .a-card .desc { font-size:13.5px; line-height:1.7; margin:12px 0 16px; }
.dirA .a-tags { display:flex; flex-wrap:wrap; gap:8px; }
.dirA .a-tag { font-size:11px; border:1px solid rgba(29,24,18,0.5); border-radius:999px; padding:4px 11px; }

.dirA .a-slots { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; padding:32px 72px 0; }
.dirA .a-slot { border:1.5px dashed rgba(29,24,18,0.45); padding:18px; font-size:12px; line-height:1.6;
  color:rgba(29,24,18,0.6); background:transparent; }
.dirA .a-slot .n { color:#E0492A; display:block; margin-bottom:6px; }

.dirA .a-about { margin:100px 72px 0; padding:56px 60px; background:#EDE4D2; border:1px solid rgba(29,24,18,0.2);
  display:grid; grid-template-columns:1.2fr 1fr; gap:48px; position:relative; }
.dirA .a-about h2 { font-size:54px; margin:0 0 22px; }
.dirA .a-about p { font-size:14px; line-height:1.8; margin:0 0 16px; }
.dirA .a-facts { display:flex; flex-direction:column; gap:0; align-self:center; }
.dirA .a-fact { display:flex; justify-content:space-between; gap:16px; padding:13px 2px; font-size:13px;
  border-bottom:1px dashed rgba(29,24,18,0.4); }
.dirA .a-fact:first-child { border-top:1px dashed rgba(29,24,18,0.4); }

.dirA .a-poems { display:grid; grid-template-columns:1fr 1fr; gap:36px; padding:0 72px; }
.dirA .a-poem { background:#FBF8F1; border:1px solid rgba(29,24,18,0.3); padding:34px 34px 28px; position:relative;
  box-shadow:0 10px 24px rgba(29,24,18,0.12); }
.dirA .a-poem:first-child { transform:rotate(-1deg); }
.dirA .a-poem:last-child { transform:rotate(1.1deg); }
.dirA .a-poem .pt { font-size:26px; margin:0 0 16px; }
.dirA .a-poem .pl { font-size:14px; line-height:2; white-space:pre-line; }
.dirA .a-poem .rtl { direction:rtl; text-align:right; font-family:'Noto Sans Hebrew','IBM Plex Mono',sans-serif; }
.dirA .a-note { font-size:11px; color:rgba(29,24,18,0.5); margin-top:18px; border-top:1px dashed rgba(29,24,18,0.3); padding-top:10px; }

.dirA .a-strip { display:grid; grid-template-columns:repeat(5,1fr); gap:18px; padding:0 72px; }
.dirA .a-shot { background:#FBF8F1; padding:8px 8px 26px; border:1px solid rgba(29,24,18,0.25);
  box-shadow:0 8px 18px rgba(29,24,18,0.14); position:relative; }
.dirA .a-shot:nth-child(1){transform:rotate(-2deg);} .dirA .a-shot:nth-child(2){transform:rotate(1.4deg);}
.dirA .a-shot:nth-child(3){transform:rotate(-0.8deg);} .dirA .a-shot:nth-child(4){transform:rotate(2deg);}
.dirA .a-shot:nth-child(5){transform:rotate(-1.4deg);}
.dirA .a-shot .cap { font-size:11px; padding:8px 4px 0; color:rgba(29,24,18,0.6); }

.dirA .a-footer { margin-top:110px; border-top:1.5px solid #1D1812; padding:70px 72px 56px; background:#EDE4D2; }
.dirA .a-footer .big { font-size:100px; line-height:1; margin:0 0 34px; }
.dirA .a-links { display:flex; gap:36px; font-size:15px; }
.dirA .a-links a { color:inherit; text-decoration:underline wavy #E0492A 1.5px; text-underline-offset:6px; }
.dirA .a-foot-meta { display:flex; justify-content:space-between; margin-top:54px; font-size:11px;
  letter-spacing:0.1em; text-transform:uppercase; color:rgba(29,24,18,0.55); }
`;

function Tape({ style }) {
  return <span className="a-tape" style={style}></span>;
}

function DirectionA() {
  const D = window.PORTFOLIO_DATA;
  return (
    <div className="dirA">
      <style>{dirACSS}</style>
      <GrainOverlay opacity={0.08} />

      <header className="a-topbar">
        <span className="a-stamp">ELAD ADLER · UX/UI</span>
        <nav>
          <a href="#">work</a><a href="#">about</a><a href="#">poems</a><a href="#">photos</a><a href="#">contact</a>
        </nav>
        <span>JLM · 31.78°N</span>
      </header>

      <section className="a-hero">
        <div>
          <div className="a-kicker">field notes of a designer</div>
          <h1 className="serif">Calm, human software — <span className="a-hl">designed with feeling</span>, shipped for real.</h1>
          <p>{D.bioShort}</p>
          <div className="a-chips">
            {D.credentials.map((c) => <span className="a-chip" key={c}>{c}</span>)}
          </div>
        </div>
        <div className="a-polaroid">
          <Tape />
          <PhotoSlot label="portrait — elad" height={300} />
          <span className="cap hand">that's me ↑ (probably mid-sentence)</span>
        </div>
      </section>

      <div className="a-secthead">
        <span className="n">sec.01</span><span className="t serif">Selected work</span><span className="a-rule"></span><span className="n">4 of 7</span>
      </div>
      <div className="a-cards">
        {D.projects.map((p) => (
          <article className="a-card" key={p.num}>
            <span className="num">PROJ.{p.num}</span>
            <PhotoSlot label={p.placeholder} height={210} />
            <h3 className="serif">{p.title}</h3>
            <div className="meta">{p.meta}</div>
            <p className="desc">{p.desc}</p>
            <div className="a-tags">{p.tags.map((t) => <span className="a-tag" key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
      <div className="a-slots">
        {D.projectSlots.map((s) => (
          <div className="a-slot" key={s.num}><span className="n">PROJ.{s.num}</span>{s.note}</div>
        ))}
      </div>

      <section className="a-about">
        <Tape style={{ left: "12%", transform: "rotate(4deg)" }} />
        <div>
          <h2 className="serif">Psychology first,<br />pixels second.</h2>
          <p>{D.bioLong}</p>
          <p className="hand" style={{ fontSize: 22, transform: "rotate(-1deg)" }}>— design is just empathy with a grid system.</p>
        </div>
        <div className="a-facts">
          <div className="a-fact"><span>Education</span><span>B.Des Bezalel · M.A. Psychodrama</span></div>
          <div className="a-fact"><span>Focus</span><span>Care, community, learning</span></div>
          <div className="a-fact"><span>Tools</span><span>Figma · Claude Code · Base44</span></div>
          <div className="a-fact"><span>Currently</span><span>Open to good problems</span></div>
        </div>
      </section>

      <div className="a-secthead">
        <span className="n">sec.02</span><span className="t serif">Poems, occasionally</span><span className="a-rule"></span><span className="n">he + en</span>
      </div>
      <div className="a-poems">
        <div className="a-poem">
          <Tape style={{ width: 70 }} />
          <h4 className="pt serif">{D.poems.en.title}</h4>
          <div className="pl">{D.poems.en.lines.join("\n")}</div>
          <div className="a-note">{D.poems.note}</div>
        </div>
        <div className="a-poem">
          <Tape style={{ width: 70, left: "70%" }} />
          <h4 className="pt serif rtl">{D.poems.he.title}</h4>
          <div className="pl rtl">{D.poems.he.lines.join("\n")}</div>
          <div className="a-note">{D.poems.note}</div>
        </div>
      </div>

      <div className="a-secthead">
        <span className="n">sec.03</span><span className="t serif">Through the lens</span><span className="a-rule"></span><span className="n">film + digital</span>
      </div>
      <div className="a-strip">
        {D.photos.map((ph) => (
          <figure className="a-shot" key={ph.id} style={{ margin: 0 }}>
            <PhotoSlot label="drop photo" height={150} />
            <figcaption className="cap">{ph.caption}</figcaption>
          </figure>
        ))}
      </div>

      <footer className="a-footer">
        <h2 className="big serif">Say hi<span style={{ color: "#E0492A" }}>.</span></h2>
        <div className="a-links">
          {D.links.map((l) => <a href={l.href} key={l.label}>{l.label}</a>)}
        </div>
        <div className="a-foot-meta">
          <span>© 2026 Elad Adler</span>
          <span>made with care in Jerusalem</span>
          <span>v0.1 — field notes</span>
        </div>
      </footer>
    </div>
  );
}

window.DirectionA = DirectionA;
