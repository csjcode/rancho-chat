import React, { useReducer, useCallback, useState, useEffect } from 'react'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { getFirebaseApp } from '../utils/firebaseHelper.js'

import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducer'
import { signUp } from '../utils/actions/authActions'
import { ActivityIndicator, Alert } from 'react-native'
import colors from '../constants/colors'

const initialState = {
  inputValidities: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
}
const SignUpForm = (props) => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [formState, dispatchFormState] = useReducer(reducer, initialState)

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState],
  )

  useEffect(() => {
    if (error) {
      Alert.alert('An error occured', error, [{ text: 'Okay' }])
    }
  }, [error])

  const authHandler = async () => {
    try {
      setIsLoading(true)
      // console.log(
      //   formState.inputValues.firstName,
      //   formState.inputValues.lastName,
      //   formState.inputValues.email,
      //   formState.inputValues.password,
      // )
      await signUp(
        formState.inputValues.firstName,
        formState.inputValues.lastName,
        formState.inputValues.email,
        formState.inputValues.password,
      )
      setError(null)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Input
        id="firstName"
        label="First name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        autoCapitalize="none"
        errorText={formState.inputValidities['firstName']}
      />

      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        autoCapitalize="none"
        errorText={formState.inputValidities['lastName']}
      />

      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        keyboardType="email-address"
        autoCapitalize="none"
        errorText={formState.inputValidities['email']}
      />

      <Input
        id="password"
        label="Password"
        icon="lock"
        autoCapitalize="none"
        secureTextEntry
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        errorText={formState.inputValidities['password']}
      />

      {isLoading ? (
        <ActivityIndicator
          size={'small'}
          color={colors.primary}
          style={{ marginTop: 10 }}
        />
      ) : (
        <SubmitButton
          title="Sign up"
          onPress={authHandler}
          style={{ marginTop: 20 }}
          disabled={!formState.formIsValid}
        />
      )}
    </>
  )
}

export default SignUpForm
