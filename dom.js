// your JavaScript file
const container = document.querySelector("#container");

const redParagraph = document.createElement("p");
redParagraph.textContent = "This is the glorious text-content!";
redParagraph.style.color='red';
container.appendChild(redParagraph);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I’m a blue h3!";
blueH3.style.color="blue";
container.appendChild(blueH3);

// Button 2 Test
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

// Button 3 Test 
const btnn = document.querySelector("#btnn");
btnn.addEventListener("click", () => {
  alert("Hello www");
});

// METHOD 4
function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHODS 5 & 6
function alertFunction() {
  alert("NO! YOU DID IT!");
}
const butn = document.querySelector("#butn");

// METHOD 5
butn.onclick = alertFunction;

// METHOD 6 - using double click and changing color of button background
butnn.addEventListener("click", function (e) {
  e.target.style.background = "pink";
});