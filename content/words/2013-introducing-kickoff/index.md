---
slug: introducing-kickoff
title: 'Introducing Kickoff'
subtitle: 'An overview of Kickoff for the TMW Labs blog'
date: 2013-12-10
---

Within a large team, making sure that everyone is on the same page can be difficult; at TMW we have a team of about 20 web developers (6 are front-enders and creative technologists) and this was an issue that we needed to tackle. We create many different types of sites, from single page apps to large-scale builds like [uk.thebar.com](http://uk.thebar.com) or [BBC Goodfood](http://www.bbcgoodfood.com) and needed a framework that would work for all of them, so [Ash Nolan](http://twitter.com/AshNolan_) and I created [Kickoff](http://tmwagency.github.io/kickoff/).

**Kickoff is a lightweight front-end framework for creating scalable, responsive sites**; that might sound a bit vague but it is the essence of the framework. Due to the nature of agency work, the projects are hugely varied, but as developers, we always try to cut corners to normalise things as much as possible – basically because we're lazy and we don't want to have to repeat things very often! Kickoff aims to mitigate common problems found in web development by providing a strong starting point and a set of helpful defaults for use on almost any project.

The key difference of Kickoff when compared with other similar frameworks – I'm looking at you [Bootstrap](http://getbootstrap.com/) and [Foundation](foundation.zurb.com) – is that it is not nearly as prescriptive. While those frameworks define almost every aspect of a website with CSS styles and JavaScript plugins that do everything, Kickoff has most of that but does not enable it by default. For example, we have a simple grid system, but if you need something more complex or, heaven forbid, not use one, that is not a problem; just don't include it.

### The tech

[Grunt](http://gruntjs.com) is used extensively in Kickoff. It is the beating heart of the framework, we use it to compile our [Sass](http://sass-lang.com), concatinate and then minify our JavaScript files, or to fire up a simple local server with LiveReload for some testing. Using Grunt has other benefits besides this; it allows any dev to pick up a project, regardless of if they've worked on it before, and get up and running in no time at all. We are working on getting Grunt set-up on our Teamcity continuous integration build server but it is not ready yet - this will be a massive step forward once that's done.

### How do you get your hands on it?

We have built a brochure site at [tmwagency.github.io/kickoff/](http://tmwagency.github.io/kickoff/) where you can find documentation and demos on various parts of the framework. If you want to grab the code, visit our Github [project page](https://github.com/tmwagency/kickoff/). It is being actively maintained and we welcome suggestions and support for improvements. If you use [Yeoman](http://yeoman.io), there is a [Kickoff generator](http://tmwagency.github.io/kickoff/docs/yeoman.html) that I created to help speed up the project creation process even more.

### Here are a few sites using Kickoff:

- The [BBC Goodfood](http://www.bbcgoodfood.com) cookery site
- The Western Europe version of [uk.thebar.com](http://uk.thebar.com) cocktail site
- [Strepsils Xfactor](http://strepsils.co.uk/xfactor) competition site
- [tech.tmwunlimited.com](http://tech.tmwunlimited.com)

We are very proud of Kickoff, it has helped our team become more efficient, improving workflow throughout the department. Give it a try on your projects and let us know how you get on.
