---
slug: kickoff-6-and-the-future
title: 'Kickoff 6 and the future'
subtitle: '#tipsForKickoff'
date: 2016-02-10
---

The latest major version of Kickoff was released last November and included many improvements. This post summarises all the important changes that you need to know about.

## Javascript bundling

With this release, we switched how Kickoff bundles JavaScript. Previously, there was a simple, but effective, technique of concatinating an array of files and minifying them. It worked nicely but did not allow developers many of the benefits that more modern techniques afford, so we opted to use [Browserify](http://browserify.org/) to bundle our JavaScript. This meant that we could finally build our code in a more modular way and use npm to manage our dependencies :)

The Browserify setup/config can be found in [\_grunt-configs/javascript.js](https://github.com/TryKickoff/kickoff/blob/master/_grunt-configs/javascript.js). We changed our minification plugin from uglify to [minifyify](https://github.com/ben-ng/minifyify) because, in our tests, we found it compressed our code a lot more.

## CSS improvements

Kickoff’s CSS framework hasn’t changed much over the years, although with each new release we tend to remove more and more. We do this because we want to ensure that Kickoff doesn’t get in your way; so that it is as versatile as possible.

The media object has been updated to ensure that it doesn’t stack it’s columns on skinny viewports by default but by the use of modifier classes. See the code [here](https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/components/_media-object.scss) and demo [here](http://trykickoff.com/demos/components.html#mediaobject).

Block grids have had many improvements thanks to Nic Bell. There are now different modifier classes for each breakpoint, for example:

```html
<ul
  class="l-blockGrid l-blockGrid--4up l-blockGrid--2up--narrow l-blockGrid--6up--wide"
></ul>
```

See demos of the block grids [here](http://trykickoff.com/demos/components.html#blockgrids)

The custom form elements (`radios`, `checkboxes`, `select` and `file` uploads) have been refactored & separated into their own files so that individual items can be imported instead of all of them. Also:

- the custom select element now allows :focus styles
- custom checkboxes don’t depend on SVGs and a tick variant has been added.

See a demo of these elements [here](http://trykickoff.com/demos/forms.html#customfields).

## Scss reorganisation

Another change to improve the UX / findability of Kickoff, we moved all components from `scss/partials/components/*.scss` to `scss/components`. They are now in the top-level scss directory making them much easier to access.

## Tooling

Our Grunt tooling saw some subtle but powerful under-the-hood improvements too. The Sass is now compiled using Nic Bell’s [postscss module](https://github.com/nicbell/postscss) that incorporates node-sass & autoprefixer. The main benefits here, besides a massive performance boost, are that we can extend Sass with other PostCSS modules if needed — yay!

[grunt-filesizegzip](https://github.com/mrmartineau/grunt-filesizegzip) was also added to show file size and gzipped file size during development (or the grunt watch task).
npm scripts

We also made a small number of improvements for those using continuous delivery as their development workflow. Running `npm run deploy` install all non-optional dependencies and then compiles and minifies all the code. To those unfamiliar with non-optional dependencies, npm allow packages to be installed as a dependency (those items used in our code), dev dependency (those items used for compiling our code) or an optional dependency (those items only needed during local development, like grunt-watch or browserSync). This means that when the build is run and packages are installed like so: `npm install package-name --no-optional`. Only the tools needed to compile the code are installed. This alongside `npm prune` sped up our builds considerably.Below is how Kickoff’s npm scripts are setup, should you run `npm run deploy`:

```js
"scripts": {
  "predeploy": "npm i -g grunt-cli && npm prune && npm install --no-optional",
  "deploy": "grunt compile --release"
}
```

## Yeoman updates

The generator was updated to v1.0.0 and pulled all of Kickoff’s v6.0.0 changes. There are fewer questions and they are now more logical. Have a look at the readme for all the questions. The generator is still the best way to start using Kickoff in your project.

## Documentation site

The Kickoff site has had many improvements made to it. The demos/code view was dramatically improved to allow you to easily see what the markup is. The homepage should give developers new to Kickoff a much clearer idea of what it can and can’t do. There’s also a new Kickoff blog, this one if you’re reading this on trykickoff.com.

## Slack

We also now have a dedicated Slack group for discussions surrounding Kickoff. If you need a hand, want to contribute, or want to talk about upcoming features, this is the place to be. Sign up at [slackin-trykickoff.herokuapp.com](http://slackin-trykickoff.herokuapp.com/).

## Thanks

Kickoff would not be where it is today without the help from the community. This release, however, had a large input from Nic Bell who created a bunch of modules to improve the framework. Check out his work on [npm]()

## What’s next for Kickoff?

### ES2015/2016 (ES6) using Babel

Now that we have Browserify, it is incredibly easy to start using ES2015 code transpiled by Babel. We get the benefits of ES2015 without having to modify our code much, for example: Common JS modules can still be used with require() or they can be used with ES2015's import. The list goes on: default arguments for functions, destructuring, arrow functions… I expect Babel to be integrated quite soon.

### ESLint

We have wanted to switch to ESLint for a while now and it will be added when Babel is included.

### Move away from Grunt..?

Now this is a biggie. Kickoff has used Grunt for a very long time and although there’s competitors like gulp, Webpack or even npm scripts we have never felt we needed to change something that works so well. We need to ensure that Kickoff’s Grunt setup can be applied to as many types of projects as possible, and if it can’t it should be changed. We are constantly evaluating new and old tools to see if we can improve developer experience.

### What would you like?

Do you have any thoughts on upcoming features (such as moving away from Grunt), or suggestions of what you might like to see next in Kickoff?
