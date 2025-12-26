var firstName = "Noor"
var lastName = "Siddiqui"
var age = 50

// console.log("My name is" + " " + firstName + " " + lastName + " " + "I am" +  " " +age + " years old")

// template literals

var about = "My name is" + " " + firstName + " " + lastName + " " + "I am" +  " " +age + " years old"
var about = `My name is ${firstName} ${lastName}. I am ${age} years old  `

console.log(about)

// array

var fruits = ["apple", "banana", "cherry", 40, "mango"]

console.log("fruits list", fruits)

const fruits2 = new Array("apple", "banana", 1, true, null, NaN, {}, [1,2,3,4], "cherry", "mango")

console.log("fruits", fruits2)

const obj = {
    name: "Noor",
    age: 50,
    job: "Software Developer",
    favFruits: ["Mango", "banana", "cherry"]
}

// Type conversion

const num1 = "1000"
const num2 = "2000"
console.log("number", Number(num1) + Number(num2))

const str1 = 1000
const str2 = 2000
console.log("string", String(str1) + String(str2))

// const bool1 = true // 1
// const bool2 = false // 0
const bool1 = "true"
const bool2 = false

const convertedBool1 = Boolean(bool1)

console.log("boolean", convertedBool1, Boolean(!bool2))

console.log("bool1", bool1)

const str3 = Number("Noor Ul Ain")

console.log("str3", str3)



// falsy values

// "", false, null, undefined, 0, NAN