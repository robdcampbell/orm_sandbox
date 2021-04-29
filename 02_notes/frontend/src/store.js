import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const middleware = [thunk];

const initialState = {
  name: "Bob",
  email: "bob@gmail.com",
};

const store = createStore(reducer);
