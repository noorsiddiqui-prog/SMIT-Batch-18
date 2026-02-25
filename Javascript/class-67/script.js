// const arr = [1, 2, 3, 4, 5]
// const arr2 = new Array(1, 2, 3, 4, 5)

// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// }


const favFruit = "Mango"

const user = {}
// const building = new Object();

// obj["name"] = 'Noor'
user.name = 'Noor'
user.age = 50
user.city = 'Karachi'

console.log(user);

user.name = 'Sana'
console.log(user);

delete user.name
console.log(user);

user.isAdmin = true;
console.log(user);

user["Full Name"] = "Noor Ul Ain"

console.log(user);

// delete user["Full Name"]

user[favFruit] = "Baby"

console.log(user);


let key = "greeting";

let user2 = {
  name: "John",
  age: 30,
  [key]: "Hello"
};

// console.log( user2[key] ) // 
// console.log( user2["key"] ) // 
console.log( user2 ) // Hello


let fruit1 = 'apple';
let bag = {
  [fruit1 + 'Computers']: 5 // bag.appleComputers = 5
};

console.log(bag); // 5


const color = "red";
const brand = "Toyota";
// const brand2 = brand;

const colorObj = {
    color: color,
    // brand: brand
    brand: "Civic",
    0: "test",
    undefined: 888
}

console.log(colorObj);

console.log("doesExist", colorObj.hasOwnProperty("color1"));
console.log("doesExist", "brand" in colorObj);

for (let key in colorObj) {
    console.log("key", key, colorObj[key]) // colorObj["brand"]
}