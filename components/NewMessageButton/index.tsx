import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";


const NewMessageButton = () => {
  const navtigation = useNavigation();
  const onPress = () => {
    navtigation.navigate('Contacts');
  }
  
  return (
    
    <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
     <MaterialCommunityIcons name="message-reply-text" size={28} color="white"/>
     </TouchableOpacity>  
    </View>
    
  )
}
export default NewMessageButton;

