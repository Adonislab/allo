import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import UploadImage from '../../composants/UploadImage';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../composants/CustomInput';
import CustomButton from '../../composants/CustomButton';
import { useForm } from 'react-hook-form';


export default function ModifierInfos() {
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const navigation = useNavigation();
    const onPressProfil = () => {
        navigation.navigate('ProfilUtilisateur');
    };
    return (
        <View style={styles.container}>

        <ScrollView>

            <View>
                <View style={{ alignItems: 'center', paddingBottom:20 }}>
                    <Text style={{  fontWeight:'bold', fontSize: 20 }}>Modifier mes informations</Text>
                </View>

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>NOM</Text>
                </View>

                <CustomInput
                    name='nom'
                    control={control}
                    placeholder={'Nom de famille'}
                    rules={{
                        required: 'Obligatoire',
                    }}
                />

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>PRENOM</Text>
                </View>

                <CustomInput
                    name='prenom'
                    control={control}
                    placeholder={'Votre prénom'}
                    rules={{
                        required: 'Obligatoire',
                    }}
                />

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>NUMERO DE TELEPHONE</Text>
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


                <UploadImage />

                <CustomButton
                    onPress={handleSubmit(onPressProfil)}
                    text="Mettre à jour mes informations"
                    bgColor="#ff6d00"
                    fgColor='white'
                />


            </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    /* Other styles hidden to keep the example brief... */

    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 5,
        backgroundColor: 'white',
        marginTop:50
    },
    button: {
        backgroundColor: 'white',
        padding: 5,
        marginTop: 10,
        borderRadius: 10
    },
    buttonText: {
        color: '#ff6d00',
        textAlign: 'center',
        fontSize: 18
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 28,
    }
});

