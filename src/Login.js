import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";

import Button from "./components/Button";
import Input from "./components/Input";

import {
  usernameChanged,
  passwordChanged
} from "./action-creators/AuthActions";

class Login extends Component {
  usernameChange(text) {
    this.props.usernameChanged(text);
  }

  passwordChange(text) {
    this.props.passwordChanged(text);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Input
          label="username:"
          placeholder="user@gmail.com"
          onChangeText={this.usernameChange.bind(this)}
          value={this.props.username}
        />
        <Input
          label="password:"
          onChangeText={this.passwordChange.bind(this)}
          value={this.props.password}
          hideText
        />
        <Button style={{ color: "red" }}>label</Button>
      </View>
    );
  }
}

Login.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  usernameChanged: PropTypes.func,
  passwordChanged: PropTypes.func
};

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { usernameChanged, passwordChanged })(
  Login
);
