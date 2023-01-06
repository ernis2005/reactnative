import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from './screens/Todo';
import Films from './screens/Films';
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      tabBarAllowFontScaling:true,
      tabBarLabelStyle:{
        fontSize:16
      },
      tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
      tabBarIcon: ({ focused, color, size }) => {return}
    }}
    
    >
      <Tab.Screen name="Todo" component={Todo} />
      <Tab.Screen name="Films" component={Films} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
