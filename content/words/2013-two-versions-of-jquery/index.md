---
slug: two-versions-of-jquery
title: 'Two versions of jQuery?'
subtitle: "Why can't we serve separate versions for different browsers?"
date: 2013-06-10
---

The two most recent versions of jQuery: v2.0.2 and v1.10.1 have an identical API but are actually very different; v1.10.1 still supports older browsers, [specifically IE6-8](http://blog.jquery.com/2013/04/18/jquery-2-0-released/) (it includes a lot of fallback code that modern browsers do not need) while v2x does not. This means that jQuery v2x (83.5kb minified) is about 10% smaller in filesize than v1x (92.7kb minified) and we, as good front-end developers, can make sure that whomever is using a site that we've built, does not receive a version of jQuery that is too large for their browser and thereby reducing overall page weight.

To solve this problem, we are going to use **conditonal comments**; and if you're familiar with [HTML5 Boilerplate](http://h5bp.com) you will have used these before, so all we need to do is provide one version for older browsers and one for new.

```html
<!--[if lte IE 8]>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
  <script>
    window.jQuery ||
      document.write('<script src="/js/libs/jquery.min.js"><\/script>')
  </script>
<![endif]-->
<!--[if gt IE 8]><!-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2jquery.min.js"></script>
<script>
  window.jQuery ||
    document.write('<script src="/js/libs/jquery.2.min.js"><\/script>')
</script>
<!--<![endif]-->
```

The first comment block above provides code for IE 6-8: `[if lte IE 8]` (if less than or equal to IE 8); the second provides code for IE 9+ and all other browsers: `[if gt IE 8]` (if greater than IE 8). You will see that I am also providing a local fallback version of each file in case the CDN version fails, this is consistent with the HTML5 boilerplate recommendation.
