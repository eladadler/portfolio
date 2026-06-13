// Direction B — "Darkroom" · warm charcoal, bone text, acid-green marker, technical/terminal DIY
const dirBCSS = `
.dirB { background:#191713; color:#EDE7DA; font-family:'Space Mono', monospace; position:relative; overflow:hidden; }
.dirB * { box-sizing:border-box; }
.dirB .disp { font-family:'Space Grotesk', sans-serif; font-weight:600; letter-spacing:-0.02em; }
.dirB .acid { color:#C6F23E; }
.dirB .b-hl { background:linear-gradient(transparent 60%, rgba(198,242,62,0.32) 60% 95%, transparent 95%); }

.dirB .b-topbar { display:flex; align-items:center; justify-content:space-between; padding:24px 72px;
  border-bottom:1px solid rgba(237,231,218,0.18); font-size:12.5px; letter-spacing:0.06em; }
.dirB .b-topbar nav { display:flex; gap:30px; }
.dirB .b-topbar a { color:inherit; text-decoration:none; opacity:0.85; }
.dirB .b-topbar a:hover { color:#C6F23E; opacity:1; }
.dirB .b-id { display:flex; align-items:center; gap:10px; }
.dirB .b-dot { width:9px; height:9px; border-radius:50%; background:#C6F23E; }

.dirB .b-hero { padding:96px 72px 80px; position:relative; }
.dirB .b-kicker { font-size:12px; letter-spacing:0.22em; text-transform:uppercase; color:#C6F23E; margin-bottom:26px; }
.dirB .b-hero h1 { font-size:96px; line-height:1.0; margin:0 0 36px; max-width:13ch; }
.dirB .b-hero .sub { display:grid; grid-template-columns:1.1fr 1fr; gap:48px; align-items:start; }
.dirB .b-hero p { font-size:14.5px; line-height:1.85; margin:0; opacity:0.85; max-width:56ch; }
.dirB .b-creds { display:flex; flex-direction:column; }
.dirB .b-cred { display:flex; gap:14px; padding:11px 2px; border-bottom:1px solid rgba(237,231,218,0.18); font-size:12.5px; }
.dirB .b-cred:first-child { border-top:1px solid rgba(237,231,218,0.18); }
.dirB .b-cred .ix { color:#C6F23E; }
.dirB .b-cross { position:absolute; font-size:16px; color:rgba(237,231,218,0.35); }

.dirB .b-secthead { display:flex; align-items:center; gap:18px; padding:0 72px; margin:84px 0 40px; }
.dirB .b-secthead .t { font-size:42px; }
.dirB .b-secthead .n { font-size:11px; letter-spacing:0.2em; color:#C6F23E; }
.dirB .b-rule { flex:1; border-bottom:1px solid rgba(237,231,218,0.22); }

.dirB .b-cards { padding:0 72px; display:flex; flex-direction:column; }
.dirB .b-card { display:grid; grid-template-columns:90px 1fr 1.1fr; gap:36px; padding:38px 0;
  border-top:1px solid rgba(237,231,218,0.2); align-items:start; transition:background .2s; }
.dirB .b-card:last-child { border-bottom:1px solid rgba(237,231,218,0.2); }
.dirB .b-card:hover { background:rgba(198,242,62,0.04); }
.dirB .b-card .num { font-size:13px; color:#C6F23E; padding-top:6px; }
.dirB .b-card h3 { font-size:40px; margin:0 0 8px; }
.dirB .b-card .meta { font-size:11px; letter-spacing:0.14em; text-transform:uppercase; opacity:0.6; margin-bottom:14px; }
.dirB .b-card .desc { font-size:13.5px; line-height:1.8; opacity:0.88; margin:0 0 18px; max-width:48ch; }
.dirB .b-tags { display:flex; flex-wrap:wrap; gap:8px; }
.dirB .b-tag { font-size:11px; border:1px solid rgba(198,242,62,0.5); color:#C6F23E; padding:4px 12px; border-radius:2px; }
.dirB .b-frame { border:1px solid rgba(237,231,218,0.3); padding:10px; position:relative; }
.dirB .b-frame::before { content:'fig.'; position:absolute; top:-9px; left:12px; background:#191713;
  padding:0 8px; font-size:10px; letter-spacing:0.15em; color:rgba(237,231,218,0.5); }

.dirB .b-slots { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; padding:36px 72px 0; }
.dirB .b-slot { border:1px dashed rgba(237,231,218,0.35); padding:18px; font-size:12px; line-height:1.7; opacity:0.65; }
.dirB .b-slot .n { color:#C6F23E; display:block; margin-bottom:6px; }

.dirB .b-about { margin:96px 72px 0; border:1px solid rgba(237,231,218,0.25); padding:56px 60px;
  display:grid; grid-template-columns:1.2fr 1fr; gap:52px; position:relative; background:#1E1B16; }
.dirB .b-about::after { content:'// about'; position:absolute; top:-10px; left:30px; background:#191713;
  padding:0 10px; font-size:11px; letter-spacing:0.2em; color:#C6F23E; }
.dirB .b-about h2 { font-size:52px; margin:0 0 24px; }
.dirB .b-about p { font-size:14px; line-height:1.9; opacity:0.88; margin:0 0 16px; }

.dirB .b-poems { display:grid; grid-template-columns:1fr 1fr; gap:28px; padding:0 72px; }
.dirB .b-poem { border:1px solid rgba(237,231,218,0.25); padding:36px; background:#1E1B16; position:relative; }
.dirB .b-poem .pt { font-size:24px; margin:0 0 18px; }
.dirB .b-poem .pl { font-size:14px; line-height:2.1; white-space:pre-line; opacity:0.9; }
.dirB .b-poem .rtl { direction:rtl; text-align:right; font-family:'Noto Sans Hebrew', sans-serif; }
.dirB .b-poem .ln { position:absolute; top:36px; right:30px; font-size:10px; letter-spacing:0.2em; color:rgba(237,231,218,0.4); }
.dirB .b-note { font-size:11px; opacity:0.5; margin-top:20px; border-top:1px dashed rgba(237,231,218,0.25); padding-top:12px; }

.dirB .b-strip { display:grid; grid-template-columns:2fr 1fr 1fr 1fr 2fr; gap:14px; padding:0 72px; }
.dirB .b-shot { position:relative; }
.dirB .b-shot .cap { font-size:10.5px; letter-spacing:0.1em; opacity:0.55; margin-top:8px; }

.dirB .b-footer { margin-top:104px; border-top:1px solid rgba(237,231,218,0.25); padding:72px; background:#15130F; }
.dirB .b-footer .big { font-size:108px; line-height:0.95; margin:0 0 40px; }
.dirB .b-links { display:flex; gap:18px; }
.dirB .b-links a { color:#191713; background:#C6F23E; text-decoration:none; font-size:14px; padding:12px 24px;
  border-radius:2px; font-weight:700; }
.dirB .b-links a:hover { transform:rotate(-1.5deg); display:inline-block; }
.dirB .b-foot-meta { display:flex; justify-content:space-between; margin-top:60px; font-size:11px;
  letter-spacing:0.12em; text-transform:uppercase; opacity:0.5; }
`;

function DirectionB() {
  const D = window.PORTFOLIO_DATA;
  return (
    <div className="dirB">
      <style>{dirBCSS}</style>
      <GrainOverlay opacity={0.1} blend="overlay" />

      <header className="b-topbar">
        <span className="b-id"><span className="b-dot"></span>elad_adler.ux</span>
        <nav>
          <a href="#">work</a><a href="#">about</a><a href="#">poems</a><a href="#">photos</a><a href="#">contact</a>
        </nav>
        <span className="acid">[ open to work ]</span>
      </header>

      <section className="b-hero">
        <span className="b-cross" style={{ top: 30, right: 60 }}>+</span>
        <span className="b-cross" style={{ bottom: 40, left: 40 }}>+</span>
        <div className="b-kicker">ux/ui designer · product strategist</div>
        <h1 className="disp">Human psychology, <span className="b-hl acid">compiled</span> into working products.</h1>
        <div className="sub">
          <p>{D.bioShort} {D.bioLong}</p>
          <div className="b-creds">
            {D.credentials.map((c, i) => (
              <div className="b-cred" key={c}><span className="ix">0{i + 1}</span><span>{c}</span></div>
            ))}
          </div>
        </div>
      </section>

      <div className="b-secthead">
        <span className="n">[SEC.01]</span><span className="t disp">Selected work</span><span className="b-rule"></span><span className="n">04 / 07</span>
      </div>
      <div className="b-cards">
        {D.projects.map((p) => (
          <article className="b-card" key={p.num}>
            <span className="num">{p.num}</span>
            <div>
              <h3 className="disp">{p.title}</h3>
              <div className="meta">{p.meta}</div>
              <p className="desc">{p.desc}</p>
              <div className="b-tags">{p.tags.map((t) => <span className="b-tag" key={t}>{t}</span>)}</div>
            </div>
            <div className="b-frame">
              <PhotoSlot label={p.placeholder} height={200} tone="light" />
            </div>
          </article>
        ))}
      </div>
      <div className="b-slots">
        {D.projectSlots.map((s) => (
          <div className="b-slot" key={s.num}><span className="n">[{s.num}]</span>{s.note}</div>
        ))}
      </div>

      <section className="b-about">
        <div>
          <h2 className="disp">Psychology first, pixels second.</h2>
          <p>{D.bioLong}</p>
          <p className="acid" style={{ fontSize: 13 }}>&gt; design is empathy with a grid system_</p>
        </div>
        <div className="b-frame" style={{ alignSelf: "center" }}>
          <PhotoSlot label="portrait — elad" height={280} tone="light" />
        </div>
      </section>

      <div className="b-secthead">
        <span className="n">[SEC.02]</span><span className="t disp">Poems, occasionally</span><span className="b-rule"></span><span className="n">he + en</span>
      </div>
      <div className="b-poems">
        <div className="b-poem">
          <span className="ln">EN.TXT</span>
          <h4 className="pt disp">{D.poems.en.title}</h4>
          <div className="pl">{D.poems.en.lines.join("\n")}</div>
          <div className="b-note">{D.poems.note}</div>
        </div>
        <div className="b-poem">
          <span className="ln" style={{ right: "auto", left: 30 }}>HE.TXT</span>
          <h4 className="pt disp rtl">{D.poems.he.title}</h4>
          <div className="pl rtl">{D.poems.he.lines.join("\n")}</div>
          <div className="b-note">{D.poems.note}</div>
        </div>
      </div>

      <div className="b-secthead">
        <span className="n">[SEC.03]</span><span className="t disp">Through the lens</span><span className="b-rule"></span><span className="n">film + digital</span>
      </div>
      <div className="b-strip">
        {D.photos.map((ph) => (
          <figure className="b-shot" key={ph.id} style={{ margin: 0 }}>
            <PhotoSlot label="drop photo" height={170} tone="light" />
            <figcaption className="cap">{ph.caption.toUpperCase()}</figcaption>
          </figure>
        ))}
      </div>

      <footer className="b-footer">
        <h2 className="big disp">Let's build<br />something <span className="acid">good.</span></h2>
        <div className="b-links">
          {D.links.map((l) => <a href={l.href} key={l.label}>{l.label} ↗</a>)}
        </div>
        <div className="b-foot-meta">
          <span>© 2026 elad adler</span>
          <span>jerusalem · 31.78°N 35.21°E</span>
          <span>build v0.1 — darkroom</span>
        </div>
      </footer>
    </div>
  );
}

window.DirectionB = DirectionB;
