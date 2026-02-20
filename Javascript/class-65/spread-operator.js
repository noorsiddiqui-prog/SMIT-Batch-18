const arr = ["apple", "banana", "cherry", "date", "fig", "grape"];


// const newArry = ["Kiwi", "Lemon", "mango", arr]
// const newArry = [...arr]

// const newArry = [...arr, "Kiwi", "Lemon", "mango"]


// console.log(newArry);


const users = [
  {
    id: 1,
    username: "jdoe",
    email: "jdoe@example.com",
    active: true,
  },
  {
    id: 2,
    username: "asmith", // sana
    email: "asmith@example.com", // sana@gmail.com
    active: false,
  },
  {
    id: 3,
    username: "bjones",
    email: "bjones@example.com",
    active: true,
  },
];

const mappedData = users.map((value, index) => {
    return {
        ...value,
        // username: value.username.toUpperCase(),
        username: "Noor",
    }
});

console.log("mappedData: ", mappedData);