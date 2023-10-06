// function popUp() {
//   const popUpButtons = document.querySelectorAll(".popUp__btn");
//   const popUp = document.querySelector(".popUp__container");
//   const closePopUp = document.querySelector(".popUp__close");
//   const body = document.querySelector("body");
//   const popUpButtonValid = document.querySelector(".popUp__button");
//   const popUpValid = document.querySelector(".popup-valid__container");
//   const closePopUpValid = document.querySelector(".popup-valid__close");
//   const popUpValidButton = document.querySelector(".popup-valid__button");

//   if (popUp) {
//     popUpButtons.forEach((popUpButton) => {
//       popUpButton.addEventListener("click", () => {
//         popUp.style.display = "block";
//         body.classList.add("_lock");
//       });
//     });
//   }

//   closePopUp.addEventListener("click", () => {
//     popUp.style.display = "none";
//     body.classList.remove("_lock");
//   });

//   popUpButtonValid.addEventListener("click", (e) => {
//     popUpValid.style.display = "block";
//     e.preventDefault();
//   });

//   if (closePopUpValid) {
//     closePopUpValid.addEventListener("click", () => {
//         popUpValid.style.display = "none";
//         body.classList.remove("_lock");
//         popUp.style.display = "none";
//       });
//   }
  
//   if (popUpValidButton) {
//     popUpValidButton.addEventListener("click", () => {
//         popUpValid.style.display = "none";
//       });
//   }
 
// }

// popUp();

function popUp() {
    const popUpButtons = document.querySelectorAll(".popUp__btn");
    const popUp = document.querySelector(".popUp__container");
    const closePopUp = document.querySelector(".popUp__close");
    const body = document.querySelector("body");
    const popUpButtonValid = document.querySelector(".popUp__button");
    const popUpValid = document.querySelector(".popup-valid__container");
    const closePopUpValid = document.querySelector(".popup-valid__close");
    const popUpValidButton = document.querySelector(".popup-valid__button");
  
    if (popUp) {
      popUpButtons.forEach((popUpButton) => {
        popUpButton.addEventListener("click", () => {
          popUp.style.display = "block";
          body.classList.add("_lock");
        });
      });
    }
  
    if (closePopUp) {
      closePopUp.addEventListener("click", () => {
        popUp.style.display = "none";
        body.classList.remove("_lock");
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
