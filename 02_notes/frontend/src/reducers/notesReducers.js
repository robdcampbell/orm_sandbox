import {
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
} from "../constants/noteConstants";

export const noteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTE_LIST_REQUEST:
      return { loading: true, notes: [] };
    case NOTE_LIST_SUCCESS:
      return { loading: true, notes: action.payload.notes };
    case NOTE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const noteAddReducer = (state = {}, action) => {};

export const noteUpdateReducer = (state = {}, action) => {};

export const noteDeleteReducer = (state = {}, action) => {};
