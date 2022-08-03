import React, { Component, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Dropdown = ({ title, datas }) => (
  <View style={styles.container}>
    <Text style={styles.itemText}>{title}</Text>
    <SelectDropdown
      data={datas}
      defaultValueByIndex={0}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      defaultButtonText={"Lựa chọn"}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
      buttonStyle={styles.dropdownBtnStyle}
      buttonTextStyle={styles.dropdownBtnTxtStyle}
      renderDropdownIcon={(isOpened) => {
        return (
          <FontAwesome
            name={isOpened ? "chevron-up" : "chevron-down"}
            color={"#444"}
            size={14}
          />
        );
      }}
      dropdownIconPosition={"right"}
      dropdownStyle={styles.dropdownDropdownStyle}
      rowStyle={styles.dropdownRowStyle}
      rowTextStyle={styles.dropdownRowTxtStyle}
    />
  </View>
);

export default Dropdown;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "14%",
    padding: 16,
  },
  itemText: {
    marginBottom: 8,
    fontSize: 20,
  },
  dropdownBtnStyle: {
    width: "80%",
    height: 46,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdownBtnTxtStyle: {
    color: "#444",
    textAlign: "left",
  },
  dropdownDropdownStyle: {
    backgroundColor: "#EFEFEF",
  },
  dropdownRowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdownRowTxtStyle: {
    color: "#444",
    textAlign: "left",
  },
});
