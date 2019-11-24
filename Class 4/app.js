function calculateDate() {
  var now = new Date();
  var theHr = now.getHours();
  var theMin = now.getMinutes();
  console.log("time: " + theHr + ":" + theMin);
}

// calculateDate();

function printTable() {
  for (var i = 0; i <= 10; i++) {
    console.log(2 * i);
  }
}

// printTable();

//Type of functions 1) Parameterized 2) Non-parameterized

//Parameterized
function calculateNumbers(num1, num2) {
  console.log(num1 + num2);
}

// calculateNumbers(5, 9);

function sayHi(name) {
  console.log("Hi ", name);
}

// var username = prompt("Enter your name!");
// sayHi(username);

function controlDecimal(numbers) {
  console.log(numbers.toFixed(1));
}

// controlDecimal(27.3123);

function multipleArguments(one, two, three) {
  console.log(one, two, three);
}

// multipleArguments(1, 2, 3);

function calculateDynamics(n1, n2) {
  var result = n1 * n2 + n2 / n1;
  return result;
}

// var output = calculateDynamics(10, 20);

// console.log(output);

function checkAge(age) {
  if (age == 10) {
    return;
    console.log("youre 10");
  } else {
    return;
    console.log("etc");
  }
}

// checkAge(11);

function returnPrice(price) {
  return price + calculatePrice(price);
}

function calculatePrice(price) {
  return price + 100;
}

var myPrice = returnPrice(120);
// console.log("TCL: myPrice", myPrice);

var multiplications;

function doMultiply() {
  multiplications = 2 * 7;
}

doMultiply();

// console.log("TCL: multiplications", multiplications);

//Switch Statements

var weekDay = "Sunday";

// if (weekDay == "Sunday" || weekDay == "Saturday") {
//   console.log("It's weekend");
// } else if (weekDay == "Monday") {
//   console.log("It's Monday");
// } else {
//   console.log("week days");
// }

// switch (weekDay) {
//   case "Sunday":
//     console.log("sunday");
//     break;

//   case "Saturday":
//     console.log("saturday");
//     break;

//   case "Monday":
//     console.log("monday");
//     break;

//   default:
//     console.log("other days");
// }

//While Loops

for (var i = 0; i < 10; i++) {
  //   console.log("hi");
}

var index = 10;

while (index < 15) {
  //   console.group("hi");
  index++;
}
