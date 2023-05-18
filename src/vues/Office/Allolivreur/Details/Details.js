import React, { useState } from 'react';
import {
  View, Text,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import MapViewCustomiser from '../../../../composants/MapView';
import CustomButton from '../../../../composants/CustomButton/CustomButton'
import CustomInput from '../../../../composants/CustomInput/CustomInput';
import {useForm} from 'react-hook-form';


const Details = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, formState:{errors}, watch} = useForm();
  const [titre, setTitre] = useState('');
  const [message, setMessage] = useState('');
  const onPressTerminerLivraison = async (value) => {
    try {
      await AsyncStorage.multiSet([
        ['titre', titre],
        ['message', message]
      ]);
      console.log('done')
      navigation.navigate("Attentelivraison");
    } catch (e) {
      console.error("Erreur lors de la sauvegarde des données :", e);
    }
  };

  return (
      <View>

        <MapViewCustomiser />
		    

      <View style={styles.root}>
    
        <Text style={{ color: 'orange' }}>Titre de la livraison</Text>
          <View>
            
            <CustomInput
					    name='titre'
					    control={control} 
					    placeholder={'ex: Livraison de John'}
					    rules={{
						    required:'Donnez un titre pour rendre le tracage facile',  	
					    }} 
				    />
          </View>

          <View style={{ marginTop: 20, marginBottom: 20 }}>
              <Text style={{ color: 'orange' }}>Détails de la livraison</Text>
                <CustomInput
					        name='message'
					        control={control} 
					        placeholder={'ex: Poulet, chaussures, Coliers...'}
					        rules={{
						        required:'Nous vous invitons à donner ces détails pour la sécurité la marchandisse',  	
					        }} 
				        />
            
          </View>

          <CustomButton
            text='Terminez le processus'
            fgColor='white'
            bgColor='orange'
            onPress={handleSubmit(onPressTerminerLivraison)} />
      </View>

      </View>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
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
  Titrelivraison: {
    marginTop: 20,

  },
});
export default Details;