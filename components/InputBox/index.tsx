import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigationState } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";


const InputBox = () => {

  const [message, setMessage] = useState('');

  const onSendPress = () => {
    console.warn(`Sending ${message}`);
    setMessage('');
  }

  const onMicrophonePress = () => {console.warn('Microphone');}

  const onPress= ()=> {
    if (!message){
      onMicrophonePress();
    }
    else{
      onSendPress();
    }

    

  }
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
      <FontAwesome5 name="laugh-beam"  size={24} color="gray" />
      <TextInput  
      placeholder="Type a message"
        style={styles.textInput}
        multiline
        value={message}
        onChangeText={setMessage}
        />
      <Entypo 
        name="attachment"
        size={24} 
        color="gray" 
        style={styles.icons}
        
        />
      {!message && <Fontisto  name="camera"  size={24} color="gray" style={styles.icons}/> }
      
      </View>
      <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        {!message ? <MaterialCommunityIcons  name="microphone" size={28} color="white"/> : 
        <MaterialIcons  name="send" size={28} color="white"/>
        }      
    </View>  
      </TouchableOpacity>
      
    </View>
  )
}
export default InputBox;

