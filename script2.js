//Instantiate new Calculator Display object
const calculatorDisplay = new CalculatorDisplay();

//Instantiate new Calculator App object
const calculatorApp = new CalculatorApp(calculatorDisplay);

//Get Calculator Element from the DOM
const calculator = document.getElementById("calculator");

//Add EventListeners to all Calculator Buttons
const numberButtons = calculator.getElementsByClassName("number");
const operationButtons = calculator.getElementsByClassName("operation");
const functionButtons = calculator.getElementsByClassName("function");

// calculatorDisplay.display = document.getElementById("display");
calculatorApp.calculator = calculator;
calculatorApp.display = document.getElementById("display");
calculatorApp.numberButtons = numberButtons;
calculatorApp.operationButtons = operationButtons;
calculatorApp.functionButtons = functionButtons;
calculatorApp.addEventListenerToFunctionButtons();
calculatorApp.addEventListenerToNumberButtons();
calculatorApp.addEventListenerToOperationButtons();


