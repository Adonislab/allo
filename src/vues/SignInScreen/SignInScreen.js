
import React, { useState } from 'react';
import { View, Image, 
	StyleSheet, useWindowDimensions, 
	ScrollView, 
	Alert } from 'react-native';
import Logo from '../../../assets/Logo.png';
import CustomInput from '../../composants/CustomInput'; 
import CustomButton from '../../composants/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import { Auth } from 'aws-amplify';



const SignInScreen = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const {height} = useWindowDimensions();
	const navigation = useNavigation();
	const [loading,setLoading ] = useState(false);
	const {control,
			handleSubmit, 
			formState: {errors}
	} = useForm();
	
	

	const onSignInPressed = async (data) => { 
		if (loading) {
			return;
		}
		setLoading(true);
		try {
			const response = await Auth.signIn(data.username, data.password);
			console.log(response)
			navigation.navigate('OfficeNavigation')
		} catch(e) {
			Alert.alert('Oops', e.message);
		}
		setLoading(false);		 
		 };

	const onSignUpPressed = () => { 
		navigation.navigate('Inscription') };

	const onForgetPasswordPressed = () =>  {
		navigation.navigate('ForgotPassword') 
						};

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style = {styles.root}>
				<Image 							
						source={Logo}
						style={[styles.logo, {height:height * 0.3}]}
 						resizeMode='contain' 
				/>	

				<CustomInput 
					name='username'
					placeholder={"Nom d'utilisteur"} 
					control={control}
					rules = {{
						required : 'Votre identifant est obligatoire',
						}}
				/>

				<CustomInput 
					name='password'
					placeholder={'Votre mot de passe'} 
					control={control}
					secureTextEntry
					rules = {{
						required : 'Votre mot de passe est obligatoire',
						minLenght : {value :8, message : 'Votre mot de passe doit être de 8 chiffres au moins'},
						}}
				/>
			
				<CustomButton 
					text= { loading ? "Chargement ..." : "Connexion"} 
					onPress={handleSubmit(onSignInPressed)}
					bgColor='#ff6d00'
					fgColor='white' 
				/>

				<CustomButton 
					text='Mot de passe oublié' 
					onPress = {onForgetPasswordPressed} 
					type='TERTIARY'	
				/>

				

				<CustomButton 
					text = "Je n'ai pas encore de compte"
					onPress = {onSignUpPressed}
					type = 'TERTIARY'
				/>
		
 
			</View>
		</ScrollView>
		)};


const styles = StyleSheet.create({
	root: {
		flex:1, 
		alignItems: 'center',
		justifyContent:'center',
		margin:10,
		} ,

	logo: {
		width: '70%',
		maxWidth: 300,
		maxHeight: 200,
				 },
					});
			

export default SignInScreen;  
