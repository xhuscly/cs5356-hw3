document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetch-btn");
  const dogImageContainer = document.getElementById("dog-image-container");

  if (!fetchBtn || !dogImageContainer) {
    console.error("Button (#fetch-btn) or container (#dog-image-container) not found in the DOM.");
    return; // Stop if we can't find them
  }

  fetchBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // Prevent form submission or page reload

    try {

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();

      cons
