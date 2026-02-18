console.log("*")
console.log("**")
console.log("***")
console.log("****")
console.log("*****")
console.log("******")

console.log("-----------------------------------------")
for(let i = 1; i <=6; i++){
    console.log(" * ")
    let star = ""
    for(let j = 1; j <= i; j++) {
        console.log(" * ")
        star = star + "* "
    }

    console.log("star", star)
}