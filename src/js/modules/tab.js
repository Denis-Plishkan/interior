import mixitup from "mixitup";

function tabOur() {
  const container = document.querySelector(".our__card-wrapper");
  if (container) {
    let mixer1 = mixitup(".our__card-wrapper", {
      load: {
        filter: ".all",
      },
    });
  }
  
  const buttons = document.querySelectorAll(".our__content-links button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
}

tabOur();

function tabOurProjects() {
  const container = document.querySelector(".our-projects__inner");
  if (container) {
    let mixer2 = mixitup(".our-projects__inner", {
      load: {
        filter: ".house",
      },
    });
  }

  const buttons = document.querySelectorAll(
    ".our-projects__content-links button"
  );

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });
}

tabOurProjects();
