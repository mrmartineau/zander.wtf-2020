---
slug: hidden-characters-in-password-inputs
title: 'How to fix hidden characters in password inputs in old IE'
subtitle: 'A fix for an obscure problem I found recently'
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

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="mrmartineau" data-slug-hash="gvlIt" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="IE hidden characters in password fields">
  <span>See the Pen <a href="https://codepen.io/mrmartineau/pen/gvlIt">
  IE hidden characters in password fields</a> by Zander Martineau (<a href="https://codepen.io/mrmartineau">@mrmartineau</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
