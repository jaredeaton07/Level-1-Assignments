const readline = require("readline-sync")
// console.log(readline, "readline")

function add(num1, num2){
    return +num1 + +num2
}
function subract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}

var num1 = readline.question("Please enter your first number ")
var num2 = readline.question("Please enter your second number ")
var operation = readline.question("Please enter the operation to perform: add, sub, mul, div ")

if(operation === "add"){
    console.log(add(num1, num2))
    } else if(operation ==="sub"){
        console.log(subract(num1, num2))
    } else if(operation === "mul"){
        console.log(multiply(num1, num2))
    } else if(operation === "div"){
        console.log(divide(num1, num2))
    } else {
        console.log ("Invalid Entry")
    }

