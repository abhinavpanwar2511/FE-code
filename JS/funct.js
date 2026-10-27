// add 2 numbers - declared
function add() {
    let c = 10 + 20;
    console.log(c); //30
}
//call function
add()

//find square of a number
function square() {
    let num = 10;
    let res = num * num;
    console.log(res); //100
}
square();

//write a function to find area and parameter of a circle

function circle() {
    let r = 2;
    let pi = 3.14;
    let area = pi * r * r;
    let para = 2 * pi * r;
    console.log(area);
    console.log(para);
}

//call function
circle()

//waf to find simple interest
function simpleInterest() {
    let p = 200; //principle
    let r = 300; //annual interest rate
    let t = 4; //time duration
    let si = (p * r * t)/100;
    console.log(si);
}

//call function
simpleInterest()


// Four types of function in JavaScript
// 1. Without i/p and op
function square() {
    let num = 10;
    let res = num * num;
    console.log(res); // 100
}
square();

// 2. With i/p and without o/p
function square1(num) {
    let res = num * num;
    console.log(res); // 16
}
square1(4);

// 3. Without i/p and with o/p
function square2() {
    let num = 6;
    return num * num;
}
console.log(square2());

// 4. With i/p and o/p
function square3(num) {
    return num * num;
}
let res = square3(3)
console.log(`The square of the number is ${res}`);

// Assignment - 
// 4 types for finding area of a rectangle