//1 LET/CONST

//LET
// var name = 'Faizan'
// var name = 'Pervaiz'

let name = 'Faizan'
// console.log("TCL: name", name)
name = 'Pervaiz' //you can change the value of variable but you shouldn't create it again with the same name

//CONST
const age = 24
// console.log("TCL: age", age)
// age = 25 you should'nt create again with the same name and re-assign to constant variable

function caller() {
    let a = 1;
    let b = 2
    // console.log("TCL: caller -> a", a)
    // console.log("TCL: caller -> b", b)
    // let a = 5;
}

caller();

let a = 2;
let b = 2;
// console.log("TCL: b", b)
// console.log("TCL: a", a)

let z = 'abc';

if (z === 'abc') {
    let z = 'z';
    // console.log("TCL: z", z)
}


//2 MAP (LOOPING)
let students = ['ali', 'faizan', 'sami', 'saad', 'ali' , 'ali']

// for(let i=0; i<students.length; i++){
//     console.log(students[i] , i)
// }

// students.map(function(val , ind){
//     console.log(val , ind)
// }) return boolean array

let response = students.map(function (v, i) {
    return v === 'ali' && v
})
// console.log("TCL: response", response)

function checkUser() {
    let temp = [];
    for (let i = 0; i < students.length; i++) {
        if(students[i] === 'ali'){
            temp.push(students[i])
        }else{
            temp.push(false)
        }
    }
    return temp
}

const result = checkUser();
// console.log("TCL: result", result)


//3 FILTER
let data = []
for(let i=0; i<students.length; i++){
    if(students[i] === 'ali'){
        data.push(students[i])
    }
}
// console.log("TCL: data", data)

let res = students.filter(function(val , ind){
    return val === 'ali'
}) //return match values
// console.log("TCL: res", res)


//4 TEMPLE LITERALS
const parent = document.getElementById("parent");

parent.innerHTML = `<h1>Hello How Are You?</h1>`
let answer = "Hi Too I'm Good..."
parent.innerHTML += `<p>${answer}</p>`


//5 FOR EACH (LOOPING)
students.forEach(function(val , ind){
    console.log(val)
})