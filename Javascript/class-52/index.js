console.log("value", 8 > 10);
console.log("value", 10 <= 10);
console.log("value0", 5 > 8);

const x = 10;
const y = 10;

// console.log("check equality", x == y);

const val1 = 10;
const val2 = "10";

console.log("check equality abc", val1 == val2); // equality operators->  only check values
console.log("check equality", val1 === val2); //strict equality operators -> checks both datatypes and values

console.log("check equality boolean", true == "true") // returns false
console.log("check equality boolean", true == true) // returns true
console.log("check equality boolean", false == false) // returns true
console.log("check equality boolean", false == 0) // returns true
console.log("check equality boolean", false == null) // returns false
console.log("check equality boolean", false == undefined) // returns false
console.log("check equality boolean", false == "") // returns true
console.log("check equality boolean", false == false) // returns true


// Not equal equal to operator

console.log("not opeator ", 10 != 10)
console.log("not opeator ", 20 != 10)

console.log("string equality", 'x' > 'y');
console.log("string equality", 'Z' > 'A' );
console.log("string equality", 'Bee' > 'Be' );
