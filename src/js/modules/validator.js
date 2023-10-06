
function validatorPopUp() {
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const phoneInput = document.getElementById("phoneNumber");
    const cityInput = document.getElementById("city");
    const emailInput = document.getElementById("email");
    const buttonSubmit = document.querySelector(".popUp__button");
    const commentSubmit = document.getElementById("comment");
    const container = document.querySelector('.popUp-content__top');
  
    const firstNameText = document.getElementById("validate-name-text");
    const lastNameText = document.getElementById("validate-lastName-text");
    const phoneText = document.getElementById("validate-phone-text");
    const cityText = document.getElementById("validate-city-text");
    const emailText = document.getElementById("validate-email-text");
    const commentText = document.getElementById("validate-comment-text");
  
    function isFormValid() {
      const inputs = [firstNameInput, lastNameInput, phoneInput, cityInput, emailInput];
      for (const input of inputs) {
        if (input.classList.contains("invalid")) {
          return false;
        }
      }
      return true;
    }
  
    function updateButtonSubmit() {
      if (isFormValid()) {
        buttonSubmit.disabled = false;
        buttonSubmit.classList.remove('invalid');
        buttonSubmit.classList.add('valid');
        container.classList.remove('invalid');
      } else {
        buttonSubmit.disabled = true;
        buttonSubmit.classList.remove('valid');
        buttonSubmit.classList.add('invalid');
        container.classList.add('invalid');
      }
    }
  
    function validatePhoneNumber(phoneNumber) {
      const phoneValid = /^\+\d{12}$/;
      return phoneValid.test(phoneNumber);
    }
  
    function validateEmail(email) {
      const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailValid.test(email);
    }
  
    firstNameInput.addEventListener("input", () => {
      const name = firstNameInput.value.trim();
      if (name === "") {
        firstNameInput.classList.add("invalid");
        firstNameText.textContent = "Please enter your name";
      } else if (name.length <= 2) {
        firstNameInput.classList.add("invalid");
        firstNameText.textContent = "Less than 2 letters";
      } else if (name.length > 10) {
        firstNameInput.classList.add("invalid");
        firstNameText.textContent = "More than 10 letters";
      } else {
        firstNameInput.classList.remove("invalid");
        firstNameText.textContent = "";
      }
      updateButtonSubmit();
    });
  
    lastNameInput.addEventListener("input", () => {
      const lastName = lastNameInput.value.trim();
      if (lastName === "") {
        lastNameInput.classList.add("invalid");
        lastNameText.textContent = "Please enter your last name";
      } else if (lastName.length <= 2) {
        lastNameInput.classList.add("invalid");
        lastNameText.textContent = "Less than 2 letters";
      } else if (lastName.length > 10) {
        lastNameInput.classList.add("invalid");
        lastNameText.textContent = "More than 10 letters";
      } else {
        lastNameInput.classList.remove("invalid");
        lastNameText.textContent = "";
      }
      updateButtonSubmit();
    });
  
    phoneInput.addEventListener("input", () => {
      const phone = phoneInput.value.trim();
      if (phone === "") {
        phoneInput.classList.add("invalid");
        phoneText.textContent = "Please enter your phone number";
      } else if (phone.length > 13) {
        phoneInput.classList.add("invalid");
        phoneText.textContent = "More than 13 numbers";
      } else if (!validatePhoneNumber(phone)) {
        phoneInput.classList.add("invalid");
        phoneText.textContent = "Invalid phone number format. Use format: +1234567890";
      } else {
        phoneInput.classList.remove("invalid");
        phoneText.textContent = "";
      }
      updateButtonSubmit();
    });
  
    cityInput.addEventListener("input", () => {
      const city = cityInput.value.trim();
      if (city === "") {
        cityInput.classList.add("invalid");
        cityText.textContent = "Please enter your city";
      } else if (city.length <= 2) {
        cityInput.classList.add("invalid");
        cityText.textContent = "Less than 2 letters";
      } else if (city.length > 10) {
        cityInput.classList.add("invalid");
        cityText.textContent = "More than 10 letters";
      } else {
        cityInput.classList.remove("invalid");
        cityText.textContent = "";
      }
      updateButtonSubmit();
    });
  
    emailInput.addEventListener("input", () => {
      const email = emailInput.value.trim();
      if (email === "") {
        emailInput.classList.add("invalid");
        emailText.textContent = "Please enter your email";
      } else if (!validateEmail(email)) {
        emailInput.classList.add("invalid");
        emailText.textContent = "Invalid email format";
      } else {
        emailInput.classList.remove("invalid");
        emailText.textContent = "";
      }
      updateButtonSubmit();
    });

    commentSubmit.addEventListener("input", () => {
      const comment = commentSubmit.value.trim();
      if (comment.length > 300) {
        commentSubmit.classList.add("invalid");
        commentText.textContent = "More than 300 letters";
      } else {
        commentSubmit.classList.remove("invalid");
        commentText.textContent = '';
      }
    })
  
    updateButtonSubmit();
  }
  
  validatorPopUp();
