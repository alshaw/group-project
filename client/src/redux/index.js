import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import drinkReducer from "./drinks";

const store = createStore(combineReducers({ drinks: drinkReducer }), applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()));

export default store;