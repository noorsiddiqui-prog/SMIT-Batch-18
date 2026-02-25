// for(let i = 1; i <=6; i++){
//     console.log(" * ")
//     let star = ""
//     for(let j = 0; j < i; j++) {
//         console.log(" * ")
//         star = star + "* "
//     }

//     console.log("star", star)
// }


for (i = 1; i <= 5; i = i + 1) {
  let str = "";
  for (j = 0; j < i; j = j + 1) {
    str += "*";
  }
  console.log(str);
}