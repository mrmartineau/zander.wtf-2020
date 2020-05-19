---
slug: css3-multi-column-spanning
title: "CSS3 'column-span'"
categories:
  - CSS
subtitle: 'A simple test of this handy CSS feature.'
date: 2011-01-15
image: 4850604091_63fca411ab.jpg
---

The [CSS Multi-column Layout Module](http://www.w3.org/TR/css3-multicol/) has a rather interesting
property called [‘column-span’](http://www.w3.org/TR/css3-multicol/#spanning-columns)
which means that certain elements can be spanned across more than one
column - an example might be an image in a block of text..

I decided to test this new property to see if any browsers supported it.

## Results

1. **Safari 5.0.3:** No Support
1. **Chrome 7.0.517.44:** Support for block-level elements - Yay!
1. **Opera 11:** No support (and no support for CSS multi-columns)
1. **Firefox 3.6.13:** No support

All tests have been carried out on a Mac, I haven’t been able to test
any Windows versions of these browsers, so please let me know if you
have any results & I will update this post.

### An example

<pre class="codepen" data-height="500" data-type="result" data-href="uKobH" data-user="mrmartineau" data-safe="true"><code></code><a href="http://codepen.io/mrmartineau/pen/uKobH">Check out this Pen!</a></pre>
<script async src="http://codepen.io/assets/embed/ei.js"></script>
