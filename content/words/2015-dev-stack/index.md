---
slug: dev-stack-2015
title: 'My development stack'
subtitle: 'Tools of the trade when developing for the web'
date: 2015-01-20
---

I read this [post](https://medium.com/@quasado/do-better-than-sketch-photoshop-or-any-other-design-tool-b8db106815a1) a while back about design stacks & it got me thinking about my own, albeit focused more on development. Below you'll find a fairly comprehensive list of the tools I regularly use for [front-end](https://news.layervault.com/click/stories/42206) development in a creative agency.

## Development apps

I use a Mac so some apps may not work on your platform :(

- [Sublime Text](http://sublimetext.com) ✨ is my IDE/Text editor of choice - Install [Package Control](http://packagecontrol.io) before anything else - [Emmet](http://emmet.io) is without doubt the most useful & time-saving plugin - For more recommended plugins, see my [previous post](/2014/07/sublime-text-for-front-end-development) on the subject
- [Chrome (dev release)](http://www.chromium.org/getting-involved/dev-channel) - I find this release balances new features with stability. I use it everyday without any issues. - Notable Extensions: + [WhatFont](http://www.chromium.org/getting-involved/dev-channel) - The easiest way to identify fonts on web pages + [Sauce Launcher](https://chrome.google.com/webstore/detail/sauce-launcher/mmcebionhdleomnkegjcoadpghnmcebl) - Launch Sauce Scout sessions in any browser you want with a single click + [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) + [Github Linker](https://chrome.google.com/webstore/detail/github-linker/jlmafbaeoofdegohdhinkhilhclaklkp) - Links NPM, bower, Composer & Duo dependencies to their GitHub repository page + [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei) - Chrome browser integration for LiveReload. Used in some of my Grunt tasks + [Extensions Manager](https://chrome.google.com/webstore/detail/extensions-manager-aka-sw/lpleipinonnoibneeejgjnoeekmbopbc) - Enable/disable/manage extensions from the toolbar. Perfect if you masses of extensions like I do. + [Tab Scissors](https://chrome.google.com/webstore/detail/tab-scissors/cdochbecpfdpjobpgnacnbepkgcfhoek) - Splits a window into two at the selected tab. Useful if you have loads of tabs open at once
- [iTerm](http://iterm2.com) ✨ - A better Mac terminal emulator - My [.dotfiles](https://github.com/mrmartineau/dotfiles) repo is used sync my terminal settings across machines
- [Slack](http://slack.com) ✨ - The best team communication/private messenger app around
- [Adobe CC](http://www.adobe.com/uk/creativecloud.html)
- [SourceTree](http://www.sourcetreeapp.com) ✨ - Full-featured, free Git gui
- [Shuttle](http://fitztrev.github.io/shuttle) - See my previous post about it [here](/2015/01/shuttle-for-mac)
- [CoRD](http://cord.sourceforge.net) - Simple & free remote desktop client
- [SVGO GUI](https://github.com/svg/svgo-gui) - Compress SVGs using SVGO - See also [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [Pngyu](https://nukesaq88.github.io/Pngyu/) - Compress PNGs
- [xScope](http://xscopeapp.com) - Measure everything, extremely useful
- [Glyphs](http://www.glyphsapp.com) - for creating & editing fonts
- [Sip](http://theolabrothers.com/) - Colour picker
- [Breezy](https://itunes.apple.com/gb/app/breezy/id627880733?mt=12) - Drag & drop images to base64 encode them. Super useful.

## Other useful apps

These apps are not specifically for development but they definitely help me get shit done.

- [Alfred](http://alfredapp.com) ✨ - Notable workflows: + [Will Farrell's](https://github.com/willfarrell/alfred-workflows) workflows for developers. My favourites are:
  _ Package Managers - search npm, grunt, bower & more
  _ caniuse, for searching caniuse.com from within Alfred + [MDN search](http://www.alfredforum.com/topic/1989-mdn-search-mozilla-developer-network) + [SourceTree](https://github.com/zhaocai/alfred2-sourcetree-workflow) - Workflow to list, search, & open SourceTree repositories in Alfred
- [Simplenote](http://simplenote.com)
- [Wunderlist](http://wunderlist.com) ✨
- [BetterSnapTool](https://itunes.apple.com/gb/app/bettersnaptool/id417375580?mt=12) - Window management tool
- [Divvy](http://mizage.com/divvy) ✨ - Another window management tool, has different features to BetterSnapTool & extremely useful when trying to position more than one app on a screen
- [Palua](http://www.molowa.com/mac-os-x/palua/palua-3-0/) - Auto-switches my Mac's function keys. Especially useful when using apps that make use of the function keys, like Sublime Text
- [1Password](https://agilebits.com/onepassword) ✨ - Password management

## Front-end tools

These tools are used on every project

- [Kickoff](http://tmwagency.github.io/kickoff) 💯 - The framework I helped create. I use it on every project, it is comprehensive without being verbose; give it a try! - Kickoff's grunt setup is extremely thorough & well documented, [give that a try](https://github.com/tmwagency/kickoff/blob/master/Gruntfile.js) if nothing else
- [Grunt.js](http://gruntjs.com) task runner - Favourite Grunt plugins include: + [BrowserSync](http://www.browsersync.io) - Billed as a tool to save time testing in the browser but I also use it for it's static server abilities too — it is so good + [grunt-contrib-sass](https://github.com/grunt/grunt-contrib-sass) - I have tried the node port of sass, [grunt-sass](https://github.com/sindresorhus/grunt-sass) numerous times only for it to fail, I know it is potentially better but I will wait before making the switch. + [grunt-contrib-uglify](https://github.com/grunt/grunt-contrib-uglify) + [Grunticon](https://github.com/filamentgroup/grunticon) - cross-browser SVG FTW
- [Sass](http://sass-lang.com) - CSS preprocessor
- [Yeoman](http://yeoman.io) - I created a Kickoff Yeoman generator to help get new projects started quickly, it is invaluable. See [here](http://tmwagency.github.io/kickoff/learn/yeoman.html) for more information

## Version control

I use Git with [Github](https://github.com/mrmartineau) (for open source) & [Bitbucket](https://bitbucket.org/MrMartineau/) (for work & private repos)

## Tools & resources 🛠

These are web apps & single-serving tools that I use.

- [Conjure](http://conjure.io) - Design feedback, sharing & approval (made by the folks at [NEVERBLAND](http://neverbland.com))
- [JIRA](http://jira.com) - Agile / User stories / Project management / Bugtracker
- [Trello](https://trello.com/mrmartineau/recommend) - For when JIRA is too much
- [Unicode converter](http://rishida.net/tools/conversion) - I've lost count the number of times I've used this tool
- [Saucelabs](https://saucelabs.com) - Browser testing
- [Can I Use ..?](http://caniuse.com) - Support tables for HTML5, CSS3, etc - [I want to use ..?](http://www.iwanttouse.com)
- [Web Page Test](http://www.webpagetest.org)
- [Google Page Speed Insights](https://developers.google.com/speed/pagespeed/insights)
- Fontsquirrel [webfont generator](http://www.fontsquirrel.com/tools/webfont-generator)
- [Colorzilla CSS gradiant generator](http://www.colorzilla.com/gradient-editor)
- [Ceaser](http://matthewlein.com/ceaser) CSS Easing Animation tool
- [Favicon generator](http://realfavicongenerator.net)
- [Pinboard](http://pinboard.in/u:MrMartineau) - the best bookmarking app around
- [Copy Paste Character](http://copypastecharacter.com/) - unicode character library

More can be found on Pinboard bundled as [Web Tools](bundle:Web%2BTools)

## Tunes 🎶

I always listen to music when I work, here are a few apps & sites that keeping me motivated.

- [Google Play Music](https://music.google.com/) - I've used Rdio, Spotify and others. Google Play allows me to listen to my own stuff or their library
- [Radiant Player](http://www.sajidanwar.me/radiant-player-mac) - Native Mac app for Google Play Music
- [Bearded Spice](http://beardedspice.com) - Use your Mac's media keys on Soundcloud, Deezer & many more.
- [Soundcloud](http://soundcloud.com/mrmartineau)
- [Hype Machine](http://hypem.com/mrmartineau)
- [Triple J](http://www.abc.net.au/triplej/media/listen.htm) - Brilliant Australian radio station
- [NTS radio](http://nts.live) ✨

## Gear

- [MacBook Pro 15” Retina](http://store.apple.com/uk/buy-mac/macbook-pro)
- 2 x Dell 24" external monitors. One is landscape, the other portrait, so I use 3 in total.
- [Sennheiser HD-25 II over-ear headphones](http://en-uk.sennheiser.com/dj-headphones-noise-reduction-hifi-stereo-hd-25-1-ii)
- [Shure SE315 in-ear headphones](http://www.shure.co.uk/products/earphones/se315)
- [Rhodia A4 & A5 dotPad](http://www.cultpens.com/c/q/brands/rhodia/rhodia-dotpad-notepads) - great pads for wireframing & sketching
- [Stabilo GREENpoint sign pen](http://www.cultpens.com/i/q/SB18886/stabilo-greenpoint-sign-pen) - the perfect pen for wireframing
- [Muji 0.7mm pen](http://www.muji.eu/pages/online.asp?Sec=13&Sub=52&PID=5163)

That about covers it. What do you make of it? Is there something that I've missed? What are yours? Let me know in the comments.
