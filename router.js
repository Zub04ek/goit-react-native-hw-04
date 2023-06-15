import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Screens/auth/LoginScreen";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import PostsScreen from "./Screens/main/PostsScreen";
import CreatePostsScreen from "./Screens/main/CreatePostsScreen";
import ProfileScreen from "./Screens/main/ProfileScreen";

import { AntDesign } from "@expo/vector-icons";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator initialRouteName="Log in">
        <AuthStack.Screen
          name="Log in"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Sign up"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }} >
      <MainTab.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="pluscircle" size={size} color={color} />
          ),
        }} name="Create" component={CreatePostsScreen} />
      <MainTab.Screen options={{
          tabBarIcon: ({ focused, size, color }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }} name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  );
};
