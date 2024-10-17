const elem = document.querySelector("input");
const log = document.getElementById("result");

elem.addEventListener("input", handleInput);

function handleInput(e) {
  try {
    const value = elem.value;
    if (!isNaN(value) && Number(value) < 0) {
      throw new Error("Please enter a positive number.");
    }

    if (value.length > 0 && value === value.split("").reverse().join("")) {
      log.textContent = "Yes. This is a palindrome!";
      log.style.color = "#06402B";
    } else {
      log.textContent = "No. Try again.";
      log.style.color = "#8B0000";
    }
  } catch (error) {
    log.textContent = `Error: ${error.message}`;
    console.error("Error occurred while checking palindrome:", error);
  }
}
