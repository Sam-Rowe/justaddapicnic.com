---
layout: page
title: Outdoors
permalink: outdoors
---


## Take a peek at some great outdoor locations...


<ul class="post-list">
  {% for post in site.categories.outdoors %}
    {% if post.url %}
        <li>
        	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    			{{ post.excerpt }}
    	</li>
    {% endif %}
  {% endfor %}
</ul>