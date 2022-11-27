import React from 'react'
import Input from '../components/Input'
import SubmitButton from '../components/SubmitButton'
import { Feather, FontAwesome } from '@expo/vector-icons'

import { validateInput } from '../utils/actions/formActions'

const SignUpForm = (props) => {
  const inputChangedHandler = (inputId, inputValue) => {
    console.log(validateInput(inputId, inputValue))
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
      />

      <Input
        id="lastName"
        label="Last name"
        icon="user-o"
        iconPack={FontAwesome}
        onInputChanged={inputChangedHandler}
        autoCapitalize="none"
      />

      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        id="password"
        label="Password"
        icon="lock"
        autoCapitalize="none"
        secureTextEntry
        iconPack={Feather}
        onInputChanged={inputChangedHandler}
      />

      <SubmitButton
        title="Sign up"
        onPress={() => console.log('Button pressed')}
        style={{ marginTop: 20 }}
      />
    </>
  )
}

export default SignUpForm
