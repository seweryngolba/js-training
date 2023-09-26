const messageBox = document.querySelector("#helloName");

const greetMe = () => {
  let hello = prompt("Whats your name ?");
  messageBox.textContent = `Hello ${hello}`;
};

greetMe();

let name = "Seweryn";
for (let i = 0; i <= name.length; i++) {
  console.log(name.charAt(i));
}

let counter = 0;

while (counter <= 10) {
  console.log(counter);
  counter++;
  if (counter === 2) {
    counter++;
    continue;
  }
}
