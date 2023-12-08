import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
//import { SelectHotelScreen } from './components/selectHotelScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen } from './components/homeScreen';
//import { LoginScreen } from './components/login';
//import {Room} from './components/roomCard'
//import { CardHotel } from './components/hotelCards';
//import { Favorites } from './components/favorites';
import { Search } from './components/searchModal';
import {RegisterScreen} from './components/createAcount';
import { SelectRoomScreen } from './components/selectRoom';
import { SelectHotelScreen } from './components/selectHotel';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SelectRoom'>


        <Stack.Screen
          name='HomeScreen'
          component={HomeScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name='SelectHotel'
          component={SelectHotelScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='SelectRoom'
          component={SelectRoomScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name='Search'
          component={Search}
          options={{
            headerShown: false
          }} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}