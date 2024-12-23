const userInput = document.querySelector(".user-input");
const highLighted = document.querySelector(".counted");

const handleKeyDown = () => {
  const countText = highLighted.textContent;
  let searchText = userInput.value;

  // Remove spaces from the input
  searchText = searchText.replace(/\s+/g, "");

  // Do nothing if search text is empty
  if (searchText === "") {
    highLighted.innerHTML = countText;
    return;
  }

  // Create regex to match whole words
  const re = new RegExp(`\\b(${searchText})\\b`, "gi");

  // Replace matched words with <mark> wrapped text
  const highLightedText = countText.replace(
    re,
    '<mark style="background-color: #ffff00; color: #00008b;">$1</mark>'
  );

  // Update the HTML content with highlighted text
  highLighted.innerHTML = highLightedText;
};

userInput.addEventListener("input", handleKeyDown);
