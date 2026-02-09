// every

// regular function // ES5
// arrow function //ES6


// const num1 = 4
// const num2 = 2

// const sum2 =  num1 + num2
console.log("divide====", divide(100, 10))
// regular
function sum(num1, num2) { // 2, 3
    const result = num1 + num2
    return result
}

function divide(num1, num2) { // 2, 3
    const result = num1 / num2
    return result
}

sum(2, 3)
sum(10, 15)

console.log("sum kardo bhai", sum(2, 4))
console.log("divide kardo bhai", divide(2, 4))

// console.log("result", result)

const minus = (num1, num2) => {
    const res = num1 - num2
    return res
}

console.log("minus with arrow function", minus(100, 50))

const obj = {
    name: "Noor",
    sum: sum(2, 4)
}

// () => {}