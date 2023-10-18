import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Customers() {
  return (
    <View style={styles.background}>
      <View></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "lightgrey",
    flex: 1,
    padding: 20,
  },
});
