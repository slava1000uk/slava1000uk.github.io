const button = document.getElementById("btn");
const color = document.querySelector(".color");

const hexCharsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function getRandomNumber () {
  return Math.floor(Math.random() * hexCharsArray.length);
}

function getRandomHexNumber () {
  let RandomHexNumber = "#";

  for (let i = 0; i < 6; i++) {
    RandomHexNumber += hexCharsArray[getRandomNumber()];
  }

  return RandomHexNumber;
}


let oldHexNumber = "#F1F5F8";


button.addEventListener("click", () => {
  let newHexNumber = getRandomHexNumber();

  // checking the script did not select two identical numbers 
  // (and therefore two identical colors) in a row
  while (newHexNumber === oldHexNumber) {
    newHexNumber = getRandomHexNumber();
  }

  document.body.style.backgroundColor = newHexNumber;
  color.textContent = newHexNumber;

  oldHexNumber = newHexNumber;
});