import { REHYDRATE } from "redux-persist/constants";
import {
  USERNAME_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from "../action-creators/types";

const INITIAL_STATE = {
  iceCream: [],
  username: "",
  password: "",
  user: undefined,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REHYDRATE:
      const { username } = action.payload.auth;
      console.log(action.payload.auth);
      return { username, password: "" };
    case USERNAME_CHANGED:
      return { ...state, username: action.username };
    case PASSWORD_CHANGED:
      return { ...state, password: action.password };
    case LOGIN_USER:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      console.log(state);
      return {
        ...state,
        user: action.user,
        loading: false,
        password: ""
      };
    case LOGIN_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
};
