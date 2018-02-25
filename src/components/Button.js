import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Button extends Component {
  render() {
    const { buttonStyle, textStyle } = styles;
    const { children, style, onPress } = this.props;
    return (
      <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
        <Text style={[textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object
};

const color = "#42aaf4";

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: color,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: color,
    alignSelf: "center",
    fontSize: 18
  }
});
