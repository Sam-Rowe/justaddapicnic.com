---
layout: page
title: Indoors
permalink: indoors
---


## Take a peek at some great indoor locations...

<div class= "location-list">
	<ul>
	  {% for post in site.categories.indoors %}
	    {% if post.url %}
	    	<li>
	        	<h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
	    			{{ post.excerpt }}
	    	</li>
	    {% endif %}
	  {% endfor %}
	</ul>
</div>

