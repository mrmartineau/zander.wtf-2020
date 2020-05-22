---
slug: introducing-design-system-utils
title: Introducing Design System Utils
subtitle: Your helping hand to enforce your brand & design system styles with any CSS-in-JS solution
date: 2018-02-11
modified: 2018-10-04
---

**NOTE:** The content in this post references **version 1.x.x** of [design-system-utils](https://github.com/mrmartineau/design-system-utils). For up-to-date documentation, always use the docs in [the repo](https://github.com/mrmartineau/design-system-utils).

---

Maintaining styling consistency in a modern web app (or React Native) is tough. There isn’t a common way to manage shared values and settings, commonly called "design tokens".

### TLDR;

**Design System Utils** is a micro framework that standardises your design-system tokens & provides helpful utility functions to access it’s information.

## The basics

You first need to create your design system file, this contains all your global variables that your app will use, think font-sizes, color palette, spacing etc. I usually create a top-level directory named theme or design system, and add an index.js inside, like so:

First create your design system file, this contains all your design tokens that your app or site will use; things like font-sizes, color palette, spacing etc (kind of like a Sass/Less variables file).

For example you can create a top-level directory named **tokens**, **theme** or **designsystem**, and add an **index.js** inside, like so:

```
./tokens
└── index.js
```

A simple version of a tokens file with Design System Utils:

```js
// ./tokens/index.js
import DesignSystem from 'design-system-utils'

// your design tokens object goes here, see below for further details
const designTokens = {...}

export default new DesignSystem(designTokens)
```

## Setting up your design system

The "shape" and structure of your design tokens object **_can_** actually be anything you want, however, if you want to make use of the shortcut/helper methods like **`tokens.fontSize|bp|z|color|brand|spacing`** etc, there is a particular shape that your data will need to follow, see below:

(🤔the below code snippet includes some pseudo types for the values that occur in the different parts of the tokens object)

```js
{
  type: {
    // this should be set as a px value if you have `options.fontSizeUnit` set
    // to 'rem' or 'em' so that the lib can convert the values properly
    baseFontSize: '' // string,

    // used with `tokens.fs('size')` or `tokens.fontSize('size')`
    sizes: {
      key: '' // <number | string>,
    },
  },

  // Color palette
  // Each object needs to have the same shape
  // Each color object needs a `base` value to be the default
  // Have as many color objects as you like
  colors: {
    // Used with `ds.color('colorName')`
    colorPalette: {
      colorName: {
        base: '' // <string>, // base is the default
      },
    },

    // Used with `ds.brand('colorName)`
    brand: {
      colorName: '' // <string>, base is the default
    }
  },

  // Breakpoints
  // Used with `ds.bp()`
  // Keys can be anything you like
  // Have as many breakpoints as you like
  // Values can be use any unit you like
  breakpoints: {
    key: '' // <number | string>,
  },

  // Z-index
  // Used with `ds.z()`
  zIndex: {
    key: 10 // <number>
  },

  // Spacing
  // Used with `ds.spacing()` or `ds.space()`
  spacing: {
    scale: [] // <array>[<number | string>, ...], <object>
  },
}
```

Below is an excerpt from the example design-system. See a more complete version in the [example](https://github.com/mrmartineau/design-system-utils/blob/master/example/myDesignSystem.js) directory or some that are used in the design-system-utils tests: [1](https://github.com/mrmartineau/design-system-utils/blob/master/src/testData/ds1.js) & [2](https://github.com/mrmartineau/design-system-utils/blob/master/src/testData/ds1.js).

```js
const designTokens = {
  type: {
    baseFontSize: '20px',

    sizes: {
      xs: '16px',
      s: '20px',
      base: '30px',
      m: '36px',
      l: '42px',
      xl: '50px',
      xxl: '58px',
    },

    fontFamily: {
      system:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans"',
      sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, "Courier New", monospace',
    },

    lineHeight: {
      headings: 1.1,
    },

    fontWeight: {
      normal: 300, // Useful to set here if using anything other than `normal`
      bold: 'bold', // Useful to set here when bold webfonts come as 400 font-weight.
      headings: 'bold', // instead of browser default, bold
    },
  },
}
```

### Initialise the design system framework

```js
// myDesignSystem.js
import DesignSystem from 'design-system'
const designTokens = {...}
export default new DesignSystem(designTokens)
```

To access your design system, you just need to `import` it to the current file, like so:

```js
import tokens from `./tokens` // assuming you exported `default` from your design system file
```

Here is a very simple component using [styled-components](https://styled-components.com/) and some values from the tokens, you should be able to see how easy it is to pull information from the design system.

```js
// Example using styled-components
import styled from 'styled-component'
import tokens from './tokens'

export const Box = styled.div`
  font-family: ${tokens.get('type.fontFamilyBase')};
  background-color: ${tokens.brand('primary')};
  margin: ${tokens.space(2)} 0;
`
```

### Options

There is only one option that can be passed to your design system class, it relates to font-sizing:

```js
// Use default options. do not convert the font-sizes to rems or ems
export default new DesignSystem(myDesignSystem)

// OR: with custom options
export default new DesignSystem(myDesignSystem, {
  // this is used to convert your `type.sizes` values from one unit to another
  // e.g. to convert all `px` sizes to `rem`, set this option:
  fontSizeUnit: 'rem',
  // this means you can define values using px and use rems in your app
})
```

## API getter methods

### Get any value from the design tokens

The `tokens.get()` function can be used as a general purpose method to get any value from the design-system. It uses object dot notation to find the value you need from your design system object.

```js
// with the system setup, as above
tokens.get('lineHeight.headings') // 1.1
```

You could get by just using this method, but I created a few other shortcut/helper methods to make getting values a lot more easy. Read on..

### Get font-size values

The `tokens.fontSize()` method is a short-hand for the `tokens.get()` method. It can be used to get a value from the `type.sizes` object.

The `type.sizes` object’s values can be formatted in a few ways:

- as a string with any unit of measurement, e.g.: '13px' `px`, `rem` or `em`
- as a template string using another function to calculate font-sizes, for example a modular-scale, e.g. `${ms(0, modularscale)}px`. **Note: this uses an external package, [modularscale-js](https://github.com/modularscale/modularscale-js)**

```js
// define some values// type.sizes object
sizes: {
  xs: '16px',
  s: '20px',
  base: '30px',
  m: '36px',
  l: '42px',
  xl: '50px',
  xxl: '58px',
},


// retrieve some values
tokens.fontSize('xl')
tokens.fs('xl') // `tokens.fs()` is a short-hand alias for `tokens.fontSize()`
tokens.fs('xl', true) // return font-size in px regardless of `option.fontSizeUnit` value
```

### Color palette

There are two possible ways to access color information: the color palette and the brand colors.

The color palette is intended to contain all the colors (and their shades) that your app will use, and the brand palette _should_ contain the specific colors that your brand uses.

Two methods can be used to retrieve the values, these are: `tokens.color()` and `tokens.brand()`, below is what the data looks like for them:

```js
colors: {
  // With a color palette like this:
  colorPalette: {
    bright: {
      base: '#F9FAFB',
      dark: '#F4F6F8',
      darker: '#DFE4E8',
    },

    dark: {
      base: '#212B35',
      light: '#454F5B',
      lighter: '#637381',
    },
  },

  // With a brand palette like this:
  brand: {
    red: '#e82219',
    deeporange: '#ff7200',
    orange: '#ff9500',
    green: '#c4d000',
    teal: '#1aa5c8',
    navy: '#0052da',
  }
}
```

#### Get color palette values

The `tokens.color()` function gets values from the `colorPalette` object. It assumes every color has a `base` property and other properties for different shades of the same color. This is a short-hand for the `tokens.get()` function.

```js
// Get values like this:
tokens.color('bright') // #F9FAFB - the `base` key is the default, so it is not needed
tokens.color('bright', 'dark')
```

#### Get brand palette values

The `tokens.brand()` function gets values from the `colors.brand` object. This is a short-hand for the `tokens.get()` function.

```js
// Get brand values like this:
tokens.brand('orange')
tokens.brand('pink')
tokens.brand('primary.blue') // it is possible to nest this object as much as you like
```

### Get responsive breakpoint values

The `tokens.bp()` method is a short-hand for the `tokens.get()` method. It can be used to get a breakpoint from the `breakpoints` object.

```js
tokens.bp('m')
```

### Get z-index values

The `tokens.z()` method is a short-hand for the `tokens.get()` method. It can be used to get a breakpoint from the `zIndex` object.

```js
tokens.z('low')
```

### Get spacing values

The `tokens.spacing()` method returns a value from your `spacing.scale` definition. **The spacing data could either be an array, or an object.**

- If an array, it takes an `index(<number>)` for that array e.g. `tokens.space(2)`. This variant adds `pxto` the end of the string, this will be deprecated in v2.0.0.
- If an object, it takes a `key(<string>)` for the item in that object e.g.tokens.space('m')

#### Array example:

```js
scale: [0, 8, 16, 24, 32, 40]

tokens.spacing(2) // '16px'
// Note: `tokens.space(2)` can also be used
```

#### Object example:

```js
scale: {
  s: '10rem',
  m: '100rem',
  l: '1000rem',
}

tokens.spacing('m') // '100rem'
// Note: `tokens.space('m')` can also be used
```

### Calculations

The framework currently provides a few calculation utility functions, `multiply`,`toPx` and `pxTo`. These are there when you need to calculate or convert one value to another.

## Demo & examples

I created a demo on [codesandbox.io](https://codesandbox.io/s/6wrp94x7kk), it includes examples of using the design-system utils with [emotion](https://emotion.sh/), [styled-components](https://www.styled-components.com/) and [glamorous](https://glamorous.rocks/). There is also a basic example [here](https://github.com/mrmartineau/design-system-utils/blob/master/example).

## How do you get it?

You can install it via npm using:

```sh
npm install --save design-system-utils

# or

yarn add design-system-utils
```

## How do you contribute?

I am always looking for ways to improve, so welcome any and all feedback. The code is hosted on GitHub at [https://github.com/mrmartineau/design-system-utils](https://github.com/mrmartineau/design-system-utils).
