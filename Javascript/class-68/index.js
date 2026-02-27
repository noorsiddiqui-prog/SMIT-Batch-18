// let user = { name: "John" };

// let admin = user;

// console.log("user", user)
// console.log("admin", admin)

// // user.age = 50
// admin.age = 50

// console.log("user", user)
// console.log("admin", admin)

let user2 = { name: "John" };

// let admin2 = { ...user2 };
let admin2 = {
  name: user2.name,
};

admin2.age = 50;

console.log("user", user2);
console.log("admin", admin2);

// // shallow copy
// If there are nested non-primitives(arrays, object..) copied by shallow copy then it will change the orignal object as well due to refrence copied of those nested non-primitives(arrays, object..)
const original1 = {
  name: "Jane",
  work: { employer: "Acme" },
};

// Shallow copy using the spread operator
const shallowCopy = { ...original1 };

shallowCopy.name = "John";
console.log(original1.name); // Output: "Jane" (Original1 is safe)

// Modify a nested property (object value)
shallowCopy.work.employer = "Spectre";
console.log(original1.work.employer); // Output: "Spectre" (Original is also changed!)

// // deep copy
// it copies the all nested non-primitives without any refrence there is why it does not effect the original object

const original = {
  name: "Jane",
  work: { employer: "Acme" },
};

// Deep copy using structuredClone()
const deepCopy = structuredClone(original);

// Modify a nested property
deepCopy.work.employer = "Spectre";

console.log(original.work.employer); // Output: "Acme" (Original remains unchanged)
console.log(deepCopy.work.employer); // Output: "Spectre" (Copy is independent)

// second method of deep copy

// const original = {
//   name: "Jane",
//   work: { employer: "Acme" }
// };

// // Deep copy using JSON methods
// const deepCopyJSON = JSON.parse(JSON.stringify(original));

// // Modify a nested property
// deepCopyJSON.work.employer = "Spectre";

// console.log(original.work.employer); // Output: "Acme" (Original remains unchanged)
// console.log(deepCopyJSON.work.employer); // Output: "Spectre" (Copy is independent)

// Cloning and merging, Object.assign

let user = {
  name: "John",
  age: 30,
  colors: {
    red: 2,
    blue: 3,
    yellow: 5,
  },
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// let clone = {
//   name: "John",
//   age: 30,
//  colors: {
//     red: 2,
//     blue: 3,
//     yellow: 5,
//   }
// };

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it
clone.age = 100;
clone.colors.red = "#ff1414";

console.log("user", user); // still John in the original object
console.log("clone,", clone); // still John in the original object



let user3 = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

console.log(user3); // target object




let user4 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone4 = Object.assign({}, user4);

console.log( user4.sizes === clone4.sizes ); // true, same object

// user and clone4 share sizes
// user4.sizes.width = 70;    // change a property from one place
// console.log("user4", user4)
// console.log("clone4", clone4)

clone4.sizes.width = 70;    // change a property from one place
// console.log("user4", user4)
// console.log("clone4", clone4)




// deepcopy 


let user5 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone5 = structuredClone(user5);

console.log( user5.sizes === clone5.sizes ); // false, different objects

// user5 and clone5 are totally unrelated now
user5.sizes.width = 60;    // change a property from one place
console.log("user5", user5)
console.log("clone5", clone5) // both will independently change