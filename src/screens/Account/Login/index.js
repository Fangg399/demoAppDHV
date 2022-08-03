import React, { useLayoutEffect, useState } from "react";
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
import { NAME_SCREEN } from "../../../navigation/stack";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LoginScreen({ navigation }) {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [hidePwd, setHidePwd] = useState(true);
  const [listUser, setListUser] = useState([]);

  useLayoutEffect(() => {
    axios
      .get("https://sub3.vinhuni.edu.vn/api/Users")
      .then((res) => {
        if (listUser.length !== res.data.length) {
          setListUser(res.data);
        }
        console.log("listUser", listUser);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [listUser]);

  const handelLogin = () => {
    const userAccount = listUser.filter(
      (item) => item.email == account && item.passWord == password
    );
    console.log("userAccount", userAccount);
    Object.keys(userAccount).length !== 0
      ? userAccount[0].status === 1
        ? navigation.navigate(NAME_SCREEN.StudentRoot, userAccount)
        : navigation.navigate(NAME_SCREEN.ProfessorRoot, userAccount)
      : console.warn("Sai tên đăng nhập hoặc mật khẩu");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Head */}
      <View style={styles.head}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/Logo.png")}
        />
      </View>
      {/* Triangle down */}
      <View style={styles.triangleDown}></View>
      {/* Login frame */}
      <View style={styles.loginFrame}>
        {/* Text content */}
        <View>
          <Text style={styles.text1}>Thông tin đăng nhập</Text>
        </View>
        {/* Account */}
        <View style={styles.inputForm}>
          <View>
            <Text style={styles.text2}>Email</Text>
            <TextInput
              onChangeText={(value) => setAccount(value)}
              defaultValue={account}
              style={styles.input}
              placeholder="Email"
            />
          </View>
        </View>
        {/* Password */}
        <View style={styles.inputForm}>
          <View>
            <Text style={styles.text2}>Mật khẩu</Text>

            <TextInput
              style={styles.input}
              onChangeText={(value) => setPassword(value)}
              defaultValue={password}
              placeholder="Password"
              secureTextEntry={hidePwd ? true : false}
            />
          </View>
          {/* Hide password */}
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
        <TouchableOpacity style={styles.forgotPass} onPress={() => {}}>
          <Text style={styles.textForgotPass}>Quên mật khẩu?</Text>
        </TouchableOpacity>
        {/* Button login */}
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => {
            handelLogin();
          }}
        >
          <Text style={styles.btnText}>Đăng nhập</Text>
        </TouchableOpacity>
        {/* Facebook/Google */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.btnIcon}>
            <Image
              style={styles.icons}
              source={require("../../../assets/images/Facebook.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIcon}>
            <Image
              style={styles.icons}
              source={require("../../../assets/images/Google.png")}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Version */}
      <View style={styles.version}>
        <Text style={styles.nameUniversity}>TRƯỜNG ĐẠI HỌC VINH</Text>
        <Text style={styles.nameUniversity}>VINH UNIVERSITY</Text>
        <Text style={styles.nameUniversity}>-2022-</Text>
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
    width: "100%",
    overflow: "hidden",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E6EAF5",
  },
  head: {
    width: "100%",
    height: "58%",
    backgroundColor: "#286BB8",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: "16%",
    resizeMode: "stretch",
  },
  triangleDown: {
    width: "100%",
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: windowWidth / 2,
    borderRightWidth: windowWidth / 2,
    borderBottomWidth: windowWidth / 6,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "#286BB8",
    transform: [{ rotate: "180deg" }],
    zIndex: 1,
  },
  loginFrame: {
    width: "80%",
    height: windowHeight / 1.7,
    top: "28%",
    backgroundColor: "#fff",
    borderRadius: 20,
    position: "absolute",
    zIndex: 2,
    alignItems: "center",
  },
  text1: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#286BB8",
    marginTop: "10%",
  },
  text2: {
    fontSize: 16,
  },
  inputForm: {
    height: 50,
    width: "80%",
    marginTop: "10%",
  },
  input: {
    height: 30,
    fontSize: 16,
    lineHeight: 20,
    borderBottomWidth: 1,
    borderColor: "#9B9B9B",
  },
  hidePassword: {
    position: "absolute",
    right: "4%",
    bottom: "4%",
  },
  forgotPass: {
    marginTop: "4%",
    left: "20%",
  },
  textForgotPass: {
    fontSize: 16,
    color: "#286BB8",
  },
  buttonLogin: {
    width: "80%",
    height: "12%",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#286BB8",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
  },
  btnIcon: {
    padding: 2,
    marginTop: "8%",
  },
  icons: {
    width: 40,
    height: 40,
  },
  version: {
    position: "absolute",
    bottom: 10,
  },
  nameUniversity: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#286BB8",
  },
});
