/* eslint-disable no-unused-vars */
export const getLatestEntry = (sensorsEntry) => {
    var dataEntry = sensorsEntry.pop();
    // strip data so it is compatible for the graph values
    //create object for each sensor and puts them in an array
    for (var entry in dataEntry) {
      if (dataEntry.hasOwnProperty(entry)) {
        let latestFeed ={};
        var currentEntry = Object.keys(dataEntry).map(entry => {
          return (latestFeed = {
            x: entry,
            y: dataEntry[entry]
          });
        });
        var dataEntryArray = currentEntry.slice(2, 6);
      }
      return dataEntryArray;
    }
}