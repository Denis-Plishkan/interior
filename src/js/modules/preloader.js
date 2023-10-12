function preloader() {
  document.addEventListener("DOMContentLoaded", () => {
    const loaderPercent = document.getElementById("preloader-percent");
    const preloaderText = document.getElementById("preloader-text");
    const preloaderContainer = document.querySelector(".preloader__container");
    const body = document.querySelector("body");

    const images = document.querySelectorAll("img");
    let loadedImages = 0;

    const updateLoader = () => {
      if (preloaderContainer) {
        body.classList.add("_lock");
        loadedImages++;
        const percent = Math.round((loadedImages / images.length) * 100);
        loaderPercent.textContent = `${percent}%`;

        if (loadedImages === images.length) {
          setTimeout(() => {
            preloaderText.style.display = "none";
            loaderPercent.textContent = "HILIGHT";
            setTimeout(() => {
              preloaderContainer.style.display = "none";
              body.classList.remove("_lock");
            }, 500);
          }, 250);
        }
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        updateLoader();
      } else {
        img.addEventListener("load", updateLoader);
      }
    });
  });
}

preloader();
