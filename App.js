import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieListScreen from '@screen/MovieListScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}>
          {() => <MovieListScreen listType="nowplaying" />}
        </Tab.Screen>
        <Tab.Screen
          name="Search"
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
          }}>
          {() => <MovieListScreen listType="toprated" />}
        </Tab.Screen>
        <Tab.Screen
          name="Favourite"
          options={{
            tabBarLabel: 'Favourite',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart" color={color} size={size} />
            ),
          }}>
          {() => <MovieListScreen listType="popular" />}
        </Tab.Screen>
        <Tab.Screen
          name="Profile"
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}>
          {() => <MovieListScreen listType="upcoming" />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
