const elem = document.querySelector("input");
const log = document.getElementById("result");

const handleInput = () => {
  const value = elem.value;

  // Convert input to a number
  const numberValue = Number(value);

  // Check if the value is positive
  if (numberValue < 0) {
    log.textContent = "Please enter a positive number.";
    log.style.color = "#8B0000";
  }

  // Check if the input is a palindrome
  else if (value.length > 0) {
    if (value === value.split("").reverse().join("")) {
      log.textContent = "Yes. This is a palindrome!";
      log.style.color = "#06402B";
    } else {
      log.textContent = "No. Try again.";
      log.style.color = "#8B0000";
    }
  }
};

elem.addEventListener("input", handleInput);
