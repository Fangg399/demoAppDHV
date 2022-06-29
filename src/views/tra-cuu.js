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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Tracuu() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Background+logo */}
      <View style={styles.background}>
        <Image style={styles.logo} source={require("../images/Logo2.png")} />
        <Text style={styles.text1}>Tra cứu thông tin </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E6EAF5",
  },
  background: {
    width: "100%",
    height: "18%",
    backgroundColor: "#286BB8",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    resizeMode: "stretch",
    left: 28,
  },
  text1: {
    color: "#fff",
    fontSize: 20,
  },
});
