// for (i = 1; i <= 5; i = i + 1) { //1
//   let str = "";
//   for (j = 0; j < i; j = j + 1) { // 2
//     str += "*";
//   }
//   console.log(str);
// }

// while loop

// let password = prompt("Please enter your password:");

// // Loop until the password meets the length requirement (e.g., at least 8 characters)
// while (password.length <= 8) {
//   password = prompt("Password too short! Please enter at least 8 characters:");
// }

// alert("Password accepted!");

// let password;
// do {
//   password = prompt("Password too short! Please enter at least 8 characters:");
  
// } while (password.length <= 8);

// alert("Password accepted!");



let password;
do {
  // In a real app, you would use a secure form field instead of prompt()
  password = prompt("Enter a password (min 6 characters):");
  if (password && password.length < 6) {
    alert("Password is too short! Try again.");
  }
} while (password && password.length < 6);
alert("Password created successfully!");
