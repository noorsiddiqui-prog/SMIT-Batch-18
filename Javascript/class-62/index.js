// filter

const fruits = [
  "banana",
  "apple",
  "cherry",
  "apple",
  "kiwi",
  "pineapple",
  "apple",
];

const filteredApples = fruits.filter((fruit, index) => {
  // return fruit === "apple" || fruit === "cherry"
  console.log("fruit index", fruit, index);
  return fruit === "apple";
});

const findApple = fruits.find((fruit, i) => {
  console.log("findApple", fruit, i);
  return fruit === "apple";
});

console.log("fruits", fruits);
console.log("filteredApples", filteredApples);
console.log("findApple", findApple);

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    role: "Developer",
    active: true
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    active: false
  },
  {
    id: 3,
    name: "Peter Jones",
    role: "Manager",
    active: true
  },
  {
    id: 4,
    name: "John Doe",
    role: "Assistant",
    active: false
  },
];

console.log("")


// console.log("dummyData", dummyData[0]["name"])
console.log("dummyData", dummyData[0].name)


const filterJohnDoe = dummyData.filter((value, i) => {
    console.log("filter", value)
    const result = value.name === "John Doe"
    console.log("dshfh", i)
    return result
})

console.log("filterJohnDoe", filterJohnDoe)
console.log("filterJohnDoe", filterJohnDoe[0].name)