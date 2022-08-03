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

export default function NotificationScreen() {
  const [page, setPage] = useState(Page_1);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      {/* Head */}
      <View style={styles.background}>
        <TouchableOpacity style={styles.iconMenu}>
          <Image source={require("../../../assets/images/menu.png")} />
        </TouchableOpacity>

        <TextInput
          style={styles.inputSearch}
          placeholder="
              Tìm kiếm nhanh"
        />
        <Image
          style={styles.iconSearch}
          source={require("../../../assets/images/icon-tracuu.png")}
        />
        <Image
          style={styles.logo}
          source={require("../../../assets/images/Logo2.png")}
        />
      </View>
      {/* Container */}
      <View style={styles.pages}>
        <TouchableOpacity
          style={styles.page}
          onPress={() => {
            setPage(Page_1);
          }}
          disabled={page === Page_1 ? true : false}
        >
          <Text style={page === Page_1 ? styles.text2 : styles.text3}>
            ĐÃ NHẬN
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
            ĐÃ GỬI
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
        <View style={styles.textChat}>
          <Text style={styles.text4}>Lê Văn A</Text>
          <Text style={styles.text5}>Test</Text>
          <Text style={styles.text5}>hi</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconAdd}
          source={require("../../../assets/images/add-icon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};
const Page2Component = () => {
  return (
    <View style={styles.boxs}>
      <TouchableOpacity style={styles.box}>
        <Image
          style={styles.iconImage}
          source={require("../../../assets/images/Logo2.png")}
        />
        <View style={styles.textChat}>
          <Text style={styles.text4}>Lê Văn B</Text>
          <Text style={styles.text5}>Test2</Text>
          <Text style={styles.text5}>hii</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#286BB8",
  },
  background: {
    marginTop: "6%",
    width: "100%",
    height: windowHeight / 12,
    backgroundColor: "#286BB8",
    justifyContent: "center",
    alignItems: "center",
  },
  iconMenu: {
    position: "absolute",
    resizeMode: "stretch",
    left: "4%",
  },
  inputSearch: {
    backgroundColor: "#fff",
    color: "#286BB8",
    borderRadius: 8,
    height: "60%",
    width: "64%",
    padding: 8,
  },
  iconSearch: {
    height: 20,
    width: 20,
    position: "absolute",
    resizeMode: "stretch",
    right: "20%",
  },
  logo: {
    position: "absolute",
    resizeMode: "stretch",
    right: "4%",
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
    width: "50%",
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
  line2: {
    position: "absolute",
    bottom: 0,
    height: 3,
    width: "100%",
    backgroundColor: "#E6EAF5",
  },
  text2: {
    fontSize: 20,
    color: "#000",
  },
  text3: {
    fontSize: 20,
    color: "#9B9B9B",
  },
  text4: {
    fontSize: 18,
  },
  lists: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
  boxs: {
    flex: 1,
  },
  box: {
    width: "100%",
    height: windowHeight / 6,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  iconAdd: {
    resizeMode: "stretch",
    top: "80%",
    marginLeft: "80%",
  },
  iconImage: {
    resizeMode: "stretch",
    left: "4%",
    top: "2%",
  },
  textChat: {
    height: "80%",
    width: "70%",
    marginLeft: "6%",
    marginTop: "2%",
  },
});
