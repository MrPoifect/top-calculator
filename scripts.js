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
    if (Number(b) !== 0) {
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
        case "⌫":
            backspace();
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
        if ((button === "." && !firstNum.includes(".") && firstNum !== "") || button !== ".") {
        updateFirstNum(button);
        updateScreen(firstNum);
    }
    } else if (firstNum !== "" && currentOperator !== "") {
        if ((button === "." && !secondNum.includes(".") && secondNum !== "") || button !== ".") {
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

function backspace() {
    if (firstNum !== "" && currentOperator !== "" && secondNum !== "") {
        secondNum = secondNum.slice(0,-1);
        updateScreen(firstNum + " " + currentOperator + " " + secondNum);
    } else if (firstNum !== "" && currentOperator !== "") {
        currentOperator = "";
        secondNum = "";
        updateScreen(firstNum);
    } else if (firstNum !== "" && firstNum.length > 1) {
        firstNum = firstNum.slice(0,-1);
        updateScreen(firstNum);
    } else if (firstNum.length == 1) {
        firstNum = "";
        clearScreen();
    }
}

document.addEventListener('keydown', function(event) {
    handleKeyboardInput(event.key);
});


function handleKeyboardInput(key) {
    if (!isNaN(key) || key == ".") {
        handleButtonPress(key);
    } else
        switch (key) {
            case (key = "Backspace"):
                handleButtonPress("⌫");
                break;
            case (key = "+"):
                handleButtonPress("+");
                break;
            case (key = "*"):
            case (key = "x"):
                handleButtonPress("x");
                break;
            case (key = "/"):
            case (key = "÷"):
                handleButtonPress("÷");
                break;
            case (key = "Enter"):
            case (key = "="):
                handleButtonPress("=");
                break;
            case (key = "-"):
                handleButtonPress("-");
                break;
            case (key = "Escape"):
                clearScreen();
                break;
        }
}
