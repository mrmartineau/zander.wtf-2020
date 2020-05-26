---
slug: creating-dynamic-layouts-with-jekyll
title: Creating dynamic layouts with Jekyll
subtitle: How we used YAML front-matter to massively change the layout for different posts on our agency’s new website
date: 2017-02-02
canonical: https://medium.com/tmw-interactive/creating-dynamic-layouts-with-jekyll-3bbb7fc57d1f
---

[Jekyll](http://jekyllrb.com)\-created websites are typically simple and their layouts, predictable. I want to show you how I created a pseudo-dynamic layout for case-studies, on [TMW's new website](http://www.tmwunlimited.com), using some YAML front-matter and a little magic..\*

At TMW, the work we do comes in all shapes and sizes. Traditional templates would not suffice, because the work we do is extremely varied and the layouts needed to reflect that. We decided, at a very early stage, that each case study should change based on the project and particular type of content. This presented an interesting challenge for me because Jekyll does not cater for that functionality, so I had to get a little creative…

## YAML front-matter, a for-loop and lots of modules

After a few iterations, I settled on a robust, if unorthodox solution that used YAML front-matter (in each case study’s markdown), a simple for-loop (in the case study layout) and lots of modules for each section of the case study page.

### YAML front-matter

Amongst other things, the partials YAML array was added to the YAML front-matter for each case study (you can see it at the bottom of the embed below). Each item in that array had to specify a name, this name corresponded to the name of the partial/module that was going to be used.

```yaml
# ------------ #
# Main content #
# ------------ #
partials:
  - name: section-video
    id: 183025668
    spaced: true
  - name: section
    title: A wide-ranging audience. One unifying idea.
    body: |
      Capturing the attention of all who saw it, #UNLEASHPRINT struck a positive chord with our audience. Its compelling message provided a great platform for us to produce inspiring social content, quirky product demos, thought-provoking headlines, surprising DM and more.
    spaced: 'true'
  - name: section-carousel
    src:
      - 'work/canon-unleashprint/carousel01.jpg'
      - 'work/canon-unleashprint/carousel02.jpg'
      - 'work/canon-unleashprint/carousel03.jpg'
      - 'work/canon-unleashprint/carousel04.jpg'
      - 'work/canon-unleashprint/carousel05.jpg'
    padded: 'true'
  - name: section
    title: Less product. More possibilities.
    body: |
      Instead of pushing a particular product, we focused on user-benefits, demonstrating how everyone could #UNLEASHPRINT. From laptops to table tops, we showed our audience endless print possibilities - and encouraged them to get involved too.
    spaced: 'true'
  - name: section-video
    id: 168222866
    poster: 'work/canon-unleashprint/video_cover.jpg'
  - name: section
    title: Consideration and profitability. Up and up.
    body: |
      On-stand sales at drupa went up 30% compared to previous years. The hero product launch hit its sales target by day three of the 10-day event. And during the event, #UNLEASHPRINT was used three times more than the hashtag of any other competitor.
    gutter: true
    spaced: 'true'
  - name: section-img
    src: 'work/canon-unleashprint/logo-blurry.jpg'
  - name: quote--lrg
    body: |
      We set out to give visitors fresh ideas about how they could expand their capabilities and to inspire them to unleash print in their own individual ways. We've surpassed that objective on every level.
    cite: 'Jeppe Frandsen'
    attribute: 'Executive Vice President of Industrial & Production Solutions Canon Europe'
    padded: true
  - name: section-scroll
    src: 'work/canon-unleashprint/scroll.jpg'
    padded: true
```

This is taken from the [Canon. Unleashing Print. case study](http://www.tmwunlimited.com/work/canon-unleashprint/)

### The for-loop

The loop in question was added to the work layout file in the `_layouts` directory. It might look a bit nuts  —  and it is  —  but please bear with me.. The nature of how Jekyll compiles it’s files meant I had to account for all possible properties for each module that was used in the YAML.

The loop iterated through the partials array, used the name property to include a _different_ module, like so: `include {{item.name}}.html`. These were then passed to the included module using the subsequent parameters on the include tag. Even if the property was not needed in that module, it still needed to be passed down.

```yaml
{% for item in page.partials %}
  {% include {{item.name}}.html
    spaced=item.spaced
    padded=item.padded
    src=item.src
    title=item.title
    body=item.body
    link=item.link
    href=item.href
    gutter=item.gutter
    stack=item.stack
    poster=item.poster
    content=item.content
    bgcolor=item.bgcolor
    bgimg=item.bgimg
    color=item.color
    columnwidth=item.columnwidth
    centred=item.centred
    cite=item.cite
    attribute=item.attribute
    id=item.id
    size=item.size
    contained=item.contained
  %}
{% endfor %}
```

Very quickly, I discovered that the properties of the partials array needed to share the same properties so that my for-loop didn’t get totally out of control.

### The modules

Creating modules for this page was nothing out of the ordinary, below you can see one of them. You should also be able to tell that some of the values are optional (e.g {% if include.spaced %}), this meant that I was able to customise the modules even further by adding/removing classes and content and giving the page even more of a unique feel. Examples of this was the optional addition to contain images in the section-image module to a thin column equal to the width of.l-container or a slightly wider version using.l-container--wide. This was used to great effect on the [Lynx Bigger Issues case study](http://www.tmwunlimited.com/work/unilever-lynx-bigger-issues/).

```html
<section
  class="section{%if include.spaced %} section--spaced{% endif %}{%if include.padded %} section--padded{% endif %}{%if include.classes %} {{ include.classes }}{% endif %}{%if include.centred %} section--centred{% endif %}"
  style="{%if include.color %}color: {{ include.color }};{% endif %}{%if include.bgcolor %}background-color: {{ include.bgcolor }};{% endif %}"
>
  <div
    class="l-container{%if include.size %}  l-container--{{ include.size }}{% endif %}"
  >
    {% if include.title %}
    <h3 class="h3">{{ include.title }}</h3>
    {% endif%} {{ include.body | markdownify }} {% if include.link %}
    <a href="{{ include.href }}" rel="external">{{ include.link }}</a>
    {% endif %}
  </div>
</section>
```

### Colour schemes

Another aspect to the case studies, was that they each have their own colour scheme. This is usually governed by the assets or brand for that particular case study and was controlled by some more YAML front-matter.

The YAML set primary, secondary and text colours that were then added to a small inline `<style>` block that changed styles for some aspects of the page.

```html
<style>
  .hero {
    background-color: {{ page.style.color.primary }};
    color:{{ page.hero.color }};
    background-image: url({{ site.assets.imgPath }}{{ page.hero.bg }}?w=500&{{ site.assets.params }});
  }
  .hero-title {
    color: {{ page.hero.color }};
  }
  .hero-link {
    color: {{ page.hero.color }};
  }
  .section--quote {
    background-color: {{ page.style.color.primary }};
    color: {{ page.style.color.text }};
  }
</style>
```

```yaml
# Styling & Colour scheme
style:
  color:
    primary: '#db030f'
    secondary: '#000'
    text: '#fff'
```

All of this allowed for massive customisation on our new website, see a selection of case studies below:

[tmwunlimited.com/work/](http://www.tmwunlimited.com/work/)

### 👋

As you can see, there are some incredible things that can be done with Jekyll. If you have any comments or feedback, please let me know.

---

\*No magic was used.
