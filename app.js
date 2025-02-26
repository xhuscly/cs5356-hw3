document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetch-btn");
  const dogImageContainer = document.getElementById("dog-image-container");

  if (!fetchBtn || !dogImageContainer) {
    console.error("Button (#fetch-btn) or container (#dog-image-container) not found in the DOM.");
    return; 
  }

  fetchBtn.addEventListener("click", async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); 

      dogImageContainer.innerHTML = "";


      const img = document.createElement("img");
      img.src = data.message; 
      img.alt = "Random Dog";
      img.style.maxWidth = "100%"; 
      img.style.height = "auto"; 


      dogImageContainer.appendChild(img);
    } catch (error) {
      console.error("Unable to fetch the dog image:", error);
    }
  });
});
