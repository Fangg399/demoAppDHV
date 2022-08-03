import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Root from "../navigation/index"
// import ProfessorRoot from "../screens/ProfessorRoot/Root";

export default function App({ route }) {
  // const data = route.params.item;
  console.log("route+++", route);
  return <Root />;
}