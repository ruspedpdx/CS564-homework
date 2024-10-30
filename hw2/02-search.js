const userInput = document.querySelector(".user-input");
const searchButton = document.querySelector(".search-button");
const resultsContainer = document.querySelector(".results-container");

// handleClick Function
const handleClick = function handleClick() {
  const query = userInput.value.toLowerCase();
  resultsContainer.innerHTML = ""; // Clear previous results

  // Check if query is empty
  if (query === "") {
    const errorCard = document.createElement("div");
    errorCard.classList.add("error-card");
    errorCard.innerHTML = `
      <p>Please enter a name to search.</p>
      <p>Partial names are acceptable.</p>
      `;
    resultsContainer.appendChild(errorCard);
    return;
  }

  // Filter matching on partial strings
  const results = characters.filter((item) =>
    item.name.toLowerCase().includes(query)
  );

  // Display results in separate cards
  results.forEach((result) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-md-4");
    card.classList.add("justify-content-center");
    card.innerHTML = `
      <h2>${result.name}</h2>
      <p>height: ${result.height}</p>
      <p>birth year: ${result.birth_year}</p>
    `;
    resultsContainer.appendChild(card);
  });
};

searchButton.addEventListener("click", handleClick);
