import moment from 'moment';
import React from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { User } from '../../types';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export type ContactListItemProps = {
    user : User;

}
 

const ContactListItem =  (props: ContactListItemProps) => {
    const {user} = props;
    const navigation = useNavigation();    
    const onClick = () => {
        //
    }
    
    
    return (  
        <TouchableWithoutFeedback onPress={onClick}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{uri: user.imageUri}} style={styles.avatar} />

                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text style={styles.stauts}>{user.status}</Text>
                </View>
            </View>
            
        </View>
        </TouchableWithoutFeedback>

    );
}
 
export default ContactListItem;
