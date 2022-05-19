'use strict'

let firstFunction = function(num1, num2) {
    console.log(num1-num2);
}

firstFunction(67,23);


let welcome = function(name, age, gender) {
    console.log("My name is "+name+", I am "+age+" years old and of gender "+gender+".");
}

welcome("David Davidson", 27, "male");

let powerUp = (n1, n2) => (n1 ** n2);

console.log(powerUp(3,7));