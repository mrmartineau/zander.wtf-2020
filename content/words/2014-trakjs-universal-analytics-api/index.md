---
slug: trakjs-universal-analytics-api
title: 'Improve website event tracking with trak.js'
subtitle: Add tracking events more easily with our new library
date: 2014-11-17
---

Whether you use Google Analytics or another provider, adding tracking events to a site is often a painful experience. Events usually have to be defined in javascript which can make it tricky to dynamically change parameters based on certain criteria. Wouldn't it be nice to define events within the markup so that hundreds of click events can be left free from your javasript code? Trak.js does just that.

Put simply, **trak.js** is a wrapper for any analytics API. By default it uses Google Universal Analytics but you can override this with the older ga.js or Google Tag Manager if you wish, or you can even add custom event trackers as well, instead of Google Analytics.

## Using trak.js

There are two main ways to use trak.js, as `data-trak` attributes in your markup or in your javascript code.

### data-trak attr implementation:

```html
<a
  href="#pagehref"
  data-trak='{"category":"Test category","action":"Test action"}'
  title="1 title"
>
  link
</a>
```

#### Custom trigger type (new as of v0.4.0)

`data-trak` attrs can also define a custom trigger type instead of `click`. Now `mouseover`, `touchstart`, `focus`, `blur` or any other valid event can be used to trigger a trak event. Just add `"trigger": "eventName"` to the options object. See below for an example of this using the `focus` event:

```html
<!-- Triggered on focus -->
<a
  href="#pagehref"
  data-trak='{"trigger":"focus","category":"Test category","action":"Test action"}'
>
  Custom trigger type
</a>
```

### Javascript implementation

```js
trak.event({
  category: 'engagement',
  action: 'signpost',
  label: 'page.href',
})

trak.event({
  category: 'engagement',
  action: 'signpost',
  label: 'page.href',
  value: 10,
  nonInteraction: true,
  eventName: 'This is a Google Tag Manager event name',
})
```

## API Reference

#### Arguments object: (these are all optional)

- **category**: A string value of the category value to set
- **action**: A string value of the action value to set
- **label**: A string value of the label value to set
- **value**: An integer
- **trigger**: A string value of a valid event name: `click`, `focus`, `mouseover` etc
- **nonInteraction**: An integer
- **eventName**: A string value used only with Google Tag Manager. Define your GTM event name here

If any property is left `undefined`, the browser's default value will be used instead.

## Wildcards

**trak.js** introduces the concept of wildcards when working with your events, this makes it extremely easy to use more complex values in your events. There are a number of wildcards available for both the `data-trak` attr and js implentation. These can be used to specify certain options like the page title, the url, the current anchor's href value and a few others.

- **`page.href`** wildcard uses `window.location.href` as the value.
- **`page.title`** wildcard uses `document.title` as the value.
- **`link.href`** wildcard uses `this.href` as the value.
- **`link.title`** wildcard uses `this.title` as the value.
- **`referrer`** uses `document.referrer` as the value

```html
<!-- page.href wildcard -->
<a href="#" data-trak='{"category":"Rating","action":"page.href","label":"Up"}'>
  link</a
>

<!-- page.title wildcard -->
<a
  href="#"
  data-trak='{"category":"Rating","action":"page.title","label":"Up"}'
>
  link
</a>

<!-- link.href wildcard -->
<a href="#" data-trak='{"category":"Rating","action":"link.href","label":"Up"}'>
  link
</a>

<!-- link.title wildcard -->
<a
  href="#"
  data-trak='{"category":"Rating","action":"link.title","label":"Up"}'
>
  link
</a>

<!-- referrer wildcard -->
<a
  href="#"
  data-trak='{"category":"Rating","action":"document.referrer","label":"Up"}'
>
  link
</a>
```

## Getting the Library

### Direct downloads

- [Minified](https://raw.githubusercontent.com/mrmartineau/trak.js/master/dist/trak.min.js) (~481 B gzipped)
- [Unminified](https://raw.githubusercontent.com/mrmartineau/trak.js/master/dist/trak.js) (~1.7 KB gzipped)

### NPM

`npm install trak.js --save`

## More information

More information and the full documentation can be found at our repository on [Github](https://github.com/mrmartineau/trak.js). Also, options can be overridden; there's a debug mode; and most importantly, almost any other analytics APIs can be used.
