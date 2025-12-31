const x = "10"

console.log("value", +x)
console.log("value", Number(x))


console.log("exponent", 2 ** 4); // 2 x 2 x 2 x 2
console.log("airthmetic", 2 ** (4 / 2)); 
console.log("airthmetic", 2 ** 4 / 2);

console.log("math parhao", '1' + 2 + 3)

console.log("boolean", Number(true)); // output: 1
console.log("boolean", +true);// output: 1

console.log("non truthy values", Number(""))
console.log("non truthy values", +"")
console.log("non truthy values", +null)
console.log("non truthy values", +undefined) // output: NAN
console.log("non truthy values", +0) // output: 0


let apples = "2";
let oranges = "3";

console.log("fruits", +apples + +oranges)
console.log("fruits", Number(apples) + Number(oranges))

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

n = n + 5 // n +=5
n = n * 2 // n *= 2


// Comparisons

console.log("greater than", 4 > 2);
console.log("is equals to", 4 == 2); // it checks only value
console.log("is equals to2", "4" == "4" );
console.log("is equals to3", "4" == 4 );
console.log("is equals non truthy", false == 0 );
console.log("is equals non truthy", "" == 0 );
console.log("is equals non truthy", "" == null ); // output

console.log("is equals todf", "4" === 4 ); // it checks type and value both

console.log("is not equal to", 4 != 2);
console.log("is not equal to", 4 !== "2");

console.log("check string comparisons", "X" > "Z");
console.log("check string comparisons", "Z" > "A");
console.log("check string comparisons", "aab" > "aaba");

console.log( 'Z' > 'A' ); 
console.log( 'Glow' > 'Glez' );
console.log( 'Bee' > 'Be' );


console.log("different type",  '2' > 1);
console.log("different type",  '01' == 1);


console.log("type check", typeof(null), typeof(undefined))

console.log("letter check", "apple" > "pineapple")

console.log("str", null === +"\n0\n")

console.log("equals to and greater than", 20 >= 20);
console.log("equals to and greater than", 20 <= 10);


// ===, ==, !==, !=, <=, >=, >, <, +=, ++ so on...

// & -> and operator ---> &&
// | operator -> or operator -> || 
// ?? operator -> nullish operator -> ??


const andOperator = 2 > 1 && 4 < 2 && 1 == "1" && null == undefined

console.log("andOperator", andOperator)
 
const orOperator = 1 > 2 || 4 == "4" || 5 != 6 || null == undefined
console.log("orOperator", orOperator)

const amount = 0 // should not undefined

const orOperator2 =  0 || false || null || true

console.log("orOperator2", orOperator2)

const nullOperator3 =  0 ?? false ?? null ?? true

console.log("nullOperator3", nullOperator3)

