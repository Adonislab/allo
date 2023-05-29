import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from 'react-native';

import UploadImage from '../../../../composants/UploadImage/UploadImage';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../../composants/CustomInput/CustomInput';
import CustomButton from '../../../../composants/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';


export default function InscriptionFastFood() {
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const navigation = useNavigation();
    
    const onPressInscriptionGerant = async () => {
		navigation.navigate('DashboardGerant');
	};
    return (
        <View style={styles.container}>



            <View>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('../../../../../assets/Logo.png')}
                        resizeMode='cover'
                        style={{ width: '60%', height: 150 }}
                    />
                </View>
                <View style={{ backgroundColor: '#0A5089', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Entreprise</Text>
                </View>

                <CustomInput
                    name='nom'
                    control={control}
                    placeholder={"Nom de L'entreprise "}
                    rules={{
                        required: 'Obligatoire',
                    }}
                />

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Numéro de téléphone</Text>
                </View>

                <CustomInput
                    name='numero'
                    control={control}
                    keyboardType={'numeric'}
                    placeholder={'Numéro de téléphone'}
                    rules={{
                        required: 'Obligatoire',
                        minLenght: {
                            value: 8,
                            message: 'Votre numéro doit etre de huit  caractère au moins',
                        },
                    }}
                />

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Ajoutez un logo</Text>
                </View>
                <UploadImage />

                <CustomButton
                    onPress={handleSubmit(onPressInscriptionGerant)}
                    text="Je veux être un Fastfood"
                    bgColor="#ff6d00"
                    fgColor='white'
                />
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    /* Other styles hidden to keep the example brief... */
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 5,
        backgroundColor: 'white'
    },
});

