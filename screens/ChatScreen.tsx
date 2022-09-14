import { StyleSheet, View, FlatList } from 'react-native';
import ChatListItem from '../components/ChatListItem';
import ChatRooms from '../data/ChatRooms';

import { RootTabScreenProps } from '../types';

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (  
    <View style={styles.container}>     

      <FlatList 
      style={{width: '100%'}}
      data={ChatRooms}
      renderItem={({item}) => <ChatListItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}
      /> 
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
