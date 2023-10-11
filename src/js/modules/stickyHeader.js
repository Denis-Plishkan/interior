function whiteHeader() {
  let isHeaderScrolled = false;

  window.addEventListener("scroll", () => {
    const whiteHeaders = document.querySelectorAll(".header__white");
    const burger = document.querySelector(".icon-menu");

    if (burger) {
      burger.addEventListener("click", () => {
        whiteHeaders.forEach((whiteHeader) => {
          if (whiteHeader.classList.contains("header-scroll")) {
            whiteHeader.classList.remove("header-scroll");
          }
          if (!burger.classList.contains("_active") && window.scrollY > 0) {
            whiteHeader.classList.add("header-scroll");
          }
        });
      });
    }
    

    whiteHeaders.forEach((whiteHeader) => {
      if (!isHeaderScrolled && window.scrollY > 0) {
        whiteHeader.classList.add("header-scroll");
        isHeaderScrolled = true;
      } else if (isHeaderScrolled && window.scrollY === 0) {
        whiteHeader.classList.remove("header-scroll");
        isHeaderScrolled = false;
      }
    });
  });
}

whiteHeader();

function blackHeader() {
  let isHeaderScrolled = false;

  window.addEventListener("scroll", () => {
    const whiteHeaders = document.querySelectorAll(".header__black");
    const burger = document.querySelector(".black-header__icon-menu");

    if (burger) {
      burger.addEventListener("click", () => {
        whiteHeaders.forEach((whiteHeader) => {
          if (whiteHeader.classList.contains("header-scroll-black")) {
            whiteHeader.classList.remove("header-scroll-black");
          }
          if (!burger.classList.contains("_active") && window.scrollY > 0) {
            whiteHeader.classList.add("header-scroll-black");
          }
        });
      });
    }
    

    whiteHeaders.forEach((whiteHeader) => {
      if (!isHeaderScrolled && window.scrollY > 0) {
        whiteHeader.classList.add("header-scroll-black");
        isHeaderScrolled = true;
      } else if (isHeaderScrolled && window.scrollY === 0) {
        whiteHeader.classList.remove("header-scroll-black");
        isHeaderScrolled = false;
      }
    });
  });
}

blackHeader();
