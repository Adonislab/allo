import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Presentation = () => {
    const navigation = useNavigation();


    const onPressApropos = () => {
        navigation.navigate('Apropos');
    };
    const onPressPourquoi = () => {
        navigation.navigate('Pourquoi');
    };
    const onPressParrain = () => {
        navigation.navigate('Parrain');
    };
    const onPressReserver = () => {
        navigation.navigate('Reserver');
    };
    const onPressTypedepaiement = () => {
        navigation.navigate('Typesdepaiement');
    };
    const onPressRetardconsiderable = () => {
        navigation.navigate('Retardconsiderable');
    };
    const onPressReceptiondecolis = () => {
        navigation.navigate('Receptiondecolis');
    };
    const onPressAutreadressedelivraison = () => {
        navigation.navigate('Autreadressedelivraison');
    };
    const onPressPlatsendommages = () => {
        navigation.navigate('Platsendommages');
    };
    const onPressReceptionPlatdifferent = () => {
        navigation.navigate('Receptionplatdifferent');
    };
    const onPressInscriptionFAQ = () => {
        navigation.navigate('InscriptionFAQ');
    }

    return (
            <SafeAreaView>
                <View style={Styles.container}>
                    <Text style={{color:'orange', fontWeight:'bold', textAlign:'center'}}>
                        A propos de Allô Group
                    </Text>

                    <TouchableOpacity style={Styles.title} onPress={onPressApropos}>
                        <Text>C’est quoi Allô Group ? </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={Styles.title} onPress={onPressPourquoi}>
                        <Text>Pourquoi choisir Allô Group ? </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressParrain} style={Styles.title}>
                        <Text>Parrainer un nouvel utilisateur</Text>
                    </TouchableOpacity>
        
                    <TouchableOpacity onPress={onPressReserver} style={Styles.title}>
                        <Text >Réserver la course Allô Group</Text>
                    </TouchableOpacity>

                    {/* not working */}
                    <TouchableOpacity onPress={onPressInscriptionFAQ} style={Styles.title}>
                        <Text>Comment télécharger l’application Allogroup ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressTypedepaiement} style={Styles.title}>
                        <Text>Quels types de paiements acceptez-vous ?</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={onPressRetardconsiderable} style={Styles.title}>
                        <Text>Ma commande a été livré avec un retard considérable, que faire ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressReceptiondecolis} style={Styles.title}>
                        <Text>J’ai reçu une commande de colis différente de celle que j’ai commandée, que dois-je faire ?</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={onPressAutreadressedelivraison} style={Styles.title}>
                        <Text style={{fontWeight:'bold'}}>Je veux faire commander et faire livrer à une adresse différente que la mienne, que dois-je faire ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={onPressReceptionPlatdifferent} style={Styles.title}>
                        <Text style={{fontWeight:'bold'}}>J’ai reçu une commande de plat différente
                            de celle que j’ai commandée, que dois-je faire ?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPressPlatsendommages} style={Styles.title}>
                        
                            <Text style={{fontWeight:'bold'}}>Les plats sont arrivés
                                endommagés, que dois-je faire ?</Text>
                    </TouchableOpacity>
                  
                </View>
            </SafeAreaView>    
)}
const Styles = StyleSheet.create({
    container: {
        alignContent:'center',
        justifyContent:'center',
        margin:30,
    },
    title:{
        paddingTop: 15,
        
    },
});
export default Presentation;
