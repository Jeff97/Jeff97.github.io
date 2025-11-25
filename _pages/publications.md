---
layout: archive
title: "Selected Publications"
permalink: /publications/
author_profile: true
# updated
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find more of my publications on <a href="{{site.author.googlescholar}}">Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
