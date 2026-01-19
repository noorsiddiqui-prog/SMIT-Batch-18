// if-else ladder

// const score = Number(prompt("Enter your marks"));

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 80 && score < 90) {
//   grade = "B";
// } else if (score >= 70 && score < 80) {
//   grade = "C";
// } else if (score >= 60 && score < 70) {
//   grade = "D";
// } else {
//   grade = "F";
// }
// console.log("grade", grade);

// console.log("grade", typeof score);







// switch (score) {
//   case 90:
//     console.log("switch1", score);

//     break;

//   case 80:
//     console.log("switch2", score);
//     break;

//   case 70:
//     console.log("switch3", score);
//     break;

//   default:
//     console.log("switch4", score);
//     break;
// }

// Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunda

// const day = prompt("Enter the discount day for sale?").toLowerCase();
const day = prompt("Enter the discount day for sale?");
let discount;
let description;

// switch (day) {
//   case "Monday".toLowerCase():
//     discount = "10%";
//     description = "10% on monday for jeans";
//     break;

//   case "Tuesday".toLowerCase():
//     discount = "20%";
//     description = "20% on tuesday for T-Shirts";
//     break;

//   case "Wednesday".toLowerCase():
//     discount = "30%";
//     description = "30% on wednesday for Dupattas";
//     break;

//   case "Thursday".toLowerCase():
//     discount = "40%";
//     description = "40% on thursday for shoes";
//     break;

//   case "Friday".toLowerCase():
//     discount = "50%";
//     description = "50% on friday for makeup";
//     break;

//   case "Saturday".toLowerCase():
//     discount = "60%";
//     description = "60% on satuday for crockery";
//     break;

//   default:
//     description = "Mart is closed";
//     break;
// }

switch (day.toLowerCase()) { //monday
  case "monday":
    console.log("actual day", day);
    console.log("lowercase day", day.toLowerCase());
    discount = "10%";
    description = "10% on monday for jeans";
    break;

  case "tuesday":
    console.log("actual day", day);
    console.log("lowercase day", day.toLowerCase());
    discount = "20%";
    description = "20% on tuesday for T-Shirts";
    break;

  case "wednesday":
    console.log("actual day", day);
    console.log("lowercase day", day.toLowerCase());
    discount = "30%";
    description = "30% on wednesday for Dupattas";
    break;

  case "thursday":
    console.log("actual day", day);
    console.log("lowercase day", day.toLowerCase());
    discount = "40%";
    description = "40% on thursday for shoes";
    break;

  case "friday":
    console.log("actual day", day);
    console.log("lowercase day", day.toLowerCase());
    discount = "50%";
    description = "50% on friday for makeup";
    break;

  case "saturday":
    console.log("actual day", day);
    console.log("lowercase day", day.toLowerCase());
    discount = "60%";
    description = "60% on satuday for crockery";
    break;

  default:
    console.log("actual day", day);
    console.log("lowercase day", day.toLowerCase());
    description = "Mart is closed";
    break;
}

console.log("Discount", discount);
console.log("Description", description);

// const wednesday = "Wednesday"

// console.log("lowercase value", wednesday.toLowerCase())
