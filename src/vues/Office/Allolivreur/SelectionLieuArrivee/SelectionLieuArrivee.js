
import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from '../../../../composants/MapView';
import GooglePlace  from '../../../../composants/GooglePlaces';
import CustomButton from '../../../../composants/CustomButton';
import CustomInput from '../../../../composants/CustomInput';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SelectionLieuArrivee = () => {
    const {control, handleSubmit, formState:{errors}, watch} = useForm();

    const navigation = useNavigation();

    const onPressLieuArrivee = () =>{
        navigation.navigate('Details');
    }

  return (
    <View>        
        < MapView />
        <View style={styles.place}>
            <Text style={{ fontSize: 25 }}>
                Où livrez-vous ?
            </Text>

            <View style={styles.details}>

                < GooglePlace 
                    placeholder = {'Entrez le lieu de livraison'} 
                    namestokagedescription = {'LieudeArriveeLivrable'}
                    namestokagecoordonne = {'CoordonneLieuArriveeLivrable'} 
                />
                <Text style={{ color: 'orange' }}>
                        Personne a contacter au
                        lieu d'arrivée
                </Text>

                <CustomInput
                    name='IdentifiantArrivee'
                    control={control} 
                    placeholder={'Prénom de ce dernier'}
                    rules={{
                            required:'Aidez le livreur en donnant de votre contact',  	
                    }}
                /> 

                <CustomInput
                    name='NumeroArrivee'
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
                        onPress={handleSubmit(onPressLieuArrivee)}
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

export default SelectionLieuArrivee