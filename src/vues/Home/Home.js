import * as React from 'react';
import {View, StyleSheet,Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';
 

const Home = () => {

	const navigation = useNavigation();

	setTimeout(() => {
		navigation.navigate('Connexion'); 
	}, 5000)

	return (
		<View style={styles.root}>
		
			<Text style={styles.text}>
				La gestion des services de livraison et l'achat 
				en un clic n'a jamais été aussi facile. Allo Group 
				le sens de l'engagement.
			</Text>
			
		</View>
		
)};

const styles= StyleSheet.create({
	root: {
		flex:1,
		alignItems:'center',
		padding:20,
		justifyContent:'center',
		backgroundColor:'orange',
		},
	text :{
		fontSize:25,
		color:'white',
		fontWeight:'bold',
		textAlign:'justify',
	},
});
export default Home; 
