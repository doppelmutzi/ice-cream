import { LOGIN } from "../action-creators/types";

const INITIAL_STATE = {
  iceCream: [],
  user: "Hans"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.credentials.userName };
    default:
      return state;
  }
};
