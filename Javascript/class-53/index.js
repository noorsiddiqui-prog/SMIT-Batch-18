let i = 1;

console.log("value", --i); // i = i - 1
console.log("value", ++i); // i = i + 1

let firstNum = 5;
let secondNum = 10;
firstNum++;
secondNum--;
let total = ++firstNum + secondNum;

console.log("first", firstNum, secondNum);
console.log("total", total);

let total2 = 500 + 100 / 5 + total--;
console.log(total2);

// or operator

// not less than 18 and not more than 50

const prompt1 = 10;

let age = prompt1 >= 18 && prompt1 <= 50;
// console.log("age", age)

console.log("dfjhgdjlkghldfkshg", false || 0 || "true");

const num1 = undefined;

// nullish operator
// let condition = null || undefined || true || false || 0
console.log("nullish", num1 ?? NaN ?? 10);
console.log("nullish", num1 ?? 0 ?? 10);
console.log("nullish", num1 ?? false ?? 10);
let age1 = 18
let isNewBanda = true

var data = [
  {
    name: "John Doe",
    desc: "He is a great experienced software developer",
    address: "XYZ",
    accountBalance: 100
  },
  {
    name: "Sana Doe",
    desc: "She is a great experienced software developer",
    address: "ABC",
    accountBalance: 200
  },
  {
    // name: null || "Unknown Person",
    name: null || (age >= 18 && "Noor"),
    desc: "She is a great experienced software developer and trainer",
    address: "ABC",
    // accountBalance: null || 0 || "0"
    accountBalance: 0 && isNewBanda && 100
  },
];

// const arr = [1, 2, 3, 4, 5, 6];


// &&, ||, ??