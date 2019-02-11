import * as actionTypes from "../actions/actionTypes";
import { getSensorDataToday } from "./utilityFunctions/todayStatistics";

const initialState = {
  latestEntry: [],
  sensorOneToday: [],
  sensorTwoToday:[],
  sensorThreeToday: [],
  sensorFourToday: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //get latest entry
    case actionTypes.FETCH_LATEST_ENTRY:
      var dataEntry = action.entry.pop();
      console.log(action.entry);
      // strip data so it is compatible for the graph values
      //create object for each sensor and puts them in an array
      for (var entry in dataEntry) {
        if (dataEntry.hasOwnProperty(entry)) {
          let latestFeed = {};
          var currentEntry = Object.keys(dataEntry).map(entry => {
            return (latestFeed = {
              x: entry,
              y: dataEntry[entry]
            });
          });
          var dataEntryArray = currentEntry.slice(2, 6);
        }
      }
      return {
        ...state,
        latestEntry: dataEntryArray
      };
    //get all entries
    case actionTypes.FETCH_TODAYS_ENTRIES:
      return {
        ...state,
        sensorOneToday:getSensorDataToday(action.entries, "sensor1"),
        sensorTwoToday: getSensorDataToday(action.entries, "sensor2"),
        sensorThreeToday: getSensorDataToday(action.entries, "sensor3"),
        sensorFourToday: getSensorDataToday(action.entries, "sensor4"),

      };

    default:
      return state; // return current  state in any other case
  }
};
export default reducer;
