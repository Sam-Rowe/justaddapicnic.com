---
layout: page
title: Outdoors
permalink: outdoors
---


## Take a peek at some great outdoor locations...

<div class= "location-list">
	<ul>
	  {% for post in site.categories.outdoors %}
	    {% if post.url %}
	        <li style="text-decoration: none;">
	        	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	    			{{ post.excerpt }}
	    	</li>
	    {% endif %}
	  {% endfor %}
	</ul>
</div>