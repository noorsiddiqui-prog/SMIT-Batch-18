const fruits = ["Banana", "Orange", "Apple", "Mango"];

// delete fruits[2] // keeps empty space after deleting an item
// console.log("fruits", fruits.length)

// array.splice(startIndex, deleteCount, item1, item2, ...);

// At position 2, remove 2 elements
// const deletedItems = fruits.splice(2, 1);
// console.log("fruits", fruits)
// console.log("fruits", fruits.length)

// console.log("deletedItems", deletedItems)

// const addItem = fruits.splice(2, "Cherry", "Pineapple"); // has default 1 deleteCount Value
const addItem = fruits.splice(2, 0, "Cherry", "Pineapple"); // provides 0 deleteCount because I dont want to delete any index
console.log("addItem", fruits);

// console.log("deletedItems", deletedItems)

// // At position 2, add "Lemon" and "Kiwi"
// fruits.splice(2, 0, "Lemon", "Kiwi");
