const userInput = document.querySelector(".user-input");
const startButton = document.querySelector(".start-button");

let intervalId = null;
let intervalTime = 1000; // Default is 1 second

// Generate a random color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
}

function changeBackground() {
  document.body.style.backgroundColor = getRandomColor();
}

// Handle button click to start or stop the color change
const handleClick = function () {
  intervalTime = parseInt(userInput.value) * 1000;

  if (intervalTime <= 0) {
    intervalTime = 1000; // Set default to 1 second
  }

  // Toggle interval start/stop
  if (intervalId) {
    clearInterval(intervalId); // Stop interval
    intervalId = null;
    startButton.value = "Start"; // Update button text
    startButton.classList.remove("btn-danger"); // Update button style
    startButton.classList.add("btn-primary"); // Update button style
  } else {
    intervalId = setInterval(changeBackground, intervalTime); // Start interval
    startButton.value = "Stop"; // Update button text
    startButton.classList.remove("btn-primary"); // Update button style
    startButton.classList.add("btn-danger"); // Update button style
  }
};

startButton.addEventListener("click", handleClick);
