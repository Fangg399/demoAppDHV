import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../Home";
import Notify from "../Notification";
import Search from "../Search";
import Utilities from "../Utilities";
import Profile from "../Profile";
import HomeScreen from "../../Professor/Home";

const Tab = createBottomTabNavigator();

export default function Root({ route }) {
  const data = route.params;
  console.log("data===", data);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Trang chủ"
        component={() => <HomeScreen data={data} />}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../../assets/images/icon-home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notify}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/images/icon-thongbao.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Tra cứu thông tin "
        component={Search}
        options={{
          tabBarIcon: () => (
            <Image source={require("../../../assets/images/icon-tracuu.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Tiện ích"
        component={Utilities}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/images/icon-tienich.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("../../../assets/images/icon-profile.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
