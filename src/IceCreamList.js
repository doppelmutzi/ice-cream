import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

const IceCreamList = () => {
  return (
    <View style={styles.containerStyles}>
      <Text>Eis Auswahl View</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default IceCreamList;
