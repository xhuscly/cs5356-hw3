document.addEventListener("DOMContentLoaded", () => {
  const fetchBtn = document.getElementById("fetch-btn");
  const dogImageContainer = document.getElementById("dog-image-container");

  if (!fetchBtn || !dogImageContainer) {
    console.error("Button (#fetch-btn) or container (#dog-image-container) not found in the DOM.");
    return; // 如果找不到按钮或容器，停止执行
  }

  fetchBtn.addEventListener("click", async (event) => {
    event.preventDefault(); // 防止表单提交或页面刷新

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // 打印API返回的数据

      // 清除之前的图片
      dogImageContainer.innerHTML = "";

      // 创建新的图片元素
      const img = document.createElement("img");
      img.src = data.message; // API返回的图片URL
      img.alt = "Random Dog";
      img.style.maxWidth = "100%"; // 设置图片最大宽度
      img.style.height = "auto"; // 保持图片比例

      // 将图片插入到容器中
      dogImageContainer.appendChild(img);
    } catch (error) {
      console.error("Unable to fetch the dog image:", error);
    }
  });
});
