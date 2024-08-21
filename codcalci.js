let currentInput = '';
let firstOperand = null;
let operation = null;
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        currentInput = '';
        shouldResetDisplay = false;
    }
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand !== null) {
        calculate();
    }
    firstOperand = parseFloat(currentInput);
    operation = op;
    shouldResetDisplay = true;
}

function calculate() {
    if (operation === null || shouldResetDisplay) return;
    let secondOperand = parseFloat(currentInput);
    let result;
    switch (operation) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = null;
    firstOperand = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    firstOperand = null;
    operation = null;
    shouldResetDisplay = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
