---
layout: page
title: Indoors
permalink: 
---


## Take a peek at some great indoor locations...


<ul class="post-list">
  {% assign sorted_pages = site.categories.indoors | sort:"tags" %}
  {% for post in sorted_pages %}
    {% if post.url %}

    	<li class="post-list-layout">
        <!-- {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
        <span class="post-meta">{{ post.date | date: date_format }}</span>
 -->    <div class="container">
        <h2>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h2>
        <p style="text-transform: uppercase;">
          {% if post.tags.size > 0 %}
            {{ post.tags }}
          {% endif %}
        </p>
        <div class="row index-post-list">
          <div class="col-md-8">
              <p>
                {{ post.excerpt }}
              </p>
          </div>  
          <div class="col-md-4">
            {% assign image = post.images[0] %}
            {% include image.html image=image %}
          <button type="button" class="post-name">
              <a href="{{ post.url | relative_url }}">Let's Go ></a>
          </button>
          </div>
        </div>

        </div>  
      </li>
    {% endif %}
  {% endfor %}
</ul>

