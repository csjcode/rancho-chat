import "react-native-gesture-handler";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { LogBox, StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { persistor, store } from "./store/store";
import { useCallback, useEffect, useState } from "react";

import AppNavigator from "./navigation/AppNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MenuProvider } from "react-native-popup-menu";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { logger } from "./utils/logging/console";
import { testMode } from "./utils/testMode";

LogBox.ignoreLogs(["AsyncStorage has been extracted"]);
testMode.clearLocalStorage && AsyncStorage.clear(); // to log out

SplashScreen.preventAutoHideAsync();

export default function App() {
  logger("component", "App");

  const [appIsLoaded, setAppIsLoaded] = useState(false);
  logger("string", "appIsLoaded", appIsLoaded);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts/Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      } catch (error) {
        console.log.error();
      } finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <SafeAreaProvider style={styles.container} onLayout={onLayout}>
          <MenuProvider>
            <AppNavigator />
          </MenuProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  label: {
    color: "black",
    fontSize: 18,
    fontFamily: "regular",
  },
});
