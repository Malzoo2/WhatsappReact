import  React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const  ChatRoomScreen = () => {
    const route = useRoute();
    
    return (
        <Text>ChatRoomScreen is {route.params.name} </Text>     
    )
  }

export default ChatRoomScreen;
