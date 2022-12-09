import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { AsyncStorage, Text, TouchableOpacity, View } from "react-native"
import { Card } from "../../components/Card";

export default function Home({ navigation }) {
  const [data, setData] = useState([])

  async function renderTodos(){
    const response = await AsyncStorage.getItem("@Syrius")
    const data = response ? JSON.parse(response) : []
    setData(data)
  }
  useFocusEffect(useCallback(() => {
    renderTodos()
  }, []));

  async function handleRemove(t){
    var pos=data.indexOf(t)
    data.splice(pos, 1)
    try{
      const response = await AsyncStorage.getItem("@Syrius")
      const previousData = response?response:[]
      await AsyncStorage.setItem("@Syrius",JSON.stringify(data))
      renderTodos()
    }catch(e){
      alert(e)
    }
  }
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
        {
          data.length != 0
          ?
          data.map(r=>{
            return(
            <View>
              <TouchableOpacity onPress={()=>handleRemove(r)}>
                <Card data={r[1]} key={r[0]}/>
              </TouchableOpacity>
            </View>
            )
            
              console.log("Home2 ",r[1]);
          })
          :
          <Text>
            Hi I'm your home
          </Text>
        }
    </View>
    )
  }