---
slug: sublime-text-for-front-end-development
title: 'Sublime Text packages for Front-end web development'
subtitle: 'My recommended list'
date: 2014-07-30
---

It has been a long time since I have written about Sublime Text & the benefits it provides me as a front-end developer. Its packages are one of the main reasons I haven't changed my text editor/IDE in over 3 years. I even created [a wiki](https://github.com/mrmartineau/SublimeTextSetupWiki/wiki/) (of sorts) to help users get up and running with the app and choosing the right packages for a given task. This post will only focus on the packages that I believe most users should be using for front-end development.

[**UPDATE - July 2015**] Added & removed some packages. See the changes [here](https://github.com/mrmartineau/zander.wtf/commit/1bb1c4a54cd713b9f6b4b98541f74fef92e24e05).

### [Package Control](https://sublime.wbond.net/installation)

Before you install any other packages, make sure you install Package Control first. It makes installing and keeping packages up-to-date really simple.

## For writing code

### [Emmet](https://sublime.wbond.net/packages/Emmet)

Emmet (previously known as Zen Coding) is a web-developer’s toolkit that can greatly improve your HTML & CSS workflow. Find out more at http://emmet.io

### [SublimeLinter](https://sublime.wbond.net/packages/SublimeLinter)

Interactive code linting framework for Sublime Text 3. Installation instructions can be found at [here](http://sublimelinter.readthedocs.org/en/latest/installation.html) and each language needs its own plugin, see a list [here](https://sublime.wbond.net/search/sublimelinter). Linters that I find particularly useful are:

- [scsslint](https://packagecontrol.io/packages/SublimeLinter-contrib-scss-lint)
- [jshint](https://packagecontrol.io/packages/SublimeLinter-jshint)
- [jscs](https://packagecontrol.io/packages/SublimeLinter-jscs)
- [csslint](https://packagecontrol.io/packages/SublimeLinter-csslint)

### [jQuery](https://sublime.wbond.net/packages/jQuery)

This package provides snippets for most of jQuery's methods making the API even easier to use.

### [Inc-Dec-Value](https://sublime.wbond.net/packages/Inc-Dec-Value)

Increase / decrease numbers (integer and fractional), dates, hex color values, opposite relations or cycled enumerations on the configured value & a bonus - string actions (upper, lower, capitalize). See my extended settings [here](https://github.com/mrmartineau/SublimeText3UserSettings/blob/master/inc_dec_value.sublime-settings).

### [ColorHighlighter](https://sublime.wbond.net/packages/Color%20Highlighter)

ColorHighlighter is a plugin for the Sublime text 2 and 3, which underlays selected hexadecimal colorcodes (like `#FFFFFF`, `rgb(255,255,255)`, `white`, etc.) with their real color. Also, plugin adds color picker to easily modify colors.

### [Case Conversion](https://sublime.wbond.net/packages/Case%20Conversion)

It converts the current word/token between pascal, camel, snake, dot, dash (hyphen) cases, and separated words.

### [BracketHighlighter](https://sublime.wbond.net/packages/BracketHighlighter)

Bracket and tag highlighter for Sublime Text

### [AlignTab](https://sublime.wbond.net/packages/AlignTab)

An alignment plugin using regular expression

### [MultiEditUtils](https://sublime.wbond.net/packages/MultiEditUtils)

A Sublime Text Plugin which enhances editing of multiple selections.

### [MoveText](https://packagecontrol.io/packages/MoveText)

Select text and move it around using the keyboard, or setup a text 'tunnel' to move code from one location to another.

### [EditorConfig](https://packagecontrol.io/packages/EditorConfig)

Helps developers maintain consistent coding styles between different editors. Find out more at [editorconfig.com](http://editorconfig.com)

## For the user interface

### [SideBarEnhancements](https://sublime.wbond.net/packages/SideBarEnhancements)

Enhancements to Sublime Text sidebar. Files and folders.

### [Modific](https://sublime.wbond.net/packages/Modific)

Highlight lines changed since the last commit (supports Git, SVN, Bazaar, Mercurial and TFS).

### [Origami](https://sublime.wbond.net/packages/Origami)

Split the window however you like! Create new panes, delete panes, move and clone views from pane to pane.

### [Soda Theme](https://sublime.wbond.net/packages/Theme%20-%20Soda)

Dark and light custom UI themes for Sublime Text. I use the dark version, it is my preferred UI theme. A list of other themes can be found [here](https://github.com/mrmartineau/SublimeTextSetupWiki/wiki/Interface-Themes)

### [Themr](https://sublime.wbond.net/packages/Themr)

A UI theme selector for Sublime Text.

### [ColorSchemeSelector](https://sublime.wbond.net/packages/ColorSchemeSelector)

Sublime Text Plugin to select theme quickly via the Quick Panel.

### [Base16 Color Schemes](https://sublime.wbond.net/packages/Base16%20Color%20Schemes)

My favourite Sublime colour schemes.

### [TabsExtra](https://sublime.wbond.net/packages/TabsExtra)

Sublime Plugin with sticky tabs, more tab closing options, and additional menu items.

## For specific syntaxes

### [Syntax Highlighting for Sass](https://packagecontrol.io/packages/Syntax%20Highlighting%20for%20Sass)

Syntax highlighting package for both SCSS and Sass on Sublime Text.

### [Sass Snippets](https://sublime.wbond.net/packages/SASS%20Snippets)

Sass Snippets for Sublime

### [Babel](https://packagecontrol.io/packages/Babel)

This is an improved syntax package for **Javascript**. Language definitions for ES6+ JavaScript with React JSX syntax extensions.

### [JavaScript & NodeJS Snippets](https://packagecontrol.io/packages/JavaScript%20%26%20NodeJS%20Snippets)

To set it as the default syntax for a particular extension:

1. Open a file with that extension
2. Select View from the menu
3. Then `Syntax` -> `Open all with current extension as...` -> `Babel` -> `JavaScript (Babel)`
4. Repeat this for each extension (e.g.: `.js` and `.jsx`).

### [Node Requirer](https://packagecontrol.io/packages/NodeRequirer)

This plugin allows you to easily require node modules without having to worry about relative paths. It parses your project to allow you to require any local module or dependency listed in your package.json. In addition, it allows you to include node core modules.

### [JSCS Formatter](https://packagecontrol.io/packages/JSCS-Formatter)

Plugin to autoformat your javascript code according to the JSCS configuration files you already have.

### [HTML Mustache](https://packagecontrol.io/packages/HTML%20Mustache)

Adds HTML Mustache as a language to Sublime, with snippets. Syntax file obtained from mwunsch's sublime repo. Supports .mustache, .hjs, and .hgn (Hogan) files.

### [Liquid](https://sublime.wbond.net/packages/Liquid)

Liquid Templates in Sublime. Useful if you develop Jekyll sites.

## For general help

### [FindKeyConflicts](https://sublime.wbond.net/search/FindKeyConflicts)

Plugin for Sublime Text to help identify conflicting key mappings.

## For lolz

### [Sound](https://sublime.wbond.net/packages/Sound)

This adds sound effects to many actions in Sublime. Could be a good prank to install it on a fellow developer's machine.

## Want to change some settings?

Sublime's default setup is great but almost every part of it can be modified to your taste. Please have a look at [my own settings and preferences](https://github.com/mrmartineau/SublimeText3UserSettings) to see what is possible.
