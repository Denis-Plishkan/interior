function popUpRadioButton() {
  const radioButtons = document.querySelectorAll(".popUp__radio-button");

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
      radioButtons.forEach((btn) => {
        btn.classList.remove("active");
        const parent = btn.parentElement;
        const lineaNumElement = parent.querySelector(".popUp__linea-num");
        lineaNumElement.classList.remove("active");
      });

      radioButton.classList.add("active");

      const parent = radioButton.parentElement;

      const lineaNumElement = parent.querySelector(".popUp__linea-num");
      lineaNumElement.classList.add("active");
    });
  });
}
popUpRadioButton();
