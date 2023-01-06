import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import uuid from "react-native-uuid";
export default function Form({ addTodo }) {
  const [valeu, setValue] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Ведете название задачи"
        style={style.textinput}
        onChangeText={(text) => setValue(text)}
        value={valeu}
      />
      <Button
        title="Добавить задачу"
        disabled={!valeu}
        onPress={() => {
          addTodo({
            id: uuid.v4(),
            text: valeu,
          });
          setValue("");
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  textinput: {
    padding: 15,
    margin: 15,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowOpacity: 3,
    borderRadius: 10,
  },
});
