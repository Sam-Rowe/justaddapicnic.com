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
       <div class="container">
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
            <a href="{{ post.url | relative_url }}" class="btn post-name">Let's Go ></a>
          </div>
        </div>

        </div>  
      </li>
    {% endif %}
  {% endfor %}
</ul>

