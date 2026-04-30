let firstNum = "";
let currentOperator = "";
let secondNum = "";
const screen = document.querySelector(".output");

function addition (a, b) {
    firstNum = Number(a) + Number(b);
    currentOperator = "";
    secondNum = "";
    updateScreen(firstNum);
}

function subtract (a, b) {
    firstNum = Number(a)- Number(b);
    currentOperator = "";
    secondNum = "";
    updateScreen(firstNum);
}

function multiply (a, b) {
    firstNum = Number(a) * Number(b);
    currentOperator = "";
    secondNum = "";
    updateScreen(firstNum);
}

function divide (a, b) {
    if (b !== "0") {
    firstNum = Number(a) / Number(b);
    currentOperator = "";
    secondNum = "";
    updateScreen(firstNum);
    }else updateScreen("Nice Try...");
}


function operate (a, b, operator) {
    switch (operator){
        case "+":
            addition(a, b);
            break;
        case "-":
            subtract(a, b);
            break;
        case "x":
            multiply(a, b);
            break;
        case "÷":
            divide(a, b);
            break;
    }
}

function updateFirstNum(num) {
    firstNum += num;
}

function updateSecondNum(num) {
    secondNum += num;
}


function updateScreen(string) {
    screen.textContent = string
}

const calc = document.getElementsByTagName("div")[0]

calc.addEventListener("click", (event) => {
    if(event.target.tagName === 'BUTTON') {
        handleButtonPress(event.target.textContent);
    }
});

function handleButtonPress(button) {
    switch (button){
        case "Clear":
            clearScreen();
            break;
        case "=":
            if (firstNum !== "" && secondNum !== "" ) {
            operate(firstNum, secondNum, currentOperator)};
            break;
    default:
    if (screen.textContent.length < 20) {
    if (isNaN(button) && button !== ".") {
        // perform operate when both first and second numbers exist 
        if (firstNum !== "" && secondNum !== "") {  
            operate(firstNum, secondNum, currentOperator);
            currentOperator = button;
            updateScreen(firstNum + " " + currentOperator);
        // update the screen and current operator if no second number or operator
        } else if (firstNum !== "" && secondNum === ""  && currentOperator === "") {
            currentOperator = button;
            updateScreen(firstNum + " " + button);
        }
    } // update first or second number and screen depending on if an operator exists
    else if (currentOperator == "") {
        if ((button === "." && !firstNum.includes(".")) || button !== ".") {
        updateFirstNum(button);
        updateScreen(firstNum);
    }
    } else if (firstNum !== "" && currentOperator !== "") {
        if ((button === "." && !secondNum.includes(".")) || button !== ".") {
        updateSecondNum(button);
        updateScreen(firstNum + " " + currentOperator + " " + secondNum);
    }
    }
}}};

function clearScreen() {
    firstNum = "";
    currentOperator = "";
    secondNum = "";
    updateScreen("");
}