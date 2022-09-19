/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, View, Text } from 'react-native';
import {Octicons, MaterialCommunityIcons, MaterialIcons, FontAwesome5} from '@expo/vector-icons'
import ChatRoomScreen  from '../screens/ChatRoomScreen';
import Colors from '../constants/Colors';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import MainTabNavigator from './MainTabNavigator';
import styles from '../components/ChatListItem/styles';



export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{  
      headerStyle: {
        backgroundColor: Colors.light.tint,                                
      },      
      headerShadowVisible: false,
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',      
      headerTitleStyle: {
        fontWeight:'bold',
      }}}>
      <Stack.Screen name="Root" component={MainTabNavigator} 
      options={{        
        title: 'WhatsApp',
        headerRight: ()=> (
          <View style={{
            flexDirection: 'row',
            width: 60, 
            justifyContent: 'space-between',
            marginRight: 10,
            backgroundColor: Colors.light.tint,
            }}>
              <Octicons name="search" size={24}  color={'white'}/>
              <MaterialCommunityIcons name="dots-vertical" size={24} color={'white'}/>
          </View>
        )
        
       }} />
       <Stack.Screen
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({route}) =>(
          {
            title: route.params.name,                        
            headerRight: ()=> (              
                <View style={{
                  flexDirection: 'row',                  
                  width: 100, 
                  justifyContent: 'space-between',
                  marginRight: 10,
                  backgroundColor: Colors.light.tint,
                  }}>
                 <FontAwesome5 name="video" size={22} color={"white"}/>
                <MaterialIcons name="call" size={22} color={"white"}/>                
                <MaterialCommunityIcons name="dots-vertical" size={22} color={"white"}/>
                </View>              
            )
          }
        )}
         />


      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
