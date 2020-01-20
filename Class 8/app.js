var arr = [1, 2, 3, 4, 5];

var basicName = "Basic";
var basicMonthly = "$3.99";
var basicDiskSpace = "10GB";

var proffesionlName = "Proffesional";
var proffesionlMonthly = "$6.99";
var proffesionlDiskSpace = "50GB";

var ultimateName = "Ultimate";
var ultimateMonthly = "$10.00";
var ultimateDiskSpace = "100GB";

// console.log(basicName);
// console.log(proffesionlName);
// console.log(ultimateName);

var basic = {
  name: "Basic",
  space: "10GB",
  monthly: 3.99,
  discountMonths: [2, 5, 12, 1],
  discountAvail: false,
  discountPrice: 50,
  user: {
    name: "Faizan",
    email: "faizan@gmail.com"
  },
  calculateAnnual: function(discount) {
    var currentMonth = new Date().getMonth() + 1;
    var total = 0;
    var found = false;
    for (var i = 0; i < this.discountMonths.length; i++) {
      if (this.discountMonths[i] === currentMonth) {
        found = true;
        break;
      }
    }

    if (found) {
      total = (this.monthly * 12) / discount;
    } else {
      total = this.monthly * 12;
    }

    return total;
  },
  referThis : function(){
      console.log("this",this);
      console.log("basic" , basic)
  }
};

var proffesional = {
  name: "Professional",
  space: "50GB",
  monthly: "$6.99"
};

var ultimate = {
  name: "Ultimate",
  space: "100GB",
  monthly: "$10.99"
};

// console.log("TCL: basic", basic.name)
// console.log("TCL: proffesional", proffesional.monthly)
// console.log("TCL: ultimate", ultimate.space)

// console.log("TCL: basic", basic.user.name)
// console.log("TCL: basic", basic.discountMonths[2])

var student = {
  name: "Ali",
  email: "ali@gmail.com",
  class: "9th"
};

student.class = "Matric";

// console.log("TCL: student", student)

var data = {
  package: "weekly"
};

data.size = "64GB";

// delete data.package

delete data.type;

// console.log("TCL: data", data)

var isFind = "package" in data; //return in true/false
// console.log("TCL: isFind", isFind)

// function calculateAnnual() {
//   var currentMonth = new Date().getMonth() + 1;
//   var total = 0;
//   var found = false;
//   for (var i = 0; i < basic.discountMonths.length; i++) {
//     if (basic.discountMonths[i] === currentMonth) {
//       found = true;
//       break;
//     }
//   }

//   if (found) {
//     total = (basic.monthly * 12) / basic.discountPrice;
//   } else {
//     total = basic.monthly * 12;
//   }

//   return total;
// }

// function calculateAnnual(discount) {
//     var currentMonth = new Date().getMonth() + 1;
//     var total = 0;
//     var found = false;
//     for (var i = 0; i < basic.discountMonths.length; i++) {
//       if (basic.discountMonths[i] === currentMonth) {
//         found = true;
//         break;
//       }
//     }

//     if (found) {
//       total = (basic.monthly * 12) / discount;
//     } else {
//       total = basic.monthly * 12;
//     }

//     return total;
//   }

// var result = calculateAnnual();
// var result = calculateAnnual(10)
// console.log("TCL: result", result);

var resultFromObj = basic.calculateAnnual(15);
// console.log("TCL: resultFromObj", resultFromObj)

// basic.referThis();
