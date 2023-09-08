const calculatorDisplay = new CalculatorDisplay();
const calculatorApp = new CalculatorApp(calculatorDisplay);
const calculator = document.getElementById("calculator");
const numberButtons = calculator.getElementsByClassName("number");
const operationButtons = calculator.getElementsByClassName("operation");
const functionButtons = calculator.getElementsByClassName("function");

calculatorDisplay.display = document.getElementById("display");
calculatorApp.calculator = calculator;
calculatorApp.display = display;
calculatorApp.numberButtons = numberButtons;
calculatorApp.operationButtons = operationButtons;
calculatorApp.functionButtons = functionButtons;
calculatorApp.addEventListenerToFunctionButtons();
calculatorApp.addEventListenerToNumberButtons();
calculatorApp.addEventListenerToOperationButtons();