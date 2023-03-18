import * as React from "react";
import { View, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
//import MenuItems from "./components/MenuItems";
//import FeedbackForm from "./components/FeedbackForm";
//import FeedbackFormOne from "./components/FeedbackFormOne";
//import LoginScreen from "./components/LoginScreen";
import LoginScreenOne from "./components/LoginScreenOne";
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreenOne />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
      <View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
});
