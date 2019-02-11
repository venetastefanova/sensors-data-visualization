import * as actionTypes from "../actions/actionTypes";
import { getSensorDataToday } from "./utilityFunctions/todayStatistics";
import { getLatestEntry } from "./utilityFunctions/latestEntry";

const initialState = {
  latestEntry: [],
  sensorOneToday: [],
  sensorTwoToday: [],
  sensorThreeToday: [],
  sensorFourToday: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //get latest entry
    case actionTypes.FETCH_LATEST_ENTRY:
      return {
        ...state,
        latestEntry: getLatestEntry(action.entry)
      };
    //get all entries
    case actionTypes.FETCH_TODAYS_ENTRIES:
      return {
        ...state,
        sensorOneToday: getSensorDataToday(action.entries, "sensor1"),
        sensorTwoToday: getSensorDataToday(action.entries, "sensor2"),
        sensorThreeToday: getSensorDataToday(action.entries, "sensor3"),
        sensorFourToday: getSensorDataToday(action.entries, "sensor4")
      };

    default:
      return state; // return current  state in any other case
  }
};
export default reducer;
