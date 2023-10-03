
function popUp () {
    const popUpButtons = document.querySelectorAll('.header__button-wrapper');
    const popUp = document.querySelector('.popUp__container');
    const closePopUp = document.querySelector('.popUp__close');

    popUpButtons.forEach(popUpButton => {
        popUpButton.addEventListener('click', () => {
            popUp.style.display = 'block';
        })
    })

    closePopUp.addEventListener('click', () => {
        popUp.style.display = 'none';
    })
}

popUp();