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

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Background+logo */}
      <View style={styles.background}>
        <Image style={styles.logo} source={require("../images/Logo2.png")} />
        <Text style={styles.text1}>TRANG CHỦ</Text>
      </View>
      {/* Info */}
      <View style={styles.info}>
        <Image
          style={styles.infoImage}
          source={require("../images/Info-box.png")}
        />
        <View style={styles.infoText}>
          <Text style={styles.text2}>Trần Đình Dũng</Text>
          <Text style={styles.text3}>Mã sinh viên: 18574802010074</Text>
          <Text style={styles.text3}>Lớp: 59K2-CNTT</Text>
        </View>
      </View>
      {/* Popular */}
      <View style={styles.popular}>
        <View style={styles.popularText}>
          <Text style={styles.boldText}>Chức năng phổ biến</Text>
          <TouchableOpacity>
            <Text style={styles.underlinedText}>Thay đổi</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.popularBox}>
          <View style={styles.popularBox1}>
            <TouchableOpacity style={styles.box}>
              <Image
                style={styles.iconImage}
                source={require("../images/icon1.png")}
              />
              <Text style={styles.text4}>Xem điểm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image
                style={styles.iconImage}
                source={require("../images/icon2.png")}
              />
              <Text style={styles.text4}>Lịch thi</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.popularBox1}>
            <TouchableOpacity style={styles.box}>
              <Image
                style={styles.iconImage}
                source={require("../images/icon3.png")}
              />
              <Text style={styles.text4}>Lớp tín chỉ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box}>
              <Image
                style={styles.iconImage}
                source={require("../images/icon4.png")}
              />
              <Text style={styles.text4}>Học liệu</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* recruit */}
      <View style={styles.recruit}>
        <View style={styles.recruitBox}>
          <Text style={styles.boldText}>Tuyển dụng</Text>
          <TouchableOpacity>
            <Text style={styles.underlinedText}>Xem tất cả</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Hot news */}
      <View style={styles.hotNews}>
        <View style={styles.hotNewsBox}>
          <Text style={styles.boldText}>Tin nổi bật</Text>
          <TouchableOpacity>
            <Text style={styles.underlinedText}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
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
  info: {
    width: windowWidth - 30,
    height: "11%",
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: "76%",
  },
  infoImage: {
    left: 17,
  },
  text2: {
    fontSize: 16,
    left: 0,
    fontWeight: "600",
  },
  infoText: {
    left: 37,
  },
  text3: {
    fontSize: 12,
  },
  popular: {
    width: windowWidth - 30,
    height: "24%",
    marginTop: 70,
    alignItems: "center",
  },
  popularText: {
    width: "100%",
    height: "13%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  underlinedText: {
    fontSize: 12,
    textDecorationLine: "underline",
    color: "#286BB8",
    fontWeight: "600",
  },
  popularBox: {
    width: "100%",
    height: "85%",
  },
  popularBox1: {
    width: "100%",
    height: "46%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  box: {
    width: "47%",
    height: "100%",
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  recruit: {
    width: windowWidth - 30,
    height: "15%",
    marginTop: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
  },
  recruitBox: {
    marginTop: 4,
    width: "96%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hotNews: {
    width: windowWidth - 30,
    height: "25%",
    marginTop: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#286BB8",
  },
  hotNewsBox: {
    marginTop: 4,
    width: "96%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
