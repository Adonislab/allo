
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
import Scooteur from '../../../../../assets/scooteur.gif';
import CustomButton from '../../../../composants/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';



const AttenteCommande = () => {
    const { height } = useWindowDimensions();

    const [paye, setpaye] = useState('');

    const navigation = useNavigation();
    const onPressRetour = () => {
        navigation.navigate('Services');
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
                text='Je paye mon service par voie électronique'
                onPress={onPressPayement}
                bgColor='#ff6d00'
                fgColor='white'
            />

            <View>
                <Text style={styles.title2}>Le sens de l'engagement, Avec vous, chaque jour
                </Text>
            </View>



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
export default AttenteCommande; 
