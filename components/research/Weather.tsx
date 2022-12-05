import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const OpenWeatherApiComponent = () => {
  const [currentWeather, setCurrentWeather] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${your_api_key_here}`
      )
      .then((response) => {
        setCurrentWeather(response.data);
      });
  }, []);

  return (
    <View style={styles.container}>
      {currentWeather ? (
        <View>
          <Text style={styles.subtitle}>{currentWeather.weather[0].main}</Text>
          <Text style={styles.subtitle}>{currentWeather.main.temp}</Text>
        </View>
      ) : (
        <Text style={styles.title}>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default OpenWeatherApiComponent;

// This code is a React Native Expo component written in Typescript that uses the Open Weather API to fetch the current weather. It uses the axios library to make an HTTP request to the Open Weather API. It uses the useState and useEffect hooks to set the currentWeather state and make the API call, respectively. It then displays the currentWeather data as a View with two Text components.
