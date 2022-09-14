import { StyleSheet, View, Text } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';

import { RootTabScreenProps } from '../types';

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (  
    <View style={styles.container}>
      <ChatListItem chatRoom={ChatRooms[0]}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
