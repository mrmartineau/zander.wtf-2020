---
slug: how-to-create-custom-grids-with-kickoff
title: 'How to create custom grids with Kickoff'
subtitle: '#tipsForKickoff'
date: 2016-02-12
canonical: https://medium.com/try-kickoff/how-to-create-custom-grids-with-kickoff-31a844245f9f
---

Kickoff comes bundled with a a simple, but fully responsive, grid system and a similar, but crucially different, Block Grid system. Why the need for two; What does each grid do; and how can you create you own versions of these grids if you have complex design requirements?

## The difference between the Kickoff’s grid and block grids

Kickoff’s Grid uses percentages, instead of pixels, for column widths and allows you to specify a different width on individual columns within a row.

```html
<div class="g-row">
  <div class="g-col g-span3"></div>
  <div class="g-col g-span6"></div>
  <div class="g-col g-span3"></div>
</div>
```

Kickoff’s block grids give you a way to evenly split contents within the grid. If you wanted to create a row of five images or paragraphs that need to stay evenly spaced no matter the screen size, the block grid is for you. Block grids (since [v6.0.0](https://github.com/TryKickoff/kickoff/tree/6.0.0)) have more responsive modifiers and these directly match your existing breakpoint variables. This means that it is extremely easy to modify the amount of columns based on the viewport dimensions; something that is not possible with the Kickoff base grid except when stacking into a single column for a mobile view.

```html
<!-- 6 columns on wide screen, then 1 column (stacked) when we are below the $bp-single-col breakpoint -->
<div class="l-blockGrid l-blockGrid--6">
  <div class="l-blockGrid-item">Item 1</div>
  <div class="l-blockGrid-item">Item 2</div>
  <div class="l-blockGrid-item">Item 3</div>
  <div class="l-blockGrid-item">Item 4</div>
  <div class="l-blockGrid-item">Item 5</div>
  <div class="l-blockGrid-item">Item 6</div>
</div>
```

So you can see that each have their benefits. But why would you want to create your own version?

## Creating your own version

First you need to decide if you need to recreate a grid system or if you need certain elements to be aligned to the existing grid. In most cases, I would guess that you need your element(s) to be the same size as items in the grid.

### Sass to the rescue

Fortunately, Kickoff uses Sass mixins and math functions to calculate the width of both the grid and block grid columns and it is these that we’ll use to define our own sizes.

#### @include column(3);

This mixin is used for calculating how many ‘column widths’ a given element should be. In the above case, it is three column widths. This mixin outputs the below code based on a column count of 12:

```css
width: 23.5%;
```

The mixin calculation also takes into account the grid’s guttering and spacing, that’s why it doesn’t output `width: 25%`. So when you need your element to match three column widths, just add this mixin to the declaration, like so:

```scss
.featuredItem {
  @include column(3);
}

// or

.mainCol {
  @include column(9);
}
.sidebar {
  @include column(3);
}
```

Grid columns also have other styles applied to them which you can also add to your new element styles, see below:

```scss
.g-col {
  float: left;
  min-height: 1px;
  position: relative;
  clear: none;
  box-sizing: border-box;

  @if $grid-gutter-width > 0 {
    margin-left: gutterCalc();
  }

  @if $grid-column-padding > 0 {
    padding: paddingCalc();
  }

  &:first-child {
    margin-left: 0;
  }
}
```

#### percentage(1/2);

Block grids just use the simple Sass percentage math function which makes things incredibly easy when dealing with element sizing. See below for an alternative way to define a width on an element:

```scss
.featuredItem {
  width: percentage(1/2);
}
```

## Modifying your creation with changes to viewport width

With media queries it is even easier to change these widths based on the viewport dimensions:

```scss
.featuredItem {
  // width 100% by default
  @include respond-min(300) {
    // Kickoff's media-query mixin
    @include column(3);
  }

  @include respond-min(850) {
    @include column(6);
  }
}
```

Above, the `.featured` item is 100% on skinny viewports, three columns widths at 300px and above and six column widths at 850px and above. Of course the same can be done with the percentage technique too.

### #tipsForKickoff

To find more tips like this for Kickoff, lookout for the [#tipsForKickoff](https://twitter.com/hashtag/tipsForKickoff?f=tweets) hashtag
