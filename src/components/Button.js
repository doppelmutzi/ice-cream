import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ label }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    alignSelf: "center"
  }
});

export default Button;
