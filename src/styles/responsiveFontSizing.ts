import { css } from '@emotion/core'

export const responsiveFontSizing = css`
  /* https://websemantics.uk/tools/responsive-font-calculator/ */
  /* 16px @ 768px increasing to 24px @ 1920px */
  :root {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    :root {
      font-size: calc(1rem + ((1vw - 7.68px) * 0.6944));
      /* Note: The calc base value (1rem) MUST be stated in REM to maintain accessibility */
      /* Where: 0.6944 = 100 * font-size_difference / viewport_width_difference */

      /* Safari resize fix */
      min-height: 0vw;
    }
  }
  /* Prevent scaling beyond this breakpoint */
  @media (min-width: 1920px) {
    :root {
      font-size: 24px;
    }
  }
`
