import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Total from "./Total";

export default function App() {
  const [numSandwiches, setNumSandwiches] = useState(0);
  const [numWater, setNumWater] = useState(0);
  const [numMayo, setNumMayo] = useState(0);

  const sandwichPrice = 5;

  const addSandwich = () => {
    setNumSandwiches((numSandwiches) => numSandwiches + 1);
  };

  const addWater = () => {
    setNumWater((numWater) => numWater + 1);
  };

  const addMayo = () => {
    setNumMayo((numMayo) => numMayo + 1);
  };

  const getTotal = useCallback(() => {
    return numSandwiches * sandwichPrice;
  }, [numSandwiches]);

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text style={styles.label}>{"Sandwiches: " + numSandwiches}</Text>
        <Button title="Add sandwich" onPress={addSandwich} />

        <Text style={styles.label}>{"Water: " + numWater}</Text>
        <Button title="Add water" onPress={addWater} />

        <Text style={styles.label}>{"Mayo: " + numMayo}</Text>
        <Button title="Add Mayo" onPress={addMayo}></Button>

        <Total getTotal={getTotal} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    color: "black",
    fontSize: 18,
  },
});
