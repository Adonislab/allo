import React, { useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapViewCustomiser from '../../../composants/MapView';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../../composants/CustomButton';
import CustomInput from '../../../composants/CustomInput';
import {useForm} from 'react-hook-form';


const Commande = () => {
	const navigation = useNavigation();
	const {control, handleSubmit, formState:{errors}, watch} = useForm();
	const [IdentifiantArrivee, setIdentifiantArrivee] = useState('');
	const [NumeroArrivee, setNumeroArrivee] = useState('');

	const onPressLieuCommande = () => {

		navigation.navigate('AttenteClient');
	  };

return (
	<View>
		<MapViewCustomiser />

		<View style={styles.place}>
			<Text style={{ fontSize: 25, fontWeight: 'bold' }}>
				Où livrez votre commande ?
			</Text>

			< GooglePlace 
                    placeholder = {'Livraison'} 
                    namestokagedescription = {'lieu_livraison_nourriture'}
                    namestokagecoordonne = {'Coordonne_lieu_livraison_nourriture'} 
            />
			
			<View style={styles.details}>

				<Text style={{ fontSize: 20, color: 'orange' }}>
					Personne a contacté au
					lieu de livraison
				</Text>
				<CustomInput
					name='IdentifiantArrivee'
					control={control} 
					placeholder={'Prénom'}
					
					rules = {{
						required:'Aidez le livreur en donnant le prénom  de la personne à contacter',
					}}
				/> 
				<CustomInput 
					name='NumeroArrivee'
					control={control}
					placeholder={'Numéro de téléphone'}
					keyboardType={'numeric'}
					rules = {{
						required:'Votre numéro facilitera le contact',
						minLenght: {
							value:8,
							message:'Aidez le livreur en donnant le numéro à contacter',
							},
					}}
				/>

				<CustomButton 
					text = "Passez la commande"
					onPress = {handleSubmit(onPressLieuCommande)}
					fgColor='white'
					bgColor='orange'
				/> 
			</View>
		</View>


	</View>
)};

const styles = StyleSheet.create({
	place: {
		position: 'absolute',
		width: "90%",
		backgroundColor: "white",
		shadowColor: "black",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 4,
		padding: 8,
		borderRadius: 8,
		top: 50,
		margin: 20,
	},
	details: {
		marginTop: 1,

	}
});
export default Commande;