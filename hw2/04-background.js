const userInput = document.querySelector(".user-input");
const startButton = document.querySelector(".start-button");
const backGround = document.querySelector(".instructions");

let intervalId = null;
let intervalTime = 1000; // Default is 1 second

// Generate a random color
const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = (Math.random() * 0.5 + 0.5).toFixed(2);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

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
    startButton.value = "Start color cycle"; // Update button text
  } else {
    intervalId = setInterval(() => {
      backGround.style.backgroundColor = getRandomColor(); // Change background color
    }, intervalTime);
    startButton.value = "Stop color cycle"; // Update button text
  }
};

// Add event listener to button
startButton.addEventListener("click", handleClick);
