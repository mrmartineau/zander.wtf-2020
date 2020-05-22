export const baseColors = {
  white: '#f1f1f3',
  light: '#f1f1f3',
  dark: '#15181C',
  pink: 'hsl(336, 66%, 58%)',
}

export const colors = {
  ...baseColors,
  text: baseColors.light,
  background: baseColors.dark,
  primary: baseColors.pink,
  muted: 'hsl(210, 5%, 40%)',
  accent: baseColors.pink,

  codeBackground: '#2d2a2e',
  scrollbar: 'hsl(210, 5%, 40%)',
  scrollbarBg: 'hsl(285, 5%, 12%)',

  secondary: '#718096',
  highlight: '#e2e8f0',

  code1: 'hsl(345, 100%, 69%)',
  code2: '#fc9867',
  code3: '#ffd866',
  code4: '#a9dc76',
  code5: '#78dce8',
  code6: '#ab9df2',
  code7: '#999988',

  success: '#9ae6b4',
  info: '#63b3ed',
  warning: '#faf089',
  danger: '#feb2b2',
  textMuted: '#718096',
  navHover: '#cbd5e0',

  modes: {
    light: {
      text: baseColors.dark,
      background: baseColors.light,
      primary: baseColors.pink,
      accent: baseColors.pink,
      muted: '#e2e8f0',

      codeBackground: 'hsl(240, 8%, 91%)',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',

      secondary: '#718096',
      highlight: '#e2e8f0',

      code1: 'hsl(211, 61%, 23%)',
      code2: '#fc9867',
      code3: '#e3116c',
      code4: '#d73a49',
      code5: 'hsl(211, 61%, 43%)',
      code6: '#6f42c1',
      code7: '#999988',

      success: '#9ae6b4',
      info: '#63b3ed',
      warning: '#faf089',
      danger: '#feb2b2',
      textMuted: '#718096',
      navHover: 'hsl(285, 5%, 13%)',
    },
  },
}
