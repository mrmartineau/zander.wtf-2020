export const baseColors = {
  white: '#f1f1f3',
  light: '#f1f1f3',
  dark: '#15181C',
  pink: '#db4d86',
}

const sharedDarkColors = {
  code1: 'hsl(345, 100%, 69%)',
  code2: '#fc9867',
  code3: '#ffd866',
  code4: '#a9dc76',
  code5: '#78dce8',
  code6: '#ab9df2',
  code7: '#999988',
  codeCopyButtonBg: 'rgba(0,0,0,0.6)',
  codeCopyButtonBgHover: 'rgba(0,0,0,0.8)',
  codeCopyButtonBorder: 'rgba(0,0,0,1)',
  // scrollbar: darken('background', 0.25),
  // scrollbarBg: lighten('background', 0.25),
}

const sharedLightColors = {
  code1: 'hsl(211, 61%, 23%)',
  code2: '#fc9867',
  code3: '#e3116c',
  code4: '#d73a49',
  code5: 'hsl(211, 61%, 43%)',
  code6: '#6f42c1',
  code7: '#999988',
  codeCopyButtonBg: 'rgba(255,255,255,0.6)',
  codeCopyButtonBgHover: 'rgba(255,255,255,0.8)',
  codeCopyButtonBorder: 'rgba(255,255,255,1)',
  // scrollbar: darken('background', 0.25),
  // scrollbarBg: lighten('background', 0.25),
}

// https://coolors.co/15181c-2c2f33-f1f1f3-db4d86
const darkColors = {
  text: baseColors.light,
  articleListItemHoverText: 'text',
  background: baseColors.dark,
  primary: baseColors.pink,
  muted: 'hsl(210, 5%, 40%)',
  codeBackground: '#2d2a2e',
  mastheadBackground: baseColors.light,
  mastheadText: baseColors.dark,
  scrollbar: 'hsl(210, 5%, 40%)',
  scrollbarBg: 'hsl(285, 5%, 12%)',
  ...sharedDarkColors,
}

export const colors = {
  ...baseColors,
  ...darkColors,

  modes: {
    dark: {
      ...darkColors,
      mastheadBackground: '#2c2f33',
      mastheadText: baseColors.light,
    },

    inverted: {
      text: baseColors.dark,
      articleListItemHoverText: baseColors.light,
      background: baseColors.light,
      mastheadBackground: baseColors.dark,
      mastheadText: baseColors.light,
      primary: baseColors.pink,
      muted: '#e2e8f0',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: 'hsl(240, 8%, 91%)',
      ...sharedLightColors,
    },

    // https://coolors.co/f1faee-c1c9be-e63946-a8dadc-457b9d-1d3557
    one: {
      text: '#1D3557',
      articleListItemHoverText: '#F1FAEE',
      background: '#F1FAEE',
      mastheadBackground: '#1D3557',
      mastheadText: '#F1FAEE',
      primary: '#E63946',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#F7FFF6',
      ...sharedLightColors,
    },

    // https://www.happyhues.co/palettes/14
    // https://coolors.co/272343-fffffe-ffd803-e3f6f5
    sunshine: {
      text: '#272343',
      articleListItemHoverText: '#272343',
      background: '#fffffe',
      mastheadBackground: '#272343',
      mastheadText: '#fffffe',
      primary: '#ffd803',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#e3f6f5',
      ...sharedLightColors,
    },

    // https://coolors.co/051e3e-251e3e-451e3e-651e3e-851e3e-903250-d8e8ec
    midnight: {
      text: '#D8E8EC',
      articleListItemHoverText: '#D8E8EC',
      background: '#051E3E',
      mastheadBackground: '#D8E8EC',
      mastheadText: '#051E3E',
      primary: '#851E3E',
      muted: '#A8DADC',
      scrollbar: 'hsl(210, 5%, 40%)',
      scrollbarBg: 'hsl(285, 5%, 12%)',
      codeBackground: '#251E3E',
      ...sharedDarkColors,
    },

    // https://coolors.co/ffcdb2-ffd9be-ffb4a2-e5989b-b5838d-3F3A48
    sunset: {
      text: '#3F3A48',
      articleListItemHoverText: '#FFCDB2',
      background: '#FFCDB2',
      mastheadBackground: '#3F3A48',
      mastheadText: '#FFCDB2',
      primary: '#B5838D',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#FFD9BE',
      ...sharedLightColors,
    },

    // https://coolors.co/ffffff-cbf3f0-2ec4b6-209181-ff9f1c-ffbf69
    green: {
      text: '#209181',
      articleListItemHoverText: '#FFFFFF',
      background: '#FFFFFF',
      mastheadBackground: '#209181',
      mastheadText: '#FFFFFF',
      primary: '#104740',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#CBF3F0',
      ...sharedLightColors,
    },

    // https://coolors.co/555b6e-89b0ae-bee3db-faf9f9-fef3eb-ffd6ba
    cultured: {
      text: '#44495C',
      articleListItemHoverText: '#FAF9F9',
      background: '#FAF9F9',
      mastheadBackground: '#44495C',
      mastheadText: '#FAF9F9',
      primary: '#89B0AE',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#E4F1EF',
      ...sharedLightColors,
    },
  },
}
