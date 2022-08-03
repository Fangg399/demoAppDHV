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
import Dropdown from "../../../components/DropdownComponent";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page_1 = "Page_1";
const Page_2 = "Page_2";
/* Fake data */
const data1 = ["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];

export default function WorkScreen() {
  const [page, setPage] = useState(Page_1);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Head */}
      <Header title="Công việc" />
      {/* Body */}
      <View style={styles.bodyDropdown}>
        <Dropdown title="Công việc năm" datas={data1} />
        <TouchableOpacity style={styles.btnAdd}>
          <Text style={styles.text1}>Thêm công việc</Text>
        </TouchableOpacity>
        {/* select */}
        <View style={styles.bodySelect}>
          <View style={styles.pages}>
            <TouchableOpacity
              style={styles.page}
              onPress={() => {
                setPage(Page_1);
              }}
              disabled={page === Page_1 ? true : false}
            >
              <Text style={page === Page_1 ? styles.text2 : styles.text3}>
                TÔI GIAO
              </Text>
              {page === Page_1 ? (
                <View style={styles.line}></View>
              ) : (
                <View style={styles.line2}></View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.page}
              onPress={() => {
                setPage(Page_2);
              }}
              disabled={page === Page_2 ? true : false}
            >
              <Text style={page === Page_2 ? styles.text2 : styles.text3}>
                CẦN LÀM
              </Text>
              {page === Page_2 ? (
                <View style={styles.line}></View>
              ) : (
                <View style={styles.line2}></View>
              )}
            </TouchableOpacity>
          </View>
          {/* List of notifications */}
          <View style={styles.lists}>
            {page === Page_1 ? <Page1Component /> : null}
            {page === Page_2 ? <Page2Component /> : null}
          </View>
        </View>
      </View>
    </View>
  );
}
const Page1Component = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.text4}>THEO DÕI</Text>
      <TouchableOpacity style={styles.btnBox}>
        <Text style={styles.text5}>Đang triển khai</Text>
        <FontAwesome name="chevron-down" color={"#444"} size={12} />
      </TouchableOpacity>
    </View>
  );
};
const Page2Component = () => {
  return <View></View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#286BB8",
  },
  bodyDropdown: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  btnAdd: {
    backgroundColor: "#0A9D8F",
    height: 38,
    width: "42%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    marginVertical: "3%",
  },
  text1: {
    fontSize: 20,
    color: "#fff",
  },
  bodySelect: {
    flex: 1,
  },
  pages: {
    width: "100%",
    height: "7%",
    marginVertical: 10,
    flexDirection: "row",
    marginHorizontal: 16,
  },
  page: {
    height: "100%",
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    position: "absolute",
    top: 0,
    height: 3,
    width: "100%",
    backgroundColor: "#286BB8",
  },
  line2: {
    position: "absolute",
    top: 0,
    height: 3,
    width: "100%",
    backgroundColor: "#E6EAF5",
  },
  text2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#286BB8",
  },
  text3: {
    fontSize: 20,
    color: "#444",
  },

  btnBox: {
    flexDirection: "row",
    height: "24%",
    width: "40%",
    marginTop: 16,
    backgroundColor: "#E6EAF5",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text4: {
    fontSize: 20,
    color: "#444",
  },
  text5: {
    fontSize: 16,
    color: "#444",
  },
  lists: {
    flex: 1,
    width: "100%",
    marginHorizontal: 16,
  },
});
