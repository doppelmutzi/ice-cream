import * as actionTypes from "./types";

export default (userName, password) => {
  return {
    type: actionTypes.LOGIN,
    credentials: { userName, password }
  };
};
