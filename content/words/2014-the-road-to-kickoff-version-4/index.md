---
slug: the-road-to-kickoff-v4
title: 'The road to Kickoff version 4'
subtitle: What's in store for the next release of Kickoff
date: 2014-08-27
---

**UPDATE:** The content in this post is out-of-date, Kickoff v4 has now been released. Please go to the [Kickoff site](http://trykickoff.com) to see all the new updates.

---

The upcoming release of Kickoff, version 4, has been in development for the past few months. As well as fixing a number of bugs, we have improved both the Sass and the JavaScript structure of the framework, removing a fair bit of old and unnecessary code.

Our focus with this release was to help make the framework more intuitive and more powerful. While we realise that Kickoff is probably not meant for beginners, it should still be easy to navigate and get to grips with.

As with all previous releases, we see this version of Kickoff as a starting point; designed to be easily modified dependant on the use-case. It is built to help you start projects quickly. If a framework gets in the way of your development, then it ceases to be useful.

## Getting started with Kickoff

We know that it isn’t always obvious where to start when beginning to use a new framework. That is why we have created the getting started page.

Once you have cloned/downloaded Kickoff & installed the npm dependencies, running `grunt start` from your terminal will open a new page in your browser explaining where to start when developing with Kickoff. It shows how one should edit the Sass variables & update the colour palette.

## CSS overview

One of the main areas we wanted to simplify in version 4 of Kickoff was the grids.We realised that the splits and shunts were not being used, so they have been removed. They will still be a part of the [Choreographic Grid](https://github.com/mrmartineau/Choreographic-Grid), which is still being maintained by me, and can be easily dropped-in to replace the new grid system should you still want to use those features.

As [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) is now the standard in Kickoff (which means we no longer have to worry about writing vendor-prefixed code), we have added a Sass warning when you use a mixin that could be handled by Autoprefixer.

Sass variables have changed quite a lot as well. For example `$base-font-size` is now `$font-size-base` and `$base-font-family` is now `$font-family-base`. This then matches the CSS property needed when using the variable, e.g. `font-family: $font-family-base`. It might seem like a small or needless change but we feel it is important when using the framework, day-in & day-out, that the naming conventions become more intuitive. It is now easier to remember the order of the words in the variable name as it reflects the native CSS property name.

## Javascript

We have simplified the JavaScript base files and made it easier than ever to modify its structure. We have removed most of the helpers, instead opting to use [Shimly](https://github.com/nicbell/Shimly) or [Bower](http://bower.io) to pull in dependencies.

### Bower

We have started using Bower more and more and feel that this is the best way to manage javascript dependencies. It means that these separate items can be updated independently of the main Kickoff framework. Three libraries have been included by default, these are:

- [Swiftclick](https://github.com/tmwagency/swiftclick) - Developed by our own Ivan Hayes, SwiftClick is a library created to eliminate the 300ms click event delay on touch devices.
- [Trak.js](https://github.com/tmwagency/trak.js) - Developed by our own Zander Martineau, trak.js is a universal analytics event tracking API
- [Cookies](https://github.com/ScottHamper/Cookies/) - Developed by Scott Hamper, Cookies is a great Cookie manipulation library

### Browserify

We thought hard about converting the framework over to use Browserify as default in Kickoff. It is something we use on the majority of our projects at TMW and we feel it adds a lot of value to the way we structure our JavaScript.

However, after playing around with integrating it, we felt that using Browserify should be kept as an optional addition to Kickoff – especially inkeeping with our design direction of keeping Kickoff as dependency–free and minimal as we can.

Instead, we will be maintaining a separate branch of Kickoff which includes a base setup of Browserify. This will be documented on the Kickoff docs site and be otherwise identical to the master branch of Kickoff.

If you’d like to find out more, the branch can be found at [github.com/tmwagency/kickoff/tree/browserify](https://github.com/tmwagency/kickoff/tree/browserify)

## Grunt

The grunt build tasks have changed quite dramatically, but again to make it more intuitive when editing them.

Each group of tasks have been extracted into their own separate file. For example, `config/css.js` contains all the grunt tasks relating to CSS: Sass, Autoprefixer & CSSO. The `config/javascript.js` file contains the uglify (for concatenating and minfying js), shimly (for generating a javascript shims file), jshint and jQuery (for generating a custom jQuery build).

We feel having these tasks now separate makes it far easier to maintain your Grunt setup than having all of the configuration stored in one mammoth Gruntfile.

## Yeoman generator

The Yeoman generator will be updated to reflect all these changes, plus there will be an option to use Browserify as well. Ideally, this generator should be the only way to install Kickoff in the future.

### Take it for a spin now

What are you waiting for?! Grab a copy of Kickoff v4 and let us what you think or browse the codebase in the [next](https://github.com/tmwagency/kickoff/tree/next) branch.

We would love any and all feedback you have, so please leave a comment here or [file an issue](https://github.com/tmwagency/kickoff/issues/new) on Github.

```sh
git clone https://github.com/tmwagency/kickoff.git -b next ‘kickoff-next’
```
