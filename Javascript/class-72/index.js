const date = new Date(); // UTC
console.log("Date", date);

console.log("Date", date.getDate());
console.log("Date", date.getDay()); // weekly day number
console.log("Date", date.getFullYear());

//local time zone
console.log("Date", date.getHours());
console.log("Date", date.getMilliseconds());
console.log("Date", date.getMinutes());
console.log("Date", date.getSeconds());
console.log("Date", date.getTime()); // milliseconds since 1970-01-01T00:00:00.000Z
console.log("Date", date.getTimezoneOffset()); // minutes between UTC and local time zone
console.log("Date", date.getUTCDate());
console.log("Date", date.getUTCDay());
console.log("Date", date.getUTCFullYear());
console.log("Date", date.getUTCHours()); // 4 hours ahead of UTC
console.log("Date", date.getUTCMilliseconds());
console.log("Date", date.getUTCMinutes());
console.log("Date", date.getUTCSeconds());
console.log("Date", date.setUTCMonth(5)); // minutes between UTC and local time zone
// console.log("Date", date.setUTCMonth()); // minutes between UTC and local time zone

const specificDateString = new Date("2024-03-25T12:00:00Z");
console.log("Specific Date String", specificDateString);

const dateFromTimestamp = new Date(1711363200000);  // miliseconds since 1970-01-01T00:00:00.000Z
console.log("Date from Timestamp", dateFromTimestamp);

const newDate = new Date(2024, 2, 25); // year, month (0-11), day
console.log("New Date", newDate);


const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log("Date", d);