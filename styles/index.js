"use strict";
// Display
const output = document.querySelector("h1");
// Number buttons
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const backspace = document.getElementById("backspace");
const display = {
    updateDisplay: function (number) {
        output.textContent = number;
    },
};

const buttons = {
    // Method to handle number button clicks
    numberButtonClick: function (event) {
        // get number from the button
        console.log(event.target.textContent);
    },
};

const allButtons = document.querySelectorAll("button");
for (let i = 0; i < 10; i++) {
    allButtons[i].addEventListener("click", buttons.numberButtonClick);
}
