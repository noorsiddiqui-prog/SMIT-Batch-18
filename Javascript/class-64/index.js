console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
console.log("hello world");
// 0,     1,       2,        3,       4.,      5,       6,        7
const fruits = [
  "apple",
  "mango",
  "banana",
  "cherry",
  "apple",
  "mango",
  "banana",
  "cherry",
]; //8
// length = 8, index =  7
// for(let index = 0; index < fruits.length; index = index + 1) {
// for(let index = 0; index < fruits.length; index = index + 3) {
//     console.log("javascript", index, fruits[index])
// }

console.log("last index", fruits.length - 1);

for (let index = fruits.length - 1; index >= 0; index--) {
  console.log("javascript", index, fruits[index]);
}

for (let index = 0; index < 10; index++) {
  console.log("hello bhai", index);
}

const arr = [
    [1, 2, 3, 4, ["apple", "banana", "cherry"]],
    [3, 4],
    [5, 6]
]
// const arr = [1, 2, 3, 4];
// console.log("arr", arr[0].length)

// arr[0][2]
// [1, 2, 3, 4]

for (let i = 0; i < arr.length; i++) {
//   console.log("arr", arr[i], i);


  for(let j = 0; j < arr[i].length; j++){
    // console.log("j", "index",  j, "value", arr[i][j])


    for(let k = 0; k < arr[i][j].length; k++) {
        console.log("k", arr[i][j][k])
    }
  }
}
