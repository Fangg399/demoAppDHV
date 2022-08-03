import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ListHome from "../../../components/ListHome";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen(props) {
  console.log("======data=====", props);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Head */}
      <View style={styles.head}>
        <TouchableOpacity style={styles.iconMenu}>
          <Image source={require("../../../assets/images/menu.png")} />
        </TouchableOpacity>
        <Image
          style={styles.avatar}
          source={require("../../../assets/images/Info-box.png")}
        />
        <Text style={styles.text1}>Cao Thanh Son</Text>
      </View>
      {/* body */}
      <View style={styles.body}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.item}>
            <Text style={styles.text2}> Hoạt động giảng dạy</Text>
            <ListHome />
          </View>
          <View style={styles.item}>
            <Text style={styles.text2}> Kê khai giờ dạy</Text>
            <ListHome />
          </View>
          <View style={styles.item}>
            <Text style={styles.text2}> NCKH và HĐ...</Text>
            <ListHome />
          </View>
          <View style={styles.item}>
            <Text style={styles.text2}> NCKH và HĐ...</Text>
            <ListHome />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#286BB8",
  },
  head: {
    marginTop: "8%",
    width: "100%",
    height: windowHeight / 9,
    justifyContent: "center",
    alignItems: "center",
  },
  iconMenu: {
    position: "absolute",
    resizeMode: "stretch",
    left: 28,
  },
  avatar: {
    position: "absolute",
    top: 0,
  },
  text1: {
    position: "absolute",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 22,
    bottom: 0,
  },
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  scrollViewContainer: {
    paddingBottom: "40%",
  },
  text2: {
    fontWeight: "bold",
    fontSize: 24,
  },
  item: {
    height: windowHeight / 4,
    width: windowWidth / 1.08,
    marginTop: "4%",
    marginBottom: "14%",
  },
});
