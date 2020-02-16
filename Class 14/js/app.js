var arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  ["Abc"],
  ["Xyz"],
  ["Etc"],
  ["..."]
];

var strings = [];
var numbers = [];
var boolean = [];
var objects = [];

for(var i=0; i<arr.length; i++){
    if(typeof(arr[i]) === 'string'){
        strings.push(arr[i])
    }

    if(typeof(arr[i]) === 'number'){
        numbers.push(arr[i])
    }

    if(typeof(arr[i]) === 'boolean'){
        boolean.push(arr[i])
    }

    if(typeof(arr[i]) === 'object'){
        objects.push(arr[i])
    }
}

var chunks = [strings , numbers , boolean , objects]
// console.log("TCL: chunks", chunks)


// var item1 = prompt("enter item one")
// var item1Price = prompt("enter item one price")
// var item1Quantity = prompt("enter item one quantity")
// var item1Cost = item1Price * item1Quantity;

// var item2 = prompt("enter item two")
// var item2Price = prompt("enter item two price")
// var item2Quantity = prompt("enter item two quantity")
// var item2Cost = item2Price * item2Quantity;

// var shippingCharges = prompt("enter shipping charges")

// var totalCost = item1Cost + item2Cost
// var discountedPrice = 0;

// if(totalCost >= 2000){
//     discountedPrice = totalCost * 0.10
// }

// if(discountedPrice){
//     totalCost = totalCost - discountedPrice
// }

// console.log("TCL: shippingCharges", shippingCharges)
// console.log("totalCost",totalCost)
// console.log("discountedPrice",discountedPrice)


// var secrect = 7;

// var guess = +prompt("guess the number b/w 1-10");

// if(guess === secrect){
//     console.log("correct answer")
// }else if(guess + 1 === secrect){
//     console.log("close enough")
// }else if(guess - 1 === secrect){
//     console.log('close enough')
// }else{
//     console.log("try again")
// }

// var n = +prompt("enter number");

// if(n%3 === 0){
//     console.log("divided")
// }else{
//     console.log("not divided")
// }







