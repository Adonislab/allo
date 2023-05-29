import { View, Text , StyleSheet} from 'react-native'
import * as React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapViewCustomiser from '../../../../composants/MapView/MapViewCustomiser';
import GooglePlace  from '../../../../composants/GooglePlaces/GooglePlace';
import CustomButton from '../../../../composants/CustomButton';
import CustomInput from '../../../../composants/CustomInput';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';


const SelectionLieuDepart = () => {

    const {control, handleSubmit, formState:{errors}, watch} = useForm();

    const navigation = useNavigation();

    const onPressLieuDepart = async (data) => {
        try {
          // Enregistrement des informations dans AsyncStorage
          await AsyncStorage.setItem('lieuDepart', JSON.stringify(data));
          console.log(lieuDepart);
          // Naviguer vers la prochaine étape
          navigation.navigate('SelectionLieuRetrait');
        } catch (error) {
          console.log('Erreur lors de l\'enregistrement des données :', error);
        }
      };
      

    const handleLocationSelect = async (locationData) => {
        try {
            // Enregistrement des informations dans AsyncStorage
            await AsyncStorage.setItem('locationData', JSON.stringify(locationData));
            console.log(locationData);
          } catch (error) {
            console.log('Erreur lors de l\'enregistrement des données géo :', error);
          }
    };

  return (
    <View>
        
        < MapViewCustomiser />
        

        <View style={styles.place}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                Où chercher le livrable ?
            </Text>

            <View style={styles.details}>

                < GooglePlace 
                    placeholder = {'Entrez le lieu de départ'} 
                    onLocationSelect={handleLocationSelect}
                />
                <Text style={{ fontSize: 20, color: 'orange' }}>
                        Personne a contacter au
                        lieu de récupération
                </Text>

                <CustomInput
                    name='IdentifiantDepart'
                    control={control} 
                    placeholder={'Prénom de ce dernier'}
                    rules={{
                            required:'Aidez le livreur en donnant de votre contact',  	
                    }}
                /> 

                <CustomInput
                    name='NumeroDepart'
                    control={control} 
                    placeholder={'Numéro de téléphone'}
                    keyboardType={'numeric'} 
                    rules={{
                        required:'Aidez le livreur en donnant le numéro à contacter',  	
                        minLenght: {
                                value:8,
                                message:'Nous vous prions de revoir le numéro',
                                },
                        }}
                /> 

                <CustomButton
                        text='Confirmation du lieu de récupération'
                        onPress={handleSubmit(onPressLieuDepart)}
                        bgColor='orange'
                        fgColor='white'
                />
            </View>
        </View>       
    </View>  
  )
}

const styles = StyleSheet.create({
	place: {
		position: 'absolute',
		width: "90%",
		backgroundColor: "white",
        shadowColor: "black",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
		padding: 8,
		borderRadius: 8,
		top: 50,
		margin: 20,
	},
	details: {
		marginTop: 1,
	}
});
export default SelectionLieuDepart