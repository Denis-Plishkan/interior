function loremForm () {
    const loremForm = document.querySelectorAll(".lorem__form-group");
    
    loremForm.forEach((contactForm) => {
        const input = contactForm.querySelector('input');
        const span = contactForm.querySelector('span');

        input.addEventListener("focus", () => {
            span.classList.add('active');
        })
        input.addEventListener("blur", () => {
            span.classList.remove('active');
        }) 
    })
}

loremForm();