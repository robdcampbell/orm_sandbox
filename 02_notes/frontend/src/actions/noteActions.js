import {
  NOTE_LIST_REQUEST,
  NOTE_LIST_SUCCESS,
  NOTE_LIST_FAIL,
} from "../constants/noteConstants";
import axios from "axios";

export const listNotes = (keyword = "", pageNumber = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: NOTE_LIST_REQUEST });
    const { data } = await axios.get();

    dispatch({
      type: NOTE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NOTE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
