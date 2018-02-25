import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import Button from "./components/Button";
import Input from "./components/Input";

import {
  usernameChanged,
  passwordChanged,
  loginButtonPressed
} from "./action-creators/AuthActions";

class LoginForm extends Component {
  usernameChange(text) {
    this.props.usernameChanged(text);
  }

  passwordChange(text) {
    this.props.passwordChanged(text);
  }

  renderButton() {
    const { loading, loginButtonPressed, username, password } = this.props;
    const marginTop = 30;
    if (loading) {
      return (
        <ActivityIndicator style={{ marginTop }} size="large" color="#0000ff" />
      );
    }
    return (
      <Button
        style={{ marginTop }}
        onPress={() => {
          loginButtonPressed(username, password);
        }}
      >
        anmelden
      </Button>
    );
  }

  render() {
    const { containerStyles } = styles;
    const { username, password, loginButtonPressed, user } = this.props;
    return (
      <View style={containerStyles}>
        <Input
          label="username"
          placeholder="user@gmail.com"
          onChangeText={this.usernameChange.bind(this)}
          value={username}
        />
        <Input
          style={{ marginTop: 10 }}
          label="password"
          onChangeText={this.passwordChange.bind(this)}
          value={password}
          hideText
        />
        {this.renderButton()}
      </View>
    );
  }
}

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  usernameChanged: PropTypes.func.isRequired,
  passwordChanged: PropTypes.func.isRequired,
  loginButtonPressed: PropTypes.func.isRequired,
  loading: PropTypes.bool
};

const styles = StyleSheet.create({
  containerStyles: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, {
  usernameChanged,
  passwordChanged,
  loginButtonPressed
})(LoginForm);
