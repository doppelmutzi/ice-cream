import React, { Component } from "react";
import PropTypes from "prop-types"; // ES6
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.login}</Text>
      </View>
    );
  }
}

Login.propTypes = {
  login: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    login: state.auth
  };
};

export default connect(mapStateToProps)(Login);
