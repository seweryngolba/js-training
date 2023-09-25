let myVariable = "Original";

let newVariable = myVariable.replace("n", "N");

console.log(newVariable);

console.log(Math.floor(Math.random() * 100) + 1);

const anyName = "Jonathan";

console.log(anyName.charAt(Math.floor(Math.random() * anyName.length)));

let name = prompt("Enter your name");
console.log(name ?? "You didnt enter your name");

const textP = (document.querySelector("#textP").textContent = anyName.charAt(
  Math.floor(Math.random() * anyName.length)
));
