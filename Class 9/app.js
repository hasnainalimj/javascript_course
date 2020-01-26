// var emp1 = {
//   name : "Hasnain Ali",
//   email : "hasnain@gmail.com"
// }

// var emp2 = {
//   name : "Hasnain Ali",
//   email : "hasnain@gmail.com"
// }

// var emp3 = {
//   name : "Hasnain Ali",
//   email : "hasnain@gmail.com"
// }

// var emp4 = {
//   name : "Hasnain Ali",
//   email : "hasnain@gmail.com"
// }

// var emp5 = {
//   name : "Hasnain Ali",
//   email : "hasnain@gmail.com"
// }

// function call(){ // simple function

// }

// function Creater(){ //constructor function

// }

function GenerateEmployees(name, email) {
  this.name = name
  this.email = email
}

var emp1 = new GenerateEmployees("Hasnain Ali", "mjhasnain15@gmail.com");
var emp2 = new GenerateEmployees("Faizan Pervaiz", "faizan@gmail.com");
// console.log("TCL: emp1", emp1)
// console.log("TCL: emp2", emp2)

function Factory(title, price, type) {
  this.title = title
  this.price = price
  this.type = type
}

var p1 = new Factory('Lays', 20, 'Chips')
p1.madeBy = "Pakistan"
delete p1.madeBy
// console.log("TCL: p1", p1)
var p2 = new Factory('Pepsi', 50, 'Drinks')
// console.log("TCL: p2", p2)
var p3 = new Factory('Burger', 150, 'Fast Food')
// console.log("TCL: p3", p3)


// Constructor for methods

function Plans(title, price, discountMonths, showTitle) {
  this.title = title
  this.price = price
  this.discountMonths = discountMonths
  this.calcDiscount = function (discountMonths) {
    console.log("called")
  }
  // this.showTitle = showTitle
}

//Proto Types
Plans.prototype.doSomething = function(){
  console.log("that's a default key for all objects");
}

Plans.prototype.branding = "Etc"

var plan1 = new Plans("Basic", 3.99, [2, 3], function () { console.log(this.title) })
// console.log("TCL: plan1", plan1)
plan1.__proto__.doSomething()
// plan1.calcDiscount()
// console.log("TCL: plan1", plan1)
// plan1.showTitle()
var plan2 = new Plans("Pro", 6.99, [4, 5], function () { console.log(this.title) })
// console.log("TCL: plan2", plan2)
// console.log("TCL: plan2", plan2)
// plan2.showTitle()
var plan3 = new Plans("Ultimate", 9.99, [11, 12], function () { console.log(this.title) })
// console.log("TCL: plan3", plan3)
// console.log("TCL: plan3", plan3)
// plan3.showTitle()


var data = {
  bytes : "2GB",
  transfering : "100MBPS"
}

var isCheck = "bytes" in data;
// console.log("TCL: isCheck", isCheck)
var isCheck2 = "pages" in data; // return true / false
// console.log("TCL: isCheck2", isCheck2)
if("milestone" in data){
  console.log("true")  
}else{
  data.milestone = "1st"
}

// console.log("TCL: data", data)

var result = data.hasOwnProperty("bytes"); //return true / false
console.log("TCL: result", result)
var result2 = data.hasOwnProperty("bytessss");
console.log("TCL: result2", result2)


// window.location.href // return where we are at

// window.location.hostname // return domain name

// window.location.pathname //return route of your page

// window.location.hash // return bookmark place

// window.location.href = "https://www.google.com" // navigate to where

//you can write location.href instead of window.location.href

// window.location.assign("http://www.google.com"); // navigate to where

// window.location.replace("http://www.me.com/lojack.html#guarantee"); replace your current url

// window.location.reload(); //reload

// history.back(); // go to back

// history.forward(); // go to forward

// history.go(-3); // go back according to steps

// history.go(3); // go forward according to steps

// history.back(); // back to recent url

//history.forward(); //forward to next url

// window.refferer // return urls where you can come from

// window.open(); // open new tab

// var monkeyWindow = window.open();
// var windowContent = "<h1>Capuchin monkey</h1><img src= 'monkey.jpg'><p>The word capuchin derives from agroup of friars<br>named the Order of Friars Minor Capuchin who wear<br>brown robes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent); // open new windows with text

//monkeyWindow.close(); //close monkey window

// var monkeyWindow = window.open("monk.html", "win1"); // new window

// var monkeyWindow = window.open("monk.html", "win1", "width=420,height=380"); // open new window with specific width/height

// var w = window.open("", "", "width=420,height=380,left=200,top=100"); //set position

