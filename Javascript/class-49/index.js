// let prompt1 = prompt("What is your age?");

// const age = Number(prompt1);

// console.log("age", typeof age);

// condition -> true / false
// if(condition){
//     console.log("he is eligible for cnic.")
// }

// if (age >= 18) {
//   console.log("he is eligible for cnic.");
// } else {
//   console.log("he is eligible for Form B");
// }

// console.log("hello girl!");

// else if

const age = prompt("What is your age?");

// if(age >= 18){
//     console.log("He is eligible for CNIC")
// }

// if(age < 18){
//     console.log("eligible for form B")
// }

// if(age < 5){
//     console.log("eligible for vaccine")
// }

let eligibilty;

if (age >= 18) {
  eligibilty = "He is eligible for CNIC";
} else if (age <= 5) {
  eligibilty = "he is eligible for vaccine";
} else if (age <= 1) {
  eligibilty = "he is eligible for pamper";
} else {
  eligibilty = "eligible for Form B";
}

if (age >= 18) {
  eligibilty = "He is eligible for CNIC";
} else if (age <= 1) {
  eligibilty = "he is eligible for pamper";
} else if (age <= 5) {
  eligibilty = "he is eligible for vaccine";
} else {
  eligibilty = "eligible for Form B";
}


// age = 1
if (age >= 18) {
  eligibilty = "He is eligible for CNIC";
} else if (age > 1 &&  age <= 5) {
  eligibilty = "he is eligible for vaccine";
} else if (age <= 1) {
  eligibilty = "he is eligible for pamper";
} else {
  eligibilty = "eligible for Form B";
}


console.log("eligibilty:", eligibilty);

console.log("eligible----,.2", eligibilty);
