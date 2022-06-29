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
import { StatusBar } from "expo-status-bar";

export default function Selection({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Background+logo */}
      <View style={styles.head}>
        <View style={styles.background}>
          <Image style={styles.logo} source={require("../images/Logo.png")} />
        </View>
      </View>
      {/* Name University */}
      <View style={styles.nameUniversity}>
        <Text style={styles.text1}>TRƯỜNG ĐẠI HỌC VINH</Text>
        <Text style={styles.text2}>VINH UNIVERSITY</Text>
      </View>
      {/* Welcome */}
      <View style={styles.welcome}>
        <Text style={styles.text3}>Welcome !</Text>
        <Text style={styles.text4}>Hãy lựa chọn hình thức đăng nhập.</Text>
      </View>
      {/* Selection */}
      <View style={styles.login}>
        <TouchableOpacity
          style={styles.buttonLogin1}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonLoginText1}>Cán bộ</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLogin2}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonLoginText2}>Sinh viên</Text>
        </TouchableOpacity>
      </View>
      {/* Version */}
      <View style={styles.version}>
        <Text style={styles.text5}>Phiên bản 1.0.0</Text>
      </View>
    </View>
  );
}

const TEXT = {
  color: "#000000",
  textAlign: "center",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  head: {
    width: "100%",
    height: "32%",
  },
  background: {
    width: "100%",
    height: "60%",
    backgroundColor: "#286BB8",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    position: "absolute",
    resizeMode: "stretch",
    bottom: "-60%",
  },
  nameUniversity: {
    marginTop: "6%",
  },
  text1: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 36,
    fontWeight: "bold",
  },
  text2: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 20,
  },
  welcome: {
    width: "100%",
    height: "16%",
    marginTop: "12%",
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    ...TEXT,
    fontSize: 40,
    fontWeight: "bold",
  },
  text4: {
    ...TEXT,
    width: "60%",
    fontSize: 15,
    lineHeight: 20,
  },
  login: {
    width: "80%",
    height: "10%",
    borderColor: "#286BB8",
    marginTop: "30%",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 11,
    backgroundColor: "#E6EAF5",
  },
  buttonLogin1: {
    height: "100%",
    width: "50%",
    backgroundColor: "#286BB8",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#286BB8",
  },
  buttonLogin2: {
    height: "100%",
    width: "50%",
    justifyContent: "center",
  },
  buttonLoginText2: {
    ...TEXT,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonLoginText1: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  version: {
    marginTop: "16%",
  },
  text5: {
    ...TEXT,
    fontSize: 12,
  },
});
