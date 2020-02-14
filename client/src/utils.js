let moment = require("moment");
export function intervals(startString, endString) {
  let start = moment(startString, "hh:mm: a");
  let end = moment(endString, "hh:mm: a");

  start.minutes(Math.ceil(start.minutes() / 30) * 30);

  let result = [];

  let current = moment(start);

  while (current <= end) {
    result.push(current.format("hh:mm"));
    current.add(30, "minutes");
  }
  return result;
}
console.log(intervals("1:00:00 PM", " 10:00:00 PM"));

export function getDate(getDate) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let theCDate = new Date(getDate);
  return (
    days[theCDate.getDay()] +
    ", " +
    theCDate.getDate() +
    "-" +
    months[theCDate.getMonth()] +
    "-" +
    theCDate.getFullYear()
  );
}

export function slotTimes() {
  let num = 0;
  for (let i = 1; i <= 10; i++) {
    num += i;
  }
  return num;
}
