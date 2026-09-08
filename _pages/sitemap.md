---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
description: "Explore Zhanfeng Li's academic homepage, publications, talks, CV, and photos."
---

{% include base_path %}

Explore my academic homepage, research publications, and conference talks. This directory updates automatically as new publications and talks are added. An [XML sitemap]({{ base_path }}/sitemap.xml) is also available for search engines.

<nav aria-label="Sitemap sections">
  <a href="#main-pages">Main pages</a> &middot;
  <a href="#publications">Publications</a> &middot;
  <a href="#talks">Talks</a>
</nav>

<h2 id="main-pages">Main pages</h2>
<ul>
  <li><a href="{{ base_path }}/">About me</a></li>
  {% for item in site.data.navigation.main %}
  <li><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></li>
  {% endfor %}
</ul>

{% assign publications = site.publications | where_exp: 'item', 'item.sitemap != false' | sort: 'date' | reverse %}
<h2 id="publications">Publications ({{ publications.size }})</h2>
<ul>
  {% for item in publications %}
  <li>
    <a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a>
    <small>({{ item.date | date: '%Y' }})</small>
  </li>
  {% endfor %}
</ul>

{% assign talks = site.talks | where_exp: 'item', 'item.sitemap != false' | sort: 'date' | reverse %}
<h2 id="talks">Talks ({{ talks.size }})</h2>
<ul>
  {% for item in talks %}
  <li>
    <a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a>
    <small>(<time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: '%B %d, %Y' }}</time>)</small>
  </li>
  {% endfor %}
</ul>
