// Primitive
// Number

let a = 10;
console.log(typeof a, a); //Number 10

a = "GaMANA";
console.log(a, typeof a); //String Gamana

// Javascript loosely typed
let b = 3.16
const pi = 3.14; console.log(typeof b, b)

//String - "", '', ``
let str = `ankit`
console.log(str, typeof str)
// My name is Ankit aged sround 10 , pi value is 3.14
console.log("My name is " + str + " aged around " + a + ", pi value is " + pi)
console.log("My name is " , str) //one space

//ES6 string literals `${varname}` = value
console.log(`My name is ${str} aged around ${a} , pi value is ${pi}`)

// Boolean true or false
let isvalid = false;
console.log(typeof isvalid, isvalid)

// Undefined
let name;
console.log(name)

// Null
let payment = null;
console.log(payment) //null

// Bigint
let g = 100n;
console.log(typeof g, g)

// Symbol
let x = Symbol("user");
console.log(x)
console.log(typeof x)

// Complex
// Array - []
// Index   0  1  2
let arr = [1, 2, 3];
console.log(arr , arr[1])

// Object {key: value}
let person = {
    name: "Alice",
    age: 30
};
console.log(person.name);
console.log(Object.keys(person));
console.log(person)//object

// Function
function add() {
    c = 3 + 3;
    console.log(c);
}
add()