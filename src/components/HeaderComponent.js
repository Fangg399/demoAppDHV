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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Header = ({ title }) => (
  <View style={styles.background}>
    <TouchableOpacity style={styles.iconMenu}>
      <Image source={require("../../src/assets/images/menu.png")} />
    </TouchableOpacity>
    <Text style={styles.textTitle}>{title}</Text>
    <Image
      style={styles.logo}
      source={require("../../src/assets/images/Logo2.png")}
    />
  </View>
);

export default Header;

const styles = StyleSheet.create({
  background: {
    marginTop: "6%",
    width: "100%",
    height: windowHeight / 12,
    justifyContent: "center",
    alignItems: "center",
  },
  iconMenu: {
    position: "absolute",
    resizeMode: "stretch",
    left: "4%",
  },
  logo: {
    position: "absolute",
    resizeMode: "stretch",
    right: "4%",
  },
  textTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: "12%",
  },
});
