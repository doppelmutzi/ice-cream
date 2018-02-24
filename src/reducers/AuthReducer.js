import { USERNAME_CHANGED, PASSWORD_CHANGED } from "../action-creators/types";

const INITIAL_STATE = {
  iceCream: [],
  username: "",
  password: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_CHANGED:
      return { ...state, username: action.username };
      break;
    case PASSWORD_CHANGED:
      return { ...state, password: action.password };
      break;
    default:
      return state;
  }
};
