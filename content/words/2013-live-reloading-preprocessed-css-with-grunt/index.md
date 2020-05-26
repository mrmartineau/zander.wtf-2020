---
slug: live-reloading-preprocessed-css-with-grunt
title: 'Live reloading preprocessed CSS using Grunt'
subtitle: 'This is all you need to get Livereload working with Grunt'
date: 2013-06-08
---

Having recently changed my development process from using [Codekit](http://incident57.com/codekit/) to [Grunt.js](http://gruntjs.com), I was frustrated that I no longer had live updates without a browser refresh when I made changes to my CSS; fortunately for me, there is a plugin for Grunt that solves this problem and, funnily enough, I happened to be using it already.

The plugin in question is called [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch), it is a common plugin developed by the maintainers of Grunt itself and has recently been updated (v 0.4.4) to allow live reloading to work in this way.

![](./img/posts/dist/grunt-logo.svg)

We are going to add a new subtask within the existing _watch_ task called **livereload** that monitors your generated CSS file(s) (or directory) for changes and then triggers a livereload. Make sure you include `options: { livereload: true }` otherwise the livereload server will not work. See below for what my livereload watch subtask looks like:

```js
livereload: {
  options: { livereload: true },
  files: [
    // When these files are changed, livereload is triggered
    // Make sure this directory is the same as the one your site points to
    'resources/css/styles.css'
  ]
}
```

### Install the Livereload browser extension

Adding the subtask above is not enough, you will need to install the Livereload browser extension in order to see the styles live reload. It is available for [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) and [Firefox](https://addons.mozilla.org/en-us/firefox/addon/livereload/). For information on how to use these extensions, please see their documentation.

### Run the watch task

Now all you need to do is run `grunt watch`, start editing your preprocessed CSS and view the styles reloading as you make those changes. Bear in mind that depending on the complexity of your preprocessed CSS, it might take a few seconds for the change to appear - SASS is notoriously slow if you use many `@extend`s.

Below is an example of a full watch task with the included `scss`, `js` and `livereload` subtasks or you can see the `Gruntfile.js` that I use on this site, [here](https://github.com/mrmartineau/zander.wtf/blob/master/Gruntfile.js):

```js
watch: {
  scss: {
    options: {
      nospawn: true,
      interrupt: true
    },
    files: ['resources/scss/**/*.scss'],
    tasks: ['sass:dev']
  },

  js: {
    options: {
      nospawn: true,
      interrupt: true
    },
    files: [
      'resources/js/*.js',
      'resources/js/libs/**/*.js'
    ],
    tasks: ['uglify']
  },
  livereload: {
    options: { livereload: true },
    files: [
      'resources/css/*.css'
    ]
  }
}
```
