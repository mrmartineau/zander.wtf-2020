---
slug: lessons-learned-building-design-systems
title: Lessons learned building design systems
subtitle: My rules for design system component libraries
date: 2019-03-14
modified: 2019-03-26
---

Having contributed to a few design systems now, I have found that the same issues appear again and again. Most of the time, these issues can be resolved with a bit of forward planning and some common sense, but the rest of it is down to trial and error. Every team has their own needs from a design system so what works for one person may not work for another. Hopefully, the suggestions in this article can be applied to your design system.

## Clearly define what should and shouldn't be included in your component library

In my opinion, a design system should only include component primitives and the most common reusable patterns. These would be known as **atoms** or **molecules** if you're using an atomic design methodology.

If a component is too complex then I suggest that you move it out of the design system repository. Equally, if it is not going to be used by everyone consuming your design system, then it is also a good candidate for being moved into another repository. Use the design system as the base for everything else your team builds.

This decision also has a basis in performance. More components will increase the package size of the result.

Each team will have their own criteria for what should be included in a design system, but ultimately it is a personal and evolutionary decision. Once you have arrived at your decision, ensure you document it in a place that is easy to find.

## Have a clear and consistent naming strategy

It might sound obvious, but giving your components useful and intuitive names is crucial. What might sound good to a designer might not be clear to a developer (and vice versa). This one sounds easy, but is actually quite difficult in practice.

## Document everything

The more information you provide for each component, the more it will be used and maintained. You wouldn't want your component to be used incorrectly, so provide information for how and when it should be used.

Provide information about how to consume it from a development perspective, e.g. what code is needed to import it, and what are some example use cases for it.

[Docz](https://www.docz.site/) is a great solution for documenting components. Documentation is written in markdown format (.mdx) and components can be embedded right into the documentation.

[Storybook](https://storybook.js.org/) also has the ability to render markdown (using the readme or info add-ons) and is a great alternative for keeping the docs close to the implementation details.

## Make components easy to find

If possible, provide a search to find your components. Both Storybook and Docz have a search but they're limited to names of the stories/items only. Alternatively create an index of all components on one page so that they can be easily be searched, [Fannypack](https://fannypack.style/) does a brilliant job of this on their home page. Having a consistent naming strategy will also help in this matter.

## Make your components easy to develop

Providing a dedicated development environment is extremely important too. A tool like Storybook is perfect for this because it creates an environment to preview and develop your components in isolation.

Test your components under different conditions by making use of Storybook's add-ons. The [Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs) and [Viewport](https://github.com/storybooks/storybook/tree/master/addons/viewport) add-ons make development much easier by allowing users to change values and data that the component uses.

The [story source](https://github.com/storybooks/storybook/tree/master/addons/storysource) add-on shows the source code for a given component so it makes it even easier for developers to see examples of it in use.

## Provide an interactive demo

If you can publish your components to [npm](https://npmjs.org/), you can then use something like [CodeSandbox](https://codesandbox.io/) to allow developers to experiment with them and test different combinations.

## Make your design tokens easy to access and edit

Your designs tokens will be used more than any other aspect of your system, so make them easy to reference and even more easy to update. If you are writing CSS-in-JS, my library, [Design System Utils](https://github.com/mrmartineau/design-system-utils/) can greatly help in this matter.

Wherever you choose to document your components, your tokens should also be included as well.

## Make your components accessible by default

The extra effort required to make components accessible is negligible compared to the frustration they cause to users with special needs. There are many resources about accessibility online, here's [my ever-growing list](https://github.com/mrmartineau/awesome-web-dev-resources#accessibility-a11y) of a11y resources.

## Test your components

The more tests you add, the more robust and reliable your components will be. There are a few different types of tests that you'll need: unit tests, snapshot tests and visual regression tests.

Visual regression tests are brilliant for picking up bugs in components over time. For example, if someone changes a token value for the border colour that is meant for the form inputs, but another component is also using that for its border, then your visual regression tests will notify your team of the change when the tests are run. [Chromatic](https://www.chromaticqa.com/) or [Percy]() are great for this because they integrate brilliantly with Storybook, and it's free if your project is open source.

## Versioning

Using proper [semantic versioning](https://semver.org/spec/v2.0.0.html) (e.g.`1.2.3`) will really help when folks consume your design system. There is a clear understanding of why the version changed and what that means for people referencing and consuming your work.

There are many tools that help automate versioning, one of which is [Conventional commits](https://www.conventionalcommits.org/); it automatically determines a semantic version bump; automates `CHANGELOG` generation; and it also integrates with your continuous integration process so it offsets these features and more so developers don't have to think about it.

## Automate as much as possible

If you can automate your unit tests, visual regression tests, code coverage, code linting and even your release process then you will again be offsetting mundane and repetitive tasks that your team will not have to worry about.

## Dedicate time and resources to maintaining your codebase

I cannot stress this point enough: if you don't dedicate time and resources to maintaining your codebase it will ultimately fail. Fail to be used; fail to change with the times; and fail to be useful to those that need it.

---

I would be keen to hear your thoughts on this. Do you have anything to add? Can any of my points be improved upon?
