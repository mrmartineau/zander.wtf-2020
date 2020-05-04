import { css } from '@emotion/core'

export const responsiveFontSizing = css`
  /* https://websemantics.uk/tools/responsive-font-calculator/ */
  /* 14px @ 480px increasing to 20px @ 1920px */
  :root {
    font-size: 14px;
  }

  @media (min-width: 480px) {
    :root {
      font-size: calc(0.875rem + ((1vw - 4.8px) * 0.4167));
      /* Where: * 0.4167 = 100 * font_Size_Difference / viewport_Width_Difference */
    }
  }
  /* Prevent font scaling beyond this breakpoint */
  @media (min-width: 1920px) {
    :root {
      font-size: 20px;
    }
  }
`
