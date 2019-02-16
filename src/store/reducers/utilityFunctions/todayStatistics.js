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
      .filter(sensorDate => {
        return new Date(sensorDate.x).getDate() === new Date().getDate();
      })
      .map(sensorDateValue => {
        return (todaySensorOne = {
          x: new Date(sensorDateValue.x).getHours(),
          y: sensorDateValue.y
        });
      }));
  }
};
