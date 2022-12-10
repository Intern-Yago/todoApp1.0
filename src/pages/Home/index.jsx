import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Card } from "../../components/Card";
import CheckBox from "../../components/CheckBox";

export default function Home({ navigation }) {
  const [data, setData] = useState([])

  useFocusEffect(useCallback(() => {
    renderTodos()
  }, []));

  async function renderTodos(){
    const response = await AsyncStorage.getItem("@Syrius")
    const data = response ? JSON.parse(response) : []
    setData(data)
  }

  async function handleRemove(t){
    var pos=data.indexOf(t)
    data.splice(pos, 1)
    try{
      const response = await AsyncStorage.getItem("@Syrius")
      const previousData = response?response:[]
      await AsyncStorage.setItem("@Syrius",JSON.stringify(data))
      renderTodos()
      Alert.alert("ToDo APP", "Removido com sucesso")
    }catch(e){
      Alert.alert("ToDo APP",e)
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
        <Text style={styles.title}>
          Lista de afazeres
        </Text>
        {
          data.length != 0
          ?
          data.map(r=>{
            return(
            <View key={r[0]} style={styles.container}>
              <CheckBox op={r} funcao={handleRemove}/>
            </View>
            )
          })
          :
          <Text>
            Você não tem nada para fazer
          </Text>
        }
    </View>
    )
  }

  const styles = StyleSheet.create({
    title:{
      textDecorationLine: "underline",
      fontSize:20,
      marginBottom:10
    },
    container:{
      display: 'flex',
      flexDirection:'row',
      marginVertical:5
    }
  })