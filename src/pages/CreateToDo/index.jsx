import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage, Keyboard } from 'react-native';
import * as Crypto from 'expo-crypto';
import { useFocusEffect } from '@react-navigation/native';

export default function App({navigation}){
    const [toDo, setToDo] = useState([])
    const [text, setText] = useState()
    const [hash, setHash] = useState()

    async function gravarStorage(){
        try{
            const response = await AsyncStorage.getItem("@Syrius")
            const previousData = response?JSON.parse(response):[]
            await AsyncStorage.setItem("@Syrius",JSON.stringify(toDo))
        }catch(e){
            alert(e)
        }
    }

    async function carregarStorage(){
        try{
            const response = await AsyncStorage.getItem("@Syrius")
            const dataStor = response?JSON.parse(response):[]
            setToDo(dataStor)
        }catch(e){
            alert(e)
        }
    }

    useEffect(()=>{
        carregarStorage()
    },[toDo])

    async function addTodo(){
        Keyboard.dismiss()
        var time = new Date().getMilliseconds()
        var newTodo = text
        var arr = toDo
        var hash =await Crypto.digestStringAsync(
            Crypto.CryptoDigestAlgorithm.SHA256,
            `${newTodo} ${time}`
        );
        var arrToDo = [hash, newTodo]
        arr.push(arrToDo)
        gravarStorage()
        setHash("")
        setText("")
        setToDo(arr)
        alert("Adicionado com sucesso")
    }

    function deleteTodo(t){
        var arr=toDo
        var pos=arr.indexOf(t)
        arr.splice(pos, 1)
        gravarStorage()
        alert("Removido com sucesso")
        setToDo(arr)
    }

    function renderTodos(){
        return toDo.map(t=>{
          return(
            <Text key={t[0]} onPress={()=>deleteTodo(t)}>
              {t[1]}
            </Text>
          )
        })
    }
    return(
        <View style={styles.viewStyle}>
            <Text>ToDo APP</Text>
            <TextInput
                style={styles.inputStyle}
                onChangeText={(text)=>{setText(text)}}
                value={text}
            />
            <Button
                title='Click me'
                onPress={addTodo}
            />
            {renderTodos()}
        </View>
    )
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle:{
    height: 40,
    width:300,
    borderColor: 'green',
    borderWidth:1,
    padding: 10
  }
});
