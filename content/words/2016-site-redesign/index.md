---
slug: site-redesign-2016
title: 'Redesigning my site... 2016 edition'
subtitle: 'The focus and techniques I used in my redesign'
date: 2016-04-15
---

I updated the design of my website this week. I had been meaning to do it for quite some time, but as you all know, life gets in the way. I wasn't unhappy with the old design, in fact I really quite liked it; it was fairly simple and I felt it wasn't like so many other sites out there these days. So why did I change it then?

## Performance

Performance is a hot topic these days, and for good reason. Research has shown that even small changes in response times can have significant effects [^1], so my focus for this redesign was based solely on getting page load and rendering to be as fast as possible.

The previous design had an image for each blog post, and all posts were loaded on the home page which made for a fairly slow page load, despite the other methods I'd put in place. The new design dispenses with those superfluous images and uses a simple list instead.

## Zero Javascript

One of my first ideas when planning this update was to remove javascript completely. Wouldn't it be liberating to do that on other sites? An HTML first approach if you will, or Progressive Enhancement by its other name..

Removing all javascript meant that there would be no analytics, no Disqus comments and no other scripts to handle more complex interactions. Because of the nature of my site, I decided this was a price worth paying and a good experiment if nothing else.

## Responsive fonts

Custom webfonts are a major reason that some website underperform. The font that I use, [Colfax](https://processtypefoundry.com/fonts/colfax/) is about 39kb for the regular cut and about the same for bold. So that's an extra ~80kb just for some fancy font that isn't essential to the experience. My solution, which I'm pretty sure isn't new, was to wrap my `@font-face` declaration inside a min-width `@media` query making my custom font only available above a certain width, in the example below, above `700px`.

I also adjusted my font stack to include Apple's new San Francisco font which is actually very similar Colfax; it looks like this:

```css
body {
  font-family: Colfax, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

```css
@media screen and (min-width: 700px) {
  @font-face {
    font-family: Colfax;
    font-weight: normal;
    src: url('fonts/ColfaxWebRegularSub.woff') format('woff');
  }

  @font-face {
    font-family: Colfax;
    font-weight: bold;
    src: url('fonts/ColfaxWebBoldSub.woff') format('woff');
  }
}
```

## Link underlines

I first heard about a better way to achieve more elegant link underlines after reading Marcin Wichary's [post on Medium](https://medium.com/designing-medium/crafting-link-underlines-on-medium-7c03a9274f9#.sigdjkj11) on the subject. I then visited Paul Robert Lloyd's [website](https://paulrobertlloyd.com/) that takes this a step further by adding larger breaks around each letter in the underline.

To achieve this style, a linear gradient is applied to the background of the link and then a bunch of text shadows are added with the same colour as the background, which masks the background we've just applied. Bear in mind that the position of the gradient may need to be changed depending on the font you're using.

```css
a:not([class]) {
  background-image: linear-gradient(
    to bottom,
    transparent 81%,
    #fc5185 81%,
    #fc5185 85.5%,
    transparent 85.5%
  );
  text-decoration: none;
  text-shadow: 0 0.03em #f5f5f5, 0 -0.03em #f5f5f5, 0.06em 0 #f5f5f5, 0 -0.06em
      #f5f5f5, 0.03em 0 #f5f5f5, -0.03em 0 #f5f5f5, 0.06em 0 #f5f5f5, -0.06em 0
      #f5f5f5, 0.09em 0 #f5f5f5, -0.09em 0 #f5f5f5, 0.12em 0 #f5f5f5, -0.12em 0
      #f5f5f5, 0.15em 0 #f5f5f5, -0.15em 0 #f5f5f5;
}
```

I also created a Sass mixin so I could reuse it:

```scss
@mixin fancyLinks($underlineColor, $bg) {
  background-image: linear-gradient(
    to bottom,
    transparent 81%,
    $underlineColor 81%,
    $underlineColor 85.5%,
    transparent 85.5%
  );
  text-decoration: none;
  text-shadow: 0 0.03em $bg, 0 -0.03em $bg, 0.06em 0 $bg, 0 -0.06em $bg,
    0.03em 0 $bg, -0.03em 0 $bg, 0.06em 0 $bg, -0.06em 0 $bg, 0.09em 0 $bg, -0.09em
      0 $bg, 0.12em 0 $bg, -0.12em 0 $bg, 0.15em 0 $bg, -0.15em 0 $bg;
}

// Usage
a:not([class]) {
  @include fancyLinks($color-secondary, $color-bg);
}
```

This is a little detail that I love and will start using on other sites that I develop. I changed standard link underlines so that any descenders break the underline itself.

This new version is as simple as I dared make it, without it looking too basic, as I still wanted it to be 'designed' in some way. My [WebPageTest score](http://www.webpagetest.org/result/160420_GW_BC8/) was the best I’ve ever seen & my [page speed score](https://developers.google.com/speed/pagespeed/insights/?url=zander.wtf&tab=desktop) is pretty impressive too, with 90/100 on mobile and 96/100 on desktop 🎉

[^1]: Tests at Amazon revealed similar results: every 100 ms increase in load time of Amazon.com decreased sales by 1% (Kohavi and Longbotham 2007)
