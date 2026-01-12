const num1 = "250";

// const accountBalance = Number(1000);
// const accountBalance = +"1000";

const accountBalance = parseFloat("1000.348034850");
console.log("accountBalance", accountBalance);

console.log(typeof accountBalance);
const transactionAmount = Number(num1);

console.log(typeof transactionAmount);

// 1000 + "250" = 1000250

const newBalance = Number(accountBalance) + Number(transactionAmount);

console.log(newBalance);

const myString = String(457934957);



// Boolean

// const active = true
// const active = false;
// const active = 1;
// const active = 0;
// const activeUserName = " "
const activeUserName = "false"

// console.log(Boolean(active))
console.log(Boolean(activeUserName))


// non-truthy values / falsy values


//  undefined, null, 0, NaN, " " , false


// NaN

console.log(2 * "kjhsdkfhskfh") // NAN