import { Feather, FontAwesome } from '@expo/vector-icons'
import React, { useCallback, useReducer, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../../components/Input'
import PageContainer from '../../components/PageContainer'
import PageTitle from '../../components/PageTitle'
import ProfileImage from '../../components/ProfileImage'
import SubmitButton from '../../components/SubmitButton'
import SettingsMenuToggle from './SettingsMenuToggle'
import SettingsStarMessages from './SettingsStarMessages'

import colors from '../../constants/colors/colors'
import { updateLoggedInUserData } from '../../store/authSlice'
import {
  updateSignedInUserData,
  userLogout,
} from '../../utils/actions/authActions'
import { validateInput } from '../../utils/actions/formActions'
import { reducer } from '../../utils/reducers/formReducer'
import getColors from '../../constants/colors/getColors'
import SettingsMenuTheme from './SettingsMenuTheme'
let colorsTheme = getColors()

const SettingsScreen = (props) => {
  let colorsTheme = getColors()
  console.log(`props SettingsScreen ${JSON.stringify(props)}`)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const userData = useSelector((state) => state.auth.userData)
  // console.log(`colorsTheme SettingsScreen ${JSON.stringify(colorsTheme)}`)

  const firstName = userData.firstName || ''
  const lastName = userData.lastName || ''
  const email = userData.email || ''
  const about = userData.about || ''

  const initialState = {
    inputValues: {
      firstName,
      lastName,
      email,
      about,
    },
    inputValidities: {
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      about: undefined,
    },
    formIsValid: false,
  }

  const [formState, dispatchFormState] = useReducer(reducer, initialState)

  const inputChangedHandler = useCallback(
    (inputId, inputValue) => {
      // console.log(inputId, inputValue)
      const result = validateInput(inputId, inputValue)
      dispatchFormState({ inputId, validationResult: result, inputValue })
    },
    [dispatchFormState],
  )

  const saveHandler = useCallback(async () => {
    const updatedValues = formState.inputValues

    try {
      setIsLoading(true)
      await updateSignedInUserData(userData.userId, updatedValues)
      dispatch(setStoredCoins({ newData: updatedValues }))

      setShowSuccessMessage(true)

      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [formState, dispatch])

  const hasChanges = () => {
    const currentValues = formState.inputValues

    return (
      currentValues.firstName != firstName ||
      currentValues.lastName != lastName ||
      currentValues.email != email ||
      currentValues.about != about
    )
  }

  return (
    <PageContainer style={stylesFor(colorsTheme).pageContainer}>
      {/* <PageTitle text="Settings" /> */}

      <ScrollView contentContainerStyle={stylesFor(colorsTheme).formContainer}>
        <ProfileImage
          size={80}
          userId={userData.userId}
          uri={userData.profilePicture}
          showEditButton={true}
        />

        <Input
          id="firstName"
          label="First name"
          icon="user-o"
          iconPack={FontAwesome}
          onInputChanged={inputChangedHandler}
          autoCapitalize="none"
          errorText={formState.inputValidities['firstName']}
          initialValue={userData.firstName}
        />
        <Input
          id="lastName"
          label="Last name"
          icon="user-o"
          iconPack={FontAwesome}
          onInputChanged={inputChangedHandler}
          autoCapitalize="none"
          errorText={formState.inputValidities['lastName']}
          initialValue={userData.lastName}
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
          initialValue={userData.email}
        />

        <Input
          id="about"
          label="About"
          icon="user-o"
          iconPack={FontAwesome}
          onInputChanged={inputChangedHandler}
          autoCapitalize="none"
          errorText={formState.inputValidities['about']}
          initialValue={userData.about}
        />

        <View style={{ marginTop: 20 }}>
          {showSuccessMessage && <Text>Saved!</Text>}

          {isLoading ? (
            <ActivityIndicator
              size={'small'}
              color={colorsTheme.primary}
              style={{ marginTop: 10 }}
            />
          ) : (
            hasChanges() && (
              <SubmitButton
                title="Save"
                onPress={saveHandler}
                style={{ marginTop: 20 }}
                disabled={!formState.formIsValid}
              />
            )
          )}
        </View>

        <View></View>
        <SettingsMenuToggle navigation={props.navigation} />

        <View style={{ marginTop: 30 }}>
          <SettingsStarMessages navigation={props.navigation} />
        </View>

        <SubmitButton
          title="Logout"
          onPress={() => dispatch(userLogout())}
          style={{ marginTop: 20 }}
          color={colorsTheme.red}
        />
      </ScrollView>
    </PageContainer>
  )
}
const stylesFor = (colorsTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: colorsTheme.trickScreenBackground,
    },
    formContainer: {
      alignItems: 'center',
      backgroundColor: colorsTheme.trickScreenBackground,
    },
    pageContainer: {
      backgroundColor: colorsTheme.trickScreenBackground,
    },
  })

export default SettingsScreen
