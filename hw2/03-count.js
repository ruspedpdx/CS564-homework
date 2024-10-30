const userInput = document.querySelector(".user-input");
const highLighted = document.querySelector(".counted");

const handleKeyDown = () => {
  const countText = highLighted.textContent;
  const searchText = userInput.value.trim();

  // Exit if search text is empty
  if (searchText === "") {
    highLighted.innerHTML = countText;
    return;
  }

  // Create regex to match the input, case insensitive
  const re = new RegExp(`\\b(${searchText})\\b`, "gi");

  // Replace matched words with <mark> wrapped text
  const highLightedText = countText.replace(re, "<mark>$1</mark>");

  // Update the HTML content with highlighted text
  highLighted.innerHTML = highLightedText;
};

// Add event listener to userInput
userInput.addEventListener("keydown", handleKeyDown);
