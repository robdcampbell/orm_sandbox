import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  noteListReducer,
  noteAddReducer,
  noteUpdateReducer,
  noteDeleteReducer,
} from "./reducers/notesReducers";

const reducer = combineReducers({
  noteList: noteListReducer,
  // noteAdd: noteAddReducer,
  // noteUpdate: noteUpdateReducer,
  // noteDelete: noteDeleteReducer,
});

const middleware = [thunk];

const initialState = {
  // name: "Bob",
  // email: "bob@gmail.com",
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
// LOOK AT PRODUCT LIAST REDUCER
