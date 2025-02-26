document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetch-btn");
 const dogImageContainer = document.getElementById("dog-image-container");

  if (fetchBtn) {
    fetchBtn.addEventListener("click", async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random Dog";
      img.style.maxWidth = "300px";
      img.style.display = "block";

      main.appendChild(img);

      } catch (error) {
        console.error("Unable to get this photo", error);
      }
    });
  }
});
