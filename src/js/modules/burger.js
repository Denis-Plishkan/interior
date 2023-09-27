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
  console.log(burger);
  console.log(burgerMenu);

  const body = document.querySelector("body");
  if (burger) {
    burger.addEventListener("click", () => {
      burgerMenu.classList.toggle("_active");
      burger.classList.toggle("_active");
      body.classList.toggle("_lock");
    });
  }
}

blackBurger();
