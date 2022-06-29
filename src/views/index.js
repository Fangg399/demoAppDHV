import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Selection from "./selection-screen";
import Login from "./login";
import HomePage from "./home-page";
import Notify from "./notify";
import Tracuu from "./tra-cuu";
import Tienich from "./tien-ich";
import Profile from "./profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomePage}
        options={{
          tabBarIcon: () => (
            <Image source={require("../images/icon-home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notify}
        options={{
          tabBarIcon: () => (
            <Image source={require("../images/icon-thongbao.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Tra cứu thông tin "
        component={Tracuu}
        options={{
          tabBarIcon: () => (
            <Image source={require("../images/icon-tracuu.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Tiện ích"
        component={Tienich}
        options={{
          tabBarIcon: () => (
            <Image source={require("../images/icon-tienich.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image source={require("../images/icon-profile.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootComponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Selection"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={MyTabs} />
        <Stack.Screen name="Logout" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
