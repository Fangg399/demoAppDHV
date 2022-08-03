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

const ListHome = () => (
  <View style={styles.bodyContainer}>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/Logo2.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        Điểm danh
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/Logo2.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        API
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/Logo2.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        API
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/Logo2.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        API
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnImages}>
      <Image
        style={styles.itemImage}
        source={require("../../src/assets/images/Logo2.png")}
      />
      <Text style={styles.itemText} numberOfLines={2}>
        API
      </Text>
    </TouchableOpacity>
  </View>
);

export default ListHome;

const styles = StyleSheet.create({
  bodyContainer: {
    height: 180,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "space-between",
  },
  btnImages: {
    borderWidth: 1,
    borderColor: "#286BB8",
    flexDirection: "column",
    height: "56%",
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
