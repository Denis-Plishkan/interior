function headerDropdown() {
  const dropdowns = document.querySelectorAll(".header__dropdown");

  dropdowns.forEach((dropdown) => {
    const items = dropdown.querySelectorAll(".dropdown-menu li");
    const labelText = dropdown.querySelector(".label-text");
    const label = dropdown.querySelector(".dropdown-label");
    const menu = dropdown.querySelector(".dropdown-menu");

    label.addEventListener("click", () => {
      menu.classList.toggle("active");
      label.classList.toggle("active");
    });
    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        labelText.textContent = e.target.textContent;
        menu.classList.remove("active");
        label.classList.remove("active");
      });
    });
  });
}

headerDropdown();

function heroDropdown() {
  const dropdowns = document.querySelectorAll(".hero__dropdown");

  dropdowns.forEach((dropdown) => {
    const items = dropdown.querySelectorAll(".hero__dropdown-menu li");
    const labelText = dropdown.querySelector(".hero__label-text");
    const label = dropdown.querySelector(".hero__dropdown-label");
    const menu = dropdown.querySelector(".hero__dropdown-menu");

    label.addEventListener("click", (e) => {
      menu.classList.toggle("active");
      label.classList.toggle("active");
    });

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        labelText.textContent = e.target.textContent;
        menu.classList.remove("active");
        label.classList.remove("active");
      });
    });
  });
}

heroDropdown();

// function footerDropdown() {
//   const dropdown = document.querySelector(".footer__dropdown");
//   const items = dropdown.querySelectorAll(".dropdownFooter-menu li");
//   const labelText = dropdown.querySelector(".label-text");
//   const label = dropdown.querySelector(".dropdownFooter-label");
//   const menu = dropdown.querySelector(".dropdownFooter-menu");

//   label.addEventListener("click", () => {
//     menu.classList.toggle("active");
//     label.classList.toggle("active");
//   });

//   items.forEach((item) => {
//     item.addEventListener("click", (e) => {
//       labelText.textContent = e.target.textContent;
//       menu.classList.remove("active");
//       label.classList.remove("active");
//     });
//   });
// }

// footerDropdown();
