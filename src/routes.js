import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import CreateToDo from './pages/CreateToDo';
import Home from './pages/Home';

const Tab = createBottomTabNavigator();
export default function Routes() {
  return (
    
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home}  
        options={{
          title:"Página inicial", 
          tabBarIcon:()=>{
            return <Ionicons name='home' size={20}/>
          }}}/>
      <Tab.Screen name="CreateToDo" component={CreateToDo} 
        options={{
          title:"Criar afazeres",
          tabBarIcon:()=>{
            return <Ionicons name='add-circle-outline' size={25}/>
          }
          }}/>
    </Tab.Navigator>
  );
}