import React from 'react'
import { Dimensions } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
	latitude: 6.3561,
	longitude: 2.3833,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
};

const MapViewComposant = () => {
  return (
    <MapView
			style={styles.map}
			provider={PROVIDER_GOOGLE}
			initialRegion={INITIAL_POSITION}
	/>
  )
}

const styles = StyleSheet.create({
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
});

export default MapViewComposant