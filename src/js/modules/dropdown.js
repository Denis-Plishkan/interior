
function dropdownHandler(
  dropdownSelector,
  labelSelector,
  menuSelector,
  itemSelector,
  labelTextSelector
) {
  const dropdowns = document.querySelectorAll(dropdownSelector);

  dropdowns.forEach((dropdown) => {
    const items = dropdown.querySelectorAll(itemSelector);
    const labelText = dropdown.querySelector(labelTextSelector);
    const label = dropdown.querySelector(labelSelector);
    const menu = dropdown.querySelector(menuSelector);

    label.addEventListener("click", () => {
      menu.classList.toggle("active");
      label.classList.toggle("active");
    });

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (labelText) {
          labelText.textContent = e.target.textContent;
        console.log(labelText.textContent);
        console.log(e.target.textContent);
        menu.classList.remove("active");
        label.classList.remove("active");
        }
        
      });
    });
  });
}

dropdownHandler(
  ".header__dropdown",
  ".dropdown-label",
  ".dropdown-menu",
  ".dropdown-menu li",
  ".label-text"
);
dropdownHandler(
  ".hero__dropdown",
  ".hero__dropdown-label",
  ".hero__dropdown-menu",
  ".hero__dropdown-menu li",
  ".hero__label-text"
);
