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
const Page_1 = "Page_1";
const Page_2 = "Page_2";
const Page_3 = "Page_3";

export default function Notify() {
  const [page, setPage] = useState(Page_1);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Background+logo */}
      <View style={styles.background}>
        <Image
          style={styles.logo}
          source={require("../../../assets/images/Logo2.png")}
        />
        <Text style={styles.text1}>Thông báo</Text>
      </View>
      {/* Pages */}
      <View style={styles.pages}>
        <TouchableOpacity
          style={styles.page}
          onPress={() => {
            setPage(Page_1);
          }}
          disabled={page === Page_1 ? true : false}
        >
          <Text style={page === Page_1 ? styles.text2 : styles.text3}>
            Thông báo chung
          </Text>
          {page === Page_1 ? <View style={styles.line}></View> : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.page}
          onPress={() => {
            setPage(Page_2);
          }}
          disabled={page === Page_2 ? true : false}
        >
          <Text style={page === Page_2 ? styles.text2 : styles.text3}>
            Lớp tín chỉ
          </Text>
          {page === Page_2 ? <View style={styles.line}></View> : null}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.page}
          onPress={() => {
            setPage(Page_3);
          }}
          disabled={page === Page_3 ? true : false}
        >
          <Text style={page === Page_3 ? styles.text2 : styles.text3}>
            Lớp hành chính
          </Text>
          {page === Page_3 ? <View style={styles.line}></View> : null}
        </TouchableOpacity>
      </View>
      {/* List of notifications */}
      <View style={styles.lists}>
        {page === Page_1 ? <Page1Component /> : null}
        {page === Page_2 ? <Page2Component /> : null}
        {page === Page_3 ? <Page3Component /> : null}
      </View>
    </View>
  );
}
const Page1Component = () => {
  return (
    <View style={styles.boxs}>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconImage}
          source={require("../../../assets/images/Logo2.png")}
        />
        <Text style={styles.text4}>Lớp tín chỉ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconImage}
          source={require("../../../assets/images/Logo2.png")}
        />
        <Text style={styles.text4}>Lớp tín chỉ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconImage}
          source={require("../../../assets/images/Logo2.png")}
        />
        <Text style={styles.text4}>Thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconImage}
          source={require("../../../assets/images/Logo2.png")}
        />
        <Text style={styles.text4}>Thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconImage}
          source={require("../../../assets/images/Logo2.png")}
        />
        <Text style={styles.text4}>Thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconImage}
          source={require("../../../assets/images/Logo2.png")}
        />
        <Text style={styles.text4}>Thông báo</Text>
      </TouchableOpacity>
      <Text>Chờ API 1....</Text>
    </View>
  );
};
const Page2Component = () => {
  return (
    <View>
      <Text>Chờ API 2....</Text>
    </View>
  );
};
const Page3Component = () => {
  return (
    <View>
      <Text>Chờ API 3....</Text>
    </View>
  );
};
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
    right: "4%",
    bottom: "10%",
  },
  text1: {
    color: "#fff",
    position: "absolute",
    fontSize: 22,
    left: "4%",
    bottom: "10%",
  },
  pages: {
    width: "100%",
    height: "6.5%",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  page: {
    height: "100%",
    width: "33.3333%",
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    position: "absolute",
    bottom: 0,
    height: 3,
    width: "100%",
    backgroundColor: "#286BB8",
  },
  text2: {
    fontSize: 12,
    color: "#000",
  },
  text3: {
    fontSize: 12,
    color: "#9B9B9B",
  },
  lists: {
    flex: 1,
    width: "100%",
  },
  boxs: {
    flex: 1,
  },
  box: {
    borderWidth: 1,
    width: "100%",
    height: "24%",
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
