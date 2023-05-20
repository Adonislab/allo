import * as React from 'react';
import {View, Text, 
	StyleSheet, Image, Pressable, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';


const Setting = () => {
	
	const navigation = useNavigation();
	const onPressFunctionProfil = () => {
		navigation.navigate('ProfilUtilisateur')	
		
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
	const onPressFunctionRecharger = () => {
		navigation.navigate('FedaCheckout')
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
	
	
	
	
	<View style={{alignItems:'center'}}>
	<Pressable style={{ paddingTop:20, alignItems:'center'}}
		onPress={onPressFunctionProfil}>
  		<Text style={{ color:'orange'}}>Mon profil</Text>
	</Pressable>
		
	<Pressable style={{paddingBottom:20, paddingTop:20, alignItems:'center'}}
		onPress={onPressFunctionRecharger}>
  		<Text style={{ color:'orange'}}>Rechargez mon portefeuille</Text>
	</Pressable>

		<TouchableOpacity onPress={onPressLivreur}>
			<Text style={{fontSize:15, 
			paddingBottom:20, color:'orange'}}>
				Statut Livreur
			</Text>
		</TouchableOpacity>

		<TouchableOpacity onPress={onPressFastFood}>
			<Text style={{fontSize:15, 
			paddingBottom:20, color:'orange'}}>
				Statut Restaurant
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
