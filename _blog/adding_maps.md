---
layout: default
title:  "Adding maps to Just Add A Picnic"
date:   2018-06-19 13:20:00 +0000
categories: [improvement, technical]
tags: Technical
permalink: 
excerpt: How to add Azure Maps to Just Add A Picnic site

---

# Adding maps

What our competitors have and we don't - we can't search using a map of the locations.

Sam is moving to work for Microsoft in the Azure team so it was a no brainer to use that and leverage Azure maps.
Additionally Sam compared both Azure maps and Google maps neither has the ability to be given a custom set of locations to then use the search as such the search for POI will have to be done outside of this and then returned to the map.

## Starting documentation

Sam started by following the getting started guide

[Tutorial on azure maps](https://docs.microsoft.com/en-us/azure/azure-maps/tutorial-search-location)

Guide on [HTML5 gelocation tools](https://www.w3schools.com/html/html5_geolocation.asp)

## Design of map

We currently use maps in iframes, to enable this Sam created the map as a separate file called MapSearch.html this can be a drop in replacement fo the current google maps in the pages.

### Scratch

https://atlas.microsoft.com/search/fuzzy/json?api-version=1.0&query=gasoline%20station&subscription-key=bDEGD-iO6eaovTqYBz5W4ZQcZiOHpXNfpeHrQAyn_nY&lat=47.6292&lon=-122.2337&radius=100000