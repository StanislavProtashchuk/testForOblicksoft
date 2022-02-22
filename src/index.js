import './sass/main.scss';

const value = document.querySelector(".search-form");
let inputValue = "";

value.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    inputValue = e.currentTarget.elements.comment;
    const reverseValue = inputValue.value.split(" ").reverse().join(" ");
    if (inputValue !== "") {
        inputValue.value = reverseValue;
    }
}