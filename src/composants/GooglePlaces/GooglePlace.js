import * as React from 'react';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GOOGLE_API_KEY } from "./environements";
import { StyleSheet } from 'react-native';

const GooglePlace = ({ placeholder, namestokagedescription, namestokagecoordonne }) => {
  return (
    <GooglePlacesAutocomplete
      style={styles.input}
      placeholder={placeholder}
      onPress={async (details = null) => {
        console.log(details.description);
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
