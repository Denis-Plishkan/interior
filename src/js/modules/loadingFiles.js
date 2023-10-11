function popUpLoadingFiles() {
    const button = document.querySelector(".pop-up-content__button-left");
    const fileName = document.querySelector(".pop-up-content__button-name-file");
    const fileInput = document.getElementById("fileInput");
  
    fileInput.addEventListener("change", (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        fileName.textContent = selectedFile.name;
      } else {
        fileName.textContent = "";
      }
    });

    button.addEventListener("click", () => {
      fileInput.click();
    });
  }
  
  popUpLoadingFiles();