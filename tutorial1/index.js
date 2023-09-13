let name = "Seweryn";
let age = 30;

let person = {
  name: "Seweryn",
  age: 26,
};

person.age = 25;

console.log(person);

let selectedColors = ["red", "blue"];
selectedColors[2] = "yellow";
selectedColors.push("purple");
console.log(selectedColors);
console.log(selectedColors.length);

function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

greet("John", "Johnson");
greet("Tim", "Timon");

function square(number) {
  return number * number;
}

console.log(square(2));

const messageBox = document.querySelector("#helloName");

const greetMe = () => {
  let hello = prompt("Whats your name ?");
  messageBox.textContent = `Hello ${hello}`;
};

greetMe();
