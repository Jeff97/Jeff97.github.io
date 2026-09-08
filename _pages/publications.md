---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<style>
.publications-page { line-height: 1.7; overflow-wrap: anywhere; }
.publications-page .publication-section-title { display: flex; align-items: center; gap: 0.75rem; margin: 2rem 0 1rem; padding: 0; border: 0; font-size: 1.15rem; line-height: 1.4; }
.publications-page .publication-section-title span { padding: 0.4rem 0.8rem; border-radius: 0.35rem; background: linear-gradient(120deg, #0f4d84, #17619f); color: #fff; }
.publications-page .publication-section-title::after { content: ""; flex: 1; min-width: 1rem; border-bottom: 2px solid #2a679f; opacity: 0.72; }
.publications-page .publication-list { padding-left: 1.5rem; }
.publications-page .publication-list > li { padding: 0 0 1.1rem 0.25rem; margin-bottom: 1.1rem; border-bottom: 1px solid #c4d1e0; }
.publications-page .publication-list > li::marker { color: #0f4d84; font-weight: 700; }
.publications-page .publication-title { margin: 0 0 0.4rem; font-size: 1.05rem; line-height: 1.5; }
.publications-page .publication-title a { text-decoration: none; }
.publications-page .publication-title a:hover, .publications-page .publication-title a:focus { text-decoration: underline; }
.publications-page .publication-authors, .publications-page .publication-venue, .publications-page .publication-links { margin: 0.25rem 0; }
.publications-page .publication-authors, .publications-page .publication-links { font-size: 0.9em; }
@media (max-width: 600px) {
  .publications-page .publication-section-title { gap: 0.5rem; font-size: 1rem; }
  .publications-page .publication-section-title span { max-width: calc(100% - 1.5rem); }
}
/* Cover-inspired colors and motifs; self-contained, without external image requests. */
.publications-page .journal-overview { margin: 1.25rem 0 1.5rem; padding: 1.1rem; border: 1px solid #d6dfe8; border-radius: 14px; background: #f7f9fc; color: #192e43; }
.publications-page .journal-overview-heading { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 0.3rem 1rem; }
.publications-page .journal-overview h2 { margin: 0; padding: 0; border: 0; font-size: 1.05rem; color: #192e43; }
.publications-page .journal-total { font-size: 0.8rem; color: #56677b; }
.publications-page .journal-treemap { margin-top: 0.9rem; position: relative; width: 100%; height: 360px; overflow: hidden; border-radius: 9px; background: #fff; }
.publications-page .journal-tile { position: absolute; box-sizing: border-box; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-end; gap: 2px; margin: 0; padding: 12px; border: 2px solid #f7f9fc; border-radius: 7px; background: var(--journal-color); color: var(--journal-ink, #fff); font-family: inherit; text-align: left; cursor: pointer; overflow: hidden; isolation: isolate; transition: filter 160ms ease; }
.publications-page .journal-tile::before { content: ""; position: absolute; z-index: -1; inset: 0; opacity: 0.2; background: repeating-radial-gradient(ellipse at 110% 0%, transparent 0 16px, currentColor 17px 18px, transparent 19px 30px); }
.publications-page .journal-tile[data-motif="mesh"]::before { background: repeating-linear-gradient(35deg, transparent 0 19px, currentColor 20px 21px), repeating-linear-gradient(125deg, transparent 0 19px, currentColor 20px 21px); }
.publications-page .journal-tile[data-motif="frame"]::before { inset: 15% 10% 30% 35%; border: 3px solid currentColor; background: none; transform: rotate(-12deg); }
.publications-page .journal-tile[data-motif="dots"]::before { background: radial-gradient(currentColor 1px, transparent 2px) 0 0 / 9px 9px; }
.publications-page .journal-tile[data-motif="bands"]::before { background: repeating-linear-gradient(135deg, transparent 0 30px, currentColor 31px 47px, transparent 48px 65px); }
.publications-page .journal-tile:hover, .publications-page .journal-tile[data-active="true"] { filter: brightness(1.12); box-shadow: inset 0 0 0 2px currentColor; }
.publications-page .journal-tile:focus-visible { outline: 3px solid #fff; outline-offset: -7px; box-shadow: inset 0 0 0 4px #182b42; }
.publications-page .journal-abbr { font-size: var(--journal-label-size, 20px); font-weight: 800; letter-spacing: 0.02em; line-height: 1.2; white-space: nowrap; }
.publications-page .journal-quantity { font-size: 12px; line-height: 1.3; }
.publications-page .journal-detail[hidden] { display: none; }
.publications-page .journal-detail { margin-top: 0.8rem; padding-left: 0.75rem; border-left: 3px solid var(--detail-color, #9aafc5); min-height: 4.5rem; }
.publications-page .journal-detail-name, .publications-page .journal-detail-count { display: block; }
.publications-page .journal-detail-name { font-size: 0.85rem; line-height: 1.5; }
.publications-page .journal-detail-count { margin-top: 0.2rem; font-size: 0.75rem; color: #56677b; }
@media (max-width: 600px) {
  .publications-page .journal-overview { padding: 0.65rem; }
  .publications-page .journal-treemap { height: 430px; }
  .publications-page .journal-tile { padding: 8px; }
  .publications-page .journal-detail { min-height: 6rem; }
}
@media (prefers-reduced-motion: reduce) { .publications-page .journal-tile { transition: none; } }

</style>

<div class="publications-page">
<p>18 peer-reviewed journal articles. Publications are listed in reverse chronological order within each category.</p>

<section class="journal-overview" id="journal-overview" aria-labelledby="journal-overview-title" hidden>
  <div class="journal-overview-heading">
    <h2 id="journal-overview-title">Publications by journal</h2>
    <span class="journal-total"></span>
  </div>
  <div class="journal-treemap" role="group" aria-label="Journal publication counts"></div>
  <div class="journal-detail" hidden role="status" aria-live="polite" aria-atomic="true">
    <strong class="journal-detail-name"></strong>
    <span class="journal-detail-count"></span>
  </div>
</section>

{% if site.author.googlescholar %}
<p>See also my <a href="{{ site.author.googlescholar }}">Google Scholar profile</a>.</p>
{% endif %}

<!-- Bibliographic metadata verified against Crossref DOI records on 2026-09-08.
     Author confirmed no corresponding-author publications at this update. -->

<h2 class="publication-section-title"><span>First- or Corresponding-Author Publications</span></h2>
<ol class="publication-list">
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.ijmecsci.2026.111329">Growth-based shape control of hyperelastic plates under body forces</a></h3>
    <p class="publication-authors"><strong>Zhanfeng Li</strong>, Xiaohu Yao, Mokarram Hossain, and Jiong Wang.</p>
    <p class="publication-venue"><em>International Journal of Mechanical Sciences</em>, <strong>313</strong>, 111329 (2026).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.ijmecsci.2026.111329">DOI: 10.1016/j.ijmecsci.2026.111329</a> · <a href="{{ base_path }}/publication/2026-01-01-IJMS-GrowthBased">Details</a> · <a href="{{ base_path }}/files/papers/Li-2026-Growth-based-shape-control-IJMS.pdf">PDF</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.ijengsci.2025.104266">General shape transformations of thin hyperelastic shells through stress-free differential growth</a></h3>
    <p class="publication-authors"><strong>Zhanfeng Li</strong> and Jiong Wang.</p>
    <p class="publication-venue"><em>International Journal of Engineering Science</em>, <strong>213</strong>, 104266 (2025).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.ijengsci.2025.104266">DOI: 10.1016/j.ijengsci.2025.104266</a> · <a href="{{ base_path }}/publication/2025-08-01-IJES-General">Details</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.jmps.2025.106089">Coupled magneto-mechanical growth in hyperelastic materials: Surface patterns modulation and shape control in bio-inspired structures</a></h3>
    <p class="publication-authors"><strong>Zhanfeng Li</strong>, Yafei Wang, Zuodong Wang, Chennakesava Kadapa, Mokarram Hossain, Xiaohu Yao, and Jiong Wang.</p>
    <p class="publication-venue"><em>Journal of the Mechanics and Physics of Solids</em>, <strong>200</strong>, 106089 (2025).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.jmps.2025.106089">DOI: 10.1016/j.jmps.2025.106089</a> · <a href="{{ base_path }}/publication/2025-07-01-JMPS-Coupled">Details</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.cma.2023.116128">A numerical framework for the simulation of coupled electromechanical growth</a></h3>
    <p class="publication-authors"><strong>Zhanfeng Li</strong>, Chennakesava Kadapa, Mokarram Hossain, and Jiong Wang.</p>
    <p class="publication-venue"><em>Computer Methods in Applied Mechanics and Engineering</em>, <strong>414</strong>, 116128 (2023).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.cma.2023.116128">DOI: 10.1016/j.cma.2023.116128</a> · <a href="{{ base_path }}/publication/2023-09-01-CMAME">Details</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.ijsolstr.2023.112128">A general theoretical scheme for shape-programming of incompressible hyperelastic shells through differential growth</a></h3>
    <p class="publication-authors"><strong>Zhanfeng Li</strong>, Jiong Wang, Mokarram Hossain, and Chennakesava Kadapa.</p>
    <p class="publication-venue"><em>International Journal of Solids and Structures</em>, <strong>265-266</strong>, 112128 (2023).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.ijsolstr.2023.112128">DOI: 10.1016/j.ijsolstr.2023.112128</a> · <a href="{{ base_path }}/publication/2023-03-15-IJSS">Details</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.ijengsci.2021.103594">Analytical study on growth-induced axisymmetric deformations and shape-control of circular hyperelastic plates</a></h3>
    <p class="publication-authors"><strong>Zhanfeng Li</strong>, Qiongyu Wang, Ping Du, Chennakesava Kadapa, Mokarram Hossain, and Jiong Wang.</p>
    <p class="publication-venue"><em>International Journal of Engineering Science</em>, <strong>170</strong>, 103594 (2022).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.ijengsci.2021.103594">DOI: 10.1016/j.ijengsci.2021.103594</a> · <a href="{{ base_path }}/publication/2022-01-01-IJES">Details</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1007/s11085-020-09975-6">A Diffusion–Reaction Continuum Damage Model for the Oxidation Behaviors of High-Cr Steels in Supercritical Water</a></h3>
    <p class="publication-authors"><strong>Zhanfeng Li</strong> and Jiong Wang.</p>
    <p class="publication-venue"><em>Oxidation of Metals</em>, <strong>94</strong>(1-2), 5-25 (2020).</p>
    <p class="publication-links"><a href="https://doi.org/10.1007/s11085-020-09975-6">DOI: 10.1007/s11085-020-09975-6</a></p>
  </li>
</ol>

<h2 class="publication-section-title"><span>Co-authored Publications</span></h2>
<ol class="publication-list">
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.jmps.2026.106697">Nonreciprocal transition waves in active lattices</a></h3>
    <p class="publication-authors">Yao Zhang, Chengxuan Zhai, <strong>Zhanfeng Li</strong>, Jiahao Li, Guangjin Mou, Lizichen Chen, Yangkun Du, Michel Destrade, Changguo Wang, and Yafei Wang.</p>
    <p class="publication-venue"><em>Journal of the Mechanics and Physics of Solids</em>, <strong>215</strong>, 106697 (2026).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.jmps.2026.106697">DOI: 10.1016/j.jmps.2026.106697</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.tws.2026.114797">On a simplified multi-layered plate model of hard-magnetic soft material: Asymptotic analyses and numerical implementation</a></h3>
    <p class="publication-authors">Zuodong Wang and <strong>Zhanfeng Li</strong>.</p>
    <p class="publication-venue"><em>Thin-Walled Structures</em>, <strong>225</strong>, 114797 (2026).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.tws.2026.114797">DOI: 10.1016/j.tws.2026.114797</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.tws.2026.114579">Analytical study on the magneto-mechanical behaviors of hard-magnetic soft material shells based on a finite-strain shell model</a></h3>
    <p class="publication-authors">Zuodong Wang, Jiong Wang, <strong>Zhanfeng Li</strong>, Jianbin Wu, and Weicheng Cai.</p>
    <p class="publication-venue"><em>Thin-Walled Structures</em>, <strong>222</strong>, 114579 (2026).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.tws.2026.114579">DOI: 10.1016/j.tws.2026.114579</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1007/s10338-025-00693-7">A Variational Continuum Model for Variant Reorientation of Ni–Mn–Ga Alloys Under Dynamic Mechanical Loading</a></h3>
    <p class="publication-authors">Jiong Wang, Yongtao Liang, <strong>Zhanfeng Li</strong>, Chengkai Fan, and Jianbin Wu.</p>
    <p class="publication-venue"><em>Acta Mechanica Solida Sinica</em> (2026). Advance online publication.</p>
    <p class="publication-links"><a href="https://doi.org/10.1007/s10338-025-00693-7">DOI: 10.1007/s10338-025-00693-7</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.ijsolstr.2025.113217">Asymptotic analyses on field-induced bending deformations of multi-layered hard-magnetic soft material plates</a></h3>
    <p class="publication-authors">Zuodong Wang, <strong>Zhanfeng Li</strong>, and Jiong Wang.</p>
    <p class="publication-venue"><em>International Journal of Solids and Structures</em>, <strong>310</strong>, 113217 (2025).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.ijsolstr.2025.113217">DOI: 10.1016/j.ijsolstr.2025.113217</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.jmps.2024.105867">Electroactive differential growth and delayed instability in accelerated healing tissues</a></h3>
    <p class="publication-authors">Yafei Wang, <strong>Zhanfeng Li</strong>, Xingmei Chen, Yun Tan, Fucheng Wang, Yangkun Du, Yunce Zhang, Yipin Su, Fan Xu, Changguo Wang, Weiqiu Chen, and Ji Liu.</p>
    <p class="publication-venue"><em>Journal of the Mechanics and Physics of Solids</em>, <strong>193</strong>, 105867 (2024).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.jmps.2024.105867">DOI: 10.1016/j.jmps.2024.105867</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.jmps.2024.105727">Realization of planar and surface conformal mappings through stress-free growth of hyperelastic plates: Analytical formulas and numerical calculations</a></h3>
    <p class="publication-authors">Jiong Wang, Zili Jin, and <strong>Zhanfeng Li</strong>.</p>
    <p class="publication-venue"><em>Journal of the Mechanics and Physics of Solids</em>, <strong>190</strong>, 105727 (2024).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.jmps.2024.105727">DOI: 10.1016/j.jmps.2024.105727</a> · <a href="{{ base_path }}/publication/2024-06-06-JMPS">Details</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.apm.2022.10.045">A general multi-layered hyperelastic plate theory for growth-induced deformations in soft material samples</a></h3>
    <p class="publication-authors">Ping Du, <strong>Zhanfeng Li</strong>, Xiaoyi Chen, and Jiong Wang.</p>
    <p class="publication-venue"><em>Applied Mathematical Modelling</em>, <strong>115</strong>, 300-336 (2023).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.apm.2022.10.045">DOI: 10.1016/j.apm.2022.10.045</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1177/10812865221089694">A theoretical scheme for shape-programming of thin hyperelastic plates through differential growth</a></h3>
    <p class="publication-authors">Jiong Wang, <strong>Zhanfeng Li</strong>, and Zili Jin.</p>
    <p class="publication-venue"><em>Mathematics and Mechanics of Solids</em>, <strong>27</strong>(8), 1412-1428 (2022).</p>
    <p class="publication-links"><a href="https://doi.org/10.1177/10812865221089694">DOI: 10.1177/10812865221089694</a> · <a href="{{ base_path }}/publication/2022-04-07-MMS">Details</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.ijsolstr.2021.111348">On a finite-strain plate theory for growth-induced plane-strain deformations and instabilities of multi-layered hyperelastic plates</a></h3>
    <p class="publication-authors">Ping Du, Jiong Wang, <strong>Zhanfeng Li</strong>, and Weicheng Cai.</p>
    <p class="publication-venue"><em>International Journal of Solids and Structures</em>, <strong>236-237</strong>, 111348 (2022).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.ijsolstr.2021.111348">DOI: 10.1016/j.ijsolstr.2021.111348</a></p>
  </li>
  <li>
    <h3 class="publication-title"><a href="https://doi.org/10.1016/j.jmps.2020.104289">On the advantages of mixed formulation and higher-order elements for computational morphoelasticity</a></h3>
    <p class="publication-authors">Chennakesava Kadapa, <strong>Zhanfeng Li</strong>, Mokarram Hossain, and Jiong Wang.</p>
    <p class="publication-venue"><em>Journal of the Mechanics and Physics of Solids</em>, <strong>148</strong>, 104289 (2021).</p>
    <p class="publication-links"><a href="https://doi.org/10.1016/j.jmps.2020.104289">DOI: 10.1016/j.jmps.2020.104289</a> · <a href="{{ base_path }}/publication/2021-03-01-JMPS">Details</a></p>
  </li>
</ol>

</div>

<script>
(function () {
  'use strict';
  const root = document.getElementById('journal-overview');
  if (!root) return;
  const styles = {
    'Journal of the Mechanics and Physics of Solids': ['JMPS', '#b8c9d5', 'waves', '#162a3b'],
    'International Journal of Solids and Structures': ['IJSS', '#293f7a', 'mesh'],
    'International Journal of Engineering Science': ['IJES', '#922953', 'waves'],
    'Thin-Walled Structures': ['TWS', '#23577e', 'frame'],
    'International Journal of Mechanical Sciences': ['IJMS', '#c8edf7', 'mesh', '#163340'],
    'Computer Methods in Applied Mechanics and Engineering': ['CMAME', '#203f80', 'mesh'],
    'Applied Mathematical Modelling': ['AMM', '#edc94d', 'dots', '#332b0c'],
    'Mathematics and Mechanics of Solids': ['MMS', '#243778', 'bands'],
    'Acta Mechanica Solida Sinica': ['AMSS', '#313b97', 'waves'],
    'Oxidation of Metals': ['OM', '#ba391e', 'dots']
  };
  const counts = new Map();
  document.querySelectorAll('.publications-page .publication-venue em').forEach(function (venue) {
    const name = venue.textContent.trim();
    counts.set(name, (counts.get(name) || 0) + 1);
  });
  const journals = Array.from(counts, function ([name, count]) {
    const style = styles[name] || [name.split(/\s+/).map(word => word[0]).join(''), '#425c73', 'mesh'];
    return { name, count, abbr: style[0], color: style[1], motif: style[2], ink: style[3] || '#fff' };
  }).sort((a, b) => b.count - a.count || a.abbr.localeCompare(b.abbr));
  if (!journals.length) return;
  const total = journals.reduce((sum, journal) => sum + journal.count, 0);
  const map = root.querySelector('.journal-treemap');
  const detail = root.querySelector('.journal-detail');
  root.querySelector('.journal-total').textContent = journals.length + ' journals · ' + total + ' articles';
  function show(journal) {
    detail.hidden = false;
    journals.forEach(item => item.button.dataset.active = String(item === journal));
    detail.style.setProperty('--detail-color', journal.color);
    detail.querySelector('.journal-detail-name').textContent = journal.name;
    detail.querySelector('.journal-detail-count').textContent = journal.count + (journal.count === 1 ? ' article' : ' articles') + ' · ' + (journal.count / total * 100).toFixed(1) + '% of publications';
  }
  journals.forEach(function (journal) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'journal-tile';
    button.dataset.motif = journal.motif;
    button.dataset.count = journal.count;
    button.setAttribute('aria-label', journal.name + ': ' + journal.count + (journal.count === 1 ? ' article' : ' articles'));
    button.style.setProperty('--journal-color', journal.color);
    button.style.setProperty('--journal-ink', journal.ink);
    const abbr = document.createElement('span');
    abbr.className = 'journal-abbr';
    abbr.textContent = journal.abbr;
    const quantity = document.createElement('span');
    quantity.className = 'journal-quantity';
    quantity.textContent = journal.count + (journal.count === 1 ? ' article' : ' articles');
    button.append(abbr, quantity);
    ['pointerenter', 'focus', 'click'].forEach(event => button.addEventListener(event, () => show(journal)));
    journal.button = button;
    map.append(button);
  });
  function layout(items, x, y, width, height) {
    if (items.length === 1) {
      const journal = items[0];
      Object.assign(journal.button.style, { left: x + 'px', top: y + 'px', width: width + 'px', height: height + 'px' });
      const labelSize = Math.max(12, Math.min(32, (width - 24) / (journal.abbr.length * 0.75), height / 3));
      journal.button.style.setProperty('--journal-label-size', labelSize + 'px');
      journal.button.querySelector('.journal-quantity').textContent = width < 76 ? String(journal.count) : journal.count + (journal.count === 1 ? ' article' : ' articles');
      return;
    }
    const sum = items.reduce((s, item) => s + item.count, 0);
    let split = 1, cumulative = items[0].count;
    while (split < items.length - 1 && Math.abs(cumulative + items[split].count - sum / 2) < Math.abs(cumulative - sum / 2)) {
      cumulative += items[split++].count;
    }
    const ratio = cumulative / sum;
    if (width >= height) {
      layout(items.slice(0, split), x, y, width * ratio, height);
      layout(items.slice(split), x + width * ratio, y, width * (1 - ratio), height);
    } else {
      layout(items.slice(0, split), x, y, width, height * ratio);
      layout(items.slice(split), x, y + height * ratio, width, height * (1 - ratio));
    }
  }
  root.hidden = false;
  function redraw() { layout(journals, 0, 0, map.clientWidth, map.clientHeight); }
  redraw();
  if (window.ResizeObserver) new ResizeObserver(redraw).observe(map);
  else window.addEventListener('resize', redraw);
}());
</script>
