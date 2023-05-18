import * as React from 'react';
import {View, Text, 
	StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
	
	const navigation = useNavigation();
	const onPressFunctionRecharger = () => {
		navigation.navigate('FedaPayCheckout')	
		console.log('checkout portefeuille')
	};

	const [user, setUser] = React.useState(null); // état pour stocker les informations de l'utilisateur

	React.useEffect(() => {
		const getCurrentUser = async () => {
			try {
				const userInfo = await Auth.currentAuthenticatedUser();
				setUser(userInfo);
			} catch (error) {
				console.log('Erreur:', error);
			}
		};

		getCurrentUser();
	}, []); 
	const onPressLivreur = () => {
		navigation.navigate('InscriptionLivreurNew');
	};
	const onPressFastFood = () => {
		navigation.navigate('InscriptionGerant');
	};
	const onPressFoire = () => {
		navigation.navigate('Presentation')
	};

	return (
	<View style={styles.root}>	
	<View style={styles.profil}>	
		<Image 
			source={require('../../../assets/pama.png')}
			style={styles.profil}
			resizeMode="contain"
		/>
	</View>	
	
	
	<Pressable style={{paddingBottom:20, paddingTop:20, alignItems:'center'}}
		onPress={onPressFunctionRecharger}>
  		<Text style={{fontWeight:'bold', color:'blue'}}>Rechargez mon portefeuille</Text>
	</Pressable>
	
	<View style={{alignItems:'center'}}>
		<Text style={{fontSize:15, fontWeight:'bold', 
		paddingBottom:20, color:'orange'}}>
			😊 BON PLAN DJIGO 👇🏽
		</Text>

		<TouchableOpacity onPress={onPressLivreur}>
			<Text style={{fontSize:15, 
			paddingBottom:20}}>
				Quoi livrez aujourd'hui ?
			</Text>
		</TouchableOpacity>

		<TouchableOpacity onPress={onPressFastFood}>
			<Text style={{fontSize:15, 
			paddingBottom:20}}>
				Postez sa bouffe 😊
			</Text>
		</TouchableOpacity>

		<TouchableOpacity onPress={onPressFoire}>
			<Text style={{fontSize:15, 
			paddingBottom:20}}>
				Foire aux questions
			</Text>
		</TouchableOpacity>

	</View>
	</View>	
)};		

const styles= StyleSheet.create(
{
	profil:{
		alignItems:'center',
		backgroundColor:'white',
		borderRadius:10,
		width:'100%',
		height: 150
	},
	root:{
		marginRight:10,
		marginLeft:10,
		
	},

})



export default Setting;
