import { createStore, compose, applyMiddleware } from "redux";
import ReduxThunkMiddleware from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";

import rootReducer from "../reducers";

const prePopulatedState = {};
const storeEnhancer = compose(
  applyMiddleware(ReduxThunkMiddleware),
  autoRehydrate()
);

const store = createStore(rootReducer, prePopulatedState, storeEnhancer);

persistStore(store, { storage: AsyncStorage, whitelist: ["auth"] });

export default store;
