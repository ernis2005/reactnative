import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import Form from "../components/Form";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";

export default function Todo() {
  const [todoItems, setTodoItems] = useState([]);
  const addTodo = (newItem) => {
    setTodoItems([...todoItems, { ...newItem }]);
  };
  const deleteTodo=(id)=>{
    setTodoItems((res)=>{
        return res.filter(todoItems=>id != todoItems.id)
    })
  }
  return (
    <SafeAreaView style={style.app}>
      <Header />

      <ImageBackground source={require("../assets/imag2.jpg")} style={style.bg}>
        <Form addTodo={addTodo} />
        {todoItems.length
        ?<Text>Всего : {todoItems.length}</Text>:null
        }
        <FlatList
          data={todoItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TodoItem item={item} deleteTodo={deleteTodo}/>}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  bg: {
    flex: 1,
  },
  app: {
    flex: 1,
  },
});
