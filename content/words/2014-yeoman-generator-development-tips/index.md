---
slug: yeoman-generator-development-tips
title: 'Yeoman Generator Development Tips'
subtitle: 'Tips for those creating Yeoman generators'
date: 2014-05-01
---

Yeoman generators are a powerful tool for developers, they enable us to get up and running with projects extremely quickly. I created a generator for our Kickoff framework and came across a few things that I thought others would benefit from; hopefully this post will shed some light for others creating their own generators.

The Kickoff Yeoman generator is a simple way to 'kickoff' your project even more quickly than before. It simply asks a few questions, modifies some files, adds the results to the ouputted files and installs some npm and bower dependencies.

### Escaping Underscore template variables

Use double percent signs to escape Underscore template variables, like this: `<%%= someVar %>` instead of `<%= someVar %>` and you should be sorted. I had this issue in the Gruntfile where there are quite a few of these tags, see [here](https://github.com/tmwagency/generator-kickoff/blob/3982752d18f4b83870ed9e7b38c4d9c39e41efa6/app/templates/_Gruntfile.js#L53). Credit for this goes to a helpful comment on [Github](https://github.com/yeoman/generator-generator/issues/45#issuecomment-31031268).

### Run Grunt (or another command) after Yeoman builds

The Kickoff generator runs a Grunt task immediately after it has finished compiling and installing everything, I was able to do this by running the `spawnCommand` method in the `dependenciesInstalled` callback, like this:

```js
// Now you can bind to the dependencies installed event
this.on('dependenciesInstalled', function() {
  if (this.jsLibs === 'jquery') {
    this.spawnCommand('grunt', ['jquery'])
  }
  this.spawnCommand('grunt', ['serve'])
})
```

See this in our actual [index.js](https://github.com/tmwagency/generator-kickoff/blob/c2aab72ad4a15186b646505817152732a8c9f4b2/app/index.js#L24)

### How to log a coloured message with Yeoman

To colourise your text, you can use the same colour module as used by the generator system, called Chalk.

First install it:

```sh
npm install --save chalk
```

Then [require it](https://github.com/tmwagency/generator-kickoff/blob/master/app/index.js#L5):

```js
var chalk = require('chalk')
```

Then [use it](https://github.com/tmwagency/generator-kickoff/blob/master/app/index.js#L35):

```js
console.log(chalk.bold.yellow('message'))
```

![Chalk colours in the Kickoff Yeoman generator](http://tech.tmw.co.uk/img/blog/yeoman-tips/chalk.png)

If you would like to know more about different prompt/question styles, see the [Inquirer.js docs](https://github.com/SBoudrias/Inquirer.js). Kickoff's can be found [here](https://github.com/tmwagency/generator-kickoff/blob/3982752d18f4b83870ed9e7b38c4d9c39e41efa6/app/index.js#L38-L80).

### Conditional statements in your generator

As you can see above, our generator asks if you'd like to include jQuery in the project, if the user does, the relevant 'jQuery Builder' Grunt plugin configs are added to the package.json and the Gruntfile before being installed with npm, then a post generator task is also run to build the library.

Some simple conditionals were needed in the Gruntfile, package.json and the index.js, but I found setting up these conditionals a little tricky. They are basically standard javascript if statements wrapped in an underscore template tag but need to be wrapped with raw tags. Here's an example from our package.json:

```js
<% if (jsLibs == "jquery") { %>,"grunt-jquery-builder": "~0.1.1"<% } %>

/* or */

<% if (jsLibs == 'jquery') { %>,"jquery": true<% } %>
```

Notice the preceeding comma before the conditional's content? JSON syntax is very strict, if a comma isn't there, or is in the wrong place, it will throw an error and npm will not install the dependencies, that is why I included the preceeding comma within the conditional. It might seem obvious but this logic needs to be self-contained and the surrounding code needs to be unaware of it, if it does not exist.

## Try the [Kickoff generator](https://www.npmjs.org/package/generator-kickoff)

To install it, run:

```sh
npm install -g generator-kickoff
```

To use it run:

```sh
yo kickoff
```

Please leave a comment below if you have any other tips, we're always keen to find out more.

### Useful links

- [The Yeoman project](http://yeoman.io)
- To find out about writing your own Yeoman generators, have a look at [yeoman.io/generators.html](http://yeoman.io/generators.html#writing-your-first-generator).
