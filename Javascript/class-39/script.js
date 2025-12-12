console.log("Consoling....");
console.warn("Warning...");
console.error("Error...");

// window.alert("Hello Alert!")
// window.confirm("Are you Human?")
// window.prompt("What is your age?")

// var element = document.createElement('p');
// element.textContent = "Hello, World";
// document.body.appendChild(element);

// var bhoot = document.createElement('h1') //<h1> </h1>
// bhoot.textContent = "Hello I am bhoot" // <h1> Hello I am bhoot </h1>
// document.body.appendChild(bhoot)

var churel = document.getElementById("p-1"); //<p id='p-1'></p>

churel.textContent = "Paragraph 1";
// churel.style.color = "pink"
// churel.style.fontSize = "40px"
// churel.style.backgroundColor = "yellow"
// churel.style.width = "400px"
// churel.style.height = "100px"
// churel.style.display = "flex"
// churel.style.alignItems = "center"
// churel.style.justifyContent = "center"
// churel.style.border = "1px solid red"
// churel.style.borderRadius = "10px"

function changeColor() {
  churel.style.color = "pink";
  churel.style.fontSize = "40px";
  churel.style.backgroundColor = "yellow";
  churel.style.width = "400px";
  churel.style.height = "100px";
  churel.style.display = "flex";
  churel.style.alignItems = "center";
  churel.style.justifyContent = "center";
  churel.style.border = "1px solid red";
  churel.style.borderRadius = "10px";
}