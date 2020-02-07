//1 FETCH

//GET API
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(result) {
//     console.log(result);
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then(function(res) {
//     return res.json();
//   })
//   .then(function(result) {
//     console.log(result);
//   });



//2 SET
let arr = [1,2,3,4,5,6,1,1,2,2,3,4,6,7]
// console.log("TCL: arr", arr)
let result = new Set(arr) //return unique array

let arr2 = new Set([1,2,3,4,5])
// console.log("TCL: arr2", arr2)

let arr3 = new Set([NaN,undefined , false])
// console.log("TCL: arr3", arr3)

// console.log(result.size)
result.add('Xyz')
// result.clear()
// console.log("TCL: result", result.entries())

// result.forEach(function(val , ind){
//     console.log(val)
// })

// console.log(result.has("Xyz")) //return true/false

// result.delete(2) //delete specific value
// console.log(result)

// console.log(this)
// console.log(window)

function caller(){
    return {
        abc : function(){
            console.log(this)
        }
    }
}

// let response = caller()
// response.abc()

function callerSecondary(){
    return {
        abcSecondary : () => {
            console.log(this)
        }
    }
}

// let response = callerSecondary()
// response.abcSecondary()

callMe = (age , name) => {
    console.log(age , name)
}

// callMe(12 , 'Ali')
