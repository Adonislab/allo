/* Importation des librairies */
import React, { useState, useEffect } from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Auth, Hub } from '@aws-amplify/core';


/* Importation des vues de gestion authentification et de mot de passe*/
import Home from '../vues/Home';
import SignInScreen from '../vues/SignInScreen';
import SignUpScreen from '../vues/SignUpScreen';
import ConfirmEmailScreen from '../vues/ConfirmEmailScreen';
import ForgotPasswordScreen from '../vues/ForgotPasswordScreen';
import NewPasswordScreen from  '../vues/NewPasswordScreen';

/* Importation des vues de gestion du projet */
import NavigationOffice from './Navigation';

/* Définition d'objet de gestion de navigation entre page */
const Stack = createNativeStackNavigator();

const index = () => {

    /* Définition des variables états pour identification des Users */
    const [user, setUser] = useState(undefined);

    /* Définition de fonction pour la présence de l'utilisateur */
	const checkUser = async () => {
		try {
			const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
			setUser(authUser);
		} catch (e) {
			setUser(null);
		}	
	};
	useEffect(() => {
		checkUser();
	}, []);

    /* Définition de la vérification de connexion ou déconnexion */
	useEffect(() => {
		const listener = data => {
			if (data.payload.event === 'signIn' || data.payload.event == 'signOut')
			{
				checkUser();
			}
		};
		Hub.listen('auth', listener);
		return () => Hub.remove('auth', listener);
	}, []);

	if (user === undefined) {
		return (
			<View style = {{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<ActivityIndicator/>
			</View>
		)
	}

  return (
    <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>

        
        { user ? (
					
					<Stack.Screen name='Home' component={Home}/>
					
					
				) : (
				<>	
					<Stack.Screen name='Home' component={Home}/>
					<Stack.Screen name='Connexion' component={SignInScreen}/>			
					<Stack.Screen name='Inscription' component={SignUpScreen}/>
					<Stack.Screen name='Confirmation' component={ConfirmEmailScreen}/>
					<Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
					<Stack.Screen name='NewPassword' component={NewPasswordScreen}/>
					<Stack.Screen name='OfficeNavigation' component={NavigationOffice}/>
				</>
		)}
				




        </Stack.Navigator>		
	</NavigationContainer>
  )
}

export default index