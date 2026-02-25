// loops

// for loop
// where we know the length

// const home = 10 // steps
// // let rat = 0

// // for(let rat=0; rat < home.length ){
// // i = i + 1 // i++

// for(let i = 0; i < home; i++ ){
//     console.log("running", i)

// }

let counter = 0;

const steps = 10;

// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++
// counter = counter + 1 // counter++

// console.log("counter", counter)

// for ([initialization]; [condition]; [update finalExpression]) {
//   // code block to be executed
// }

// for(let counter = 0; counter <= steps; counter++) {
//     console.log(counter)

// }

const fruits = ["apple", "mango", "banana", "cherry"];

// fruits[2]

// for (let index = 0; index < fruits.length; index++) {
// //   console.log(index, fruits[index]);
//   console.log(index, fruits[index]);

// }

// for (let index = 10; index >= 0; index--) {
//   console.log(index);
// }

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log("element", element)

// }

for (const fruit of fruits) {
  console.log("element", fruit);
  console.log("index", fruits.indexOf(fruit));
}
