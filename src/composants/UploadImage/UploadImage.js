import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Auth } from 'aws-amplify';
import { S3 } from 'aws-sdk';

export default function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [buttonText, setButtonText] = useState('Importez votre photo');

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

    if (!result.cancelled) {
      const user = await Auth.currentAuthenticatedUser();
      const username = user.username;

      const file = {
        uri: result.uri,
        name: `${username}_${Date.now()}.jpg`, // Use the user's authenticated name and timestamp as the image name
        type: 'image/jpeg',
      };

      const s3 = new S3();

      const params = {
        Bucket: 'allogroup1a63836cdcbb4c7db397ea7cee38cd34213348-staging',
        Key: file.name,
        Body: file,
        ACL: 'public-read',
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.log('Error uploading image:', err);
        } else {
          console.log('Image uploaded successfully:', data.Location);
          setSelectedImage(data.Location);
          setButtonText('Image chargée');
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
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
    width: '50%',
    height: 200,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0a5089',
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});