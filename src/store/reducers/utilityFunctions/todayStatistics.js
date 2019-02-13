/* eslint-disable no-unused-vars */
export const getSensorDataToday = (dataEntries, sensorName) => {
  for (var singleEntry in dataEntries) {
    let todaySensorOneEntries = {};
    let todaySensorOne = {};
    var sensorOne = {};
    return (sensorOne = Object.keys(dataEntries)
      .map(sensor => {
        return (todaySensorOneEntries = {
          x: dataEntries[sensor]["date"],
          y: dataEntries[sensor][sensorName]
        });
      })
      .filter(obj => {
        return new Date(obj.x).getDate() === new Date().getDate();
      })
      .map(obj2 => {
        return (todaySensorOne = {
          x: new Date(obj2.x).getHours(),
          y: obj2.y
        });
      }));
  }
};
