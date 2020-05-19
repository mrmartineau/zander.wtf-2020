---
slug: hidden-characters-in-password-inputs
title: 'How to fix hidden characters in password inputs in old IE'
subtitle: 'A fix for an obscure problem I found recently'
image: 14305350410_f88214a539.jpg
date: 2013-05-04
---

I came across an interesting bug recently where, in **Internet Explorer (versions 6-8)**, the _bullet_ characters for an `input[type="password"]` were not showing up. I could see the cursor moving as if text was being entered but no result was being shown.

After many attempts to remedy this, I finally figured out the issue was with the font being used in this field. For some reason, the bullet character that is usually used could not be used by IE, even though it's actually present in the font and my font-stack provided a good few alternatives just in case there might be any issues. So, I added one simple rule to my CSS and it fixed the issue:

```css
input[type='password'] {
  font-family: sans-serif;
}
```

I will be adding this to all projects from now on, and I recommend you do as well.

#### Here's an example:

<pre class="codepen" data-height="300" data-type="result" data-href="gvlIt" data-user="mrmartineau" data-safe="true"><code></code><a href="http://codepen.io/mrmartineau/pen/gvlIt">Check out this Pen!</a></pre>
<script async src="http://codepen.io/assets/embed/ei.js"></script>
