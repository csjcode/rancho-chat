import React, { useCallback, useEffect, useReducer, useState } from "react";
import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { Feather } from "@expo/vector-icons";

import { validateInput } from "../utils/actions/formActions";
import { reducer } from "../utils/reducers/formReducer";
import { signIn } from "../utils/actions/authActions";
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../constants/colors/colors";
import getColors from "../constants/colors/getColors";
const colorsTheme = getColors();

import { testMode } from "../utils/testMode";

const isTestMode = testMode.status;

interface InitialState {
  inputValues: {
    email: string;
    password: string;
  };
  inputValidities: {
    email: boolean;
    password: boolean;
  };
  formIsValid: boolean;
}

const initialState: InitialState = {
  inputValues: {
    email: isTestMode ? testMode.email : "",
    password: isTestMode ? testMode.password : "", // fake password for testing
  },
  inputValidities: {
    email: isTestMode,
    password: isTestMode,
  },
  formIsValid: isTestMode,
};

interface InputChangedHandlerParams {
  inputId: string;
  inputValue: string;
}

interface AuthHandlerParams {
  formState: InitialState;
  dispatch: any;
}

const SignInForm = (props: any) => {
  const dispatch = useDispatch();

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangedHandler = useCallback(
    ({ inputId, inputValue }: InputChangedHandlerParams) => {
      const result = validateInput(inputId, inputValue);
      dispatchFormState({ inputId, validationResult: result, inputValue });
    },
    [dispatchFormState]
  );

  useEffect(() => {
    if (error) {
      Alert.alert("An error occured", error, [{ text: "Okay" }]);
    }
    // console.log(`formState.formIsValid use effect ${formState.formIsValid}`);
  }, [error]);

  const authHandler = useCallback(
    async () => {
      try {
        setIsLoading(true);
        // console.log(`1 formState.formIsValid ${formState.formIsValid}`);

        const action = signIn(
          formState.inputValues.email,
          formState.inputValues.password
        );
        setError(null);
        await dispatch(action);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
      // console.log(`2 formState.formIsValid ${formState.formIsValid}`);
    },
    [dispatch, formState] as AuthHandlerParams
  );

  return (
    <>
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        autoCapitalize="none"
        keyboardType="email-address"
        onInputChanged={inputChangedHandler}
        initialValue={formState.inputValues.email}
        errorText={formState.inputValidities["email"]}
      />

      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        autoCapitalize="none"
        secureTextEntry
        onInputChanged={inputChangedHandler}
        initialValue={formState.inputValues.password}
        errorText={formState.inputValidities["password"]}
      />

      {isLoading ? (
        <ActivityIndicator
          size={"small"}
          color={colorsTheme.primary}
          style={{ marginTop: 10 }}
        />
      ) : (
        <SubmitButton
          title="Sign in"
          onPress={authHandler}
          style={{ marginTop: 20 }}
          disabled={!formState.formIsValid}
        />
      )}
    </>
  );
};

export default SignInForm;
