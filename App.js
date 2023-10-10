import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlayingScreen from '@screen/NowPlayingScreen.js';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="NowPlaying" component={NowPlayingScreen} />
      <Tab.Screen name="Top Rated" component={NowPlayingScreen} />
      <Tab.Screen name="Popular" component={NowPlayingScreen} />
        <Tab.Screen name="Upcoming" component={NowPlayingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
