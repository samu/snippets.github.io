"use strict";(globalThis.webpackChunklandingpage_new=globalThis.webpackChunklandingpage_new||[]).push([[125],{5064(e,a,r){r.r(a),r.d(a,{default:()=>$});var t=r(1498),n=r(4424);const o=JSON.parse('{"title":"Pricing","subtitle":"Start for free and upgrade when you need more power, privacy, or cloud features.","plans":[{"name":"Free","price":"$0","priceNote":"/forever","featured":false,"muted":false,"badge":null,"features":[{"text":"Unlimited workspaces","planned":false},{"text":"Unlimited notes","planned":false},{"text":"Sync across multiple devices with GitHub","planned":false},{"text":"Sync with Folder","planned":false}],"plannedFeatures":[]},{"name":"Pro","price":"$12","priceNote":"/year","featured":true,"muted":false,"badge":"Coming Soon","features":[{"text":"Access to full icon set","planned":false},{"text":"GitHub sync with end-to-end encryption and unlimited branches","planned":false}],"plannedFeatures":[{"text":"Local reminders","planned":true},{"text":"More visualizations","planned":true},{"text":"More customization options","planned":true},{"text":"More themes","planned":true},{"text":"Additional algorithms for flashcards","planned":true},{"text":"Image occlusion in flashcards","planned":true},{"text":"Bring your own AI","planned":true}]},{"name":"Cloud","price":"Coming soon","priceNote":null,"featured":false,"muted":true,"badge":"Planned","features":[{"text":"Cloud sync with end-to-end encryption","planned":true},{"text":"Backend-driven reminders","planned":true},{"text":"API access","planned":true},{"text":"Web clipper","planned":true},{"text":"Mobile widgets","planned":true},{"text":"Note sharing","planned":true}],"plannedFeatures":[]},{"name":"AI","price":"Coming soon","priceNote":null,"featured":false,"muted":true,"badge":"Planned","features":[{"text":"Access to AI features","planned":true}],"plannedFeatures":[]}]}');var i=r(8891),s=r(5656);const d=(0,n.Ay)(i.wn)`
  position: relative;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 6em;

  background: linear-gradient(
    180deg,
    var(--accent-contrast-color-1) 0%,
    #ffffff 42%,
    var(--accent-color-1) 100%
  );

  &::before {
    content: "";
    position: absolute;
    inset: auto -10% -8rem -10%;
    height: 16rem;
    background: radial-gradient(
      ellipse at center,
      rgba(var(--box-shadow-base-color), 0.08),
      transparent 70%
    );
    pointer-events: none;
    filter: blur(20px);
  }
`,l=n.Ay.div`
  text-align: center;
  margin-bottom: 3.5em;
  position: relative;
  z-index: 1;
`,c=n.Ay.h1`
  margin: 0 0 0.4em;
  font-size: 5rem;
  line-height: 1.02;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--title-color, inherit);

  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.45),
    0 8px 22px rgba(var(--box-shadow-base-color), 0.1);

  span {
    background: linear-gradient(
      135deg,
      var(--accent-color-1),
      rgba(var(--box-shadow-base-color), 0.92)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`,p=n.Ay.p`
  margin: 0 auto;
  max-width: 42rem;
  opacity: 0.8;
  font-size: 1.1rem;
  line-height: 1.7;
`,g=n.Ay.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1.5em;
  flex-wrap: wrap;
`,b=n.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20em;
  min-height: 30em;
  padding: 2em;
  border-radius: 1.25em;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98),
    rgba(255, 255, 255, 0.94)
  );
  border: 1px solid rgba(var(--box-shadow-base-color), 0.08);
  box-shadow:
    0 10px 30px rgba(var(--box-shadow-base-color), 0.12),
    0 2px 8px rgba(var(--box-shadow-base-color), 0.06);
  opacity: ${({muted:e})=>e?.94:1};
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease,
    opacity 180ms ease;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto 0;
    height: 5px;
    background: ${({featured:e})=>e?"linear-gradient(90deg, var(--accent-color-1), rgba(var(--box-shadow-base-color), 0.45))":"linear-gradient(90deg, rgba(var(--box-shadow-base-color), 0.08), rgba(var(--box-shadow-base-color), 0.02))"};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at top right,
      rgba(var(--box-shadow-base-color), 0.06),
      transparent 30%
    );
    pointer-events: none;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-8px) scale(1.012);
    box-shadow:
      0 18px 45px rgba(var(--box-shadow-base-color), 0.18),
      0 8px 18px rgba(var(--box-shadow-base-color), 0.08);
    border-color: rgba(var(--box-shadow-base-color), 0.14);
    opacity: 1;
  }

  ${({featured:e})=>e&&n.AH`
      width: 22em;
      min-height: 32em;
      border: 1px solid rgba(var(--box-shadow-base-color), 0.12);
      box-shadow:
        0 20px 50px rgba(var(--box-shadow-base-color), 0.16),
        0 8px 20px rgba(var(--box-shadow-base-color), 0.08);

      @media (min-width: 960px) {
        transform: scale(1.04);
      }

      &:hover {
        @media (min-width: 960px) {
          transform: translateY(-10px) scale(1.055);
        }
      }
    `}
`,x=n.Ay.div`
  margin-bottom: 1.5em;
`,m=n.Ay.h2`
  margin: 0;
  font-size: 0.92rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(var(--box-shadow-base-color), 0.62);
`,h=n.Ay.div`
  margin-top: 0.45em;
  font-size: 2.25rem;
  font-weight: 750;
  line-height: 1.1;
`,u=n.Ay.span`
  font-size: 0.95rem;
  font-weight: 400;
  opacity: 0.7;
  margin-left: 0.35em;
`,f=n.Ay.span`
  display: inline-block;
  margin-top: 0.85em;
  padding: 0.38em 0.75em;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(var(--box-shadow-base-color), 0.08);
  border: 1px solid rgba(var(--box-shadow-base-color), 0.08);
`,w=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9em;
`,v=n.Ay.li`
  display: flex;
  align-items: flex-start;
  gap: 0.7em;
  line-height: 1.55;
  opacity: ${({planned:e})=>e?.72:1};

  &::before {
    content: "${({planned:e})=>e?"\u25e6":"\u2713"}";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.2rem;
    flex-shrink: 0;
    font-weight: 800;
    color: ${({planned:e})=>e?"rgba(var(--box-shadow-base-color), 0.5)":"var(--accent-color-1)"};
    margin-top: 0.05em;
  }
`,y=n.Ay.div`
  margin-top: 1.35em;
  padding: 1em;
  border-radius: 1em;
  background: linear-gradient(
    180deg,
    rgba(var(--box-shadow-base-color), 0.03),
    rgba(var(--box-shadow-base-color), 0.06)
  );
  border: 1px solid rgba(var(--box-shadow-base-color), 0.08);
`,A=n.Ay.div`
  margin-bottom: 0.85em;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(var(--box-shadow-base-color), 0.65);
`,k=n.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.72em;
`,j=o;function $(){return(0,s.jsx)(t.A,{title:"A free to use, cross-platform productivity app",description:"Snippets is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored.",children:(0,s.jsxs)(d,{children:[(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:(0,s.jsx)("span",{children:j.title})}),(0,s.jsx)(p,{children:j.subtitle})]}),(0,s.jsx)(g,{children:j.plans.map(e=>(0,s.jsxs)(b,{featured:e.featured,muted:e.muted,children:[(0,s.jsxs)(x,{children:[(0,s.jsx)(m,{children:e.name}),(0,s.jsxs)(h,{children:[e.price,e.priceNote&&(0,s.jsx)(u,{children:e.priceNote})]}),e.badge&&(0,s.jsx)(f,{children:e.badge})]}),(0,s.jsx)(w,{children:e.features.map(e=>(0,s.jsx)(v,{planned:e.planned,children:e.text},e.text))}),e.plannedFeatures&&e.plannedFeatures.length>0&&(0,s.jsxs)(y,{children:[(0,s.jsx)(A,{children:"Planned features"}),(0,s.jsx)(k,{children:e.plannedFeatures.map(e=>(0,s.jsx)(v,{planned:e.planned,children:e.text},e.text))})]})]},e.name))})]})})}},8891(e,a,r){r.d(a,{O:()=>o,hh:()=>d,wn:()=>n,xW:()=>s});var t=r(4424);const n=t.Ay.section`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  background-color: var(--background-color-1);
`,o=t.Ay.div`
  transition: margin-top 0.33s, opacity 0.33s;
  margin-top: ${e=>void 0===e.$isInView?"0":e.$isInView?"":"10em"};

  opacity: ${e=>void 0===e.$isInView||e.$isInView?"1":"0"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.$flexDirection??"row"};
  width: 100%;
`,i=t.AH`
  box-shadow: 0 10px 30px rgba(var(--box-shadow-base-color), 0.5);
`,s=t.Ay.div`
  display: flex;
  border-radius: 1em;
  overflow: hidden;
  ${e=>e.$boxShadow&&i}
  img {
    width: 100%;
    align-self: center; // Hack for Safari: keep aspect ratio of image
  }
`,d=t.Ay.span`
  display: inline-flex;
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
  svg {
    height: 100%;
    width: 100%;
  }
`}}]);