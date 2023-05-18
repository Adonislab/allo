import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ProductsList from '../../../composants/ProductList/ProductsList';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Food = () => {
    const navigation = useNavigation();
    const onPressPanier = () => {
		navigation.navigate('CartScreen');
	};

    return(
        <SafeAreaView style={styles.container} >
            <View style={styles.liste} >
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <View style={{paddingRight:90}}> 
                    <Text style ={{
                        fontSize:16, 
                        fontWeight:'bold', 
                        color:'#ff6d00',
                        }}>
                        Vos meilleurs Plats
                        </Text>
                    </View>
                    <View>        
                        <TouchableOpacity onPress={onPressPanier} >
                        <Ionicons name="cart-outline" size={30} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <ProductsList/>  
            </View>
        </SafeAreaView>

    )}
const styles = StyleSheet.create({
        container: {
             flex: 1,
            //  backgroundColor: '#FAFAFA',
             alignItems: 'center',
             justifyContent: 'center',
             maxWidth:'100%',
           },
           liste: {
            alignItems: 'center',
           },
});

export default Food;