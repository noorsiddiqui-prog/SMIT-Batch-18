// primitives

let name = "Noor"


// non-primitives
let arr = [1, 2, 3]
let arr1 = [1, 2, 3]

let obj = {
    name: "Noor",
    age: 22
}

let obj1 = {
    name: "Noor",
    age: 22
}

console.log("name", name === "Noor")
console.log("arr", arr === arr1)
console.log("obj", obj.name === obj1.name)
console.log("obj", obj.name === name)
console.log("arr",  arr[0] === arr1[0])