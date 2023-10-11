function burger() {
  const burger = document.querySelector(".icon-menu ");
  const burgerMenu = document.querySelector(".menu");

  const body = document.querySelector("body");
  if (burger) {
    burger.addEventListener("click", () => {
      burgerMenu.classList.toggle("_active");
      burger.classList.toggle("_active");
      body.classList.toggle("_lock");
    });
  }
}

burger();

function blackBurger() {
  const burger = document.querySelector(".black-header__icon-menu");
  const burgerMenu = document.querySelector(".black-header__menu");
  const whiteLogo = document.querySelector(".white-header__logo");
  const blackLogo = document.querySelector(".black-header__logo");
  const whiteHeaderRight = document.querySelector(".header__right-white");
  const blackHeaderRight = document.querySelector(".header__right-black");

  const body = document.querySelector("body");
  if (burger) {
    burger.addEventListener("click", () => {
      burgerMenu.classList.toggle("_active");
      burger.classList.toggle("_active");
      body.classList.toggle("_lock");
      if (burger.classList.contains("_active")) {
        whiteLogo.style.display = "block";
        blackLogo.style.display = "none";
        whiteHeaderRight.style.display = "flex";
        blackHeaderRight.style.display = "none";
      } else {
        whiteLogo.style.display = "none";
        blackLogo.style.display = "block";
        whiteHeaderRight.style.display = "none";
        blackHeaderRight.style.display = "flex";
      }
    });
  }
}

blackBurger();
