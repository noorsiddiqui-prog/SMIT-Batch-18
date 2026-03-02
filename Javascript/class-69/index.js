// let user = {
//   name: "John",
// };

// console.log("user", user);

// user = null

// console.log("user2", user);

let user = {
  name: "John",
};

user.age = { name: "John" };

// let admin = user;

// user = null

// console.log("user", user);
// console.log("admin", admin);

// let user2 = {
//   name: "John",
//   wife: { name: "John"}
// };

// user2.wife = { name: "John" }

function marry(man, woman) {
  console.log("man", man);
  console.log("woman", woman);

  woman.husband = man; // {husband: { name: "John"}}
  man.wife = woman; // {wife:  { name: 'Ann' }}

  console.log("woman bad wala", woman);
  console.log("man bad wala", man.wife.husband);

  return {
    father: man,
    mother: woman,
  };
}

let family = marry({ name: "John" }, { name: "Ann" });

// console.log("family", family);

delete family.father;
delete family.mother.husband;

// console.log("family", family);

// let user3 = {
//   name: "John",
//   age: 30,

// };

// user3.findAge = function findMyAge() {
//     console.log("hello bro!")
// }

let user3 = {
  name: "John",
  age: 30,
  findAge: function findMyAge() {
    console.log("hello bro!");
    // return "I am bhoot";
  },
};

// console.log("user3", user3.findAge());

function findMyAge() {
  console.log("hello bro!");
}

let user4 = {
  name: "John",
  age: 30,
};

// user3.findAge = findMyAge;

// let user3 = {
//   name: "John",
//   age: 30,
//   findAge: findMyAge
// };

// these objects do the same

let user5 = {
  sayHi: function () {
    console.log("Hello");
  },
};

// method shorthand looks better, right?
user5 = {
  sayHi() {
    console.log("Hello");
  },
};

const user6 = {
  name: "John",
  age: 30,
  //   sayHi: function () {
  //     // console.log("Hello" + user6.name);
  //     console.log("Hello" + this.sayHi);

  //   },

  sayHi: () => {
    console.log("hello baj!!", this.name);
  },
};

console.log("user6", user6.sayHi());


let user7 = {
    // address: {
    //     street: "XYZ"
    // }
}; // a user without "address" property

// console.log(user7.address.street);
// console.log(user7 && user7.address && user7.address.street && user7.address.street);

console.log(user7?.address?.street);
