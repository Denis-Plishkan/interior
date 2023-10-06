function preloader() {
  document.addEventListener("DOMContentLoaded",() => {
    const loaderPercent = document.getElementById("preloader-percent");
    const preloaderText = document.getElementById("preloader-text");
    const preloaderContainer = document.querySelector(".preloader__container");

    let percent = 30;
    const interval = setInterval(() => {
      percent += 1;
      loaderPercent.textContent = `${percent}%`;

      if (percent >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          preloaderText.style.display = "none";
          loaderPercent.textContent = "HILIGHT";
          setTimeout(() => {
            preloaderContainer.style.display = "none";
          }, 500);
        }, 0);
      }
    }, 20);
  });
}

preloader();