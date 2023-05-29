import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfilUser = () => {
  const [user, setUser] = React.useState(null); // état pour stocker les informations de l'utilisateur
  const navigation = useNavigation();

  const onPressModif = () => {
		navigation.navigate('ModifierInfos');
	};
  React.useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();
        setUser(userInfo);
      } catch (error) {
        console.log('Erreur:', error);
      }
    };

    getCurrentUser();
  }, []);
  return (
    <View style={styles.container}>

      

      <View style={styles.profil}>
        <Text>Photo</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={onPressModif}>
        
        <Text style={styles.editButtonText}><FontAwesome5 name="user-edit" size={24} color="white" /> Modifier mes informations </Text>
      </TouchableOpacity>
      <Text style={{ paddingBottom: 20 }}> Identifiant : {user?.username}</Text>
      <Text style={{ paddingBottom: 20 }}> Email : {user?.attributes?.email}</Text>
      <Text style={{ paddingBottom: 20 }}> Nom : { }</Text>
      <Text style={{ paddingBottom: 20 }}> Prénom : { }</Text>
      <Text style={{ paddingBottom: 20 }}> Téléphone : { }</Text>
      <Text style={{ paddingBottom: 20 }}> Statut : { }</Text>


      <TouchableOpacity style={{ paddingBottom: 20 }} >
        <Text style={{ fontSize: 15 }}> Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create(
  {
    profil: {
      marginTop: 0,
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 20,
      width: '100%',
      height: 150
    },
    container: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginRight: 10,
      marginLeft: 10,
    },
    editButton: {
      backgroundColor: 'orange',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginBottom:20,
      marginTop:20,
    },
    editButtonText: {
      color: '#fff',
      fontSize: 16,
    },

  })

export default ProfilUser