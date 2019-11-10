var pets = ["Abc"];

pets[0] = "Parrot";

pets[1] = "Cow";
pets[2] = "Cat";

//1) Push //add at the end
//2) Pop // delete at the end
//3) Unshift // add at the begin
//4) Shift // delete at the begin
//5) Splice //

pets.push("Dog");
pets.push("Momo", "Eagle");

pets.pop();

pets.unshift("A");
pets.unshift("B", "C");

pets.shift();

pets.splice(1, 0, "Xyz");

pets.splice(3, 2, "Tota");

pets.splice(0, 0, "jadoo", "King");

pets.splice(0, 2);

// console.log("TCL: pets", pets);

var nation = "Pakistan";

// for (var i = 1; i <= 100; ++i) {
//   console.log(nation);
// }

var cities = ["Karachi", "Lahore", "Islamabad", "Karachi", "Sukkur"];
// console.log(cities[3]);
//5
// for (var i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

var karachiFound = false;

// for (var i = 0; i < cities.length; i++) {
//   if (cities[i] == "Karachi") {
//     karachiFound = true;
//     break;
//   }
// }

// if (karachiFound) {
//   console.log("mil gaya");
// } else {
//   console.log("nhi mila");
// }

// for (var i = 1; i <= 3; i++) {
//   for (var j = 1; j <= 3; j++) {
//     console.log(i + "." + j);
//   }
// }

var a = "PAKISTAN";
var b = "pAkIsTaN";

// console.log(a.toLowerCase());
// console.log(b.toUpperCase());

var message = "Hello man how are you hope you are doing well?";

var output = message.slice(0, 8);
// var output = message.slice(0, 17);
// var output = message.slice(8);

// console.log("TCL: output", output + "...");

// var fullname = "hasnain ali";
// var firstChar = fullname.slice(0, 1).toUpperCase();
// var otherChars = fullname.slice(1);
// var complteName = firstChar + otherChars;
// console.log("TCL: complteName", complteName);

// var text = prompt("Enter your text");

// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 2) == "  ") {
//     alert("no double space allowed!");
//     break;
//   }
// }

var content =
  "The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog";

// console.log(content.slice(10, 10 + 5));
// for (var i = 0; i < content.length; i++) {
//   if (content.slice(i, i + 5) == "brown") {
//     content = content.slice(0, i) + "red" + content.slice(i + 5);
//   }
// }

var check = content.indexOf("brown"); //-1 in case of not found

// content = content.slice(0, check) + "blue" + content.slice(check + 5);

var check2 = content.lastIndexOf("brown"); //-1 in case of not found

content = content.slice(0, check2) + "orange" + content.slice(check2 + 5);

// console.log("TCL: content", content);

var fullname = "hasnain ali";
// console.log(fullname.charAt(100)); //incase of not found ""
// var firstChar = fullname.charAt(0).toUpperCase();
// var otherChars = fullname.slice(1);
// var complteName = firstChar + otherChars;
// console.log("TCL: complteName", complteName);

//last charector
// console.log(fullname.charAt(fullname.length - 1));

var t = "hello world and how are world?";

// for (var i = 0; i < t.length; i++) {
//   if (t.charAt(i) == "?") {
//     alert("Yes it's a question");
//     break;
//   }
// }

var email = "mjhasnain15@gmail.com";

// for (var i = 0; i < email.length; i++) {
//   if (email.charAt(i) == "@") {
//     alert("Yes it's a email");
//     break;
//   }
// }

var content =
  "The quick brown fox jumps over the lazy dog The quick brown fox jumps over the lazy dog";

// content = content.replace("brown", "white"); //replace only first occurence

// content = content.replace(/brown/g, "white"); //replace globally

// console.log("TCL: content", content);
