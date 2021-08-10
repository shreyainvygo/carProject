import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DisplayType = (props) => {
  const {headerName, orientation}=props;
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} ></View>
      <View style={{ flex: 2, backgroundColor: "darkorange" }} ></View>
      <View style={{ flex: 3, backgroundColor: "green" }} ></View>
    </View>
  );
};



export default Flex;