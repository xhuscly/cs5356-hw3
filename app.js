document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetch-btn");
  const dogImageContainer = document.getElementById("dog-image-container");

  fetchBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random Dog";
      img.style.maxWidth = "300px";
      img.style.display = "block";

      dogImageContainer.innerHTML = "";

      // 把新的图片添加到容器中
      dogImageContainer.appendChild(img);
    } catch (error) {
      console.error("获取狗狗图片失败：", error);
    }
  });
});
