
import TabTwoScreen from '../screens/TabTwoScreen';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { FontAwesome, Fontisto } from '@expo/vector-icons';
import React from 'react';
import { MainTabParamList, RootTabScreenProps } from '../types';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
 const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

 export default function MainTabNavigator() {
   const colorScheme = useColorScheme();
 
   return (
     <MainTab.Navigator
       initialRouteName="Chats"
       screenOptions={{
         tabBarActiveTintColor: Colors[colorScheme].background,         
         tabBarStyle:{
          backgroundColor: Colors[colorScheme].tint,
         },
         tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 3,
         },
         tabBarLabelStyle: {
          fontWeight: 'bold'
         },
         tabBarShowIcon: true,
       }}>
       <MainTab.Screen
         name="Camera"
         component={TabTwoScreen} 
         options={          
          {                            
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarLabel: () => null,          
        }}                
       />
       <MainTab.Screen
         name="Chats"
         component={ChatScreen}
         options={{
           title: 'Chats',           
         }}
       />
       <MainTab.Screen
         name="Status"
         component={TabTwoScreen}
         options={{
           title: 'Status',           
         }}
       />
       <MainTab.Screen
         name="Calls"
         component={TabTwoScreen}
         options={{
           title: 'Calls',           
         }}
       />
     </MainTab.Navigator>
   );
 }

 /**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }