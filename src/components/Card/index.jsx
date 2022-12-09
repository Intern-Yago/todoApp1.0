import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//import { styles } from './styles';

export function Card({ data }) {
  return (
    <View>
        <Text>
            {data}
        </Text>
    </View>
  );
}