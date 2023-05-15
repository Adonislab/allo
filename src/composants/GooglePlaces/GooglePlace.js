import * as React from 'react'
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GOOGLE_API_KEY } from "./environements";
import {StyleSheet} from 'react-native';


const GooglePlace = (placeholder, namestokagedescription, namestokagecoordonne ) => {
  return (
    <GooglePlacesAutocomplete
				style={ styles = styles.input }
				placeholder = {placeholder}
				onPress={async (details = null) => {
					console.log(details.description);
					try {
                        await AsyncStorage.multiSet([
                            [{namestokagedescription}, details.description],
                            [{namestokagecoordonne}, details.NumeroArrivee]
                          ]);
						console.log('done')

					} catch (error) {
						console.error("Erreur lors de la sauvegarde des données :", error);
					}
				}} 
				query={{
					key: GOOGLE_API_KEY,
					language: 'fr',
					components: 'country:bj',
				}}

	/>
  )
}

const styles = StyleSheet.create({
    input: {
		borderColor: "orange",
		borderWidth: 2,
	},
});
export default GooglePlace