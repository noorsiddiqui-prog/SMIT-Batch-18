// Data types

// string, number, boolean, null, undefined, object, symbol, array, bigInt

"Noor", 'Noor', `Noor`


const age = undefined



console.log("age", age)
console.log("I am age years old")

const myAge = "I am" + " " + age + " " + "years old"

console.log(myAge)

const updatedAge = `I am ${age} years old`
console.log(updatedAge)

"948534853958"


// Numbers

948534853958


console.log("2" - 4) // -2
console.log("2" + 4) // 24
console.log("2" - 4) // -2
  
// bigInt //int


console.log(typeof 347509348503945834095834095834098503498534098503498509809853409583409580349580349580435834058n)
console.log(typeof age);


// Boolean

// true, false

// 1 , 0






// console.log("check number", Boolean(age))

console.log("check number", 4 < 2)


// null, undefined, object, , array,


let phone;


console.log("phone", phone);


let name = null;

console.log("name", name);

name = "Noor"

console.log("name", name);

const fruits = ["mango", "banana", "apple", true, 39473974, null, undefined, ["hello", "girls"], {
    name: "noor",
    age: 50
}]


const user = ["noor", 100, "SMIT trainer", "female"]


const userObject = {
    name: "Noor",
    age: 50,
    profession: "SMIT trainer",
    gender: "female",
    favColors: ["red", "green", "blue"],
    company: {
        name: "SMIT",
        address: "Karachi"
    }
}


const num1 = 10
const num2 = Symbol(10)
// const num2 = Symbol("10")

console.log("num1", num1 == num2)