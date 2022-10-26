import { IsValid } from "./isValid.js";

const formDOM = document.querySelector('form');
const inputsDOM = formDOM.querySelectorAll('input');
const buttonDOM = formDOM.querySelector('button');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();

    // 1) duomenu surinkimas
    const formData = {};
    const errorsList = [];

    for (const inputDOM of inputsDOM) {
        const key = inputDOM.name;
        const value = inputDOM.value;
        const validationMethod = inputDOM.dataset.validation;
        formData[key] = value;

        const [err, msg] = IsValid[validationMethod](value);
        if (err) {
            errorsList.push(msg);
        }
    }

    if (errorsList.length) {
        console.log(errorsList);
    } else {
        console.log('Viskas OK - siunciam duomenis i serveri...');
        fetch(formDOM.action, {
            method: formDOM.dataset.method,
            body: JSON.stringify(formData),
        });
    }

    // 3) duomenu issiuntimas
    // 3a) success -> rodom
    // 3b) error   -> rodom
})
