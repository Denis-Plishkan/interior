
function popUp() {
  const popUpButtons = document.querySelectorAll(".pop-up__btn");
  const popUp = document.querySelector(".pop-up__container");
  const closePopUp = document.querySelector(".pop-up__close");
  const body = document.querySelector("body");
  const popUpButtonValid = document.querySelector(".pop-up__button");
  const popUpValid = document.querySelector(".popup-valid__container");
  const closePopUpValid = document.querySelector(".popup-valid__close");
  const popUpValidButton = document.querySelector(".popup-valid__button");
  const menu = document.querySelector(".menu");
  const iconMenu = document.querySelector(".icon-menu");
  const blackIconMenu = document.querySelector(".black-header__icon-menu");
  const headerRightWhite = document.querySelector(".header__right-white");
  const headerRightBlack = document.querySelector(".header__right-black");
  const whiteLogo = document.querySelector(".white-header__logo");
  const blackLogo = document.querySelector(".black-header__logo");

  if (popUp) {
      popUpButtons.forEach((popUpButton) => {
          popUpButton.addEventListener("click", (e) => {
              e.preventDefault();
              popUp.style.display = "block";
              body.classList.add("_lock");
          });
      });
  }

  if (closePopUp) {
      closePopUp.addEventListener("click", () => {
          popUp.style.display = "none";
          body.classList.remove("_lock");
          if (menu && menu.classList.contains("_active")) {
              menu.classList.remove("_active");
          }
          if (iconMenu && iconMenu.classList && iconMenu.classList.contains("_active")) {
              iconMenu.classList.remove("_active");
          }
          if (blackIconMenu.classList.contains("_active")) {
            blackIconMenu.classList.remove("_active");
            headerRightWhite.style.display = 'none';
            headerRightBlack.style.display = 'flex';
            whiteLogo.style.display = 'none';
            blackLogo.style.display = 'block';
          }
      });
  }

  if (popUpButtonValid && popUpValid) {
      popUpButtonValid.addEventListener("click", (e) => {
          popUpValid.style.display = "block";
          e.preventDefault();
      });
  }

  if (closePopUpValid) {
      closePopUpValid.addEventListener("click", () => {
          if (popUpValid) {
              popUpValid.style.display = "none";
              popUp.style.display = "none";
              menu.classList.remove("_active");
              body.classList.remove("_lock");
              if (iconMenu && iconMenu.classList && iconMenu.classList.contains("_active")) {
                  iconMenu.classList.remove("_active");
              }
              if (blackIconMenu.classList.contains("_active")) {
                blackIconMenu.classList.remove("_active");
                headerRightWhite.style.display = 'none';
                headerRightBlack.style.display = 'flex';
                whiteLogo.style.display = 'none';
                blackLogo.style.display = 'block';
              }
          }
          body.classList.remove("_lock");
          if (popUp) {
              popUp.style.display = "none";
          }
      });
  }

  if (popUpValidButton && popUpValid) {
      popUpValidButton.addEventListener("click", () => {
          popUpValid.style.display = "none";
      });
  }
}

popUp();
