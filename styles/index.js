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
// Basic operators
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");

const display = {
    updateDisplay: function (input) {
        // limit lenght of display
        if (output.textContent.length <= 10) {
            if (output.textContent == 0) {
                output.textContent = "";
            }
            output.textContent += input;
        }
    },
    changeDisplayTo: function(input) {
        output.textContent = input;
    }
};

const buttons = {
    // Method to handle number button clicks
    numberButtonClick: function (event) {
        // get number from the button
        display.updateDisplay(event.target.textContent);
    },
    // if there is nothing left replace with just a 0
    backspaceBtnClick: function () {
        output.textContent = output.textContent.slice(0, -1);
        if (output.textContent == "") {
            output.textContent = 0;
        }
    },
    basicOperationBtnClick: function (event) {
        // RegEx for matching "+ - * /"
        if (!output.textContent.slice(-1).match(/[+\-*/]/g)) {
            display.updateDisplay(event.target.textContent);
        }
        // replace if another operator
    },
    equalsBtnClick: function () {
        let expression = output.textContent;
        let result = eval(expression);
        display.changeDisplayTo(result);
    }
};
// Number button event listeners, gets the first 10 buttons
const numberButtons = document.querySelectorAll("button");
for (let i = 0; i < 10; i++) {
    numberButtons[i].addEventListener("click", buttons.numberButtonClick);
}

// Backspace event listener
backspace.addEventListener("click", buttons.backspaceBtnClick);

// Basic operator listeners (repetitive)
add.addEventListener("click", (event) => {
    buttons.basicOperationBtnClick(event);
});
subtract.addEventListener("click", (event) => {
    buttons.basicOperationBtnClick(event);
});
multiply.addEventListener("click", (event) => {
    buttons.basicOperationBtnClick(event);
});
divide.addEventListener("click", (event) => {
    buttons.basicOperationBtnClick(event);
});
equals.addEventListener("click", (event) => {
    buttons.equalsBtnClick(event);
});
