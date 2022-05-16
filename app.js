const button = document.getElementById("btn");
const color = document.querySelector(".color");

const colors = ["#FF5733", "#F9FF33", "#3371FF", "red", "green", "rgb(85, 255, 51)"];

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
let oldNumber = 0;


button.addEventListener("click", () => {
  let newNumber = getRandomNumber();

  // checking the script did not select two identical numbers 
  // (and therefore two identical colors) in a row
  while (newNumber === oldNumber) {
    newNumber = getRandomNumber();
  }

  document.body.style.backgroundColor = colors[newNumber];
  color.textContent = colors[newNumber];

  oldNumber = newNumber;
});


