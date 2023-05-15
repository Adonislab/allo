import * as React from 'react';
import {
	View, Text, StyleSheet,
	ScrollView, SafeAreaView
    } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustmomButton from '../../../../composants/CustomButton';


const DebutLivraison = () => {
	const navigation = useNavigation();

	const onPressCourse = () => {
		navigation.navigate('SelectionLieuDepart');
	};
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<SafeAreaView style={styles.container} >
				<View style={{ marginBottom: 20 }}>
					<Text style={{ fontSize: 20, color: '#ff6d00', textAlign: 'center' }}>
						Gestion des livraisons
					</Text>
				</View>

				<CustmomButton
					onPress = {onPressCourse}
					text = "Nouvelle livraison"
				    bgColor ='#0a5089'
                    fgColor = 'white'
				/>

			</SafeAreaView>
		</ScrollView>
	)
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		paddingTop: 20,
	},
});
export default DebutLivraison; 
