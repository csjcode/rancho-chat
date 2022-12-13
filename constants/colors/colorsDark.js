const colorsDark = () => {
  const colorTheme = {
    themeMode: 'dark',
    backgroundColor: '#121212',
    bubbleBackgroundColor: '#1b4e3f',
    bubbleBackgroundColorReply: '#409088',
    bubbleBackgroundColorInfo: '#409088',
    bubbleBorderColor: '#7f8c8d',
    bubbleTextColor: '#dfdfdf',
    formInputTextColor: '#000',
    formInputBackgroundColor: '#abd5c6',
    submitButtonTextColor: '#1b4e3f',
    chatScreenBackgroundColor: '#111',
    // chatScreenBackgroundColor: '#431e70',
    chatScreenTextColor: '#32d48e',
    chatScreenHeaderStyle: '#111',
    chatScreenHeaderTitle: '#fff',
    chatScreenHeaderTint: '#aaa',
    mainTabHeaderTitle: '#28a870',
    trickScreenBackground: '#000114',
    trickScreenIcon: '#28a870',
    trickScreenIconLabel: '#aaa',
    menuIcon: colorsBase().solanaPurple,
    tabNavHeader: '#121212',
    textColor: '#32d48e',
    textColorPrimary: '#32d48e',
    textColorSecondary: '#28a870',
    textColorHeading: '#32d48e',
    // backgroundColor: '#232323',
  }

  const colorBase = colorsBase()
  const colorThemeAndBase = { ...colorTheme, ...colorBase }

  return colorThemeAndBase
}

const colorsBase = () => {
  return {
    primary: '#32d48e',
    nearlyWhite: '#F4F8F7',
    grey: '#7f8c8d',
    extraLightGrey: '#ededed',
    red: '#e74c3c',
    beige: '#FEF5C3',
    lightGrey: '#bdc3c7',
    solanaGreen: '#14F195',
    solanaPurple: '#9945FF',
    blue: '#0d6efd',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#d63384',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#198754',
    teal: '#20c997',
    cyan: '#0dcaf0',
    black: '#232323',
    white: '#fff',
    gray: '#86b8b6',
    gray_dark: '#387462',
    gray_100: '#f9fdfc',
    gray_200: '#f1f8f6',
    gray_300: '#d9efe7',
    gray_400: '#c6e6de',
    gray_500: '#abd5c6',
    gray_600: '#86b8b6',
    gray_700: '#409088',
    gray_800: '#387462',
    gray_900: '#1b4e3f',
    primary: '#00ffbd',
    secondary: '#409088',
    success: '#42ba96',
    info: '#b45be1',
    warning: '#d83aeb',
    danger: '#43b5c5',
    light: '#f9fdfc',
    dark: '#1b4e3f',
    // backgroundColor: '#232323',
  }
}

export default colorsDark
