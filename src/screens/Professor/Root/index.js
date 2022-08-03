import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../Home";
import NotificationScreen from "../Notification";
import ShowMoreScreen from "../ShowMore";
import WeeklyCalendarScreen from "../WeeklyCalendar";
import WorkScreen from "../Work";

const Tab = createBottomTabNavigator();

export default function MyTabs({ route }) {
  const data = route.params;
  console.log("data===", data);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../../assets/images/icon-home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Lịch tuần"
        component={WeeklyCalendarScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../../assets/images/icon-thongbao.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Công việc "
        component={WorkScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../../assets/images/icon-tienich.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={NotificationScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../../assets/images/icon-tracuu.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Thêm"
        component={ShowMoreScreen}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../../assets/images/icon-profile.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

