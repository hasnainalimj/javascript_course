function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100px,height=100px");
    if (testPop === null) {
        alert("Please disable your popup blocker.");
    }
    // testPop.close();
}

function checking(){
    try {
        // retur
        if(true){
            // throw "Invalid Data";
        }
    } catch (error) {
    console.log("TCL: checking -> error", error) //Exceptional Handling
    }
}

function checkForPopBlocker() {
    var testPop = window.open("", "", "width=100,height=100");
    // if (testPop === null || typeof (testPop === "undefined") {
    //     alert("Please disable your popup blocker.");
    // }
    // testPop.close();
}

// checkForPopBlocker()


function checkForLastName() {
    var targetField = document.getElementById("lastNameField");
    if (targetField.value.length === 0) {
        alert("Please enter your last name");
        targetField.focus();
        targetField.style.background = "red";
        return false;
    }
    targetField.style.background = "white";
}


function checkForSelection() {
    if (document.getElementById("states").selectedIndex === 0) {
        alert("Please select a state.");
        return false;
    } else {
        alert(document.getElementById("states").selectedIndex)
    }
}

function validateRadios() {
    var radios = document.getElementsByName("r1");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            alert("selected")
            return true
        }
    }
    alert("Please check one.");
    return false;
}


function validateZIP() {
    var numChars = document.getElementById("zip").value.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }
}

function validateZIP() {
    var valueEntered = document.getElementById("zip").value;
    var numChars = valueEntered.length;
    if (numChars < 5) {
        alert("Please enter a 5-digit code.");
        return false;
    }
    for (var i = 0; i <= 4; i++) {
        var thisChar = parseInt(valueEntered[i]);
        if (isNaN(thisChar)) {
            alert("Please enter only numbers.");
            return false;
        }
    }
}

// function validateEmail() {
//     var eEntered = document.getElementById("email").value;
//     if (eEntered.indexOf(" ") !== -1) {
//         alert("No spaces allowed in address");
//         return false;
//     }
// }

// function validateEmail() {
//     var addressIsLegal = true;
//     var eEntered = document.getElementById("email").value;
//     console.log("TCL: validateEmail -> eEntered", eEntered)
//     if (eEntered.indexOf(" ") !== -1) {
//         addressIsLegal = false;
//     }
//     if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//         addressIsLegal = false;
//     }
//     if (eEntered.indexOf(".") - eEntered.indexOf("@") < 2 ||
//         eEntered.indexOf(".") > eEntered.length - 3) {
//         addressIsLegal = false;
//     }
//     if (addressIsLegal === false) {
//         alert("Please correct email address");
//         return false;
//     }
// }

function validateEmail() {
    var email = document.getElementById("email").value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(String(email).toLowerCase());
    console.log("TCL: validateEmail -> result", result)
}

// function validateEmail() {
//     var eEntered = document.getElementById("email").value;
//     var regex = /^[\w\-\.\+]+\@[a-zA-Z0-9\. \-]+\.[a-zA-z0-9]{2,4}$/;
//     if (!(eEntered.match(regex))) {
//         alert("Please correct email address");
//         return false;
//     }
// }

checking()


console.log("end")
