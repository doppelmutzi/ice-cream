import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, Text, View } from "react-native";

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  hideText = false,
  style
}) => {
  const { containerStyles, inputStyles, labelStyles } = styles;
  return (
    <View style={[containerStyles, style]}>
      <Text style={labelStyles}>{label}</Text>
      <TextInput
        style={[inputStyles]}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        placeholder={placeholder}
        secureTextEntry={hideText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyles: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff"
  },
  inputStyles: {
    color: "#000",
    fontSize: 18,
    paddingRight: 5,
    paddingLeft: 5,
    lineHeight: 23,
    flex: 2
  },
  labelStyles: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  }
});

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  hideText: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default Input;
