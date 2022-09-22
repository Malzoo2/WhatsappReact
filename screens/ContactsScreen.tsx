import { StyleSheet, View, FlatList } from 'react-native';
import ContactListItem from '../components/ContactListItem';
import NewMessageButton from '../components/NewMessageButton';
import users from '../data/Users';

import { RootTabScreenProps } from '../types';

export default function ContactsScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (  
    <View style={styles.container}>     

      <FlatList 
      style={{width: '100%'}}
      data={users}
      renderItem={({item}) => <ContactListItem user={item}/>}
      keyExtractor={(item) => item.id}
      /> 
      <NewMessageButton />
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
