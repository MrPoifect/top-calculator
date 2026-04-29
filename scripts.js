let firstNumber = "";
let currentOperator = "";
let secondNumber = "";
const screen = document.querySelector(".output");

function addition (a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return Number(a)- Number(b);
}

function multiply (a, b) {
    return Number(a) * Number(b);
}

function divide (a, b) {
    return Number(a) / Number(b);
}


function operate (a, b, operator) {
    switch (operator){
        case "+":
            return addition(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

function updateFirstNumber(num) {
    return firstNumber += num;

}

function updateScreen(string) {
    screen.textContent = string
}