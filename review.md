---
layout: page
title: Reviews
permalink: /review/
---

<h2>Just Add A Picnic's Recommendations</h2>
<p>Here are products and days out that Just Add A Picnic have tried and tested over the years and now recommend to you to make your days out that much better.</p>


<ul class="post-list">
{% assign sorted_pages = site.reviews | sort:"tags" %}
  {% for review in sorted_pages %}
    {% if review.url %}
      <li class="post-list-layout">
       <div class="container">
        <h2>
          <a class="post-link" href="{{ review.url | relative_url }}">{{ review.title | escape }}</a>
        </h2>
        <p style="text-transform: uppercase;">
          {% if review.tags.size > 0 %}
            {{ review.tags }}
          {% endif %}
        </p>
        <div class="row index-post-list">
          <div class="col-md-8">
              <p>
                {{ review.excerpt }}
              </p>
          </div>  
          <div class="col-md-4">
            {% assign image = review.images[0] %}
            {% include image.html image=image %}
            <a href="{{ review.url | relative_url }}" class="btn post-name">Show Me ></a>
          </div>
        </div>

        </div>  
      </li>
    {% endif %}
  {% endfor %}
</ul>
