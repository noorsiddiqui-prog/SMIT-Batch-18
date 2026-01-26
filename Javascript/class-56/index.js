const arr = ["apple", "banana", "mango"];

console.log("first index", arr[1]);

arr[0] = "Cherry";

console.log("n34085034985340958", arr);

arr[3] = "Pineapple";

console.log("another array", arr);

const basket = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "PawPaw",
  "Strawberry",
  "Grape",
  "Kiwi",
  "Blueberry",
  "Raspberry",
  "Peach",
  "Pear",
  "Plum",
  "Cherry",
  "Watermelon",
  "Cantaloupe",
  "Honeydew",
  "Papaya",
  "Dragonfruit",
  "Passionfruit",
  "Lemon",
  "Lime",
  "Grapefruit",
  "Tangerine",
  "Mandarin",
  "Orange",
  "Clementine",
  "Kumquat",
  "Pomelo",
  "Yuzu",
  "Avocado",
  "Coconut",
  "Guava",
  "Lychee",
  "Mangosteen",
  "Durian",
  "Jackfruit",
  "Starfruit",
  "Persimmon",
  "Quince",
  "Fig",
  "Date",
  "Apricot",
  "Nectarine",
  "Pomegranate",
  "Kiwiberry",
  "Blackberry",
  "Boysenberry",
  "Elderberry",
  "Mulberry",
  "Cranberry",
  "Gooseberry",
  "Currant",
  "Marionberry",
  "Cloudberry",
  "Huckleberry",
  "Salmonberry",
  "Tayberry",
  "Juneberry",
  "Acai",
  "Plantain",
  "Breadfruit",
  "Ugli Fruit",
  "Custard Apple",
  "Soursop",
  "Rambutan",
  "Longan",
  "Langsat",
  "Santol",
  "Salak",
  "Feijoa",
  "Jabuticaba",
  "Spanish Lime",
  "Rose Apple",
  "Water Apple",
  "Malay Apple",
  "Sapodilla",
  "Medlar",
  "Loquat",
  "Pawpaw",
  "Prickly Pear",
  "Cactus Fruit",
  "Miracle Fruit",
  "Goji Berry",
  "Barberry",
  "Sea Buckthorn",
  "Indian Fig",
  "Jujube",
  "Mamey Sapote",
  "Canistel",
  "Akebia",
  "Bael",
  "Bilberry",
  "Chokeberry",
  "Crowberry",
  "Damson",
  "Gac",
  "Jambolan",
  "Nance",
  "pineapple",
];

const basketLength = basket.length;
console.log("basket", basketLength);

basket[basketLength - 1] = "Plum";

// console.log("basket", basket)

const fruitsArray = [
  "apple",
  "banana",
  "mango",
  "Bael",
  "Bilberry",
  "Chokeberry",
  "Crowberry",
  "Damson",
  "Gac",
  "Jambolan",
  "Nance",
  "pineapple",
];

const poppedItem = fruitsArray.pop()

console.log("fruitsArray", fruitsArray)
console.log("poppedItem", poppedItem)

fruitsArray.pop()
fruitsArray.pop()
console.log("fruitsArray", fruitsArray)



const fruitsArray2 = [
  "apple",
  "banana",
  "mango",
  "Bael",
  "Bilberry",
  "Chokeberry",
  "Crowberry",
  "Damson",
  "Gac",
  "Jambolan",
  "Nance",
  "pineapple",
];

// fruitsArray2.push("Kiwi", "Apple", "Cherry")

// fruitsArray2.shift()
fruitsArray2.unshift("Grapes", "Melon", "Leachee")



console.log("fruitsArray2", fruitsArray2)




const arr1 = [1]
const arr2 = [1]

console.log("matching", arr1[0] == arr2[0] ) // 1 == 1

const userData = {
  name: "Noor",
  age: 50,
  permenentAddress: "XYZ Address"
}

const userData2 = {
  name: "Noor",
  age: 50,
  permenentAddress: "XYZ Address"
}

console.log("userData", userData["name"])
console.log("userData", userData["permenentAddress"])
console.log("userDataq", userData.age)


console.log("userData", userData == userData2)
console.log("userData name", userData == userData2)

console.log("name", userData["name"]  ==  userData2["name"])
console.log("name", userData.name  ==  userData2["name"])
console.log("name", userData.name  ==  userData2.name)


const newUserData = userData

console.log("newUserData", newUserData == userData)


// const x = 10
// const y = 10
// const z = 10

// const x = 10
// const y = x
// const z = y

