import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


export function Card({ data, style, funcao }) {
  return (
    <View style={styles.container}>
      {
        style === true
        ?<Text style={{textDecorationLine:"line-through"}}>{data}</Text>
        :<Text>{data}</Text>
      }
      <Ionicons name='close' size={20} color={"red"} style={styles.icon} onPress={funcao}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:120,
    alignItems: 'center',
    marginLeft:10
  },
  icon:{
    
  }
})