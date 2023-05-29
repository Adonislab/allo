import * as React from 'react';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "./environements";
import { StyleSheet } from 'react-native';

const GooglePlace = ({ placeholder, onLocationSelect }) => {
  return (
    <GooglePlacesAutocomplete
      style={styles.input}
      placeholder={placeholder}
      onPress={async (details = null) => {
        if (details) {
          const { description, geometry } = details;
          const { lat, lng } = geometry.location;
          onLocationSelect({ description, latitude: lat, longitude: lng });
        }
      }}
      query={{
        key: GOOGLE_API_KEY,
        language: 'fr',
        components: 'country:bj',
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "orange",
    borderWidth: 2,
  },
});

export default GooglePlace;
