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
  console.log("navigation", navigation);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image
        style={styles.logo}
        source={require("../../../assets/images/Logo.png")}
      />
      <Text style={styles.title}>TRƯỜNG ĐẠI HỌC VINH</Text>
      <Text style={styles.subTitle}>VINH UNIVERSITY</Text>
      <Text style={styles.txt}>Chọn loại tài khoản bạn muốn đăng nhập</Text>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.btnContainer}
        >
          <Image
            style={styles.btn}
            source={require("../../../assets/images/profesor.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.btnContainer}
        >
          <Image
            style={styles.btn}
            source={require("../../../assets/images/student.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    resizeMode: "stretch",
    marginTop: "30%",
  },
  title: {
    fontSize: 24,
    color: "#286BB8",
    marginTop: "10%",
    fontWeight: "700",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: "1%",
  },
  txt: {
    marginTop: "16%",
    fontSize: 16,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginTop: "6%",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-around",
  },
  btn: {
    width: 70,
    height: 70,
  },
  btnContainer: {
    padding: "6%",
    borderRadius: 10,
    borderColor: "#666666",
    borderWidth: 2,
    borderColor: "#286BB8",
  },
});
