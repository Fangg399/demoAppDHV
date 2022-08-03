import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../../components/HeaderComponent";
import ListApp from "../../../components/ListApp";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function ShowMoreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Head */}
      <Header title="Các ứng dụng khác" />
      {/* Body */}
      <View style={styles.body}>
        <ListApp />
      </View>
      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <Text style={styles.text2}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#286BB8",
  },
  body: {
    height: "80%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  buttonLogout: {
    width: windowWidth - 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#286BB8",
  },
  text2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
