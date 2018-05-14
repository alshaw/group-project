import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import drinksReducer from "./drinks";

const store = createStore(combineReducers({ drinks: drinksReducer }), applyMiddleware(thunk))

store.subscribe(() => console.log(store.getState()));

export default store;