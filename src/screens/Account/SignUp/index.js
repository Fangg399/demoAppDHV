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
import axios from "axios";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login({ navigation }) {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePwd, setHidePwd] = useState(true);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Button Back */}
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          source={require("../../../assets/images/arrow-left.png")}
          resizeMode="stretch"
        />
      </TouchableOpacity>
      {/* Logo+nameUni */}
      <View style={styles.head}>
        <Image
          source={require("../../../assets/images/Logo.png")}
          resizeMode="stretch"
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.nameUniversity}>
          <Text style={styles.text1}>TRƯỜNG ĐẠI HỌC VINH</Text>
          <Text style={styles.text2}>VINH UNIVERSITY</Text>
        </View>
      </View>
      {/* Login frame */}
      <View style={styles.loginFrame}>
        {/* Account */}
        <View style={styles.login}>
          <View style={styles.iconBackground}>
            <Image
              source={require("../../../assets/images/account.png")}
              resizeMode="stretch"
            />
          </View>
          <TextInput
            onChangeText={(value) => setUserName(value)}
            defaultValue={userName}
            style={styles.input}
            placeholder="Tên đăng nhập"
          />
        </View>
        {/* Account */}
        <View style={styles.login}>
          <View style={styles.iconBackground}>
            <Image
              source={require("../../../assets/images/account.png")}
              resizeMode="stretch"
            />
          </View>
          <TextInput
            onChangeText={(value) => setFullName(value)}
            defaultValue={fullName}
            style={styles.input}
            placeholder="Họ và tên"
          />
        </View>
        {/* Account */}
        <View style={styles.login}>
          <View style={styles.iconBackground}>
            <Image
              source={require("../../../assets/images/account.png")}
              resizeMode="stretch"
            />
          </View>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            defaultValue={email}
            style={styles.input}
            placeholder="Email"
          />
        </View>
        {/* Password */}
        <View style={styles.login}>
          <View style={styles.iconBackground}>
            {
              <Image
                source={require("../../../assets/images/password.png")}
                resizeMode="stretch"
              />
            }
          </View>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            onChangeText={(value) => setPassword(value)}
            defaultValue={password}
            secureTextEntry={hidePwd ? true : false}
          />
          <TouchableOpacity
            style={styles.hidePassword}
            onPress={() => setHidePwd(!hidePwd)}
          >
            <Image
              source={
                hidePwd
                  ? require("../../../assets/images/hide-password.png")
                  : require("../../../assets/images/show-password.png")
              }
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        {/* Forgot password */}
        <TouchableOpacity style={styles.forgotPass}>
          <Text style={styles.text6}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      {/* Button login */}
      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          axios
            .post("https://sub3.vinhuni.edu.vn/api/Users", {
              userName: userName,
              fullName: fullName,
              email: email,
              passWord: password,
              status: 1,
            })
            .then((res) => {
              console.log(res);
              navigation.navigate("Login");
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        <Text style={styles.text7}>Đăng nhập</Text>
      </TouchableOpacity>
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
    backgroundColor: "#fff",
  },
  buttonBack: {
    marginTop: "15%",
    width: "12%",
  },
  head: {
    width: "100%",
    height: "32%",
    justifyContent: "center",
    alignItems: "center",
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
  version: {
    marginTop: "16%",
  },
  text5: {
    ...TEXT,
    fontSize: 12,
  },
  loginFrame: {
    marginTop: 30,
    height: "30%",
    width: "100%",
    justifyContent: "center",
  },
  login: {
    width: windowWidth - 60,
    height: 60,
    marginLeft: 30,
    borderWidth: 1,
    borderColor: "#286BB8",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
  },
  iconBackground: {
    height: "100%",
    width: 60,
    backgroundColor: "#286BB8",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: "100%",
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  hidePassword: {
    height: "100%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPass: {
    width: windowWidth - 60,
    marginLeft: 30,
    marginTop: 10,
  },
  text6: {
    ...TEXT,
    fontSize: 16,
    position: "absolute",
    right: 0,
  },
  buttonLogin: {
    width: windowWidth - 60,
    height: 60,
    marginLeft: 30,
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#286BB8",
  },
  text7: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
