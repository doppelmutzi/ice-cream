import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunkMiddleware from "redux-thunk";
import { Actions } from "react-native-router-flux";
import { Platform } from "react-native";

import reducers from "./src/reducers";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./src/LoginForm";
import IceCreamList from "./src/IceCreamList";
import OrderIceCream from "./src/OrderIceCream";

export default class App extends React.Component {
  render() {
    const prePopulatedState = {};
    const storeEnhancer = applyMiddleware(ReduxThunkMiddleware);
    const loginFormTitle = "Anmelden";
    const iceCreamListTitle = "Eis Auswahl";
    const orderIceCreamTitle = "Eis bestellen";
    const navigateToOrderButtonText = "bestellen";
    let conditionalTitleStyle =
      Platform.OS === "android"
        ? {
            titleStyle: {
              alignSelf: "center",
              fontWeight: "bold",
              color: "green",
              paddingTop: 15
            }
          }
        : {};
    return (
      <Provider store={createStore(reducers, prePopulatedState, storeEnhancer)}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene
                key="login"
                component={LoginForm}
                title={loginFormTitle}
                {...conditionalTitleStyle}
              />
            </Scene>
            <Scene key="main">
              <Scene
                key="iceCreamList"
                component={IceCreamList}
                title={iceCreamListTitle}
                rightTitle={navigateToOrderButtonText}
                onRight={() => {
                  Actions.orderIceCream();
                }}
              />
              <Scene
                key="orderIceCream"
                component={OrderIceCream}
                title={orderIceCreamTitle}
              />
            </Scene>
          </Scene>
        </Router>
      </Provider>
    );
  }
}
