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
    case USERNAME_CHANGED:
      return { ...state, username: action.username };
      break;
    case PASSWORD_CHANGED:
      return { ...state, password: action.password };
      break;
    case LOGIN_USER:
      console.log("LOGIN_USER");
      return { ...state, loading: true };
      break;
    case LOGIN_SUCCESS:
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        user: action.user,
        loading: false,
        username: "",
        password: ""
      };
      break;
    case LOGIN_ERROR:
      return { ...state, loading: false };
      break;
    default:
      return state;
  }
};
