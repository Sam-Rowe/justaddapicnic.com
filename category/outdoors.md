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
        	<h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
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


