import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class Button extends Component {
  render() {
    const { buttonStyle, textStyle } = styles;
    const { children } = this.props;
    const customStyles = this.props.style;
    return (
      <TouchableOpacity style={buttonStyle}>
        <Text style={[textStyle, customStyles]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  style: PropTypes.object
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
