export const baseColors = {
  white: '#f1f1f3',
  light: '#f1f1f3',
  dark: '#15181C',
  pink: 'hsl(336, 66%, 58%)',
}
const sharedDarkColors = {
  code1: 'hsl(345, 100%, 69%)',
  code2: '#fc9867',
  code3: '#ffd866',
  code4: '#a9dc76',
  code5: '#78dce8',
  code6: '#ab9df2',
  code7: '#999988',
}

const sharedLightColors = {
  code1: 'hsl(211, 61%, 23%)',
  code2: '#fc9867',
  code3: '#e3116c',
  code4: '#d73a49',
  code5: 'hsl(211, 61%, 43%)',
  code6: '#6f42c1',
  code7: '#999988',
}

export const colors = {
  ...baseColors,
  text: baseColors.light,
  background: baseColors.dark,
  primary: baseColors.pink,
  muted: 'hsl(210, 5%, 40%)',
  scrollbar: 'hsl(210, 5%, 40%)',
  scrollbarBg: 'hsl(285, 5%, 12%)',
  codeBackground: '#2d2a2e',
  ...sharedDarkColors,

  modes: {
    light: {
      text: baseColors.dark,
      background: baseColors.light,
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
      background: '#F1FAEE',
      primary: '#E63946',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#F7FFF6',
      ...sharedLightColors,
    },

    // https://coolors.co/ffcdb2-ffd9be-ffb4a2-e5989b-b5838d-4e4956
    sunset: {
      text: '#4E4956',
      background: '#FFCDB2',
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
      background: '#FFFFFF',
      primary: '#FF9F1C',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#CBF3F0',
      ...sharedLightColors,
    },

    // https://coolors.co/051e3e-251e3e-451e3e-651e3e-851e3e-903250-d8e8ec
    midnight: {
      text: '#D8E8EC',
      background: '#051E3E',
      primary: '#851E3E',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#251E3E',
      ...sharedDarkColors,
    },

    // https://www.happyhues.co/palettes/14
    sunshine: {
      text: '#272343',
      background: '#fffffe',
      primary: '#ffd803',
      muted: '#A8DADC',
      scrollbar: '#e2e8f0',
      scrollbarBg: 'hsl(210, 20%, 85%)',
      codeBackground: '#e3f6f5',
      ...sharedLightColors,
    },
  },
}
