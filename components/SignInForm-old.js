import React, { useCallback, useEffect, useReducer, useState } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { Feather } from '@expo/vector-icons'

import { validateInput } from '../utils/actions/formActions'
import { reducer } from '../utils/reducers/formReducer'
import { signIn } from '../utils/actions/authActions'
import { ActivityIndicator, Alert } from 'react-native'
import { useDispatch } from 'react-redux'
import colors from '../constants/colors/colors'
import getColors from '../constants/colors/getColors'
const colorsTheme = getColors()

import { testMode } from '../utils/testMode'

const isTestMode = testMode.status

const initialState = {
  inputValues: {
    email: isTestMode ? testMode.email : '',
    password: isTestMode ? testMode.password : '', // fake password for testing
  },
  inputValidities: {
    email: isTestMode,
    password: isTestMode,
  },
  formIsValid: isTestMode,
}

const SignInForm = (props) => {
  const dispatch = useDispatch()

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

  const authHandler = useCallback(async () => {
    try {
      console.log(`formState.formIsValid ${formState.formIsValid}`)
      setIsLoading(true)
      console.log(`formState.inputValues.email,
      formState.inputValues.password,${formState.inputValues.email},
      ${formState.inputValues.password}`)
      const action = signIn(
        formState.inputValues.email,
        formState.inputValues.password,
      )
      setError(null)
      console.log(`action: ${action}`)
      await dispatch(action)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }, [dispatch, formState])

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
        errorText={formState.inputValidities['email']}
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
        errorText={formState.inputValidities['password']}
      />

      {isLoading ? (
        <ActivityIndicator
          size={'small'}
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
  )
}

export default SignInForm
