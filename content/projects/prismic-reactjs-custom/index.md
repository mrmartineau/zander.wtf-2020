---
title: prismic-reactjs-custom
description: An opinionated fork of prismic-reactjs that allows you to use custom React components instead of standard HTML tags
link: https://github.com/mrmartineau/prismic-reactjs-custom
date: 2018-11-29
info:
  - key: Repo
    value: github.com/mrmartineau/prismic-reactjs-custom
    link: https://github.com/mrmartineau/prismic-reactjs-custom
  - key: npm
    value: npmjs.com/package/prismic-reactjs-custom
    link: https://www.npmjs.com/package/prismic-reactjs-custom
---

```jsx
import { RichText } from 'prismic-reactjs-custom'

const RT = () => (
  <RichText
    richText={richTextDataFromPrismic}
    heading1={yourCustomHeading1}
    paragraph={yourCustomParagraph}
  />
)
```
