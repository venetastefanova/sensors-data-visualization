import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchLatestEntry = entry => {
  return {
    type: actionTypes.FETCH_LATEST_ENTRY,
    entry: entry
  };
};

export const fetchDataFail = () => {
  return {
    type: actionTypes.FETCH_DATA_FAIL
  };
};
export const fetchAllEntries = entries => {
  return {
    type: actionTypes.FETCH_TODAYS_ENTRIES,
    entries: entries
  };
};
export const initData = () => {
  return dispatch => {
    // coming from redux thunk
    axios
      .get("http://68.183.46.64:3000/sensors-data")
      .then(response => {
        dispatch(fetchLatestEntry(response.data)); //get the latest entry
        dispatch(fetchAllEntries(response.data)); //get the latest entry
      })
      .catch(error => {
        dispatch(fetchDataFail());
      });
  };
};
