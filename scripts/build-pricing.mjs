// Generate static pricing from the same data as the original website.
import fs from 'node:fs';
import path from 'node:path';
import { output as root, content } from './paths.mjs';

const data = JSON.parse(fs.readFileSync(path.join(content, 'pricing.json'), 'utf8'));
const free = data.plans.find(plan => plan.name === 'Free');
const pro = data.plans.find(plan => plan.name === 'Pro');
if (!free || !pro || data.plans.length !== 2) throw new Error('Review the pricing layout when the available plans change.');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const check = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
const featureList = features => features.map(feature => `<li>${feature.planned ? '<span class="planned-marker" aria-hidden="true">○</span>' : check}<span>${escape(feature.text)}${feature.planned ? ' <small>Planned</small>' : ''}</span></li>`).join('');
const plans = data.plans.map(plan => {
  const isPro = plan.name === 'Pro';
  return `<article class="plan ${isPro ? 'plan-pro' : ''}" aria-labelledby="plan-${plan.name.toLowerCase()}">
    <div class="plan-heading"><h2 id="plan-${plan.name.toLowerCase()}">${escape(plan.name)}</h2></div>
    <p class="plan-description">${isPro ? 'Personal touches. Private sync.' : 'Unlimited notes. A place to begin.'}</p>
    <div class="plan-price"><span>${escape(plan.price)}</span><span class="price-note">${escape(plan.priceNote || '')}</span></div>
    <p class="feature-intro">${isPro ? 'Everything in Free, plus' : 'Included with Free'}</p>
    <ul class="plan-features">${featureList(plan.features)}</ul>
    ${plan.plannedFeatures?.length ? `<div class="planned-features"><p>Planned features</p><ul class="plan-features">${featureList(plan.plannedFeatures)}</ul></div>` : ''}
    <div class="plan-action"><a class="pricing-button ${isPro ? 'pricing-button-primary' : ''}" href="${isPro ? '#compare' : '../#download'}">${isPro ? 'Explore Pro features' : 'Get started for free'} ${arrow}</a><p>${isPro ? 'One payment. No subscription.' : 'Free forever.'}</p></div>
  </article>`;
}).join('');

const included = `<span class="included">${check}<span class="sr-only">Included</span></span>`;
const rows = [
  ...free.features.map(feature => [feature.text, feature.planned ? 'Planned' : included, feature.planned ? 'Planned' : included]),
  ...pro.features.map(feature => [feature.text, '<span class="not-included"><span aria-hidden="true">—</span><span class="sr-only">Not included</span></span>', feature.planned ? 'Planned' : included]),
];
const questions = [
  ['Can I keep using Snippets for free?', 'Yes. The Free plan is free forever, with unlimited notes and unlimited workspaces. It also includes folder sync and syncing across devices with GitHub.'],
  ['Is Pro a subscription?', `No. Pro is a one-time ${escape(pro.price)} purchase. It adds the full icon set, plus GitHub sync with end-to-end encryption and unlimited branches.`],
  ['Where will my notes be stored?', 'You choose your sync target: a local folder or a GitHub repository. <a href="../docs/sync/">Read about sync and workspaces</a> to find the setup that fits you.'],
];

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="light">
  <title>Pricing · Snippets</title>
  <meta name="description" content="Start with Snippets for free forever. Add Pro for ${escape(pro.price)} with a one-time payment. Compare plans and find your fit.">
  <link rel="icon" href="../assets/note/note-open.webp" type="image/webp">
  <link rel="preload" href="../assets/fonts/inter-variable.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="../styles/docs.css"><link rel="stylesheet" href="../styles/pricing.css"><link rel="stylesheet" href="../styles/brand.css">
</head>
<body class="pricing-page" id="top">
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="docs-header"><div class="header-inner"><a class="wordmark" href="../" aria-label="Snippets home"><img src="../assets/note/note-open.webp" width="48" height="48" alt=""><span>Snippets</span></a><nav class="header-links" aria-label="Main navigation"><a class="website-link" href="../#features">Features</a><a class="website-link current-page" href="./" aria-current="page">Pricing</a><a class="pricing-docs-link" href="../docs/">Docs</a><a class="get-app" href="../#download">Get Snippets ${arrow}</a></nav></div></header>
  <main id="main" tabindex="-1">
    <header class="pricing-hero pricing-shell"><div class="pricing-hero-copy"><p class="pricing-eyebrow">PRICING</p><h1>Start freely.<br><span class="ink-accent">Make it yours.</span></h1><p class="pricing-intro">Space for all your notes.<br> A little extra when you need it.</p></div></header>
    <section class="plans pricing-shell" aria-label="Choose your plan">${plans}</section>
    <p class="pricing-reassurance">Your notes. Your workspace. Your choice.</p>
    <section class="comparison pricing-shell" id="compare" aria-labelledby="compare-heading"><div class="pricing-section-heading"><div><p class="pricing-eyebrow">SIDE BY SIDE</p><h2 id="compare-heading">The details, simply.</h2></div><p>Find the right fit for the way you work.</p></div>
      <div class="comparison-table"><table><caption class="sr-only">Compare the Free and Pro plans</caption><thead><tr><th scope="col">What’s included</th><th scope="col">Free</th><th scope="col">Pro</th></tr></thead><tbody>${rows.map(([label,a,b])=>`<tr><th scope="row">${escape(label)}</th><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody></table></div>
      <p class="comparison-footnote">New to syncing? <a href="../docs/syncing-with-github/">Explore the GitHub setup guide ${arrow}</a></p>
    </section>
    <section class="pricing-faq pricing-shell" aria-labelledby="faq-heading"><div class="faq-intro"><p class="pricing-eyebrow">A FEW ANSWERS</p><h2 id="faq-heading">Good to know.</h2><p>Have another question?<br><a href="mailto:support@snippets.ch">We’re happy to help ${arrow}</a></p></div><div class="faq-list">${questions.map(([question, answer])=>`<details><summary>${question}<span aria-hidden="true">+</span></summary><div class="faq-answer"><p>${answer}</p></div></details>`).join('')}</div></section>
    <section class="pricing-closing" aria-labelledby="closing-title"><img src="../assets/note/note-open.webp" width="76" height="76" alt="" loading="lazy"><h2 id="closing-title">A little space for everything<br>on your mind.</h2><a class="pricing-button pricing-button-primary" href="../#download">Get Snippets for free ${arrow}</a></section>
  </main>
  <footer class="pricing-footer"><div class="pricing-footer-inner"><a class="wordmark" href="../" aria-label="Snippets home"><span>Snippets</span></a><p>Thoughtfully made in Switzerland.</p><nav aria-label="Footer navigation"><a href="../docs/">Documentation</a><a href="mailto:support@snippets.ch">Contact</a><a href="../privacy/">Privacy</a><a href="../terms/">Terms</a></nav><span class="copyright">© 2026 Snippets</span></div></footer>
</body></html>`;
fs.mkdirSync(path.join(root, 'pricing'), {recursive:true});
fs.writeFileSync(path.join(root, 'pricing/index.html'), html.replace(/[\t ]+$/gm, ''));
console.log('Built pricing with Free and Pro from content/pricing.json.');
