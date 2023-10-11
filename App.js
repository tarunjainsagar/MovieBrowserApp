import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MovieListScreen from '@screen/MovieListScreen';
import HomeScreen from '@screen/HomeScreen';
import ProfileScreen from '@screen/ProfileScreen';
import AppHeader from '@component/AppHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import UserProvider from './src/context/UserContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <SafeAreaProvider>
        <AppHeader />
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Home"
              options={{
                tabBarLabel: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}>
              {() => <HomeScreen />}
            </Tab.Screen>
            <Tab.Screen
              name="Search"
              options={{
                tabBarLabel: 'Search',
                headerShown: false,
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
                headerShown: false,
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
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" color={color} size={size} />
                ),
              }}>
              {() => <ProfileScreen />}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </UserProvider>
  );
}
