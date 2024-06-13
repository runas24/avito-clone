import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const CreateAdScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createAd = async () => {
    const db = firebase.firestore();
    await db.collection('ads').add({
      title,
      description,
    });
    navigation.goBack();
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Create Ad" onPress={createAd} />
    </View>
  );
};

export default CreateAdScreen;
