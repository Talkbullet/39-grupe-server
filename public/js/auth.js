const formDOM = document.querySelector('form');
const inputsDOM = formDOM.querySelectorAll('input');
const buttonDOM = formDOM.querySelector('button');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

    // 1) duomenu surinkimas
    const formData = {};

    for (const inputDOM of inputsDOM) {
        const key = inputDOM.name;
        const value = inputDOM.value;
        formData[key] = value;
    }

    console.log(formData);

    // 2) duomenu validacija

    // 3) duomenu issiuntimas
    // 3a) success -> rodom
    // 3b) error   -> rodom
})
