import React, { useState } from "react";
import {Alert, AsyncStorage, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icons from 'react-native-vector-icons/MaterialCommunityIcons.js'
import { Card } from "../Card";

export default function CheckBox({op, funcao}){
    const [selected, setSelected] = useState([])
    const [newData, setNewData] = useState([])

    function toggle(data){
        const id = data[0]
        let index = selected.findIndex((i)=> i === id)
        let arrSelecteds = [...selected]
        if(index !== -1){
            arrSelecteds.splice(index, 1)
        }else{
            arrSelecteds.push(id)
        }
        setSelected(arrSelecteds)
    }
    return(
        <>
            <View style={styles.containerCheckBox}>
            <TouchableOpacity style={styles.iconBox} onPress={()=>toggle(op)}>
            {
                selected.findIndex((i)=>i===op[0]) !== -1 ? <Icons name="check-bold" color={"#3EBD93"} size={16}/> : null
            }
            </TouchableOpacity>
            </View>
            {
                selected.findIndex((i)=>i===op[0]) !== -1 
                ? <Card data={op[1]} style={true} funcao={funcao}/>
                : <Card data={op[1]} style={false} funcao={funcao}/>
            }
        </>
    )
}

const styles = StyleSheet.create({
    iconBox:{
        height:20,
        width:20,
        borderRadius:4,
        justifyContent:'center',
        alignItems:'center',
    },
    containerCheckBox:{
        borderWidth:1,
        borderRadius:10
    }
})