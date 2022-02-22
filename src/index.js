import './style.css'
import Notiflix from 'notiflix';

const value = document.querySelector(".search-form");
const reset = document.querySelector(".reset");
const foo = "";
let inputValue = "";

value.addEventListener("submit", onFormSubmit);
reset.addEventListener("click", onReset);

function onFormSubmit(e) {
    e.preventDefault();
    inputValue = e.currentTarget.elements.comment;
    const reverseValue = inputValue.value.split(" ").reverse().join(" ");
    if (inputValue.value === "") {
        Notiflix.Notify.failure(`Sorry, you must enter some comment. Please try again.`);
    }
    if (inputValue.value !== "") {
        Notiflix.Notify.success(`Greate! Look for result!`);
        inputValue.value = reverseValue;
    }
}

function onReset(){
    inputValue = "";
}