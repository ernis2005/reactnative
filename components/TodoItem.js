import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
function TodoItem({ item,deleteTodo }) {
  return (
    <TouchableOpacity style={style.todo}
    onLongPress={()=>deleteTodo(item.id)}
    >
      <Text style={style.text}>{item.text}</Text>
      <TouchableOpacity  
      onPress={()=>deleteTodo(item.id)}
      >
        <Text>&#128465;</Text>
      </TouchableOpacity>
      
    </TouchableOpacity>
  );
}

export default TodoItem;
const style = StyleSheet.create({
  todo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
  },
});
