import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity, Alert } from 'react-native';
import Scooteur from '../../../../../assets/scooteur.gif';
import CustomButton from '../../../../composants/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';



const AttenteClient = () => {
    const { height } = useWindowDimensions();

    const [paye, setpaye] = useState('');

    const navigation = useNavigation();
    const onPressEspece = () => {
        // navigation.navigate('Services');
        Alert('Vous avez effectué un paiement en espèce de {}F')
    };

    const onPressPayement = () => {
        navigation.navigate('PayementLivraison');
    };


    return (
        <View style={styles.root}>
            <Image
                source={Scooteur}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode='contain'
            />

            <Text style={styles.title}>
                Une notification vous sera envoyée dans les plus brefs délais.
            </Text>




            <CustomButton
                text='Je paye en Espèces'
                onPress={onPressEspece}
                bgColor='#ff6d00'
                fgColor='white'
            />

            <CustomButton
                text='Je procède au paiement électronique'
                onPress={onPressPayement}
                bgColor='#ff6d00'
                fgColor='white'
            />

            



        </View>
    )
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: '100%',
        height: '100%',


    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center'

    },
    title2: {
        fontSize: 20,
        margin: 5,
        textAlign: 'center'
    },


});
export default AttenteClient; 
