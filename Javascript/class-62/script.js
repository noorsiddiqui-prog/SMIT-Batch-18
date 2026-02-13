const prompt1 = prompt("Please Enter your name?");
console.log("prompt", prompt1);

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    role: "Developer",
    active: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    active: false,
  },
  {
    id: 3,
    name: "Peter Jones",
    role: "Manager",
    active: true,
  },
  {
    id: 4,
    name: "John Doe",
    role: "Assistant",
    active: false,
  },
];

const filterData = dummyData.filter((value, index) => {
  // const res = value.name === "John Doe"
  console.log("lowerCase", value.name.toUpperCase(), prompt1.toUpperCase())
  const res = value.name.toUpperCase() === prompt1.toUpperCase();
  return res;
});

console.log("filterData", filterData);
console.log("filterData", filterData[0].name);

document.getElementById("heading").innerText = filterData[0].name;

