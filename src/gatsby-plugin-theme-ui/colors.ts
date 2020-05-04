export const baseColors = {
  white: '#f1f1f3',
  light: '#f1f1f3',
  dark: '#15181C',
}

export const colors = {
  ...baseColors,
  text: baseColors.light,
  background: baseColors.dark,
  primary: 'hsl(334, 86%, 48%)',
  secondary: '#718096',
  accent: '#e2e8f0',
  highlight: '#e2e8f0',
  muted: '#e2e8f0',

  code1: 'hsl(345, 100%, 69%)',
  code2: '#fc9867',
  code3: '#ffd866',
  code4: '#a9dc76',
  code5: '#78dce8',
  code6: '#ab9df2',
  code7: '#999988',

  scrollbar: 'hsl(285, 5%, 12%)',
  success: '#9ae6b4',
  info: '#63b3ed',
  warning: '#faf089',
  danger: '#feb2b2',
  textMuted: '#718096',
  navHover: '#cbd5e0',
  codeBackground: '#fbf2e9',

  modes: {
    dark: {
      text: baseColors.dark,
      background: baseColors.light,
      primary: 'hsl(345, 100%, 69%)',
      secondary: '#718096',
      accent: '#e2e8f0',
      highlight: '#e2e8f0',
      muted: 'hsl(210, 5%, 40%)',

      code1: 'hsl(211, 61%, 23%)',
      code2: '#fc9867',
      code3: '#e3116c',
      code4: '#d73a49',
      code5: 'hsl(211, 61%, 43%)',
      code6: '#6f42c1',
      code7: '#999988',

      scrollbar: 'hsl(210, 20%, 85%)',
      success: '#9ae6b4',
      info: '#63b3ed',
      warning: '#faf089',
      danger: '#feb2b2',
      textMuted: '#718096',
      navHover: 'hsl(285, 5%, 13%)',
      codeBackground: '#2d2a2e',
    },
  },
}
