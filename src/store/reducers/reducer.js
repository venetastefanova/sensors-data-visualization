import * as actionTypes from "../actions/actionTypes";

const initialState = {
  entries: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_DATA:
      var dataEntry = action.entries;
      // strip data so it is compatible for the graph values
      //create object for each sensor and puts them in an array
      for (var entry in dataEntry) {
        if (dataEntry.hasOwnProperty(entry)) {
          let result = {};
          var out = Object.keys(dataEntry).map(entry => {
            return (result = {
              x: entry,
              y: dataEntry[entry]
            });
          });
          var dataEntryArray = out.slice(2, 6);
        }
      }
      return {
        ...state,
        entries: dataEntryArray
      };
    default:
      return state; // return current  state in any other case
  }
};
export default reducer;
