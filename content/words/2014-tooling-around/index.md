---
slug: tooling-around
title: 'Tooling around'
subtitle: 'Are we focusing too much on the tools and not the output?'
date: 2014-04-16
---

I first heard of _tooling_, as we know it now, when Paul Irish spoke at [jQuery UK 2012](http://www.paulirish.com/2012/talk-tooling-the-webapp-development-stack/). He described the end-to-end workflow for web-based projects using only the best tools to increase efficiency. Examples include setting up projects using boilerplate code, frameworks and common tools and having them all function in perfect harmony.

The benefits are huge, there’s no denying it, but recently I have come to the disappointing conclusion that I am a tooling addict. There, I said it. Is it bad? No, but it does seem to block me from doing what I would rather or should be doing: writing code and improving my skill set. I think its fair to say that our entire industry is also addicted to the benefits that tooling seeks to provide, and why shouldn’t we be? Being efficient is pretty great.

There’s no shortage of different types either: whether they be tools that speed up developer workflows, like Yeoman; HTML/CSS frameworks, like [Twitter Bootstrap](http://getbootstrap.com); and task runners like [Grunt](http://gruntjs.com); there’s a tool for everything. Now though, I think tooling can be extended to much more than project files and process, like how your IDE and even how your computer and terminal are setup; dotfiles for example. Furthermore, I spend an extraordinary amount of time and effort making sure these are all configured correctly and synced with Github - it just doesn’t seem right.

To illustrate, at TMW we use the Kickoff framework for every project we build. It has a highly organised Gruntfile that I have spent hours crafting so that my colleagues, users of Kickoff, and myself, are able to work as efficiently as possible. It works flawlessly, but when gulp.js (a similar build system to Grunt) was released I converted our Gruntfile to this new system because I had heard how good it was, never mind the fact that gulp did not, at the time, have half the plugins and tools that we used regularly in Kickoff. Naturally, I have also created a Yeoman generator for Kickoff as well, which is semi-actively maintained (also part of the problem) and is extremely useful. Were either of those a positive use of my time? Arguably so, but was there any need to reinvent the perfectly functioning wheel in the first place?

As well as [my dotfiles](https://github.com/mrmartineau/dotfiles), which are used to backup and sync my system preferences on my Mac, I have taken to hosting other app settings online, for example my [Sublime Text](https://github.com/mrmartineau/SublimeText3UserSettings), iTerm and Alfred preferences are all hosted on either Github or Bitbucket. Having them there means that I can easily `git pull` and sync them to my local machine as I switch between 2 machines daily: this is a massive boon. Although, if I don’t have exactly the same settings - this ideal setup - on both machines it feels rather like I have failed as a developer. This brings me to my next point.

### The grass is always greener

If, like me, you follow even a few prominent web developers your feed will constantly be filled with links and tips on how to use the latest tool. This is usually something they’ve created and their company is actively pushing: the need to update, change or overhaul your current setup is great. I am inclined to agree with Tim Ruffles’ [recent assertion](http://timruffles.github.io/javascript-code-quality/#/14) that “programmers are faddish and emotional people”. When a new performance enhancing service or tool is released, we are all over it. There’s a certain element of ‘keeping up with the Joneses’ or risk being left behind; and heaven preserve you if you do.

Don’t get me wrong, I love all that tooling provides (as you can see) but I feel that it is getting in the way of actual growth and innovation. I’d wager that I am not alone in spending hours trying to reach tooling Eutopia, are you the same? Does this mean that I will stop? No, but I will certainly avoid wasting nearly as much time on it in the future.
