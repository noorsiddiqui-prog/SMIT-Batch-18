// findIndex

const arr = [10, 22, 36, 48, 55];

const index = arr.findIndex((value) => {
    // const result = value > 36
    const result = value < 11 && value > 9

    return result
})

console.log("index", index)


const index2 = arr.findLast((value) => {
    return value > 36
})

console.log("index2", index2)

const index3 = arr.findLastIndex((value) => {
    return value > 36
})

console.log("index3", index3)

const fruits = ["apple", "banana", "grape", "orange", "melon",  "orange", "grape"]

const index4 = fruits.findLastIndex((value) => {
    return value === "orange"
})

console.log("index4", index4)


const index5 = fruits.indexOf("grape")

console.log("index5", index5)

const index6 = fruits.lastIndexOf("grape")
console.log("index6", index6)


