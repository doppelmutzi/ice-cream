import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./src/reducers";
import { Scene, Router } from "react-native-router-flux";
import Login from "./src/Login";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Router>
          <Scene key="root">
            <Scene key="login" component={Login} title="Login" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
