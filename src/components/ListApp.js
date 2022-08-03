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
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ListApp = () => (
  <View style={styles.bodyContainer}>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/Logo2.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        Cổng thông tin Đại Học Vinh
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/group.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        Thư viện
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/iconApp.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        Item api
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/iconApp.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        Item api
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/iconApp.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        Item api
      </Text>
    </TouchableOpacity>
  </View>
);

export default ListApp;

const styles = StyleSheet.create({
  bodyContainer: {
    height: 180,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  btnImages: {
    flexDirection: "column",
    height: "60%",
    width: "21%",
    alignItems: "center",
    marginBottom: "3%",
    justifyContent: "space-around",
    marginRight: 10,
  },

  itemImage: {
    resizeMode: "stretch",
  },
  itemText: {
    textAlign: "center",
    fontSize: 18,
  },
});
