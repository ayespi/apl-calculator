let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendToResult(value) {
    currentInput += value;
    updateResult();
}

function updateResult() {
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateResult();
}

function performOperation(operator) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculateResult();
        } else {
            previousInput = currentInput;
            currentInput = '';
            currentOperator = operator;
        }
    }
}

function calculateResult() {
    if (currentInput !== '' && previousInput !== '' && currentOperator !== '') {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);

        let result = 0;
        switch (currentOperator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

        currentInput = result.toString();
        currentOperator = '';
        previousInput = '';
        updateResult();
    }
}
