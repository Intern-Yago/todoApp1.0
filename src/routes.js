import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import CreateToDo from './pages/CreateToDo';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    
    <Tab.Navigator initialRouteName='Home' 
    screenOptions={{
      headerShown: false, 
      tabBarActiveTintColor:"#626972", 
      tabBarActiveTintColor:"#0066FF"
    }}   
    >
      <Tab.Screen name="Home" component={Home}  
        options={{
          title:"Página inicial", 
          tabBarIcon:({color, size})=>{
            return <Ionicons name='home' size={size} color={color}/>
          }}}/>
      <Tab.Screen name="CreateToDo" component={CreateToDo} 
        options={{
          title:"Criar afazeres",
          tabBarIcon:({size, color})=>{
            return <Ionicons name='add-circle-outline' size={size} color={color}/>
          }
          }}/>
    </Tab.Navigator>
  );
}