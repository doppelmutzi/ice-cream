import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import Button from "./components/Button";

class Login extends Component {
  render() {
    return <Button label={this.props.user} />;
  }
}

Login.propTypes = {
  user: PropTypes.string
};

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Login);
