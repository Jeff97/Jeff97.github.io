---
permalink: /
title: "Zhanfeng Li"
seo_title: "Zhanfeng Li | South China University of Technology"
description: "Zhanfeng Li (李展锋), Assistant Researcher and Postdoctoral Fellow at South China University of Technology (华南理工大学). Research in soft matter mechanics, growth, and shape control."
author_profile: true
redirect_from:
  - /about/
  - /about.html
latest_publication_doi: "10.1016/j.ijmecsci.2026.111329"
latest_publication_image: "/images/IJMS-2026-experimental-results.png"
latest_publication_videos: [latest]
research_highlights:
  - title: "Stress-free shape programming"
    doi: "10.1016/j.ijengsci.2025.104266"
    image: "/images/ShapeControl.jpg"
    alt: "Stress-free growth-based shape programming"
    videos: [general, conformal, beam, shell]
    summary: "We establish analytical mappings between growth tensors and target geometries, enabling conformal mappings and general shape transformations in thin hyperelastic structures."
  - title: "Multiphysics computational modelling"
    doi: "10.1016/j.jmps.2025.106089"
    image: "/images/Volvox.png"
    alt: "Numerical simulation of multifield coupled growth deformation"
    videos: [magneto]
    summary: "Mixed finite-element frameworks and ABAQUS subroutines support simulations of electro-mechanical and magneto-mechanical growth, from surface patterns to biological morphogenesis."

---

<section class="academic-intro">
  <p class="academic-eyebrow">Postdoctoral Fellow · South China University of Technology</p>
  <p class="academic-lead">I study how soft materials grow, deform, and acquire prescribed shapes - connecting nonlinear mechanics, analytical modelling, and computational design.</p>
  <div class="academic-tags">
    <span>Soft Matter Mechanics</span>
    <span>Growth &amp; Morphing</span>
    <span>Plate &amp; Shell Theory</span>
    <span>Multiphysics Modelling</span>
    <span>Finite Element Methods</span>
  </div>
</section>

I am **Zhanfeng Li (李展锋)**, an **Assistant Researcher (Postdoctoral Fellow)** at the School of Civil Engineering and Transportation, **South China University of Technology (SCUT, 华南理工大学)**, working with **Prof. Xiaohu Yao**. I received my Ph.D. in Mechanics from SCUT in 2023 and was a visiting Ph.D. student at Swansea University (2021.11-2022.11), co-supervised by **Prof. Mokarram Hossain**.

## Latest publication

<section class="featured-paper">
  <div>
    <p class="section-kicker">International Journal of Mechanical Sciences · 2026</p>
    <h3 class="featured-paper__title"><a href="/publication/2026-01-01-IJMS-GrowthBased/">Growth-based shape control of hyperelastic plates under body forces</a></h3>
    <p class="featured-paper__meta">Zhanfeng Li, Xiaohu Yao, Mokarram Hossain &amp; Jiong Wang · <em>International Journal of Mechanical Sciences</em>, 313, 111329.</p>
    <p class="featured-paper__summary">This work derives explicit analytical relations between body forces, growth fields, and target geometry, and validates the resulting inverse-design framework with finite-element simulations and silicone-plate experiments.</p>
    <div class="featured-paper__actions">
      <a class="academic-button" href="/files/papers/Li-2026-Growth-based-shape-control-IJMS.pdf">Read the paper (PDF)</a>
      <a class="academic-button academic-button--quiet" href="https://doi.org/{{ page.latest_publication_doi }}">View DOI</a>
    </div>
  </div>
  <figure>
    <img src="{{ page.latest_publication_image }}" alt="Experimental validation of growth-based shape control under self-weight">
    <figcaption>Experimental validation: fabricated silicone plates, gravity-driven deformation, and agreement with target shapes and simulations.</figcaption>
  </figure>
</section>

{% include research-videos.html video_ids=page.latest_publication_videos label="Latest publication videos" %}

{% capture research_highlights %}
{% for highlight in page.research_highlights %}
  {% assign duplicates_latest = false %}
  {% if highlight.doi and highlight.doi == page.latest_publication_doi %}{% assign duplicates_latest = true %}{% endif %}
  {% if highlight.image and highlight.image == page.latest_publication_image %}{% assign duplicates_latest = true %}{% endif %}
  {% unless duplicates_latest %}
  <article class="research-highlight">
  <div class="research-card">
    <div>
      <h3>{{ highlight.title | escape }}</h3>
      <p>{{ highlight.summary | escape }}</p>
    </div>
    <img src="{{ highlight.image }}" alt="{{ highlight.alt | escape }}">
  </div>
  {% include research-videos.html video_ids=highlight.videos label=highlight.title %}
  </article>
  {% endunless %}
{% endfor %}
{% endcapture %}
{% assign research_highlights = research_highlights | strip %}
{% if research_highlights != empty %}
## Research highlights

<section class="research-grid">
{{ research_highlights }}
</section>
{% endif %}
