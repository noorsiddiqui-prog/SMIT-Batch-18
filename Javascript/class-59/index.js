const arr = ["apple", "banana", "cherry"];

const name = "Sana";
const name2 = "Aunty";
const name3 = "Noor";

const arr2 = Array.of("Apple", "banana", "cherry");

const arr3 = Array.of(name, name2, name3);

console.log("arr", arr);
console.log("arr2", arr2);
console.log("arr3", arr3);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log("fill", fruits.fill("Kiwi"));

console.log("fill 2", fruits.fill("Kiwi", 2, 3));

// slice

const fruitsArr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const slicedFruits = fruitsArr.slice(0, 2)

console.log("fruitsArr", fruitsArr);
console.log("slicedFruits", slicedFruits);


const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const ultaSlice = fruits2.slice(-3, -1)
const ultaSlice = fruits2.slice(-3)


console.log("ultaSlice", ultaSlice)