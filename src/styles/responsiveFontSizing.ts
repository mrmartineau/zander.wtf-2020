import { css } from '@emotion/core'

export const responsiveFontSizing = css`
  /* https://websemantics.uk/tools/responsive-font-calculator/ */
  /* 14px @ 480px increasing to 20px @ 1920px */
  :root {
    font-size: 16px;
  }

  /* https://websemantics.uk/tools/responsive-font-calculator/ */
  /* 16px @ 300px increasing to 20px @ 1000px */
  @media (min-width: 300px) {
    :root {
      font-size: calc(1rem + ((1vw - 3px) * 0.5714));
      /* Where: * 0.5714 = 100 * font_Size_Difference / viewport_Width_Difference */
    }
  }
  /* Prevent font scaling beyond this breakpoint */
  @media (min-width: 1000px) {
    :root {
      font-size: 20px;
    }
  }
`
