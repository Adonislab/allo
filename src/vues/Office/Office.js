import * as React from 'react';
import { View, Text, Image, StyleSheet, 
	SafeAreaView, TouchableOpacity, ScrollView,
	Dimensions, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';



const Office = () => {
	const navigation = useNavigation();

	const { height } = useWindowDimensions();
	const { width } = Dimensions.get("window");
	const hauteur = width * 100/ 60;

	const onPressLivreur = () => {
		navigation.navigate('DebutLivraison');
	};
	const onPressFood = () => {
		navigation.navigate('Food');
	};
	const onPressApropos = () => {
		navigation.navigate('Presentation');
	};



	const images = [
		{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' },
		{ uri: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80' },
		{ uri: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80' },
		{ uri: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80' },
		{ uri: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80' },
	  ];

	return (

		<SafeAreaView style={styles.root}>
			<ScrollView showsVerticalScrollIndicator={true} >
				<View style={styles.border}>
					<View style={{ flex: 0.5, paddingLeft: 10 }}>
						<Text style={{ fontSize: 15, color: 'white' }}>PorteFeuille</Text>
						<Text style={{ fontSize: 15, color: 'white' }}>0 F </Text>
					</View>
				</View>

				<View style={styles.services}>
					<ScrollView horizontal={true}>
						<TouchableOpacity onPress={onPressLivreur}>
							<View style={styles.borderservice}>
								<Image
									style={[styles.icone, { height: height * 0.1 }]}
									source={require('../../../assets/iconelivreur.png')}
									resizeMode="contain"
								/>
							</View>
							<View style={{ marginTop: 0, alignItems: 'center' }} >
								<Text style={{ fontSize: 12 }}>Livreur</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={onPressFood}>
							<View style={styles.borderservice}>
								<Image
									source={require('../../../assets/food.png')}
									style={[styles.icone, { height: height * 0.1 }]}
									resizeMode='contain'
								/>
							</View>
							<View style={{ marginTop: 0, alignItems: 'center' }} >
								<Text style={{ fontSize: 12 }}>Food</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={onPressApropos}>
							<View style={styles.borderservice}>
								<Image
									source={require('../../../assets/aide.png')}
									style={[styles.icone, { height: height * 0.1 }]}
									resizeMode='contain'
								/>
							</View>
							<View style={{ marginBottom: 0, alignItems: 'center' }} >
								<Text style={{ fontSize: 12 }}>Aide </Text>
							</View>
						</TouchableOpacity>
					</ScrollView>
				</View>

				<View style={{ alignItems: 'center', marginTop: 30 }}>
					<Text style={styles.promotion}>Nouveautés et Promotions</Text>
					<Carousel
						data={images}
						renderItem={({ item }) => (
							<Image source={item} style={{ width: '100%', height: 300 }} />
						)}
						sliderWidth={300}
						itemWidth={200}
						loop={true}
					/>				
				</View>

			</ScrollView>
		</SafeAreaView>
	)
};


const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
	},

	icone: {
		width: '100%',
		height: 100,
	},

	border: {
		backgroundColor: '#ccc',
		borderRadius: 10,
		height: '20%',
		marginTop:10,
	},
	margeborder: {
		marginRight: 30,
	},
	borderservice: {
		backgroundColor: '#fff',
		borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 4),
		width: Dimensions.get('window').width * 0.2,
		height: Dimensions.get('window').width * 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,

	},
	promotion: {
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: 20,
		color: '#ff6d00',
	},
	services: {
		paddingTop: 30,
	},


});


export default Office;  
