import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PageContainer from "../../../components/PageContainer";
import SignInForm from "../../../components/SignInForm-old";
import SignUpForm from "../../../components/SignUpForm";
import logo from "../../../assets/images/logo.png";
import getColors from "../../../constants/colors/getColors";
const colorsTheme = getColors();

const AuthScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "height" : undefined}
            keyboardVerticalOffset={100}
          >
            <View>
              <Image source={logo} resizeMode="contain" />
            </View>

            {isSignUp ? <SignUpForm /> : <SignInForm />}

            <TouchableOpacity
              onPress={() => setIsSignUp((prevState) => !prevState)}
            >
              <Text>{`Switch to ${isSignUp ? "sign in" : "sign up"}`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AuthScreen;
