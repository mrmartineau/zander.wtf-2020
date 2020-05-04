import { css } from '@emotion/core'

const monumentExtended = css`
  @font-face {
    font-family: 'Monument Extended';
    src: url('/static/fonts/monumentextended-ultrabold.woff2') format('woff2'),
      url('/static/fonts/monumentextended-ultrabold.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }
`

const IBMPlexMono = css`
  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Bold.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Bold.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 700;
    src: local('IBM Plex Mono Bold'), local('IBMPlexMono-Bold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Bold-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 700;
    src: local('IBM Plex Mono Bold Italic'), local('IBMPlexMono-BoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-BoldItalic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-BoldItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 700;
    src: local('IBM Plex Mono Bold Italic'), local('IBMPlexMono-BoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 700;
    src: local('IBM Plex Mono Bold Italic'), local('IBMPlexMono-BoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 700;
    src: local('IBM Plex Mono Bold Italic'), local('IBMPlexMono-BoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 700;
    src: local('IBM Plex Mono Bold Italic'), local('IBMPlexMono-BoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 700;
    src: local('IBM Plex Mono Bold Italic'), local('IBMPlexMono-BoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-BoldItalic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight'), local('IBMPlexMono-ExtraLight'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ExtraLight.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ExtraLight.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight'), local('IBMPlexMono-ExtraLight'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight'), local('IBMPlexMono-ExtraLight'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight'), local('IBMPlexMono-ExtraLight'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight'), local('IBMPlexMono-ExtraLight'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight'), local('IBMPlexMono-ExtraLight'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLight-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight Italic'),
      local('IBMPlexMono-ExtraLightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ExtraLightItalic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ExtraLightItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight Italic'),
      local('IBMPlexMono-ExtraLightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight Italic'),
      local('IBMPlexMono-ExtraLightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight Italic'),
      local('IBMPlexMono-ExtraLightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight Italic'),
      local('IBMPlexMono-ExtraLightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 200;
    src: local('IBM Plex Mono ExtraLight Italic'),
      local('IBMPlexMono-ExtraLightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ExtraLightItalic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Italic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Italic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 400;
    src: local('IBM Plex Mono Italic'), local('IBMPlexMono-Italic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Italic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300;
    src: local('IBM Plex Mono Light'), local('IBMPlexMono-Light'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Light.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Light.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300;
    src: local('IBM Plex Mono Light'), local('IBMPlexMono-Light'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300;
    src: local('IBM Plex Mono Light'), local('IBMPlexMono-Light'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300;
    src: local('IBM Plex Mono Light'), local('IBMPlexMono-Light'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300;
    src: local('IBM Plex Mono Light'), local('IBMPlexMono-Light'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 300;
    src: local('IBM Plex Mono Light'), local('IBMPlexMono-Light'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Light-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    src: local('IBM Plex Mono Light Italic'), local('IBMPlexMono-LightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-LightItalic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-LightItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    src: local('IBM Plex Mono Light Italic'), local('IBMPlexMono-LightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    src: local('IBM Plex Mono Light Italic'), local('IBMPlexMono-LightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    src: local('IBM Plex Mono Light Italic'), local('IBMPlexMono-LightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    src: local('IBM Plex Mono Light Italic'), local('IBMPlexMono-LightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 300;
    src: local('IBM Plex Mono Light Italic'), local('IBMPlexMono-LightItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-LightItalic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Medium.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Medium.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 500;
    src: local('IBM Plex Mono Medium'), local('IBMPlexMono-Medium'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Medium-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 500;
    src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-MediumItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-MediumItalic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-MediumItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 500;
    src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-MediumItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 500;
    src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-MediumItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 500;
    src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-MediumItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 500;
    src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-MediumItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 500;
    src: local('IBM Plex Mono Medium Italic'), local('IBMPlexMono-MediumItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-MediumItalic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Mono'), local('IBMPlexMono'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Regular.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Regular.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Mono'), local('IBMPlexMono'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Mono'), local('IBMPlexMono'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Mono'), local('IBMPlexMono'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Mono'), local('IBMPlexMono'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 400;
    src: local('IBM Plex Mono'), local('IBMPlexMono'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Regular-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold'), local('IBMPlexMono-SemiBold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-SemiBold.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-SemiBold.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold'), local('IBMPlexMono-SemiBold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold'), local('IBMPlexMono-SemiBold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold'), local('IBMPlexMono-SemiBold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold'), local('IBMPlexMono-SemiBold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold'), local('IBMPlexMono-SemiBold'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBold-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold Italic'),
      local('IBMPlexMono-SemiBoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-SemiBoldItalic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-SemiBoldItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold Italic'),
      local('IBMPlexMono-SemiBoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold Italic'),
      local('IBMPlexMono-SemiBoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold Italic'),
      local('IBMPlexMono-SemiBoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold Italic'),
      local('IBMPlexMono-SemiBoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 600;
    src: local('IBM Plex Mono SemiBold Italic'),
      local('IBMPlexMono-SemiBoldItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-SemiBoldItalic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 450;
    src: local('IBM Plex Mono Text'), local('IBMPlexMono-Text'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Text.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Text.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 450;
    src: local('IBM Plex Mono Text'), local('IBMPlexMono-Text'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 450;
    src: local('IBM Plex Mono Text'), local('IBMPlexMono-Text'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 450;
    src: local('IBM Plex Mono Text'), local('IBMPlexMono-Text'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 450;
    src: local('IBM Plex Mono Text'), local('IBMPlexMono-Text'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 450;
    src: local('IBM Plex Mono Text'), local('IBMPlexMono-Text'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Text-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 450;
    src: local('IBM Plex Mono Text Italic'), local('IBMPlexMono-TextItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-TextItalic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-TextItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 450;
    src: local('IBM Plex Mono Text Italic'), local('IBMPlexMono-TextItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 450;
    src: local('IBM Plex Mono Text Italic'), local('IBMPlexMono-TextItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 450;
    src: local('IBM Plex Mono Text Italic'), local('IBMPlexMono-TextItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 450;
    src: local('IBM Plex Mono Text Italic'), local('IBMPlexMono-TextItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 450;
    src: local('IBM Plex Mono Text Italic'), local('IBMPlexMono-TextItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-TextItalic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 100;
    src: local('IBM Plex Mono Thin'), local('IBMPlexMono-Thin'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-Thin.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-Thin.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 100;
    src: local('IBM Plex Mono Thin'), local('IBMPlexMono-Thin'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 100;
    src: local('IBM Plex Mono Thin'), local('IBMPlexMono-Thin'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 100;
    src: local('IBM Plex Mono Thin'), local('IBMPlexMono-Thin'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 100;
    src: local('IBM Plex Mono Thin'), local('IBMPlexMono-Thin'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: normal;
    font-weight: 100;
    src: local('IBM Plex Mono Thin'), local('IBMPlexMono-Thin'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-Thin-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 100;
    src: local('IBM Plex Mono Thin Italic'), local('IBMPlexMono-ThinItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff2/IBMPlexMono-ThinItalic.woff2')
        format('woff2'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/complete/woff/IBMPlexMono-ThinItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 100;
    src: local('IBM Plex Mono Thin Italic'), local('IBMPlexMono-ThinItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Cyrillic.woff2')
        format('woff2');
    unicode-range: U+0400-045F, U+0472-0473, U+0490-049D, U+04A0-04A5,
      U+04AA-04AB, U+04AE-04B3, U+04B6-04BB, U+04C0-04C2, U+04CF-04D9,
      U+04DC-04DF, U+04E2-04E9, U+04EE-04F5, U+04F8-04F9;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 100;
    src: local('IBM Plex Mono Thin Italic'), local('IBMPlexMono-ThinItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Pi.woff2')
        format('woff2');
    unicode-range: U+0E3F, U+2032-2033, U+2070, U+2075-2079, U+2080-2081, U+2083,
      U+2085-2089, U+2113, U+2116, U+2126, U+212E, U+2150-2151, U+2153-215E,
      U+2190-2199, U+21A9-21AA, U+21B0-21B3, U+21B6-21B7, U+21BA-21BB, U+21C4,
      U+21C6, U+2202, U+2206, U+220F, U+2211, U+221A, U+221E, U+222B, U+2248,
      U+2260, U+2264-2265, U+25CA, U+2713, U+274C, U+2B0E-2B11, U+EBE1-EBE7,
      U+ECE0, U+EFCC;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 100;
    src: local('IBM Plex Mono Thin Italic'), local('IBMPlexMono-ThinItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin3.woff2')
        format('woff2');
    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 100;
    src: local('IBM Plex Mono Thin Italic'), local('IBMPlexMono-ThinItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin2.woff2')
        format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF,
      U+2C60-2C7F, U+A720-A7FF, U+FB01-FB02;
  }

  @font-face {
    font-family: 'IBM Plex Mono';
    font-style: italic;
    font-weight: 100;
    src: local('IBM Plex Mono Thin Italic'), local('IBMPlexMono-ThinItalic'),
      url('/static/fonts/ibm-plex/IBM-Plex-Mono/fonts/split/woff2/IBMPlexMono-ThinItalic-Latin1.woff2')
        format('woff2');
    unicode-range: U+0000, U+000D, U+0020-007E, U+00A0-00A3, U+00A4-00FF, U+0131,
      U+0152-0153, U+02C6, U+02DA, U+02DC, U+2013-2014, U+2018-201A, U+201C-201E,
      U+2020-2022, U+2026, U+2030, U+2039-203A, U+2044, U+2074, U+20AC, U+2122,
      U+2212, U+FB01-FB02;
  }
`

export const fontFace = css`
  ${IBMPlexMono}

  ${monumentExtended}
`
