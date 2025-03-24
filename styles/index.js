const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (!isNaN(value) || value === ".") {
            // If it's a number or a decimal point, add it to the current input
            currentInput += value;
            display.textContent = currentInput;
        } else if (value === "C") {
            // Clear button
            currentInput = "";
            previousInput = "";
            operator = "";
            display.textContent = "0";
        } else if (value === "+/-") {
            // Toggle sign
            currentInput = currentInput.startsWith("-") ? currentInput.slice(1) : "-" + currentInput;
            display.textContent = currentInput;
        } else if (value === "%") {
            // Convert to percentage
            currentInput = (parseFloat(currentInput) / 100).toString();
            display.textContent = currentInput;
        } else if (["+", "-", "*", "/"].includes(value)) {
            // If an operator is clicked, store the previous input and operator
            if (currentInput !== "") {
                previousInput = currentInput;
                currentInput = "";
                operator = value;
            }
        } else if (value === "=") {
            // Calculate the result when "=" is clicked
            if (previousInput !== "" && currentInput !== "") {
                const result = eval(`${previousInput} ${operator} ${currentInput}`);
                display.textContent = result;
                currentInput = result.toString();
                previousInput = "";
                operator = "";
            }
        }
    });
});
