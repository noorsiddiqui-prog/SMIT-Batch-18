const arr = [10, 22, 36, 48, 55];
// const arr = "sdhglsdhfjlkhf"

console.log("Arr", Array.isArray(arr));

if (Array.isArray(arr)) {
  console.log("Arr is an array");

  const index5 = arr.indexOf(48);
  console.log("index5", index5);
}

Array.isArray(arr) ? console.log("Arr is an array") : null;
Array.isArray(arr) && console.log("Arr is an array &&");


if(true) {
    console.log("True")
} else {
    console.log("False")
}


true ? console.log("True") : console.log("False")