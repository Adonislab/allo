import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';



export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library is required!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} resizeMode="cover" />
      )}
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Choix d'une photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
