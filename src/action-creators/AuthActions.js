import { USERNAME_CHANGED, PASSWORD_CHANGED } from "./types";

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
