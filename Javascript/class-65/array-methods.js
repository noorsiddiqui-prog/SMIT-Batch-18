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

console.log(users[1].username);

const modifiedUsers = users.map((value, index) => {
  console.log("value: ", value.username);

  const obj = {
    username: value.username.toUpperCase(),
  };
  
  return obj;
});

// const modifiedUsers2 = users.map((value, index) => {
//   console.log("value: ", value.username);

//   return value
// });

// const modifiedUsers2 = users.map((value, index) => {
//   console.log("value: ", value.username);

//   return {
//     id: value.id,
//     username: value.username.toUpperCase(),
//     email: value.email,
//     active: value.active,
//   }
// });

const modifiedUsers2 = users.map((value, index) => {
  console.log("value: ", value.username);

  return {
    id: value.id,
    email: value.email,
    active: value.active,
    username: value.username.toUpperCase(),
  }
});

console.log("modifiedUsers2", modifiedUsers2);
