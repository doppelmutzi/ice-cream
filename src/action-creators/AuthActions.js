import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "./types";

import { Actions } from "react-native-router-flux";

export const usernameChanged = username => {
  return {
    type: USERNAME_CHANGED,
    username
  };
};

export const passwordChanged = password => {
  return {
    type: PASSWORD_CHANGED,
    password
  };
};

const validateCredentialsAndReturnUser = (username, password) => ({
  username,
  age: 37
});

const loginSuccess = ({ dispatch, user }) => {
  dispatch({
    type: LOGIN_SUCCESS,
    user
  });
  Actions.main();
};

export const loginButtonPressed = (username, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_USER
    });
    const user = validateCredentialsAndReturnUser(username, password);
    // artificial delay
    setTimeout(loginSuccess.bind(null, { dispatch, user }), 3000);
  };
};
