---
slug: responsive-helper-classes
title: 'Add responsive helper classes to your project'
subtitle: '#tipsForKickoff'
date: 2016-01-18
---

Kickoff doesn't include responsive helper classes by default, but I created some for a recent project. Assuming your Sass breakpoint variables (in [\_variables.scss](https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_variables.scss#L56-L64)) look something like this:

```scss
/**
 *  Breakpoints
 * =================================
 * There are no common breakpoints so these are just a suggestions
 * You'll need to define your own breakpoints to suit your design
 */
$bp-narrow: 500; // Set in px
$bp-mid: 750; // Set in px
$bp-wide: 1000; // Set in px
$bp-huge: 1250; // Set in px
```

You can then add a series of helper classes, like so:

```scss
/**
 * Responsive helper classes to show/hide content based on our media-queries
 */
.u-showBelowNarrow {
  @include respond-min($bp-narrow) {
    display: none;
  }
}

.u-showBelowMid {
  @include respond-min($bp-mid) {
    display: none;
  }
}

.u-showBelowSingleCol {
  @include respond-min($bp-single-col) {
    display: none;
  }
}

.u-showBelowWide {
  @include respond-min($bp-wide) {
    display: none;
  }
}

.u-showBelowHuge {
  @include respond-min($bp-huge) {
    display: none;
  }
}

.u-showAboveNarrow {
  @include respond-max($bp-narrow) {
    display: none;
  }
}

.u-showAboveMid {
  @include respond-max($bp-mid) {
    display: none;
  }
}

.u-showAboveSingleCol {
  @include respond-max($bp-single-col) {
    display: none;
  }
}

.u-showAboveWide {
  @include respond-max($bp-wide) {
    display: none;
  }
}

.u-showAboveHuge {
  @include respond-max($bp-huge) {
    display: none;
  }
}
```

In my project, these were added to [\_helper-classes.scss](https://github.com/TryKickoff/kickoff/blob/master/assets/src/scss/_helper-classes.scss) but you can add them wherever you wish.

### What's the `.u-` prefix for?

Kickoff namespaces some CSS classes in the framework to help developers know what module it's from or what type of style it is. Here are a few examples:

```css
.u-className {
} /* Utility class */
.g-className {
} /* Grid class */
.l-className {
} /* Layout class */
```

### Usage

Usage should be fairly straightforward, just add the relevant class to your html element:

```html
<div class="u-showAboveSingleCol">
  Show this above $bp-single-col
</div>

<div class="u-showBelowMid">
  Show this below $bp-mid
</div>
```

### #tipsForKickoff

To find more tips like this for Kickoff, lookout for the [#tipsForKickoff](https://twitter.com/hashtag/tipsForKickoff?f=tweets) hashtag
