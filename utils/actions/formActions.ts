import {
  validateEmail,
  validateLength,
  validatePassword,
  validateString,
} from "../validationConstraints";

export const validateInput = (inputId: string, inputValue: string) => {
  if (inputId === "firstName" || inputId === "lastName") {
    return validateString(inputId, inputValue);
  } else if (inputId === "email") {
    return validateEmail(inputId, inputValue);
  } else if (inputId === "password") {
    return validatePassword(inputId, inputValue);
  } else if (inputId === "about") {
    return validateLength(inputId, inputValue, 0, 150, true);
  } else if (inputId === "chatName") {
    return validateLength(inputId, inputValue, 5, 50, false);
  } else if (inputId === "maps") {
    return validateLength(inputId, inputValue, 5, 50, false);
  } else if (inputId === "tricks") {
    return validateLength(inputId, inputValue, 5, 50, false);
  }
};
