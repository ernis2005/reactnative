import React, { useState } from "react";
import { Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FilmItem({ res }) {
    const [modal, setmodal] = useState(false)
  return (
    <TouchableOpacity style={style.filmItem}
    onPress={()=>setmodal(!modal)}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200${res.poster_path}` }}
        style={style.image}
      />
      <Text style={style.text}>{res.title}</Text>
      <Modal animationType="slide"
      presentationStyle="formSheet"
      visible={modal}
      >
      <SafeAreaView style={style.modal}>
      <Text 
      
      style={style.close}
      onPress={()=>setmodal(!modal)}
      >&times;</Text>
      <Image
      source={{ uri: `https://image.tmdb.org/t/p/w200${res.poster_path}` }}
      style={style.modalimage}
      />
      <Text  style={style.overview}>
      {res.overview}
      </Text>
      </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  filmItem: {
    wdile: "30%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: 15,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
 
  modal:{
    margin:25
  },
  close:{
    fontSize:30,
    textAlign:"right"
  },
  modalimage:{
    width:300,
    height:300,
    resizeMode:'contain',
    display:'flex',
    alignSelf:'center'
  },
  overview:{
    fontSize:18,
    marginTop:25

  }
});
