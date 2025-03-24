// Display
const output = document.querySelector(".display");
console.log(output.textContent);
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
// FIXME: NO BACKSPACE ATM
// const backspace = document.getElementById("backspace");

// Basic operators
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");

const switchNegPos = document.getElementById("switchNegPos");
const dot = document.getElementById("dot");
const percent = document.getElementById("percent");

// Clear display
const clear = document.getElementById("clear");

const display = {
    updateDisplay: function (input) {
        // limit lenght of display
        if (output.textContent.length <= 20) {
            if (output.textContent == 0) {
                output.textContent = "";
            }
            output.textContent += input;
        }
    },
    changeDisplayTo: function (input) {
        output.textContent = input;
    },
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
        // was SUPPOSED to be for managing leading zeros and stuff
        // if (expression.match(/(?<!\d)0{2,}(?!\d)/)) {
        //     console.log("there are zeros.");
        // }

        if (expression.includes("%")) {
            const newString = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
            console.log(newString);
            let result = eval(newString);
            display.changeDisplayTo(result);
        } else {
            let result = eval(expression);
            display.changeDisplayTo(result);
        }
    },
    // FIXME: edge cases in addig "-(" or ")" when other characters are around them
    negPosBtnClick: function (event) {
        // check if it contains the parenthesis stuff
        if (
            !(
                output.textContent.slice(0, 2) === "-(" &&
                output.textContent.slice(-1) === ")"
            )
        ) {
            let newOutput = "-(" + output.textContent + ")";
            display.changeDisplayTo(newOutput);
        } else {
            let revertOutput = output.textContent.slice(2, -1);
            output.textContent = revertOutput;
        }
    },
    dotBtnClick: function () {
        console.log("this is the dot function");
        display.updateDisplay(".");
    },
    clearBtnClick: function () {
        display.changeDisplayTo("0");
    },
    percentBtnClick: function () {
        display.updateDisplay("%");
    },
};
// Number button event listeners
one.addEventListener("click", buttons.numberButtonClick);
two.addEventListener("click", buttons.numberButtonClick);
three.addEventListener("click", buttons.numberButtonClick);
four.addEventListener("click", buttons.numberButtonClick);
five.addEventListener("click", buttons.numberButtonClick);
six.addEventListener("click", buttons.numberButtonClick);
seven.addEventListener("click", buttons.numberButtonClick);
eight.addEventListener("click", buttons.numberButtonClick);
nine.addEventListener("click", buttons.numberButtonClick);
zero.addEventListener("click", buttons.numberButtonClick);

// Backspace event listener
// backspace.addEventListener("click", buttons.backspaceBtnClick);
// Clear button listener
clear.addEventListener("click", buttons.clearBtnClick);

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
switchNegPos.addEventListener("click", (event) => {
    buttons.negPosBtnClick(event);
});
dot.addEventListener("click", (event) => {
    buttons.dotBtnClick(event);
});
percent.addEventListener("click", () => {
    buttons.percentBtnClick();
});
