---
layout: default
title: Blog
---

# Blog

{% for post in site.posts %}

<div class="card">

### {{ post.url }}{{ post.title }}</a>

{{ post.date | date: "%d %B %Y" }}

</div>

{% endfor %}
