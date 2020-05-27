---
slug: svg-on-the-web
title: 'My process for using SVG on the web'
subtitle: 'hiDPI workflow for modern websites'
date: 2015-09-09
---

SVGs (Scalable Vector Graphics) have been around for a long time but it is only in the last few years that developers have started using them in anger, this is most likely because of the wider browser support and the prevalence of retina or hiDPI screens uses in modern smartphones. They are brilliant for creating resolution independent graphics for use on your websites.

This post assumes a certain level of familiarity with SVGs, so if you are new to them, please read [SVG on the web](https://svgontheweb.com/) for a wealth of information.

### Process

The `.psd` files I receive often have many vectors that need extracting so I grab the layer/smart object and bring it into Sketch for mac. Why Sketch? I find Sketch produces/exports SVGs that have less cruft than Illustrator. Before I export though, I need to get the vector ready by flattening it as much possible using the **Union**, **Subtract**, **Intersect** and **Difference** tools (in Illustrator, they can be found in the Pathfinder panel). Flattening or simplifying the vector information reduces the final output when you export the file, which means that the file size will be smaller.

After the SVG is exported to my project, I usually have a Grunt process that watches a specific directory for changes, then runs an [Imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) task then [Grunticon](https://github.com/filamentgroup/grunticon). I use the [SVGO](https://github.com/imagemin/imagemin-svgo) optimiser for Imagemin to optimise and compress and I use these specific options:

```js
;[
  { removeViewBox: false },
  { removeUselessStrokeAndFill: false },
  { removeTitle: true },
]
```

You can find a full list of all the SVGO options [here](https://github.com/svg/svgo#what-it-can-do), but if you don’t use Grunt, there’s plugins for [gulp](https://github.com/ben-eb/gulp-svgmin), [a GUI](https://github.com/svg/svgo-gui), and a [handy webapp](https://jakearchibald.github.io/svgomg/).

After the SVGs are minified, I use Grunticon to sprite them and create the various fallbacks that are needed in order to use SVGs in older browsers. I don't think Grunticon is the best solution, it certainly as its drawbacks, but it is definitely the most robust solution for creating SVG icons for the web; I suggest trying it out if you are unfamiliar.

Once Grunticon has converted the minified SVG into all the different formats, there are only a few more things I need to do. The first is to give some base styles for all elements that will be icons (these usually have a classname like `.icon-geo`):

```css
[class^='icon-'],
[class*=' icon-'] {
  speak: none; /* Ensures that screenreaders won't read this element */
  background-size: contain; /* Ensures that the SVG will always be within the element that has this class */
  background-position: center center; /* Ensures the icon is centred within the element */
}
```

Once that is done, I create a new class for the type of element that I'm building, like so:

```css
.icon-geo {
  width: 50px; /* Without width , the icon below would have a hotizontsl size */
  height: 50px; /* Without height , the icon above would have a vertical size */
  display: inline-block;
}
```

```html
<i class="icon-geo"></i>
```

I have created many different websites for hiDPI screens, I've tried a bunch of different workflows but this one has stuck for well over a year now, and in front-end development, that is a _long_ time.

[Kickoff](http://trykickoff.github.io) (the front-end framework that I maintain) already has the Grunt, Imagemin, SVGO and Grunticon workflow, so if you're interested, please give it a try.
