import React from "react";
import { Scene, Router } from "react-native-router-flux";
import Login from "./Login";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} title="Login" />
        </Scene>
      </Router>
    );
  }
}
