/*




import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Platform, TouchableOpacity, PermissionsAndroid } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
 
const App = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
 
  useEffect(() => {
    requestLocationPermission();
  }, []);
 
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message:
            "This app needs access to your location " +
            "so you can drop markers on the map",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            let region = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            };
            setLocation(region);
          },
          (error) => console.log(error.message),
          { enableHighAccuracy: true, timeout: 10000 }
        );
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
 
  const addMarker = (e) => {
    let region = {
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    setLocation(region);
    setCoordinates([...coordinates, e.nativeEvent.coordinate]);
  };
 
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={location}
        showsUserLocation={true}
        onLongPress={(e) => addMarker(e)}
      >
        {coordinates &&
          coordinates.map((coordinate) => (
            <Marker
              key={coordinate.latitude + coordinate.longitude}
              coordinate={coordinate}
            />
          ))}
      </MapView>
      <View style={styles.markerFixed}>
        <Text style={styles.markerText}>
          {coordinates.length > 0
            ? "Total Markers: " + coordinates.length
            : "Long press to drop a Marker"}
        </Text>
      </View>
    </View>
  );
};
 
export default App;
 
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerFixed: {
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 5,
    opacity: 0.7,
  },
  markerText: {
    fontSize: 16,
  },
});

import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const GoogleMaps = ({ region, markers, onRegionChange, onPressMarker }) => {
  return (
    <MapView
      initialRegion={region}
      region={region}
      onRegionChangeComplete={onRegionChange}
      style={{ flex: 1 }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          coordinate={marker.coordinate}
          onPress={() => onPressMarker(marker)}
        />
      ))}
    </MapView>
  );
};

export default GoogleMaps;
*/
