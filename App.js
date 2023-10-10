import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieListScreen from '@screen/MovieListScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="NowPlaying">
          {() => <MovieListScreen listType="nowplaying" />}
        </Tab.Screen>
        <Tab.Screen name="TopRated">
          {() => <MovieListScreen listType="toprated" />}
        </Tab.Screen>
        <Tab.Screen name="Popular">
          {() => <MovieListScreen listType="popular" />}
        </Tab.Screen>
        <Tab.Screen name="Upcoming">
          {() => <MovieListScreen listType="upcoming" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
