import { loginReducer } from "./Login/reducer";
import { createStore, combineReducers } from "redux";

const reducer = combineReducers({
    login: loginReducer
});

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

