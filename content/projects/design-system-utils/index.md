---
title: Design System Utils
description: 👩‍🎨 Access your design tokens with ease
link: https://github.com/mrmartineau/design-system-utils
date: 2018-04-01
info:
  - key: Repo
    value: github.com/mrmartineau/design-system-utils
    link: https://github.com/mrmartineau/design-system-utils
  - key: npm
    value: npmjs.com/package/design-system-utils
    link: https://www.npmjs.com/package/design-system-utils
---

A micro library to ensure your CSS-in-JS styles stay consistent with your brand's design-system. Works with styled-components, emotion, glamorous and all other CSS-in-JS libraries.

```js
// ./tokens/index.js
import DesignSystem from 'design-system-utils'

// your design tokens object goes here
const designTokens = {
  type: {
    sizes: {
      s: '20px',
      m: '36px',
      l: '42px',
    },
    fontFamily: {
      sans: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      serif: 'Georgia, "Times New Roman", Times, serif',
    },
  },
}

export const tokens = new DesignSystem(designTokens)

// ./components/ExampleComponent.js
import styled from 'styled-component'
import { tokens } from '../tokens'

export const ExampleComponent = styled.div`
  font-family: ${tokens.get('type.fontFamily.sans')};
  font-size: ${tokens.fs('m')};
`
```
