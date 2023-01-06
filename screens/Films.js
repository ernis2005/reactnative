import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import FilmItem from '../components/FilmItem';
import Header from '../components/Header';

export default function Films() {
  const [films, setFilms] = useState([]);
useEffect(() => {
try {
  const getFilms = async ()=>{
    const res  = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=499e2c60ff2050b7c47d8f3ed48c348a&language=en-US&page=1');
    setFilms(res.data.results)
  }
  getFilms()
} catch (error) {
  Alert.alert("ernis", error)
}
}, [])

  return (
    <View >
    <Header/>
    <FlatList
    columnWrapperStyle={{flex:1,justifyContent:'space-around'}}
    numColumns={2}
    contentContainerStyle={{paddingBottom:100}}
    data={films}
    keyExtractor={item =>item.id}
    renderItem={({item})=>(
      <FilmItem
      res={item}
      />
    )}
    />
      <Text>Films</Text>
      <StatusBar style="auto" />
    </View>
  );
}

//499e2c60ff2050b7c47d8f3ed48c348a

//
//https://api.themoviedb.org/3/movie/top_rated?api_key=499e2c60ff2050b7c47d8f3ed48c348a&language=en-US&page=1