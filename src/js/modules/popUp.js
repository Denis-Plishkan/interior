
function popUp () {
    const popUpButtons = document.querySelectorAll('.popUp__btn');
    const popUp = document.querySelector('.popUp__container');
    const closePopUp = document.querySelector('.popUp__close');
    const body = document.querySelector('body');

    popUpButtons.forEach(popUpButton => {
        popUpButton.addEventListener('click', () => {
            popUp.style.display = 'block';
            body.classList.add('_lock');
        })
    })

    closePopUp.addEventListener('click', () => {
        popUp.style.display = 'none';
        body.classList.remove('_lock');
    })
}

popUp();