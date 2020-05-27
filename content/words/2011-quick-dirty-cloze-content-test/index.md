---
slug: quick-dirty-cloze-content-test
title: 'Quick & dirty Cloze content test with the Lettering.js jQuery plugin'
date: 2011-01-21
---

I recently read the A List Apart article, Testing Content by Angela Colter I thought about how to easily implement a Cloze test without too much hassle. It turns out that a Cloze test can be done on any content in a few minutes using jQuery & the awesome plugin Lettering.js.

## How?

Simply include jQuery & the Lettering.js plugin in your page & then add this jQuery script:

```js
$(document).ready(function() {
  $('p').lettering('words')
  $('p span:nth-child(5n+5)').css({ visibility: 'hidden' })
})
```

Below you can see an embedded version of my findings:

<iframe width="100%" height="300" src="http://jsfiddle.net/mrmartineau/K9aBA/embedded/result,js,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
