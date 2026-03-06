// const arr = ["fruits", "vegetables", "football", "crockery", "grocery"]

// // console.log("destructure 1", arr[0]);

// const [zeroth, first, second, _, fourth] = arr || []

// console.log("destructure 2", zeroth, first, second, _, fourth);

// const userObj = {
//   name: "Noor",
//   age: 500,
//   gender: "female",
//   phone: "090078601",
//   nic: "493759843757",
// };

// // console.log("simple extract", userObj.name, userObj.age, userObj.phone)

// const { name, gender, nic, phone, age } = userObj || {};
// console.log("destructure obj 1", name, gender, nic, phone, age);


// Map

let map1 = new Map();

map1.set(8474, "Noor")
map1.set(true, 50)
map1.set({}, "89475978")
map1.set("hello", "meaoaw")
map1.set("email", "noorsiddiqui01@gmail.com")

console.log("map", map1.get(true))
console.log("map", map1.size)

// map1.delete(8474)
console.log("map all", map1)

map1.clear()
console.log("map all", map1)


// Add to cart example
const cart = new Map();

// 1. Adding items to the cart: Use the .set() method
cart.set('product_id_123', { name: 'Laptop', price: 999.99, quantity: 1 });
cart.set('product_id_456', { name: 'Mouse', price: 25.50, quantity: 2 });



// localStorage

// localStorage.setItem("theme", "dark")
localStorage.removeItem(8474)
console.log("theme name", localStorage.getItem("theme"));


// sessionStorage
// sessionStorage.setItem("theme", "dark")
sessionStorage.removeItem(8474)
console.log("theme name", sessionStorage.getItem("theme"));
