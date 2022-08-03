import React, { Component, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../../../components/HeaderComponent";
import Dropdown from "../../../components/DropdownComponent";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
/* Fake data */
const data1 = [
  "2021-2022",
  "2020-2021",
  "2019-2020",
  "2018-2019",
  "2017-2018",
  "2016-2017",
  "2015-2016",
];
const data2 = ["1/1/2022-1/2/2022", "1/3/2022-1/4/2022", "1/4/2022-1/5/2022"];

export default function WeeklyCalendarScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Head */}
      <Header title="Lịch công tác tuần" />
      {/* Body */}
      <View style={styles.body}>
        <Dropdown title="Năm học" datas={data1} />
        <Dropdown title="Tuần" datas={data2} />
        <View style={styles.textAPI}>
          <Text style={styles.text1}>Thứ Hai 1/1/2022</Text>
          <Text style={styles.text2}>08:00</Text>
          <Text style={styles.text3}>Hội ý Ban giám hiệu</Text>
        </View>
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
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  textAPI: {
    padding: 6,
    height: "100%",
    width: "100%",
    marginTop: "8%",
  },
  text1: {
    backgroundColor: "green",
    fontSize: 20,
    height: 34,
    color: "#fff",
    fontWeight: "bold",
    padding: 2,
  },
  text2: {
    textAlign: "center",
    backgroundColor: "#286BB8",
    height: 30,
    width: 60,
    color: "#fff",
    fontSize: 20,
    marginLeft: 12,
    marginTop: 8,
  },
  text3: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 8,
  },
});
