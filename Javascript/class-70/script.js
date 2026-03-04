let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let pricesObj = Object.entries(prices)
console.log("pricesObj", pricesObj);

const priceMap = pricesObj.map(entry => {
    console.log("entry", entry[0], entry[1] * 2)
    return [entry[0], entry[1] * 2]
})

console.log("map",priceMap)

const actualObj = Object.fromEntries(priceMap)
console.log("actualObj",actualObj)


// let doublePrices = Object.fromEntries(
//   // convert prices to array, map each key/value pair into another pair
//   // and then fromEntries gives back the object
//   Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
// );

let prices2 = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let freezeObj = Object.freeze(prices2)

console.log("prisdjkhfsdjk", freezeObj.orange = 10)
console.log("prisdjkhfsdjkdfdfgg", freezeObj)