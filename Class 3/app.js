var n1 = 2.123;
var n2 = -2.123;
// var n1result = Math.round(n1);
// var n2result = Math.round(n2);
// console.log("TCL: n1result", n2result);

var n3 = 2.51;
var n4 = 2.49;

// console.log(Math.round(n3));

var n5 = 2.77;
var n6 = -2.11;

// console.log(Math.floor(n6));

var n7 = 2.33;
var n8 = -2.33;

// console.log(Math.ceil(n8));

var n9 = Math.random(); //default range 0 => 1
// console.log("TCL: n9", n9);

var n10 = Math.random() * 8;
// console.log(Math.round(n8));

var n11 = "123";

var n12 = "123.123";

// console.log(parseInt(n11));

// console.log(parseFloat(n12));

// console.log(Number(n12));

var n13 = 123;

// console.log(n13.toString());

var n14 = 123.123123213213123123123;
// console.log(n14.toFixed(1));

//DATE & TIME

var currentDate = new Date();
// console.log("TCL: currentDate", currentDate.toString().slice(0, 10));

// console.log(currentDate.getDay());

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
// console.log("TCL: nameOfToday", nameOfToday);

// console.log(currentDate.getMonth() + 1);

// console.log(currentDate.getFullYear());
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());

// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());

var oldDate = new Date().getTime() - 100000000;
// console.log("TCL: oldDate", oldDate);

// console.log(new Date(oldDate));

// var doomsday = new Date("June 14, 2035");
// console.log("TCL: doomsday", doomsday);

currentDate.setFullYear(2026, 4, 17);
currentDate.setHours(15);
currentDate.setMinutes(56);
currentDate.setUTCMilliseconds(999);

// console.log(currentDate);
