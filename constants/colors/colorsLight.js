const colorsLight = () => {
  const colorTheme = {
    themeMode: 'light',
    backgroundColor: '#FFF',
    bubbleBackgroundColor: '#eee',
    bubbleBackgroundColorReply: '#fff',
    bubbleBackgroundColorInfo: '#E2DACC',
    bubbleBorderColor: '#E2DACC',
    bubbleTextColor: '#000',
    formInputTextColor: '#000',
    formInputBackgroundColor: '#F4F8F7',
    submitButtonTextColor: '#fff',
    chatScreenBackgroundColor: '#fff',
    chatScreenTextColor: '#000',
    chatScreenHeaderStyle: '#fff',
    chatScreenHeaderTitle: '#000',
    chatScreenHeaderTint: '#fff',
    mainTabHeaderTitle: '#000',
    trickScreenBackground: '#fff',
    trickScreenIcon: '#999',
    trickScreenIconLabel: '#000',
    bubbleMyMessage: '',
    menuIcon: '#9945FF',
    tabNavHeader: 'white',
    textColor: '#1c1e21',
    textColorPrimary: '#1c1e21',
    textColorSecondary: '#999',
    textColorHeading: '#32d48e',
  }

  const colorBase = colorsBase()
  const colorThemeAndBase = { ...colorTheme, ...colorBase }

  return colorThemeAndBase
}

const colorsBase = () => {
  return {
    blue: '#3498db',
    lightGrey: '#bdc3c7',
    extraLightGrey: '#ededed',
    nearlyWhite: '#F4F8F7',
    grey: '#7f8c8d',
    primary: '#32d48e',
    red: '#e74c3c',
    beige: '#FEF5C3',
    solanaGreen: '#14F195',
    solanaPurple: '#9945FF',
  }
}

export default colorsLight
