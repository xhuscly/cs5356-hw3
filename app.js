document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetch-btn");
  const dogImageContainer = document.getElementById("dog-image-container");

  if (fetchBtn) {
    fetchBtn.addEventListener("click", async (event) => {
      event.preventDefault(); // 防止表单提交
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        
        const img = document.createElement("img");
        img.src = data.message;
        img.alt = "Random Dog";
        img.style.maxWidth = "300px";
        img.style.display = "block";

        dogImageContainer.innerHTML = ''; // 清除之前的图片
        dogImageContainer.appendChild(img);

      } catch (error) {
        console.error("Unable to get this photo", error);
      }
    });
  }
});
