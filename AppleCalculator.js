class AppleCalculator{
    constructor(display){
        this.display = display;
        this.buttons = {};
    }

    setNumberButtons(buttonArray){
        this.buttons.numberButtons = buttonArray;
    }
    setOperationButtons(buttonArray){
        this.buttons.operationButtons = buttonArray;
    }
    setFunctionButtons(buttonArray){
        this.buttons.functionButtons = buttonArray;
    }
}



const numberButtons = calculator.getElementsByClassName("number");
const operationButtons = calculator.getElementsByClassName("operation");
const functionButtons = calculator.getElementsByClassName("function");
