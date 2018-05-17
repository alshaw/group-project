import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import drinksReducer from "./drinks";
import authReducer from "./auth";

const store = createStore(
    combineReducers({ 
        drinks: drinksReducer,
        user: authReducer
     }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)

store.subscribe(() => console.log(store.getState()));

export default store;