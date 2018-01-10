---
layout: page
title: Indoors
permalink: indoors
---


## Take a peek at some great indoor locations...


<ul class="post-list">
  {% for post in site.categories.indoors %}
    {% if post.url %}
    	<li>
        	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
       	<p>
          {% if post.tags.size > 0 %}
            {{ post.tags }}
          {% endif %}
        </p>
    			{{ post.excerpt }}
    	</li>
    {% endif %}
  {% endfor %}
</ul>

