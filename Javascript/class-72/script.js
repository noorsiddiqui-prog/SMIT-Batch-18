// document.write("Hello world!")
// document.write("<h1>Welcome to JavaScript</h1>")

// document.writeln("This is a new line")
// document.writeln("<br> This is a new line")

// document.getElementById("submit-btn").addEventListener("click", function() {
//     alert("Button clicked!")
// })

document.getElementById("about-heading").innerText = "About Us";
document.getElementById("para").innerText =
  "We are a team of passionate developers.";

// document.getElementById("para").style.color = "green"
// document.getElementById("para").style.backgroundColor = "yellow"
// document.getElementById("para").style.padding = "20px"
// document.getElementById("para").style.borderRadius = "20px"

document.getElementById("submit-btn").addEventListener("click", function () {
  document.getElementById("para").style.color = "green";
  document.getElementById("para").style.backgroundColor = "yellow";
  document.getElementById("para").style.padding = "20px";
  document.getElementById("para").style.borderRadius = "20px";
});

document.querySelector("h1").innerText = "Welcome to JavaScript H!";
