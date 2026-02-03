"use strict";(globalThis.webpackChunklandingpage_new=globalThis.webpackChunklandingpage_new||[]).push([[583],{1230(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/todos-694af66bfbe6ba4ce7b591a37ee63ae9.png"},2285(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/mobile-editor-89dc9c51a42c1e02353a2220b3e4b981.png"},2299(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/flashcard-deck-3e67797813bdb9171cb263eea7ffefb0.png"},3025(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/dashboard-e145c112365ecf665b1565bda6cbbf60.png"},4838(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/single-flashcard-a69108897641ec84b0311e2861ae89cb.png"},5225(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/search-5eab8bcd4cd50e94451f26daae988088.png"},6980(e,t,i){i.r(t),i.d(t,{default:()=>ht});var n=i(1498),s=i(7140),r=i(4424);function o(e,t){t({...e.getBoundingClientRect().toJSON(),clientWidth:e.clientWidth,clientHeight:e.clientHeight})}const a=(0,s.createContext)(null);function c(e,t){return 0===t?0:(e%t+t)%t}const l=r.Ay.div`
  display: inline-flex;
  position: relative;
  width: 7em;
`,d=(r.Ay.div`
  position: absolute;
  width: 100%;
`,r.i7`
  0% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
  50% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
  100% {
    opacity: 0;
    transform: rotateX(-90deg) translateY(1em);
  }
`),h=r.i7`
  0% {
    opacity: 0;
    transform: rotateX(90deg) translateY(-0.33em);
  }
  50% {
    opacity: 0;
    transform: rotateX(90deg) translateY(-0.33em);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg) translateY(0em);
  }
`,m=r.Ay.div`
  position: absolute;
  width: 100%;
`,x=(0,r.Ay)(m)`
  animation-name: ${e=>"in"===e.$animation?h:d};
  animation-duration: 500ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;var p=i(5656);function g(e){const[t,i]=(0,s.useReducer)(t=>c(t+1,e.words.length),-1),[n,r]=[e.words.at(t),e.words.at(c(t+1,e.words.length))];(0,s.useEffect)(()=>{const e=setInterval(()=>{i()},3e3);return()=>{clearInterval(e)}},[]);const o=(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("div",{children:"\xa0"}),e.children]});return-1===t?(0,p.jsxs)(l,{children:[o,(0,p.jsx)(m,{children:e.words.at(0)})]}):(0,p.jsxs)(l,{children:[o,(0,p.jsx)(x,{$animation:"out",children:n},n),(0,p.jsx)(x,{$animation:"in",children:r},r)]})}const f=r.Ay.div`
  position: absolute;
  display: flex;
  font-size: 0.5em;
  bottom: 0;
  right: 0;
  background-color: var(--oc-yellow-5);
  color: black;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 0.5em;
  transform: translateY(2em) translateX(2em) rotate(-5deg);
  filter: drop-shadow(0px 2px 2px rgba(var(--box-shadow-base-color), 0.25));
`;function u(){return(0,p.jsx)(f,{children:"Coming Soon"})}const w=r.Ay.a`
  display: flex;
  position: relative;
  justify-content: center;
  background-color: var(--oc-blue-8);
  border: 1px solid var(--oc-blue-9);
  border-radius: 0.5em;
  margin-bottom: 0.5em;
  ${e=>e.$disabled?"pointer-events: none;":""}
`,j=r.Ay.span`
  display: flex;
  color: var(--accent-contrast-color-1);
  align-items: center;
  justify-content: center;
  padding: 0.5em;

  svg {
    width: 1em;
    margin-right: 0.25em;
  }
`;function v(e){return(0,p.jsx)(w,{href:e.href,$disabled:e.disabled,children:(0,p.jsx)(j,{children:e.children})})}function b(){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 304.998 304.998",children:(0,p.jsx)("path",{d:"M274.659,244.888c-8.944-3.663-12.77-8.524-12.4-15.777c0.381-8.466-4.422-14.667-6.703-17.117 c1.378-5.264,5.405-23.474,0.004-39.291c-5.804-16.93-23.524-42.787-41.808-68.204c-7.485-10.438-7.839-21.784-8.248-34.922 c-0.392-12.531-0.834-26.735-7.822-42.525C190.084,9.859,174.838,0,155.851,0c-11.295,0-22.889,3.53-31.811,9.684 c-18.27,12.609-15.855,40.1-14.257,58.291c0.219,2.491,0.425,4.844,0.545,6.853c1.064,17.816,0.096,27.206-1.17,30.06 c-0.819,1.865-4.851,7.173-9.118,12.793c-4.413,5.812-9.416,12.4-13.517,18.539c-4.893,7.387-8.843,18.678-12.663,29.597 c-2.795,7.99-5.435,15.537-8.005,20.047c-4.871,8.676-3.659,16.766-2.647,20.505c-1.844,1.281-4.508,3.803-6.757,8.557 c-2.718,5.8-8.233,8.917-19.701,11.122c-5.27,1.078-8.904,3.294-10.804,6.586c-2.765,4.791-1.259,10.811,0.115,14.925 c2.03,6.048,0.765,9.876-1.535,16.826c-0.53,1.604-1.131,3.42-1.74,5.423c-0.959,3.161-0.613,6.035,1.026,8.542 c4.331,6.621,16.969,8.956,29.979,10.492c7.768,0.922,16.27,4.029,24.493,7.035c8.057,2.944,16.388,5.989,23.961,6.913 c1.151,0.145,2.291,0.218,3.39,0.218c11.434,0,16.6-7.587,18.238-10.704c4.107-0.838,18.272-3.522,32.871-3.882 c14.576-0.416,28.679,2.462,32.674,3.357c1.256,2.404,4.567,7.895,9.845,10.724c2.901,1.586,6.938,2.495,11.073,2.495 c0.001,0,0,0,0.001,0c4.416,0,12.817-1.044,19.466-8.039c6.632-7.028,23.202-16,35.302-22.551c2.7-1.462,5.226-2.83,7.441-4.065 c6.797-3.768,10.506-9.152,10.175-14.771C282.445,250.905,279.356,246.811,274.659,244.888z M124.189,243.535 c-0.846-5.96-8.513-11.871-17.392-18.715c-7.26-5.597-15.489-11.94-17.756-17.312c-4.685-11.082-0.992-30.568,5.447-40.602 c3.182-5.024,5.781-12.643,8.295-20.011c2.714-7.956,5.521-16.182,8.66-19.783c4.971-5.622,9.565-16.561,10.379-25.182 c4.655,4.444,11.876,10.083,18.547,10.083c1.027,0,2.024-0.134,2.977-0.403c4.564-1.318,11.277-5.197,17.769-8.947 c5.597-3.234,12.499-7.222,15.096-7.585c4.453,6.394,30.328,63.655,32.972,82.044c2.092,14.55-0.118,26.578-1.229,31.289 c-0.894-0.122-1.96-0.221-3.08-0.221c-7.207,0-9.115,3.934-9.612,6.283c-1.278,6.103-1.413,25.618-1.427,30.003 c-2.606,3.311-15.785,18.903-34.706,21.706c-7.707,1.12-14.904,1.688-21.39,1.688c-5.544,0-9.082-0.428-10.551-0.651l-9.508-10.879 C121.429,254.489,125.177,250.583,124.189,243.535z M136.254,64.149c-0.297,0.128-0.589,0.265-0.876,0.411 c-0.029-0.644-0.096-1.297-0.199-1.952c-1.038-5.975-5-10.312-9.419-10.312c-0.327,0-0.656,0.025-1.017,0.08 c-2.629,0.438-4.691,2.413-5.821,5.213c0.991-6.144,4.472-10.693,8.602-10.693c4.85,0,8.947,6.536,8.947,14.272 C136.471,62.143,136.4,63.113,136.254,64.149z M173.94,68.756c0.444-1.414,0.684-2.944,0.684-4.532 c0-7.014-4.45-12.509-10.131-12.509c-5.552,0-10.069,5.611-10.069,12.509c0,0.47,0.023,0.941,0.067,1.411 c-0.294-0.113-0.581-0.223-0.861-0.329c-0.639-1.935-0.962-3.954-0.962-6.015c0-8.387,5.36-15.211,11.95-15.211 c6.589,0,11.95,6.824,11.95,15.211C176.568,62.78,175.605,66.11,173.94,68.756z M169.081,85.08 c-0.095,0.424-0.297,0.612-2.531,1.774c-1.128,0.587-2.532,1.318-4.289,2.388l-1.174,0.711c-4.718,2.86-15.765,9.559-18.764,9.952 c-2.037,0.274-3.297-0.516-6.13-2.441c-0.639-0.435-1.319-0.897-2.044-1.362c-5.107-3.351-8.392-7.042-8.763-8.485 c1.665-1.287,5.792-4.508,7.905-6.415c4.289-3.988,8.605-6.668,10.741-6.668c0.113,0,0.215,0.008,0.321,0.028 c2.51,0.443,8.701,2.914,13.223,4.718c2.09,0.834,3.895,1.554,5.165,2.01C166.742,82.664,168.828,84.422,169.081,85.08z M205.028,271.45c2.257-10.181,4.857-24.031,4.436-32.196c-0.097-1.855-0.261-3.874-0.42-5.826 c-0.297-3.65-0.738-9.075-0.283-10.684c0.09-0.042,0.19-0.078,0.301-0.109c0.019,4.668,1.033,13.979,8.479,17.226 c2.219,0.968,4.755,1.458,7.537,1.458c7.459,0,15.735-3.659,19.125-7.049c1.996-1.996,3.675-4.438,4.851-6.372 c0.257,0.753,0.415,1.737,0.332,3.005c-0.443,6.885,2.903,16.019,9.271,19.385l0.927,0.487c2.268,1.19,8.292,4.353,8.389,5.853 c-0.001,0.001-0.051,0.177-0.387,0.489c-1.509,1.379-6.82,4.091-11.956,6.714c-9.111,4.652-19.438,9.925-24.076,14.803 c-6.53,6.872-13.916,11.488-18.376,11.488c-0.537,0-1.026-0.068-1.461-0.206C206.873,288.406,202.886,281.417,205.028,271.45z M39.917,245.477c-0.494-2.312-0.884-4.137-0.465-5.905c0.304-1.31,6.771-2.714,9.533-3.313c3.883-0.843,7.899-1.714,10.525-3.308 c3.551-2.151,5.474-6.118,7.17-9.618c1.228-2.531,2.496-5.148,4.005-6.007c0.085-0.05,0.215-0.108,0.463-0.108 c2.827,0,8.759,5.943,12.177,11.262c0.867,1.341,2.473,4.028,4.331,7.139c5.557,9.298,13.166,22.033,17.14,26.301 c3.581,3.837,9.378,11.214,7.952,17.541c-1.044,4.909-6.602,8.901-7.913,9.784c-0.476,0.108-1.065,0.163-1.758,0.163 c-7.606,0-22.662-6.328-30.751-9.728l-1.197-0.503c-4.517-1.894-11.891-3.087-19.022-4.241c-5.674-0.919-13.444-2.176-14.732-3.312 c-1.044-1.171,0.167-4.978,1.235-8.337c0.769-2.414,1.563-4.91,1.998-7.523C41.225,251.596,40.499,248.203,39.917,245.477z"})})}function y(){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:(0,p.jsx)("path",{d:"M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"})})}function A(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"}),(0,p.jsx)("path",{d:"M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"})]})}const k=r.Ay.section`
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  background-color: var(--background-color-1);
`,z=r.Ay.div`
  transition: margin-top 0.33s, opacity 0.33s;
  margin-top: ${e=>void 0===e.$isInView?"0":e.$isInView?"":"10em"};

  opacity: ${e=>void 0===e.$isInView||e.$isInView?"1":"0"};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.$flexDirection??"row"};
  width: 100%;
`,C=r.AH`
  box-shadow: 0 10px 30px rgba(var(--box-shadow-base-color), 0.5);
`,M=r.Ay.div`
  display: flex;
  border-radius: 1em;
  overflow: hidden;
  ${e=>e.$boxShadow&&C}
  img {
    width: 100%;
    align-self: center; // Hack for Safari: keep aspect ratio of image
  }
`,$=r.Ay.span`
  display: inline-flex;
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
  svg {
    height: 100%;
    width: 100%;
  }
`,S=(0,r.Ay)(k)`
  color: var(--accent-contrast-color-1);
  background-color: var(--accent-color-1);
  padding-bottom: 2em;
`,V=(0,r.Ay)(z)`
  padding-bottom: 3em;
  align-items: flex-start;
  p {
    text-align: center;
  }
`,H=(0,r.Ay)(V)`
  @media (max-width: 768px) {
    display: none;
  }
`,B=(0,r.Ay)(V)`
  @media (min-width: 768px) {
    display: none;
  }
`,X=r.Ay.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  margin-right: 1em;
  min-width: 12.5em;
`;function F(){return(0,p.jsxs)(S,{children:[(0,p.jsxs)(H,{children:[(0,p.jsxs)(X,{children:[(0,p.jsx)("p",{children:"macOS"}),(0,p.jsxs)(v,{href:"https://github.com/samu/snippets/releases/download/v0.17.0/Snippets-0.17.0-arm64.dmg",children:[(0,p.jsx)(A,{})," Silicon (M1, M2, etc)"]}),(0,p.jsxs)(v,{href:"https://github.com/samu/snippets/releases/download/v0.17.0/Snippets-0.17.0-x64.dmg",children:[(0,p.jsx)(A,{})," Intel (older)"]})]}),(0,p.jsxs)(X,{children:[(0,p.jsx)("p",{children:"Windows"}),(0,p.jsxs)(v,{href:"https://github.com/samu/snippets/releases/download/v0.17.0/Snippets-0.17.0.Setup.exe",children:[(0,p.jsx)(y,{})," Windows"]})]}),(0,p.jsxs)(X,{children:[(0,p.jsx)("p",{children:"Linux"}),(0,p.jsxs)(v,{href:"",disabled:!0,children:[(0,p.jsx)(b,{})," Linux",(0,p.jsx)(u,{})]})]})]}),(0,p.jsx)(B,{children:(0,p.jsxs)(X,{children:[(0,p.jsx)("p",{children:"iOS Beta"}),(0,p.jsxs)(v,{href:"https://testflight.apple.com/join/3wpgBj2Z",children:[(0,p.jsx)(A,{}),"TestFlight"]})]})})]})}const I=r.Ay.div`
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 1));
  transform: translateZ(0); // fix flickering shadow on safari
`,T=r.Ay.div`
  position: relative;
  display: flex;

  --aspect-ratio: 9 / 19.5;
  --border-width: 3%;
  --border-radius-inner: 15%;
  --border-radius-outer: calc(var(--border-radius-inner) + var(--border-width));

  border-radius: var(--border-radius-outer) /
    calc(var(--border-radius-outer) * var(--aspect-ratio));

  background-color: black;
`,D=r.Ay.div`
  width: 100%;
  margin: var(--border-width);
  aspect-ratio: var(--aspect-ratio);
  position: relative;
  display: flex;
  border-radius: 15% / calc(15% * var(--aspect-ratio));
  overflow: hidden;
  box-shadow: 0 0 0 var(--iphone-x-device-border-width) black;
`,Y=r.Ay.div`
  position: absolute;
  top: 0%;
  left: 50%;
  height: 3%;
  width: 48%;
  background-color: black;
  border-bottom-right-radius: 1000px;
  border-bottom-left-radius: 1000px;
  transform: translateX(-50%);
  z-index: 1000000000;
`,L=r.Ay.div`
  position: absolute;
  bottom: 1%;
  left: 50%;
  height: 1%;
  width: 40%;
  background-color: black;
  border-radius: 1000px;
  transform: translateX(-50%);
  z-index: 1000000000;
`,N=r.Ay.div`
  position: absolute;
  top: 12%;
  left: 0.1%;
  height: 5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,R=r.Ay.div`
  position: absolute;
  top: 21%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,E=r.Ay.div`
  position: absolute;
  top: 32%;
  left: 0.1%;
  height: 8.5%;
  width: 1%;
  background-color: black;
  transform: translateX(-100%);
`,Z=r.Ay.div`
  position: absolute;
  top: 17%;
  right: 0.1%;
  height: 4%;
  width: 1%;
  background-color: black;
  transform: translateX(100%);
`;function W(e){return(0,p.jsx)(I,{className:e.className,children:(0,p.jsxs)(T,{children:[(0,p.jsxs)(D,{children:[e.children,(0,p.jsx)(Y,{}),(0,p.jsx)(L,{})]}),(0,p.jsx)(N,{}),(0,p.jsx)(R,{}),(0,p.jsx)(E,{}),(0,p.jsx)(Z,{})]})})}const G=(0,r.Ay)(k)`
  padding-left: 1em;
  padding-right: 1em;

  background: linear-gradient(
    180deg,
    var(--accent-contrast-color-1) 20%,
    var(--accent-color-1) 99%
  );
`,O=r.Ay.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 1em;
    margin-bottom: 2em;
    font-size: 1em;

    em {
      text-align: center;
    }
  }

  h2 {
    display: none;
    font-size: 1.5em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.25em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 2em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5em;
    }

    h2 {
      display: block;
      font-size: 1.5em;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 2.75em;
    }
  }
`,P=(0,r.Ay)(function(e){switch(e.variation){case 1:return(0,p.jsx)("svg",{className:e.className,"aria-hidden":"true",viewBox:"0 0 418 42",preserveAspectRatio:"none",children:(0,p.jsx)("path",{d:"M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"})});case 2:return(0,p.jsx)("svg",{className:e.className,"aria-hidden":"true",viewBox:"0 0 281 40",preserveAspectRatio:"none",children:(0,p.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"})})}})`
  position: absolute;
  margin-top: 1.75em;
  margin-left: 0.25em;
  width: 6.5em;
  stroke: var(--accent-color-1);
  fill: var(--accent-color-1);
`,q=(0,r.Ay)(function(e){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",className:e.className,children:(0,p.jsx)("path",{d:"M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"})})})`
  width: 1em;
  position: absolute;
  right: -0.8em;
  top: 1.25em;
`,U=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding-top: 1.25em;
  padding-bottom: 3em;
`,J=(0,r.Ay)(M).attrs({$boxShadow:!0})`
  width: 100%;

  max-width: 70em;

  @media (max-width: 768px) {
    display: none;
  }
`,_=(0,r.Ay)(W)`
  max-width: 393px;

  @media (max-width: 576px) {
    width: 60%;
  }

  @media (min-width: 576px) {
    width: 80%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;const K=function(e){const t=e.slice();for(let i=t.length-1;i>0;i--){const e=Math.floor(Math.random()*(i+1));[t[i],t[e]]=[t[e],t[i]]}return t}(["Lightweight","Free of Charge","Simple","Offline-first","Powerful","Effortless","Focused","Frictionless","Flexible","Elegant","Future-proof","Non-proprietary","Distraction-free"]);function Q(){return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsxs)(G,{children:[(0,p.jsx)(O,{children:(0,p.jsxs)("h1",{children:["Note Taking Can Be \xa0",(0,p.jsx)("em",{children:(0,p.jsx)(g,{words:K,children:(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(P,{variation:1}),(0,p.jsx)(q,{})]})})})]})}),(0,p.jsxs)(U,{children:[(0,p.jsx)(J,{children:(0,p.jsx)("img",{src:i(7513).A})}),(0,p.jsx)(_,{children:(0,p.jsx)("img",{src:i(2285).A})})]})]}),(0,p.jsx)(F,{})]})}const ee=r.Ay.div`
  width: ${e=>e.$width?e.$width:"none"};
  max-width: calc(100% - 2em);
  border-radius: 2em;
  overflow: hidden;
  background-color: var(--accent-color-1);
  border: 1px solid var(--border-color-1);
`,te=r.AH`
  transform: scale(0.95) translateX(-1em) translateY(1em);
  transform-origin: bottom left;
`,ie=r.AH`
  transform: scale(0.95) translateX(0.5em) translateY(1em);
  transform-origin: bottom right;
`,ne=r.AH`
  transform: translateY(1.5em);
  margin-left: 2em;
  margin-right: 2em;
`,se=r.AH`
  margin: 1em;
`;const re=r.Ay.div`
  ${e=>function(e){switch(e){case"on-the-right":return te;case"on-the-left":return ie;case"at-the-bottom":return ne;case"centered":return se}}(e.$position)}
  filter: drop-shadow(0px 5px 6px rgba(var(--box-shadow-base-color), 0.75));
`;function oe(e){return(0,p.jsx)(ee,{$width:e.width,className:e.className,children:(0,p.jsx)(re,{$position:e.position,children:e.children})})}function ae(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 800 400",children:[(0,p.jsx)("path",{d:"M8.071748733520508,219.73094177246094C93.88340906143188,214.9865460205078,200.67264539718627,199.30941329956056,381.1659240722656,199.10313415527344C561.659202747345,198.89685501098631,698.1435159301758,214.29595932006836,792.8251342773438,218.83407592773438",fill:"none","stroke-width":"73",stroke:"var(--oc-yellow-5)","stroke-linecap":"round",transform:"matrix(0.9025,0,0,0.9025,39.04372165203097,20.418112106323264)"}),(0,p.jsx)("defs",{children:(0,p.jsxs)("linearGradient",{id:"SvgjsLinearGradient1003",children:[(0,p.jsx)("stop",{"stop-color":"hsl(37, 99%, 67%)",offset:"0"}),(0,p.jsx)("stop",{"stop-color":"hsl(316, 73%, 52%)",offset:"1"})]})})]})}function ce(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"}),(0,p.jsx)("path",{d:"M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"})]})}function le(){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 800 400",children:(0,p.jsx)("path",{d:"M134.52914428710938,243.04933166503906C181.1659138997396,237.81764221191406,324.3647104899089,211.8086725870768,414.3497619628906,211.65919494628906C504.3348134358724,211.5097173055013,631.0911712646484,237.07025400797525,674.439453125,242.1524658203125",fill:"none","stroke-width":"111",stroke:"var(--oc-red-4)","stroke-linecap":"round"})})}function de(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 800 400",children:[(0,p.jsx)("path",{d:"M31.390134811401367,52.01793670654297C94.76830895741782,50.22421455383301,289.23765023549396,40.65769640604655,411.6591796875,41.2556037902832C534.080709139506,41.85351117451986,706.8759562174479,53.213751475016274,765.9193115234375,55.60538101196289",fill:"none","stroke-width":"13",stroke:"var(--oc-yellow-5)","stroke-linecap":"round"}),(0,p.jsx)("defs",{children:(0,p.jsxs)("linearGradient",{id:"SvgjsLinearGradient1012",children:[(0,p.jsx)("stop",{"stop-color":"hsl(37, 99%, 67%)",offset:"0"}),(0,p.jsx)("stop",{"stop-color":"hsl(316, 73%, 52%)",offset:"1"})]})})]})}function he(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"}),(0,p.jsx)("path",{d:"M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"})]})}function me(){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",fill:"currentColor",viewBox:"0 0 16 16",children:(0,p.jsx)("path",{"fill-rule":"evenodd",d:"M12 0a4 4 0 0 1 4 4v2.5h-1V4a3 3 0 1 0-6 0v2h.5A2.5 2.5 0 0 1 12 8.5v5A2.5 2.5 0 0 1 9.5 16h-7A2.5 2.5 0 0 1 0 13.5v-5A2.5 2.5 0 0 1 2.5 6H8V4a4 4 0 0 1 4-4M2.5 7A1.5 1.5 0 0 0 1 8.5v5A1.5 1.5 0 0 0 2.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 9.5 7z"})})}const xe=(0,r.Ay)(k)`
  box-shadow: 0 -10px 30px rgba(var(--box-shadow-base-color), 0.9);
  min-height: 100vh;
  position: relative;
  padding-bottom: 5em;
`,pe=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8em;
  padding-bottom: 4em;
  padding-left: 1em;
  padding-right: 1em;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    margin: 0;
    width: 100%;
    padding-bottom: 1em;
  }

  h2 {
    position: relative;
    margin-bottom: 2em;
    font-size: 1em;

    span {
      position: relative;
      z-index: 1;
    }

    svg {
      position: absolute;
      top: 0.25em;
      left: 0;
      z-index: 0;
      scale: 1.1;
    }
  }

  ul {
    max-width: 50em;

    li {
      margin-bottom: 1em;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 0.95em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 1.25em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 3.5em;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 992px) {
    h1 {
      font-size: 4em;
    }
  }
`,ge=r.Ay.span`
  position: relative;

  svg {
    position: absolute;
    top: -0.25em;
    left: 0;
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1;
    /* filter: drop-shadow(0px 3px 2px rgba(var(--box-shadow-base-color), 0.25)); */
    margin-left: 0.125em;
    color: var(--oc-yellow-9);
  }
`,fe=r.Ay.div`
  display: flex;
  flex-direction: column;
  margin-top: 3em;
  margin-bottom: 4em;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  p {
    max-width: 20em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    position: relative;
    text-align: center;

    span {
      position: relative;
      z-index: 1;
    }
  }

  p:nth-child(1) svg {
    position: absolute;
    top: -4em;
    left: 0em;
    z-index: 0;
  }

  p:nth-child(2) svg {
    position: absolute;
    top: -5em;
    right: 3em;
    z-index: 0;
    rotate: 10deg;
  }
`,ue=(0,r.Ay)(z)`
  margin-bottom: 5em;
  padding-left: 1em;
  padding-right: 1em;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`,we=(0,r.Ay)(ue)`
  flex-direction: row-reverse;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`,je=r.Ay.div`
  position: absolute;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  /* TODO remove? */
  transition: margin-top 1s;
  margin-top: ${e=>e.$hide?"5em":"0"};
`,ve=((0,r.Ay)(je)`
  top: -5em;
  box-shadow: 0 10px 30px rgba(var(--box-shadow-base-color), 0.9);
`,(0,r.Ay)(je)`
  bottom: -5em;
  box-shadow: 0px 0px 40px rgba(var(--box-shadow-base-color), 0.9);
`,r.Ay.div`
  height: 60em;
  width: 100em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,(0,r.Ay)(M).attrs({$boxShadow:!0})`
  max-width: 40em;
`),be=r.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  @media (min-width: 992px) {
    max-width: 30em;
    text-align: right;
    align-items: flex-end;
    margin-right: 2em;

    h1 {
      font-size: 3em;
    }
  }
`,ye=(0,r.Ay)(be)`
  @media (min-width: 992px) {
    text-align: left;
    align-items: flex-start;
    margin-left: 2em;
    margin-right: 0;
  }
`,Ae=(0,r.Ay)(z)`
  padding-left: 1em;
  padding-right: 1em;

  h1 {
    font-size: 1.25em;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.5em;
    }
  }

  p {
    max-width: 39em;
    text-align: center;
  }

  span {
    position: relative;

    span {
      position: relative;
      z-index: 1;
    }
  }

  svg {
    position: absolute;
    top: 0.4em;
    left: -0.3em;
    width: 2.25em;
    z-index: 0;
  }
`;function ke(){return(0,p.jsxs)(xe,{children:[(0,p.jsxs)(pe,{children:[(0,p.jsxs)("h1",{children:["Rich text editing"," ",(0,p.jsxs)(ge,{children:[(0,p.jsx)(ae,{}),(0,p.jsx)("span",{children:"done right"})]})]}),(0,p.jsxs)("h2",{children:[(0,p.jsx)("span",{children:"Writing should feel fluid, focused, and effortless."}),(0,p.jsx)(de,{})]}),(0,p.jsxs)(fe,{children:[(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{children:"Forget clumsy block-based note apps, poorly designed rich-text editors, and the chaotic, jumpy feel of markdown-first tools."}),!1]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{children:"Snippets features a carefully crafted rich-text editor that delivers a calm and genuinely pleasant writing experience."}),!1]})]}),(0,p.jsxs)("ul",{children:[(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"Use of markdown syntax"}),": Use markdown-like syntax to create formattings. For example, type ",(0,p.jsx)("strong",{children:"#"})," followed by"," ",(0,p.jsx)("i",{children:"Space"})," to create a heading."]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"Easy creation and destruction of formattings"}),": Use"," ",(0,p.jsx)("i",{children:"Space"})," for creation and ",(0,p.jsx)("i",{children:"Backspace"})," for destruction. For example, place your cursor at the beginning of a heading and press"," ",(0,p.jsx)("i",{children:"Backspace"})," to destroy the formatting. Hit ",(0,p.jsx)("i",{children:"Space"})," to recreate it."]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"Jumping in and out of formattings"}),": Jump in and out of formattings with ",(0,p.jsx)("i",{children:"ArrowLeft"})," and ",(0,p.jsx)("i",{children:"ArrowRight"}),". For example, place your cursor in front of bold formatting, press"," ",(0,p.jsx)("i",{children:"ArrowLeft"})," to enter the bold formatting, then continue writing in bold. Escape the formatting by pressing ",(0,p.jsx)("i",{children:"ArrowRight"}),"."]}),(0,p.jsxs)("li",{children:[(0,p.jsx)("strong",{children:"Drag and drop"}),": Double-click at the end of a paragraph or list item to select the node. Drag and drop the selection to any other place within the document."]})]})]}),(0,p.jsxs)(ue,{children:[(0,p.jsxs)(be,{children:[(0,p.jsx)(me,{}),(0,p.jsx)("h1",{children:"No Constraints"}),(0,p.jsx)("p",{children:"Easily create and work with complex rich-text structures - such as nested blocks, embedded elements, references, and mixed content - without fighting the editor. Content stays structured, predictable, and easy to extend, even as documents grow in size and complexity."})]}),(0,p.jsx)(oe,{position:"on-the-right",children:(0,p.jsx)(ve,{children:(0,p.jsx)("img",{src:i(7812).A})})})]}),(0,p.jsxs)(we,{children:[(0,p.jsxs)(ye,{children:[(0,p.jsx)(he,{}),(0,p.jsx)("h1",{children:"Todo Lists"}),(0,p.jsx)("p",{children:"Create and manage todos in a simple, structured way. Organize tasks, mark progress, and keep your work visible without unnecessary complexity."})]}),(0,p.jsx)(oe,{position:"on-the-left",children:(0,p.jsx)(ve,{children:(0,p.jsx)("img",{src:i(1230).A})})})]}),(0,p.jsxs)(ue,{children:[(0,p.jsxs)(be,{children:[(0,p.jsx)(ce,{}),(0,p.jsx)("h1",{children:"Images"}),(0,p.jsx)("p",{children:"Copy-paste or drag images. Make it look nice with the panorama mode. Resize to a preferred size, or let it take the full width."})]}),(0,p.jsx)(oe,{position:"on-the-right",children:(0,p.jsx)(ve,{children:(0,p.jsx)("img",{src:i(8019).A})})})]}),(0,p.jsxs)(Ae,{$flexDirection:"column",children:[(0,p.jsxs)("h1",{children:["Purposely"," ",(0,p.jsxs)("span",{children:[(0,p.jsx)(le,{})," ",(0,p.jsx)("span",{children:"not"})]})," ","Markdown-Based"]}),(0,p.jsx)("p",{children:"Snippets is intentionally not based on Markdown. Markdown works well for technical documentation and collaborative workflows where content lives in version control. For note-taking, it quickly becomes a constraint."}),(0,p.jsx)("p",{children:"By moving beyond Markdown, Snippets can rely on rich, structured data instead of plain text files. This enables far more expressive content and supports a wide range of use cases without forcing everything into a text-only format. Concerns about vendor lock-in are addressed through a simple export-to-Markdown option."})]})]})}function ze(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 800 400",children:[(0,p.jsx)("path",{d:"M88.78924266318347 194.6188254249426C144.39462367514636 188.93870686415158 317.6382658463703 162.33183557712357 422.4215287349608 160.5381140601965C527.2047916235513 158.74439254326944 759.9402410966145 174.43945708794715 717.4888199947264 183.8564963233801C675.0373988928384 193.27353555881305 185.79970256308582 208.520169724259 167.7130021236327 217.04034947279416C149.62630168417957 225.56052922132932 535.4260148189452 231.98803725762488 608.9686173580077 234.97757481459104 ",fill:"none","stroke-width":"64",stroke:"var(--oc-red-5)","stroke-linecap":"round"}),(0,p.jsx)("defs",{children:(0,p.jsxs)("linearGradient",{id:"SvgjsLinearGradient1008",children:[(0,p.jsx)("stop",{"stop-color":"hsl(37, 99%, 67%)",offset:"0"}),(0,p.jsx)("stop",{"stop-color":"hsl(316, 73%, 52%)",offset:"1"})]})})]})}function Ce(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 800 400",children:[(0,p.jsx)("path",{d:"M27.802689419729404 32.286995353184494C89.83557306383341 30.642750205479416 275.6352645819812 23.467862230422448 399.9999912843534 22.421524466954025C524.3647179867256 21.375186703485603 711.6592065756946 25.4110613881373 773.9910496339628 26.008968772373947 ",fill:"none","stroke-width":"25",stroke:"var(--oc-red-5)","stroke-linecap":"round"}),(0,p.jsx)("defs",{children:(0,p.jsxs)("linearGradient",{id:"SvgjsLinearGradient1010",children:[(0,p.jsx)("stop",{"stop-color":"hsl(37, 99%, 67%)",offset:"0"}),(0,p.jsx)("stop",{"stop-color":"hsl(316, 73%, 52%)",offset:"1"})]})})]})}const Me=(0,r.Ay)(k)`
  min-height: 100vh;
  background-color: var(--accent-color-1);
  box-shadow: inset 0px 10px 60px rgba(var(--box-shadow-base-color), 0.75);

  color: var(--accent-contrast-color-1);

  padding-left: 1em;
  padding-right: 1em;

  h1 {
    font-size: 3em;
    margin-top: 2em;
    margin-bottom: 0.5em;
    position: relative;

    span {
      position: relative;
      z-index: 1;
      filter: drop-shadow(0px 10px 5px var(--oc-red-9));
    }

    svg {
      position: absolute;
      top: -0.66em;
      left: 0;
      z-index: 0;
      transform: scaleX(1.7);
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 5em;
    }
  }

  h2 {
    position: relative;
    margin-bottom: 2em;

    span {
      position: relative;
      z-index: 1;
      filter: drop-shadow(0px 4px 3px rgba(var(--box-shadow-base-color), 0.5));
    }

    svg {
      position: absolute;
      top: 0.95em;
      left: 0;
      z-index: 0;
    }
  }

  p {
    max-width: 30em;
    text-align: center;
    margin-bottom: 3em;
    font-size: 1.25em;
  }

  padding-bottom: 10em;
`,$e=(0,r.Ay)(M).attrs({$boxShadow:!0})`
  max-width: 70em;
`;function Se(){return(0,p.jsxs)(Me,{children:[(0,p.jsxs)("h1",{children:[(0,p.jsx)("span",{children:"Dashboards"})," ",(0,p.jsx)(ze,{})]}),(0,p.jsxs)("h2",{children:[(0,p.jsx)("span",{children:"Everything in one place."}),(0,p.jsx)(Ce,{})]}),(0,p.jsx)("p",{children:"Put notes and tables alongside each other to keep related information together. Snippets gives you a flexible workspace where ideas live side by side and are easy to find through visual structure."}),(0,p.jsx)($e,{children:(0,p.jsx)("img",{src:i(3025).A})})]})}function Ve(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{"fill-rule":"evenodd",d:"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383"}),(0,p.jsx)("path",{"fill-rule":"evenodd",d:"M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708z"})]})}function He(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M11 2H9v3h2z"}),(0,p.jsx)("path",{d:"M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z"})]})}function Be(){return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:(0,p.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"})})}function Xe(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"}),(0,p.jsx)("path",{d:"M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1m-3-4v2H4V7z"})]})}function Fe(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"}),(0,p.jsx)("path",{"fill-rule":"evenodd",d:"M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708"}),(0,p.jsx)("path",{"fill-rule":"evenodd",d:"M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5"}),(0,p.jsx)("path",{d:"M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11z"})]})}function Ie(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 1422 800",width:"300",children:[(0,p.jsx)("defs",{}),(0,p.jsx)("g",{id:"two-0",transform:"matrix(1 0 0 1 0 0)",opacity:"1"}),(0,p.jsx)("path",{d:"M 453.56739106280065 266.3374589757126 Q 453.56739106280065 266.3374589757126 475.3759679339015 241.76848100201067 497.18454480500236 217.19950302830875 540.8870173540001 215.32443476639955 584.5894899029979 213.44936650449034 624.5722759856877 211.58481601924737 664.5550620683775 209.7202655340044 700.3714074891748 208.21435571713957 736.1877529099721 206.70844590027474 781.9598091748817 205.37690932957034 827.7318654397912 204.04537275886594 865.4392422517435 203.59555103882022 903.1466190636959 203.1457293187745 937.6706587482768 204.34626643135408 972.1946984328578 205.54680354393363 1009.0877123929276 208.61751244696688 1045.9807263529974 211.6882213500001 1080.8697331385508 217.1915252835688 1115.7587399241042 222.69482921713754 1154.3457577435831 235.93201715705146 1192.932775563062 249.16920509696536 1190.3560958475364 290.84327291833205 1187.7794161320105 332.51734073969874 1156.4162036631033 341.3622922779645 1125.0529911941958 350.2072438162303 1089.701816632472 355.0078804500179 1054.3506420707483 359.80851708380555 1016.3292778922146 362.86312411882227 978.3079137136809 365.91773115383904 938.5484182080452 368.75985239166135 898.7889227024094 371.60197362948367 862.9389309448225 372.5275283186397 827.0889391872354 373.45308300779584 794.3613169624625 373.5339743320824 761.6336947376897 373.6148656563689 728.9435813950928 374.9948879103997 696.2534680524959 376.3749101644305 663.7902599407292 380.7146090408138 631.3270518289626 385.05430791719715 597.1982142251006 392.17558178441715 563.0693766212388 399.29685565163715 562.2486752643638 366.6833438377472 561.4279739074886 334.0698320238573 594.8054681212584 324.89547703376314 628.182962335028 315.72112204366897 669.1633641552073 321.9153125182809 710.1437659753866 328.1095029928929 745.7704485974341 332.1384661434565 781.3971312194815 336.1674292940201 817.0000371978633 338.2159683331285 852.6029431762453 340.2645073722369 885.1521922877789 341.5795130091036 917.7014413993124 342.8945186459704 950.2495321119868 344.49375930761244 982.7976228246613 346.0929999692545 1017.533304109146 348.77112474741125 1052.2689853936308 351.449249525568 1064.1682376654092 352.8971911094576 1076.0674899371875 354.3451326933472 1082.4613734506606 356.43300111381893 1088.8552569641336 358.52086953429074 1094.5636588606853 362.0782686843032 1100.272060757237 365.63566783431565 1104.963208450432 370.45584150812635 1109.6543561436267 375.27601518193705 1113.0555999091234 381.0788146591493 1116.4568436746204 386.8816141363615 1118.3705030649617 393.3297804387163 1120.284162455303 399.7779467410711 1120.5990154968094 406.4967121401098 1120.9138685383157 413.2154775391485 1119.6116159574212 419.8143470741991 1118.309363376527 426.41321660924973 1115.4656921544197 432.5086636728886 1112.6220209323121 438.60411073652745 1108.40220537403 443.8418676590225 1104.182389815748 449.0796245815176 1098.8316857998054 453.15527268443844 1093.480981783863 457.2309207873593 1087.3103724790685 459.90758321147075 1081.139763174274 462.5842456355822 1074.5078846833471 463.7063546350324 1067.8760061924204 464.82846363448266 1061.1683036048512 464.3308021815015 1054.4606010172822 463.83314072852033 1018.4039249468965 465.0029761943131 982.3472488765109 466.1728116601059 947.5914522279317 467.27490713607926 912.8356555793524 468.3770026120526 877.3771969401229 469.392933422277 841.9187383008933 470.40886423250146 809.5249608633919 471.1239396678676 777.1311834258904 471.83901510323375 742.5718091597122 472.7641671467878 708.012434893534 473.6893191903419 675.7892572857481 475.907283782314 643.5660796779624 478.12524837428606 643.2311339166904 478.11295108473763 642.8961881554185 478.1006537951892 633.6748175853311 478.15163094342654 624.4534470152436 478.2026080916638 615.6985388304249 475.3064284466983 606.9436306456063 472.41024880173273 599.5718260440782 466.8701431369094 592.2000214425501 461.330037472086 586.9831503120602 453.7260563129578 581.7662791815702 446.1220751538295 579.2505493066008 437.2503573350131 576.7348194316313 428.37863951619676 577.18362839418 419.1680562352284 577.6324373567286 409.9574729542601 580.9987947399425 401.372374712015 584.3651521231562 392.7872764697699 590.2965994203806 385.726525318457 596.228046717605 378.6657741671441 604.1035598310707 373.8686326161631 611.9790729445364 369.0714910651821 620.9740835723298 367.0402211012431 629.9690942001232 365.00895113730417 639.1418223550622 365.9562272618348 648.3145505100014 366.9035033863654 656.7046091328989 370.7301455390707 665.0946677557964 374.55678769177604 671.8236154940746 380.8621454291323 678.5525632323527 387.1675031664886 682.9158774815442 395.29140386894187 687.2791917307356 403.4153045713951 688.8200323371468 412.507173690897 690.3608729435581 421.5990428103989 688.9179134889555 430.70695925011717 687.4749540343529 439.8148756898354 683.1992727545376 447.98523819427515 678.9235914747223 456.1556006987149 672.2628533283614 462.53297015689503 665.6021151820004 468.91033961507515 657.2537012112816 472.8270037612622 648.905287240563 476.74366790744915 639.7432785919882 477.7895509716384 630.5812699434134 478.8354340358276 621.5649313410236 476.901031785112 612.5485927386338 474.9666295343965 604.6219372141816 470.25447439505876 596.6952816897293 465.542319255721 590.6882321690584 458.5457751147378 584.6811826483877 451.5492309737547 581.2226788020196 443.0008378495953 577.7641749556515 434.45244472543595 577.2163230492573 425.24722163475656 576.6684711428632 416.0419985440771 579.0886314156612 407.14373477441467 581.5087916884592 398.24547100475223 586.6435727210271 390.5858171217039 591.7783537535952 382.92616323865553 599.0901426163728 377.3070870257287 606.4019314791502 371.68801081280196 615.1251819480797 368.69783103278223 623.8484324170092 365.70765125276245 623.8400029417554 365.7090798344535 623.8315734665016 365.7105084161446 641.6907612284267 364.18593226290136 659.5499489903518 362.6613561096581 693.7852799102312 361.3411108208363 728.0206108301106 360.0208655320146 762.0097914326864 359.1990645075749 795.9989720352621 358.37726348313515 833.1095997215425 357.60837059820676 870.220227407823 356.83947771327837 905.0665886358887 355.74257253113444 939.9129498639544 354.6456673489905 973.6677796127562 353.80056141639926 1007.422609361558 352.955455483808 1041.7423123951662 353.64975419007686 1076.0620154287742 354.3440528963457 1082.4561076971195 356.4312819180279 1088.8501999654648 358.51851093971004 1094.5589575733889 362.0753392317468 1100.267715181313 365.63216752378355 1104.9593448684186 370.45187205872486 1109.6509745555245 375.27157659366617 1113.0527985839617 381.0740359174884 1116.4546226123991 386.87649524131064 1118.3689268098015 393.32447014548586 1120.2832310072035 399.7724450496611 1120.5987559236742 406.4911789298019 1120.914280840145 413.20991280994264 1119.6126881527143 419.8089125372568 1118.3110954652836 426.40791226457094 1115.4680338020999 432.5036436648543 1112.6249721389163 438.5993750651377 1108.4056803774247 443.8375539429991 1104.1863886159329 449.0757328208605 1098.8360921915537 453.15191597380385 1093.4857957671743 457.22809912674717 1087.315454159475 459.90537859840475 1081.1451125517756 462.58265807006234 1074.5133463049078 463.70543025175 1067.88158005804 464.82820243343764 1061.1738277378643 464.3312117532024 1054.4660754176884 463.83422107296724 1033.5098404280457 461.3839964506448 1012.5536054384031 458.9337718283224 976.6819632783695 456.25474575620876 940.8103211183359 453.57571968409513 903.1075002193952 451.9304225237652 865.4046793204545 450.28512536343527 828.7459131308335 448.6711796278109 792.0871469412125 447.0572338921865 753.8188597365317 443.7230494408383 715.5505725318511 440.38886498949 674.5268028247972 435.2357818735877 633.5030331177433 430.0826987576854 591.6100721303364 423.86039007507554 549.7171111429298 417.6380813924656 517.5223593101553 410.1665784631642 485.32760747738075 402.69507553386285 477.4698519135072 368.5451498056527 469.6120963496337 334.3952240774426 504.11276849024404 312.574052582242 538.6134406308544 290.75288108704143 570.8522125950597 284.3495900113415 603.0909845592648 277.94629893564155 638.0520451359082 272.99099176490773 673.0131057125516 268.0356845941739 711.8178166083117 266.21234546759206 750.6225275040719 264.38900634101014 788.5048576843342 264.8961307390542 826.3871878645966 265.4032551370982 859.7053473099675 265.0956464913395 893.0235067553384 264.78803784558085 931.1424282679548 262.1248183649522 969.2613497805711 259.46159888432356 1006.072055637668 255.85916559313915 1042.8827614947647 252.2567323019547 1084.4878119110167 248.56249660857213 1126.0928623272687 244.86826091518958 1114.8196166187922 286.0543043825521 1103.5463709103158 327.2403478499146 1068.3824547547783 320.12223962906535 1033.2185385992407 313.0041314082161 999.6604874858383 308.96762902559396 966.102436372436 304.93112664297183 933.7784150011603 302.7498742425365 901.4543936298844 300.5686218421012 864.8239043804035 299.7339986759174 828.1934151309225 298.89937550973366 783.57422089574 298.9794931533726 738.9550266605576 299.0596107970115 703.7740207107363 300.0231290816269 668.5930147609151 300.9866473662423 628.945568115274 302.85883099500325 589.2981214696329 304.7310146237642 545.9034569571932 307.46365141998115 502.50879244475345 310.1962882161981 478.0386633374608 288.2768572471959 453.5685342301681 266.35742627819366 453.5679626464844 266.3474426269531 Z",fill:"var(--oc-grape-1)"})]})}const Te=(0,r.Ay)(k)`
  position: relative;

  padding-top: 5em;
  padding-bottom: 5em;

  min-height: 40em;

  h1 {
    display: flex;
    align-items: center;
    font-size: 3em;
    margin: 0;
    margin-bottom: 0.5em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2em;
    }
  }

  h2 {
    margin-top: 1em;
    margin-bottom: 3em;
    font-size: 1.25em;
    position: relative;

    span {
      position: relative;
      z-index: 1;
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-3.4em) translateY(-2.6em) rotate(-3deg);
      z-index: 0;
    }
  }

  ul {
    margin: 0;
    margin-top: 1em;
  }

  .sync-icon {
    position: absolute;
    scale: 13;
    opacity: 0.05;
    color: var(--oc-blue-5);
  }

  .shimmer {
    --base: var(--oc-orange-5);
    --highlight: var(--oc-orange-3);

    color: transparent;
    background-image: linear-gradient(
      90deg,
      var(--base) 0%,
      var(--highlight) 1%,
      var(--base) 100%
    );
    background-size: 200% 100%;
    background-position: 0% 50%;

    -webkit-background-clip: text;
    background-clip: text;

    animation: shimmer 3s linear infinite;

    margin-right: 0.25em;
  }

  @keyframes shimmer {
    0% {
      background-position: 200% 50%;
    }

    70% {
      background-position: -200% 50%;
    }

    /* pause */
    100% {
      background-position: -200% 50%;
    }
  }

  .anything {
    position: relative;
    font-size: 1.5em;
    rotate: -7deg;
    translate: 0.1em -0.1em;
    color: var(--oc-lime-5);
    filter: drop-shadow(0px 2px 2px var(--oc-green-4));
  }

  h4 {
    display: flex;
    align-items: flex-end;
    margin-top: 3em;
    font-size: 1.75em;

    svg {
      margin-left: 0.25em;
    }
  }
`,De=(r.Ay.div`
  width: 3em;
  margin-left: 2em;

  @media (min-width: 768px) {
    width: 4em;
  }
`,(0,r.Ay)(z)`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    display: flex;
    justify-content: center;

    svg {
      width: 1em;
      margin-left: 0.5em;
    }

    position: relative;
  }

  div {
    margin: 0;
    margin-top: 1em;
    max-width: 25em;
    text-align: center;
    padding-left: 1em;
    padding-right: 1em;
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;

    div {
      max-width: 17.5em;
    }
  }
`);function Ye(){return(0,p.jsxs)(Te,{children:[(0,p.jsx)(z,{children:(0,p.jsxs)("h1",{children:[(0,p.jsx)("span",{className:"shimmer",children:"Sync"})," with",(0,p.jsx)("span",{className:"anything",children:"anything"})]})}),(0,p.jsxs)("h2",{children:[(0,p.jsx)("span",{children:"Your data, your choice."}),(0,p.jsx)(Ie,{})]}),(0,p.jsxs)(De,{children:[(0,p.jsxs)("div",{children:[(0,p.jsxs)("h3",{children:["Local ",(0,p.jsx)(He,{})]}),(0,p.jsx)("p",{children:"Keep your data on your device and sync using the local file system. Designed for maximum privacy."})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h3",{children:["GitHub ",(0,p.jsx)(Be,{})]}),(0,p.jsx)("p",{children:"Sync with a private GitHub repository. Changes are synced instantly via HTTP - no manual commits required. Works on mobile, too."})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h3",{children:["Self-Hosted ",(0,p.jsx)(Xe,{}),(0,p.jsx)(u,{})]}),(0,p.jsx)("p",{children:"Run your own backend and stay fully in control of your data. Perfect when ownership, privacy, and cross-device sync matter most."})]}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h3",{children:["Snippets Cloud ",(0,p.jsx)(Ve,{}),(0,p.jsx)(u,{})]}),(0,p.jsx)("p",{children:"Use our own cloud service for automatic, cross-device syncing. Your data stays seamlessly up to date everywhere, with zero setup or maintenance required."})]})]}),(0,p.jsxs)("h4",{children:["Export to markdown ",(0,p.jsx)(Fe,{})]}),(0,p.jsx)("p",{children:"Avoid vendor lock-in, keep your data forever."}),!1]})}function Le(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}),(0,p.jsx)("path",{d:"M11.315 10.014a.5.5 0 0 1 .548.736A4.5 4.5 0 0 1 7.965 13a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242s1.46-.118 2.152-.242a27 27 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434m6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434"})]})}function Ne(){return(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16",children:[(0,p.jsx)("path",{d:"M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"}),(0,p.jsx)("path",{d:"M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"})]})}const Re=(0,r.Ay)(k)`
  padding-top: 7em;
  padding-bottom: 10em;
  min-height: 100vh;

  h1,
  h2 {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-bottom: 1em;
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 2.25em;
    }

    h2 {
      font-size: 1.5em;
    }
  }

  @media (min-width: 576px) {
    h1 {
      font-size: 3.5em;
    }
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4em;
    }
  }
`,Ee=(0,r.Ay)(z)`
  padding-left: 2em;
  padding-right: 2em;

  justify-content: space-between;
  max-width: 60em;

  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
  }
`,Ze=(0,r.Ay)(Ee)`
  @media (min-width: 992px) {
    flex-direction: row-reverse;
  }
`,We=r.Ay.div`
  max-width: 20em;

  @media (max-width: 992px) {
    max-width: 30em;
  }
`,Ge=(0,r.Ay)(oe)`
  max-width: 30em;
`,Oe=r.Ay.div`
  height: 7.5em;
`,Pe=r.Ay.div`
  position: absolute;
  top: -5em;
  left: -5em;
  height: 5em;
  width: calc(100% + 10em);

  box-shadow: 0px 0px 20px rgba(var(--box-shadow-base-color), 1);
  background-color: red;
`,qe=r.Ay.div`
  position: absolute;
  left: 0;
  width: calc(100% + 10em);
  background-color: var(--accent-color-1);
`,Ue=(0,r.Ay)(qe)`
  top: 0;
  height: 10em;
  transform: translateX(-5em) translateY(-6.5em) rotateZ(2deg);
`,Je=(0,r.Ay)(qe)`
  bottom: 0;
  transform: translateX(-5em) translateY(6.5em) rotateZ(2deg);
  height: 12em;
`;function _e(){return(0,p.jsxs)(Re,{children:[(0,p.jsx)(Ue,{}),(0,p.jsx)(Pe,{}),(0,p.jsx)(Je,{}),(0,p.jsx)("h1",{children:"Find and Organize"}),(0,p.jsxs)(Ee,{children:[(0,p.jsxs)(We,{children:[(0,p.jsx)("h2",{children:(0,p.jsx)($,{children:(0,p.jsx)(Ne,{})})}),(0,p.jsx)("h2",{children:"Search"}),(0,p.jsx)("p",{children:"Snippets offers fast and efficient search functionality, delivering well-formatted results that provide clear and concise previews of the content."})]}),(0,p.jsx)(Ge,{position:"on-the-right",children:(0,p.jsx)(M,{children:(0,p.jsx)("img",{src:i(5225).A})})})]}),(0,p.jsx)(Oe,{}),(0,p.jsxs)(Ze,{children:[(0,p.jsxs)(We,{children:[(0,p.jsx)("h2",{children:(0,p.jsx)($,{children:(0,p.jsx)(Le,{})})}),(0,p.jsx)("h2",{children:"Icons"}),(0,p.jsx)("p",{children:"Snippets includes a collection of icons that enhance the structure of your notes, adding both clarity and visual appeal."})]}),(0,p.jsx)(Ge,{position:"on-the-left",children:(0,p.jsx)(M,{children:(0,p.jsx)("img",{src:i(7931).A})})})]})]})}var Ke=i(656);const Qe=r.Ay.div`
  transition: transform ${e=>e.$animationDuration}s
      ${e=>e.$animationDelay}s,
    opacity ${e=>e.$animationDuration}s
      ${e=>e.$animationDelay}s;

  opacity: ${e=>e.$isInView?"1":"0"};
`;(0,r.Ay)(Qe)`
  transform: ${e=>e.$isInView?"translateY(0)":"translateY(-5em)"};
`,(0,r.Ay)(Qe)`
  transform: ${e=>e.$isInView?"translateY(0)":"translateY(5em)"};
`,(0,r.Ay)(Qe)`
  transform: ${e=>e.$isInView?"translateX(0)":"translateX(-5em)"};
`,(0,r.Ay)(Qe)`
  transform: ${e=>e.$isInView?"translateX(0)":"translateX(5em)"};
`;function et(e){const t=(0,s.useRef)(null);(0,Ke.W)(t);return e.children}const tt=(0,r.Ay)(k)`
  filter: drop-shadow(1px 15px 20px rgba(var(--box-shadow-base-color), 0.9));
  z-index: 1;

  @media (max-width: 768px) {
    /* Because the mobile section is hidden on more narrow devices, we have to change the shadow here */
    filter: drop-shadow(1px 15px 20px rgba(0, 0, 0, 0.9));
  }

  h2 {
    text-align: center;
    font-size: 3em;
    margin-top: 2em;
    margin-bottom: 1em;
  }

  --section-width: 60em;

  transform: translateZ(0); // fix flickering shadow on safari
`,it=(0,r.Ay)(z)`
  flex-direction: column;
  padding-bottom: 2em;

  p {
    max-width: calc(100% - 2em);
  }

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: var(--section-width);

    p {
      max-width: calc(100% / 3 - 1em);
    }
  }
`,nt=r.Ay.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    width: var(--section-width);
  }
`,st=r.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;

  @media (min-width: 992px) {
    text-align: left;

    p {
      padding-right: 3em;
    }
  }

  max-width: calc(100% - 2em);
`;function rt(){return(0,p.jsxs)(tt,{children:[(0,p.jsxs)(z,{$flexDirection:"column",children:[(0,p.jsx)("h2",{children:"Spaced Repetition With Flashcards"}),(0,p.jsxs)(it,{children:[(0,p.jsx)("p",{children:'Snippets is all about taking notes. In Snippets, a "Note" is in fact called a "Snippet" (hence the name "Snippets"). A Snippet is a piece of data that can be represented in a graphical user interface.'}),(0,p.jsx)("p",{children:"When taking notes, you will be using the Rich Text Snippet. It represents some text on which you can apply formatting such as titles, sub-titles, quotes, code blocks, bold and italic text, etc."}),(0,p.jsx)("p",{children:"In the following section, you will learn about another Snippet type, the Flashcard Snippet, which is very similar to a Rich Text Snippet, but comes with additional functionality, allowing you to use Snippets as a spaced repetition app."})]})]}),(0,p.jsxs)(z,{$flexDirection:"column",children:[(0,p.jsxs)(nt,{children:[(0,p.jsx)(et,{type:"from-left",children:(0,p.jsxs)(st,{children:[(0,p.jsx)("h3",{children:"Flashcard Snippet"}),(0,p.jsx)("p",{children:"Conceptually, a flashcard snippet is identical to a real world flash card: It has two sides, where one side is a question or prompt, and the other side is an answer or information. For example, this can be used for learning a new language."})]})}),(0,p.jsx)(et,{type:"from-right",children:(0,p.jsx)(oe,{width:"30em",position:"at-the-bottom",children:(0,p.jsx)(M,{children:(0,p.jsx)("img",{src:i(4838).A})})})})]}),(0,p.jsxs)(nt,{children:[(0,p.jsx)(et,{type:"from-left",children:(0,p.jsxs)(st,{children:[(0,p.jsx)("h3",{children:"Dashboard"}),(0,p.jsx)("p",{children:"The Dashboard gives an overview of all the flashcards in this folder. It shows your learning progress over time and lists all flashcards ordered by relevance. The relevance of a card is calculated through a scoring algorithm."})]})}),(0,p.jsx)(et,{type:"from-right",children:(0,p.jsx)(oe,{width:"35em",position:"on-the-right",children:(0,p.jsx)(M,{children:(0,p.jsx)("img",{src:i(2299).A})})})})]}),(0,p.jsxs)(nt,{children:[(0,p.jsx)(et,{type:"from-left",children:(0,p.jsxs)(st,{children:[(0,p.jsx)("h3",{children:"Session Wizard"}),(0,p.jsx)("p",{children:"Flashcards can be practiced in an interactive mode. When stepping through the flashcards, a rating can be provided, which will re-prioritize the flashcards in the next session."})]})}),(0,p.jsx)(et,{type:"from-right",children:(0,p.jsx)(oe,{width:"25em",position:"at-the-bottom",children:(0,p.jsx)(M,{children:(0,p.jsx)("img",{src:i(7422).A})})})})]})]})]})}const ot=(0,r.Ay)(k)`
  display: none;
  background-color: var(--accent-color-1);
  color: var(--accent-contrast-color-1);
  min-height: 100vh;

  box-shadow: 0px 0px 20px rgba(0, 0, 0, 1);

  h1 {
    font-size: 4em;
    margin-top: 2em;
    margin-bottom: 0.5em;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`,at=(0,r.Ay)(W)`
  width: 20em;
`,ct=(0,r.Ay)(z)`
  margin-top: 4em;
  margin-bottom: 5em;
`;function lt(){return(0,p.jsxs)(ot,{children:[(0,p.jsxs)(z,{$flexDirection:"column",children:[(0,p.jsx)("h1",{children:"Available on Mobile"}),(0,p.jsx)(et,{children:(0,p.jsx)(at,{children:(0,p.jsx)("img",{src:i(2285).A})})})]}),(0,p.jsxs)(ct,{$flexDirection:"column",children:[(0,p.jsx)("p",{children:"Beta available on iOS. Coming soon on all other platforms."}),(0,p.jsxs)(v,{href:"https://testflight.apple.com/join/3wpgBj2Z",children:[(0,p.jsx)(A,{}),"TestFlight"]})]})]})}const dt=r.Ay.main`
  em {
    font-style: normal;
    color: var(--accent-color-1);
    white-space: nowrap;
  }
`;function ht(){const e=(0,s.useRef)(null),t=function(e,t={doPostEvaluation:!1}){const[i,n]=(0,s.useState)(null);return(0,s.useEffect)(()=>{const i=e?.current;if(i){const e=new ResizeObserver(([e])=>{o(e.target,n)});e.observe(i),o(i,n);const s=t.doPostEvaluation&&setTimeout(()=>{o(i,n)},500);return()=>{e.unobserve(i),s&&clearTimeout(s)}}},[e?.current]),t.refreshTrigger&&(0,s.useEffect)(()=>{e?.current&&o(e.current,n)},[t.refreshTrigger?.trigger]),i}(e),[i,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{const e=setTimeout(()=>r(!0),0);return()=>clearTimeout(e)},[]),(0,p.jsx)(a.Provider,{value:t,children:(0,p.jsx)(n.A,{title:"A free to use, cross-platform productivity app",description:"Snippets is a productivity app, focusing on note taking and task management. It uses the local first principle, giving users control over where their data is stored.",children:(0,p.jsxs)(dt,{ref:e,style:{opacity:i?1:0,transition:"opacity 0s"},children:[(0,p.jsx)(Q,{}),(0,p.jsx)(ke,{}),(0,p.jsx)(Se,{}),(0,p.jsx)(Ye,{}),(0,p.jsx)(_e,{}),(0,p.jsx)(rt,{}),(0,p.jsx)(lt,{})]})})})}},7422(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/flashcard-session-461e47304589cdc5126e761fde33497a.png"},7513(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/general-todos-0ab83c9deb24f46e165155ccade18021.png"},7812(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/friday-7419293d91d5455ff6a41500d04197a8.png"},7931(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/icons-684a17c450bd221fde9755997662706f.png"},8019(e,t,i){i.d(t,{A:()=>n});const n=i.p+"assets/images/images-d37edccbd038b02b3f6a7d3eb6904836.png"}}]);