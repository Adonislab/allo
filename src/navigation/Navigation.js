/*Importation des librairies principales */
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';


/*Importation des écrans de la tabar */
import Office from '../vues/Office/Office';
import Setting from '../vues/Setting/Setting';
import Historique from '../vues/Historique/Historique';
import NotificationUtilisateur from '../vues/NotificationUtilisateur';
import ProfilUtilisateur from '../vues/ProfilUtilisateur';

/*Importation des écrans qui naviguent dans la tabar au niveau de la livraion */
import DebutLivraison from '../vues/Office/Allolivreur/DebutLivraison';
import SelectionLieuDepart from '../vues/Office/Allolivreur/SelectionLieuDepart';
import SelectionLieuRetrait from '../vues/Office/Allolivreur/SelectionLieuArrivee';
import Details from '../vues/Office/Allolivreur/Details';
import Attentelivraison from '../vues/Office/Allolivreur/AttenteClient';
import PayementLivraison  from '../vues/Office/Allolivreur/PaiementLivreur_Client';

/*Importation des écrans qui naviguent dans la tabar niveau de aide */
import AlloGroup from '../vues/AlloGroup';
import Apropos from '../vues/Aide/Apropos';
import Autreadressedelivraison from '../vues/Aide/Autreadedressedelivraison';
import Inscription from '../vues/Aide/Inscription';
import Paiements from '../vues/Aide/Paiements';
import Parrain from '../vues/Aide/Parrain';
import Platsendommages from '../vues/Aide/Platsendommages';
import Pourquoi from '../vues/Aide/Pourquoi';
import Receptiondecolis from '../vues/Aide/Receptiondecolis';
import Reserver from '../vues/Aide/Reserver';
import Resolutionretard from '../vues/Aide/Resolutionretard';
import Retardconsiderable from '../vues/Aide/Retardconsiderable';
import Receptionplatdifferent from '../vues/Aide/Receptionplatdifferent';

/*Importation des écrans qui naviguent dans la tabar niveau de food */
import Food from '../vues/Office/AlloFood/Food';
import CartScren from '../vues/Office/AlloFood/CartScreen';
import Commande from '../vues/Office/AlloFood/Commande';
import CartScreen from '../vues/Office/AlloFood/CartScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function StackScreen() {
	return (
		<Stack.Navigator >

			<Stack.Screen options={{ headerShown: false }} name='Services' component={Office} />
			
			<Stack.Screen name='Historique' component={Historique} options={{ headerShown: false}} />
						
			<Stack.Screen name='Setting' component={Setting} options={{headerShown: false}} />

			<Stack.Screen name='NotificationUtilisateur' component={NotificationUtilisateur} options={{headerShown: false}} />
				
			<Stack.Screen name='ProfilUtilisateur' component={ProfilUtilisateur} options={{headerShown: false}} />

			<Stack.Screen name='DebutLivraison' component={DebutLivraison} options={{headerShown: false }} />

			<Stack.Screen name='SelectionLieuDepart' component={SelectionLieuDepart} options={{headerShown: false }} />
				
			<Stack.Screen name='SelectionLieuRetrait' options={{ headerShown: false }}  component={SelectionLieuRetrait} />
			
			<Stack.Screen name='Details' options={{ headerShown: false }}  component={Details} />
			
			<Stack.Screen name='Attentelivraison' options={{ headerShown: false }}  component={Attentelivraison} />

			<Stack.Screen name='PayementLivraison' options={{ headerShown: false }}  component={PayementLivraison} />

			<Stack.Screen name='AlloGroup' component={AlloGroup} options={{ headerShown: false}} />

			<Stack.Screen name='Apropos' component={Apropos} options={{ headerShown: false}} />

			<Stack.Screen name='Autreadressedelivraison' component={Autreadressedelivraison} options={{ headerShown: false}} />

			<Stack.Screen name='InscriptionFAQ' component={Inscription} options={{ headerShown: false}} />

			<Stack.Screen name='Typesdepaiement' component={Paiements} options={{ headerShown: false}} />

			<Stack.Screen name='Parrain' component={Parrain} options={{ headerShown: false}} />

			<Stack.Screen name='Platsendommages' component={Platsendommages} options={{ headerShown: false}} />

			<Stack.Screen name='Pourquoi' component={Pourquoi} options={{ headerShown: false}} />

			<Stack.Screen name='Receptiondecolis' component={Receptiondecolis} options={{ headerShown: false}} />

			<Stack.Screen name='Receptionplatdifferent' component={Receptionplatdifferent} options={{ headerShown: false}} />

			<Stack.Screen name='Reserver' component={Reserver} options={{ headerShown: false}} />

			<Stack.Screen name='Resolutionretard' component={Resolutionretard} options={{ headerShown: false}} />

			<Stack.Screen name='Retardconsiderable' component={Retardconsiderable} options={{ headerShown: false}} />

			<Stack.Screen name='Food' component={Food} options={{ headerShown: false}} />

			<Stack.Screen name='CartScreen' component={CartScreen} options={{ headerShown: false}} />

			<Stack.Screen name='Commande' component={Commande} options={{ headerShown: false}} />

		
		</Stack.Navigator>
	)

}






const NavigationTab = () => {

	return (
		<NavigationContainer independent={true} style={{}}>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Services') {
							iconName = focused ? 'earth-outline' : 'ion-ios-apps';
						}
						else if (route.name === 'Parametres') {
							iconName = 'ios-options-outline';
						}
						else if (route.name === 'Activites') {
							iconName = 'ion-ios-analytics';
						}
						
						else if (route.name === 'NotificationUtilisateur') {
							iconName = 'ion-md-notifications';
						}

						else if (route.name === 'ProfilUtilisateur') {
							iconName = 'ion-md-contact';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: '#ff6d00',
					tabBarInactiveTintColor: '#07528a',
					headerStyle: { backgroundColor: 'orange' },
				})}>

				<Tab.Screen name='Services' component={StackScreen} />
				<Tab.Screen name='Parametres' component={Setting} />
				<Tab.Screen name='Activites' component={Historique} />
				<Tab.Screen name='NotificationUtilisateur' component={NotificationUtilisateur} />
				<Tab.Screen name='ProfilUtilisateur' component={ProfilUtilisateur} />


			</Tab.Navigator>
		</NavigationContainer>

	);


}

export default NavigationTab;
