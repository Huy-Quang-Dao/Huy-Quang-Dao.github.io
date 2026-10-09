---
layout: page
permalink: /publications/
title: Publications
description: Published work, and manuscripts currently under review. An asterisk marks equal contribution.
years1: [2025, 2024, 2023]
years2: [2025,2024, 2023]
nav: true
nav_order: 1
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %} -->

<div class="publications">

<h1>conference &amp; journal articles</h1>

{% bibliography -f papers -q @*[status=accepted]* %}

{% for y in page.years1 %}
  <!-- <h2 class="year">{{y}}</h2> -->
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

<h1>under review</h1>

{% bibliography -f papers -q @*[status=review]* --group_by none %}

{% bibliography -f review --group_by none %}

<h1>preprints</h1>

{% bibliography -f preprints --group_by none %}

<h1> short papers &amp; reports  </h1>

{% for y in page.years2 %}
  <!-- <h2 class="year">{{y}}</h2> -->
  {% bibliography -f reports -q @*[year={{y}}]* %}
{% endfor %}

</div>
