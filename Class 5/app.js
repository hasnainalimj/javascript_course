function callMe() {
  console.log("hi");
}

// callMe();

function sum(n1, n2) {
  console.log(n1 + n2);
}

// sum(6 , 8);

function retunFunction() {
  var name = "Faizan";

  return name;
}

// var result = retunFunction();

// console.log(result);

//For Loop

// for(var i=0; i<10; i++){
//   console.log(i);
// }

//While Loop
// var i=0;
// while(i<10){
//   console.log(i);
//   i++
// }

//Do While Loop
// var i=0;
// do{
//   console.log("run");
//   i++;
// }while( i < 0)

//EVENTS

function sayHi() {
  alert("Hi");
}

function makeFieldWhite(element) {
  console.log("TCL: makeFieldWhite -> element", element);
  element.style.backgroundColor = "white";
}

function makeFieldYellow(element) {
  console.log("TCL: makeFieldYellow -> element", element);
  element.style.backgroundColor = "yellow";
}

function checkAddress() {
  var txtEmail = document.getElementById("email").value;
  if (txtEmail == "") {
    alert("Can't be empty!");
  } else {
    alert("Perfect");
  }
  // txtEmail.style.color = "red";
}

function getSim() {
  var code = document.getElementById("code").value;
  var sim = document.getElementById("sim");

  if (code == "0310") {
    sim.value = "Zong";
  } else if (code == "0300") {
    sim.value = "Jazz";
  } else if (code == "0333") {
    sim.value = "Ufone";
  } else {
    sim.value = "Telenor";
  }
}
