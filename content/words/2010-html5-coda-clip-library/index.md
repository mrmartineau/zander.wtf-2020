---
slug: html5-coda-clip-library
title: 'Coda Clip Library for HTML5'
date: 2010-09-20
---

Like most web developers I maintain a personal collection of code snippets & recently have been amassing a folder full of snippets related specifically to HTML5 (you won't see any CSS3 in here..) & its new tags & some sample usages.

Many of these clips have been lifted from the brilliant [HTML5 Boilerplate](http://html5boilerplate.com/) & I credit them fully for that. I have added some Coda bookmark comments (which look like `<!-- !CSS -->` ) to help you navigate your code.

### Basic HTML5 Page Structure - _html5&#x21E5;_

A vanilla page.

```html
<!DOCTYPE html>
<!--[if lt IE 7]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="en" class="no-js">
  <!--<![endif]-->
  <head>
    <meta charset="utf-8" />
    <!--[if IE]> <![endif]-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title></title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0" />
    <!-- !CSS -->
    <link rel="stylesheet" href="css/style.css?v=1" />
    <!-- Uncomment if you are specifically targeting less enabled mobile browsers
	<link rel="stylesheet" media="handheld" href="css/handheld.css?v=1">  -->
    <!-- !Modernizr - All other JS at bottom -->
    <script src="js/modernizr-1.5.min.js"></script>
  </head>
  <!-- !Body -->
  <body>
    <div id="container">
      <header>
        <ul id="nav">
          <li><a href="#nowhere" title="Home">Home</a></li>
          <li><a href="#nowhere" title="About">About</a></li>
          <li><a href="#nowhere" title="Services">Services</a></li>
          <li><a href="#nowhere" title="Contact">Contact</a></li>
          <li><a href="#nowhere" title="Pellentesque">Pellentesque</a></li>
          <li><a href="#nowhere" title="Aliquam">Aliquam</a></li>
          <li><a href="#nowhere" title="Morbi">Morbi</a></li>
        </ul>
        <!-- /#nav  -->
      </header>
      <!-- /header -->
      <section id="main"></section>
      <!-- /main -->
      <footer></footer>
      <!-- /footer -->
    </div>
    <!--!/#container -->
    <!-- !Javascript - at the bottom for fast page loading -->
    <!-- Grab Google CDN's jQuery. fall back to local if necessary -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script>
      !window.jQuery &&
        document.write('<script src="js/jquery-1.4.2.min.js"><\/script>')
    </script>
    <script src="js/plugins.js?v=1"></script>
    <script src="js/script.js?v=1"></script>
  </body>
</html>
```

### HTML5 Boilerplate Head

Taken almost completely from the HTML5 Boilerplate, but with added coda bookmark comments

```html
<!DOCTYPE html>
<!--[if lt IE 7]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="en" class="no-js">
  <!--<![endif]-->
  <head>
    <meta charset="utf-8" />
    <!--[if IE]> <![endif]-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title></title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0" />
    <!-- !CSS -->
    <link rel="stylesheet" href="css/style.css?v=1" />
    <!-- Uncomment if you are specifically targeting less enabled mobile browsers
	<link rel="stylesheet" media="handheld" href="css/handheld.css?v=1">  -->

    <!-- !Modernizr - All other JS at bottom -->
    <script src="js/modernizr-1.5.min.js"></script>
  </head>
</html>
```

### Header - _header&#x21E5;_

```html
<header></header>
```

### Footer - _footer&#x21E5;_

```html
<footer></footer>
```

### Section - _section&#x21E5;_

```html
<section></section>
```

### Article - _article&#x21E5;_

```html
<article></article>
```

### Aside - _aside&#x21E5;_

```html
<aside></aside>
```

### Example article

```html
<article>
  <header>
    <hgroup>
      <h1>Title</h1>
      <h2>Subheading</h2>
      <p>
        <time class="dtstart" datetime="1992-01-12"> January 12th, 1992</time>
      </p>
    </hgroup>
  </header>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
  <aside>
    <blockquote cite="http://example.com/facts">
      <p></p>
    </blockquote>
  </aside>
  <footer>
    <p>By Zander Martineau</p>
  </footer>
</article>
```

### Video with fallback - _video&#x21E5;_

```html
<video autobuffer autoloop loop controls>
  <source
    src="http://mirror.cessen.com/blender.org/peach/trailer/trailer_400p.ogg"
    type='video/ogg; codecs="theora, vorbis"'
  />
  <source
    src="http://mirror.cessen.com/blender.org/peach/trailer/trailer_480p.mov"
    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
  />
  <object type="video/ogg" data="/media/video.oga" width="320" height="240">
    <param name="src" value="/media/video.oga" />
    <param name="autoplay" value="false" />
    <param name="autoStart" value="0" />
    <p><a href="/media/video.oga">Download this video file.</a></p>
  </object>
</video>
```

### Audio with fallback - _audio&#x21E5;_

```html
<audio autobuffer autoloop loop controls>
  <source src="/media/audio.oga" />
  <source src="/media/audio.wav" />
  <object type="audio/x-wav" data="/media/audio.wav" width="290" height="45">
    <param name="src" value="/media/audio.wav" />
    <param name="autoplay" value="false" />
    <param name="autoStart" value="0" />
    <p><a href="/media/audio.wav">Download this audio file.</a></p>
  </object>
</audio>
```

### HTML5 Form - _form&#x21E5;_

Contains most of the various new input types

```html
<form id="form_id" name="form_name" action="" method="post">
	<div>
		<label for="name">Name </label>
		<input type="text" name="Name" id="name" placeholder="Name" required/>
	</div>
	<div>
		<label for="upload">Upload </label>
		<input type="file" name="Upload" id="first" />
	</div>
	<div>
		<label for="email">Email </label>
		<input type="email" name="Email" id="email" placeholder="Email" />
	</div>
	<div>
		<label for="url">Url </label>
		<input type="url" name="Url" id="url" placeholder="Url" />
	</div>
	<div>
		<label for="tel">Tel </label>
		<input type="tel" name="Tel" id="tel" placeholder="+441234 5678 90" />
	</div>
	<div>
		<label for="number">Number </label>
		<input type="number" name="number" id="number" placeholder="1234567890" />
	</div>
	<div>
		<label for="date">Date </label>
		<input type="date" name="date" id="date" placeholder="20-09-2010" />
	</div>
	<div>
		<label for="datetime">Date/Time </label>
		<input type="datetime" name="datetime" id="datetime" placeholder="2010-10-15 T00:00Z" />
	</div>
	<div>
		<label for="range">Range </label>
		<input type="range" name="range" id="range" min="0" max="20" step="2" value="6"/>
	</div>
	<div>
		<label for="radio">Radio: </label>
		<input type="radio" name="radio" id="radio_one" value="one">One<br />
		<input type="radio" name="radio" id="radio_two" value="two">Two</p>
	<div>
		<label for="checkbox">Checkbox: </label>
		<input type="checkbox" name="checkbox" id="checkbox_one" value="checked">Check 1<br />
		<input type="checkbox" name="checkbox" id="checkbox_two" value="checked">Check 2<br />
	</div>
	<div>
		<label for="select">Select: </label>
		<select name="select" id="select">
			<option value="alpha">Alpha</option>
			<option value="beta" selected>Beta</option>
		</select>
	</div>
	<div>
		<label for="multiselect">MultiSelect: </label>
		<select name="multiselect" id="multiselect" multiple="multiple" size="2">
			<option value="gamma">Gamma</option>
			<option value="delta">Delta</option>
			<option value="epsilon">Epsilon</option>
			<option value="zeta">Zeta</option>
		</select>
	</div>
	<div>
		<label for="textarea">Textarea: </label>
		<textarea name="textarea" id="textarea" rows="5" cols="30">Text</textarea>
	</div>
	<div>
		<input type="submit" name="submit" value="submit" />
	</div>
</form>
```

### Address - _address&#x21E5;_

```html
<address></address>
```

### Figure - _figure&#x21E5;_

```html
<figure>
  <img src="http://placehold.it/350x150&text=Placeholder+image" />
  <figcaption>explanatory caption</figcaption>
</figure>
```

### Time - _time&#x21E5;_

```html
<time datetime="1992-01-12"> January 12th, 1992</time>
```

### Time (simple)

```html
<time>2010-04-07</time>
```

### Mark - _mark&#x21E5;_

```html
<mark></mark>
```

### Link Prefetch - _prefetch&#x21E5;_

```html
<link rel="prefetch" href="/images/chart.png" />
```

### Prev/Next/Search Links - _prev&#x21E5;_

```html
<link rel="next" href="/page2.html" />
<link rel="prev" href="/page1.html" />
<link rel="search" href="/search" />
```

### Canvas with fallback - _canvas&#x21E5;_

```html
<canvas id="my-first-canvas" width="360" height="240">
  <p>No canvas support? Have an old-fashioned image instead:</p>
  <img src="http://placehold.it/350x150&text=Placeholder+image" />
</canvas>
```

### Hgroup - _hgroup&#x21E5;_

```html
<hgroup>
  <h1></h1>
  <h2>Subheading</h2>
</hgroup>
```

### html5doctor.com Reset Stylesheet - _reset&#x21E5;_

I added the last selector to the reset because I always use it.

```css
html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
abbr,
address,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
samp,
small,
strong,
sub,
sup,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
nav ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
ins {
  background-color: #ff9;
  color: #000;
  text-decoration: none;
}
mark {
  background-color: #ff9;
  color: #000;
  font-style: italic;
  font-weight: bold;
}
del {
  text-decoration: line-through;
}
abbr[title],
dfn[title] {
  border-bottom: 1px dotted;
  cursor: help;
}
/* tables still need cellspacing="0" in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}
input,
select {
  vertical-align: middle;
}
label,
input[type='button'],
input[type='submit'],
button {
  cursor: pointer;
}
```

#### These are not HTML5 but they come from the Boilerplate file & are very useful.

### PNG Fix - _png&#x21E5;_

```html
<!--[if lt IE 7]>
  <script src="js/dd_belatedpng.js?"></script>
  <script>
    DD_belatedPNG.fix('img, .png_bg') //fix any <img> or .png_bg background-images
  </script>
<![endif]-->
```

### Asynchronous Google Analytics - _ga&#x21E5;_

```html
<!-- Asynchronous Google Analytics: mathiasbynens.be/notes/async-analytics-snippet -->
<script>
  var _gaq = [['_setAccount', 'UA-XXXXX-X'], ['_trackPageview']]
  ;(function(d, t) {
    var g = d.createElement(t),
      s = d.getElementsByTagName(t)[0]
    g.async = true
    g.src =
      ('https:' == location.protocol ? 'https://ssl' : 'http://www') +
      '.google-analytics.com/ga.js'
    s.parentNode.insertBefore(g, s)
  })(document, 'script')
</script>
```

### Download

The clips are now hosted on Github, [click here to visit the repository & download these HTML5 Coda Clips now](http://github.com/mrmartineau/HTML5-Coda-Clips)

Please let me know what you think & if you think they can be improved in any way. I know there are a few new tags missing - progress & meter for example - but I rarely need them; say the word & I'll add them in..
