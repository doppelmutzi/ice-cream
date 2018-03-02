import React from "react";
import { Provider } from "react-redux";
import { Platform } from "react-native";
import { Actions, Scene, Router } from "react-native-router-flux";

import store from "./src/store";
import LoginForm from "./src/LoginForm";
import IceCreamList from "./src/IceCreamList";
import OrderIceCream from "./src/OrderIceCream";

export default class App extends React.Component {
  render() {
    const loginFormTitle = "Anmelden";
    const iceCreamListTitle = "Eis Auswahl";
    const orderIceCreamTitle = "Eis bestellen";
    const navigateToOrderButtonText = "bestellen";
    let androidSpecificProps =
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
      <Provider store={store}>
        <Router>
          <Scene key="root" hideNavBar>
            <Scene key="auth">
              <Scene
                key="login"
                component={LoginForm}
                title={loginFormTitle}
                {...androidSpecificProps}
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
