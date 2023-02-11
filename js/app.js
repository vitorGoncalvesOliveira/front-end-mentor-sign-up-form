import { validateInputs } from './validate.js';

const inputs = document.getElementsByTagName('input');
const button = document.getElementsByTagName('button')[0];

button.addEventListener('click',(e) =>{
    e.preventDefault()
    validateInputs(inputs);   
})
