import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Button, ScrollView } from 'react-native';
import UploadImage from '../../../../composants/UploadImage/UploadImage';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../../composants/CustomInput/CustomInput';
import CustomButton from '../../../../composants/CustomButton/CustomButton';
import { useForm } from 'react-hook-form';

export default function InscriptionFood() {
    const { control, handleSubmit, formState: { errors }, watch } = useForm();
    const navigation = useNavigation();
    const onPressDashboard = async () => {
		navigation.navigate('DashboardGerant');
	};
    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'center' }}>
                <Image
                    source={require('../../../../../assets/Logo.png')}
                    resizeMode='cover'
                    style={{ width: '60%', height:150 }}
                />
            </View>

            <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Titre du produit</Text>
            </View>

                <CustomInput
                    name='nom'
                    control={control}
                    placeholder={'Titre du produit'}
                    rules={{
                        required: "Obligatoire",
                    }}
                />

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Prix unitaire du produit</Text>
                </View>

                <CustomInput
                    name='price'
                    control={control}
                    keyboardType='numeric'
                    placeholder={'Prix unitaire'}
                    rules={{
                        required: "Obligatoire",
                    }}
                />

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Description du produit</Text>
                </View>


                <CustomInput
                    name='description'
                    control={control}
                    multiline
                    placeholder={'Description du produit'}
                    rules={{
                        required: "Cela améliore votre notorité",
                    }}
                />

                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Categorie du produit</Text>
                </View>


                <CustomInput
                    name='categorie'
                    control={control}
                    multiline
                    placeholder={'Categorie du produit'}
                    rules={{
                        required: "Cela améliore votre notorité",
                    }}
                />


                <View style={{ backgroundColor: '#0A5089', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 18, color: 'white' }}>Ajoutez une image du produit</Text>
                </View>

                <UploadImage />



                <CustomButton
                    onPress={onPressDashboard}
                    text="Ajoutez mon produit"
                    bgColor="#ff6d00"
                    fgColor='white'

                />

        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        margin: 2,
        backgroundColor: 'white'
    },
});

