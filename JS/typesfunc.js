//function declaration
function greet() {
    console.log("Hello Everyone!");
}
greet();

//function Expression
let greet1 = function() {
    console.log("Hello Everyone from function Expression!");
}
greet1();

//Arrow function
let greet2 = () => console.log("Hello Everyone from Arrow Function!");
greet2();

//IIFE - Immediately invoked function Expression (Anonymous function)
(function() {
    console.log("Hello Everyone from IIFE!");
})();

//Assignment - 4 ways you need to create a func for adding 3 numbers
//1
function add() {
    let num1 = 3;
    let num2 = 4;
    let num3 = 2;
    let res = num1 + num2 + num3;
    console.log(res);
}
add();

//2
let add1 = function() {
    let num1 = 3;
    let num2 = 4;
    let num3 = 2;
    let res = num1 + num2 + num3;
    console.log(res);
}
add1();

//3 Arrow function
let add2 = () => {
    let num1 = 3;
    let num2 = 4;
    let num3 = 2;
    let res = num1 + num2 + num3;
    console.log(res);
}    
add2();

//4 IIFE - Immediate invoked function expression(ANONYMOUS FUNCTION)
(function() {
    let num1 = 3;
    let num2 = 4;
    let num3 = 2;
    let res = num1 + num2 + num3;
    console.log(res);
})();