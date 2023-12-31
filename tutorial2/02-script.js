let playGame = confirm("Shall we play rock,paper or scissors ?");

if (playGame) {
  //play
  let playerChoice = prompt("Please enter rock,paper or scissors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Okay, thanks for playing");
    } else {
      alert("You didnt enter rock,paper or scissors");
    }
  } else {
    alert("Guess you change your mind!");
  }
} else {
  alert("Okay,maybe next time");
}

function sum(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}

console.log(sum(2));

function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}

console.log(getUserNameFromEmail("playerOne@gmail.com"));

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("tRaVis"));

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
  {
    var x = 11;
    const z = 6;
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
}

myFunc();

const myArray = [];

myArray[0] = "Dave";
myArray[1] = 1000;
myArray[2] = false;

console.log(myArray);
console.log(myArray.length);

myArray.push("school");
console.log(myArray);

const lastItem = myArray.pop();
console.log(lastItem);

myArray.unshift(42);
console.log(myArray);

myArray.shift();
console.log(myArray);
