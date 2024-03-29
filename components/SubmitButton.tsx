import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import getColors from "../constants/colors/getColors";
const colorsTheme = getColors();

interface SubmitButtonProps {
  color?: string;
  disabled?: boolean;
  onPress?: () => void;
  title?: string;
  style?: object;
}

const SubmitButton = (props: SubmitButtonProps) => {
  const enabledBgColor = props.color || colorsTheme.primary;
  const disabledBgColor = colorsTheme.lightGrey;
  const bgColor = props.disabled ? disabledBgColor : enabledBgColor;

  return (
    <TouchableOpacity
      onPress={props.disabled ? () => {} : props.onPress}
      style={{
        ...styles.button,
        ...props.style,
        ...{ backgroundColor: bgColor },
      }}
    >
      <Text
        style={{
          color: props.disabled
            ? colorsTheme.grey
            : colorsTheme.submitButtonTextColor,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    // color: 'black',
  },
});

export default SubmitButton;

// import React from 'react'
// import { StyleSheet, TouchableOpacity, Text } from 'react-native'
// import colors from '../constants/colors/colors'
// import getColors from '../constants/colors/getColors'
// const colorsTheme = getColors()

// const SubmitButton = (props) => {
//   const enabledBgColor = props.color || colorsTheme.primary
//   const disabledBgColor = colorsTheme.lightGrey
//   const bgColor = props.disabled ? disabledBgColor : enabledBgColor

//   return (
//     <TouchableOpacity
//       onPress={props.disabled ? () => {} : props.onPress}
//       style={{
//         ...styles.button,
//         ...props.style,
//         ...{ backgroundColor: bgColor },
//       }}
//     >
//       <Text
//         style={{
//           color: props.disabled
//             ? colorsTheme.grey
//             : colorsTheme.submitButtonTextColor,
//         }}
//       >
//         {props.title}
//       </Text>
//     </TouchableOpacity>
//   )
// }

// const styles = StyleSheet.create({
//   button: {
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // color: 'black',
//   },
// })

// export default SubmitButton
