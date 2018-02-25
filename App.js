import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from "redux-thunk";

import reducers from "./src/reducers";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./src/LoginForm";
import IceCreamList from "./src/IceCreamList";

export default class App extends React.Component {
  render() {
    const prePopulatedState = {};
    const storeEnhancer = applyMiddleware(ReduxThunkMiddleware);
    const loginFormTitle = "Anmelden";
    const iceCreamListTitle = "Eis Auswahl";
    return (
      <Provider store={createStore(reducers, prePopulatedState, storeEnhancer)}>
        <Router>
          <Scene key="root">
            <Scene key="login" component={LoginForm} title={loginFormTitle} />
            <Scene
              key="iceCreamList"
              component={IceCreamList}
              title={iceCreamListTitle}
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
