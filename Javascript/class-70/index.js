const person = {
  firstName: "John",
  lastName: "Doe",
  // Method definition using function expression
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  // Concise method shorthand (preferred in modern JS)
  introduceSelf() {
    console.log(`Hi! I'm ${this.firstName}.`);
  },
};

// Calling the methods
console.log(person.fullName()); // Output: John Doe

const keys = Object.keys(person);
const values = Object.values(person);

console.log("keys", keys);
console.log("values", values);

const entries = Object.entries(person);

console.log("entries", entries);

const scores = { math: 90, science: 85, history: 40 };

const scoreEntries = Object.entries(scores)

console.log("scoreEntries", scoreEntries);

const filterScore = scoreEntries.filter((val, index) => {
  // console.log("filter value", val[1])

  const [key, value] = val;

  console.log("abc", key);
  console.log("xyz", value);

  return val[1] > 60;

  // const val0 = val[0]
  // console.log("val 0", val0)
  // const val1 = val[1]
  // console.log("val 0", val1)
});

const filterScore2 = scoreEntries.filter(([key, value], index) => {
  // console.log("filter value", val[1])

  console.log("abc", key);
  console.log("xyz", value);

  return value[1] > 60;

  // const val0 = val[0]
  // console.log("val 0", val0)
  // const val1 = val[1]
  // console.log("val 0", val1)
});

// console.log("filterScore", filterScore)

const filterScore3 = scoreEntries.map(([key, value], index) => {
  // console.log("filter value", val[1])

  console.log("filterScore3 key", key);
  console.log("filterScore3 value", value);

  const res = value > 80 ? value * 2 : value;

  return {
    name: key,
    percentage: value,
    score: res,
  };

  //   return {
  //     // [key]: value
  //     [key]: value*2
  //   }
});

console.log("filterScore", filterScore3);
