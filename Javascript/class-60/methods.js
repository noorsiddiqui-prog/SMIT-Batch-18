// every

const prices = [100, 300, 1000, 5000, 200];

const isGreaterThanFiveThousand = prices.every((value) => {
  const result = value <= 5000;
  return result;
});

console.log("isGreaterThan5000", isGreaterThanFiveThousand);

const hasThousand = prices.some((value) => {
  const result = value > 5000;
  return result;
});

console.log("hasThousand", hasThousand);

const discount = [10, 21, 30, 40];

const isBetween11to20 = discount.some((value) => {
  const res = value >= 11 && value <= 20;
  return res;
});

console.log("isBetween11to20", isBetween11to20);

function checkDiscount(num1, num2) {
  const isBetween11to20 = discount.some((value) => {
    const res = value >= num1 && value <= num2;
    return res;
  });

  return isBetween11to20;
}


console.log("check discount", checkDiscount(11, 20))
console.log("check discount", checkDiscount(21, 30))



// find


const eggs = ["duckEgg", "chickenEgg", "pegionEgg", "sparrowEgg", "parrotEgg", "pegionEgg"]

const isPegionEgg = eggs.find((value) => {
    const result = value == "pegionEgg"
    return result
})

console.log("isPegionEgg", isPegionEgg)





function sum(num1, num2) { // 2, 3
    const result = num1 + num2
    return result
    console.log("hello world")
}

return;
console.log("sum1", sum(2,3))