const moment = require("moment");

// Jan 1st 1970 00:00:00 am

// let date = new Date();
// console.log(date.getMonth());

// let date = moment();
// date.add(1, 'y').subtract(9, 'months')
// console.log(date.format('DD-MMMM-YYYY hh:mm:ss'))

// hour:minute am
let date = moment();
console.log(date.format("h:mm a"))

let someTimestamp = moment().valueOf();
console.log(someTimestamp)