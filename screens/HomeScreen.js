import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

const HomeScreen = ({ navigation }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('ads').get();
      setAds(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <View>
      <Button
        title="Create Ad"
        onPress={() => navigation.navigate('CreateAd')}
      />
      <FlatList
        data={ads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
