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
      `;
    resultsContainer.appendChild(errorCard);
    return;
  }

  // Filter matching on partial strings
  const results = characters.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  // Display results in separate cards
  resultsContainer.innerHTML = ""; // Clear previous results

  results.forEach((result, index) => {
    // Create a new row every 2 cards
    if (index % 2 === 0) {
      row = document.createElement("div");
      row.classList.add("row", "g-4", "mb-4", "justify-content-between");
      resultsContainer.appendChild(row);
    }

    // Create the card
    const card = document.createElement("div");
    card.classList.add(
      "card",
      "col-sm-6",
      "mb-3",
      "h-150",
      "py-6",
      "text-center"
    );

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerHTML = `
    <h2 class="card-title">${result.name}</h2>
    <p class="card-text">Birth year: ${result.birth_year}</p>
  `;
    // Append the card to the current row
    card.appendChild(cardBody);
    row.appendChild(card);
  });
};

searchButton.addEventListener("click", handleClick);
