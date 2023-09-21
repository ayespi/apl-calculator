class CalculatorApp {
  constructor(display) {
    this.display = display;
    this.numbers = [];
    this.value1 = "";
    this.value2 = "";
    this.currentDisplayValue = "";
    this.currentOperationSet = false;
    this.currentOperation = "";
    this.operationStarted = false;
    this.operationProgress = false;
    this.operationComplete = false;
    this.resetDisplay();
  }
  parseDisplayValueToFloat() {
    let displayValue = this.display.innerHTML;
    return parseFloat(displayValue);
  }
  togglePlusMinus() {
    this.display.innerHTML = this.parseDisplayValueToFloat() / -1;
    this.operationComplete = true;
  }
  displayPercent() {
    this.display.innerHTML = this.parseDisplayValueToFloat() / 100;
    this.operationComplete = true;
  }
  clearDisplay() {
    this.display.innerHTML = "";
  }
  resetDisplay() {
    this.display.innerHTML = 0;
    this.numbers = [];
    this.currentOperation = "";
    this.value1 = "";
    this.value2 = "";
    this.operationStarted = false;
    this.operationProgress = false;
    this.operationComplete = false;
  }
  setCurrentDisplayValue() {
    this.currentDisplayValue = this.display.innerHTML;
  }
  getDisplayValue() {
    this.setCurrentDisplayValue();
    return this.display.innerHTML;
  }
  getButtonValue(target) {
    return target.childNodes[0].nodeValue;
  }
  prepareOperation(value, operation) {
    this.value1 = value;
    this.currentOperation = operation;
  }
  add() {
    let num1 = this.value1;
    let num2 = this.value2;
    console.log(`Adding ${num1} PLUS ${num2}...`);
    let result = num1 + num2;
    this.setDisplayValue(result);
  }
  subtract() {
    let num1 = this.value1;
    let num2 = this.value2;
    console.log(`Subtracting ${num1} MINUS ${num2}...`);
    let result = num1 - num2;
    this.setDisplayValue(result);
  }
  multiply() {
    let num1 = this.value1;
    let num2 = this.value2;
    console.log(`Multiplying ${num1} TIMES ${num2}...`);
    let result = num1 * num2;
    this.setDisplayValue(result);
  }
  divide() {
    let num1 = this.value1;
    let num2 = this.value2;
    console.log(`Dividing ${num1} DIVIDED BY ${num2}...`);
    let result = num1 / num2;
    this.setDisplayValue(result);
  }
  completeOperation(value) {
    console.log("Complete Operation Initiated...");
    this.value2 = value;

    switch (this.getCurrentOperation()) {
      case "add":
        this.add();
        break;
      case "subtract":
        this.subtract();
        break;
      case "multiply":
        this.multiply();
        break;
      case "divide":
        this.divide();
        break;
      default:
        this.resetDisplay();
        break;
    }
  }
  setOperation() {}
  saveDisplayValue() {
    this.numbers.push(this.getDisplayValue());
  }
  getCurrentOperation() {
    return this.currentOperation;
  }
  getOperationType(target) {
    let operationId = target.id;
    let substringToRemove = "btn-";
    let operation = operationId.replace(substringToRemove, "");

    console.log(operation);

    return operation;
  }
  setDisplayValue(value) {
    this.display.innerHTML = value;
  }
  updateResult() {
    this.display.innerHTML = this.currentInput;
  }
  toggleAllClearButtonText() {}
  addEventListenerToFunctionButtons() {
    let functionButtonArray = Array.from(this.functionButtons);

    functionButtonArray.forEach((functionButton) => {
      functionButton.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(e.target.childNodes);
        console.log(e.target.childNodes[0].data);
        console.log(e.target.childNodes[0].nodeValue);
        console.log(e.target.id);
        let elementId = e.target.id;
        if (elementId == "btn-clear") {
          this.resetDisplay();
        }
        if (elementId == "btn-plusminus") {
          this.togglePlusMinus();
        }
        if (elementId == "btn-percent") {
          this.displayPercent();
        }
      });
    });
  }
  addEventListenerToNumberButtons() {
    let numberButtonArray = Array.from(this.numberButtons);

    numberButtonArray.forEach((numberButton) => {
      numberButton.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(e.target.childNodes);
        console.log(e.target.childNodes[0].data);
        console.log(e.target.childNodes[0].nodeValue);

        //Button Value
        console.log("Button Value: ", this.getButtonValue(e.target));
        console.log("Display Value: ", this.getDisplayValue());

        switch (this.getButtonValue(e.target)) {
          case ".":
            this.numberButtonDecimal(this.getButtonValue(e.target));
            break;
          case "0":
            this.numberButtonZero(this.getButtonValue(e.target));
            break;
          default:
            this.numberButtonEvent(this.getButtonValue(e.target));
            break;
        }
      });
    });
  }

  numberButtonDecimal(buttonValue) {
    console.log("numberButtonDecimal Event");

    //If the display value already includes a decimal, Set value in the display to the current display value...
    //Otherwise, concatonate decimal to the current display value...

    if (this.getDisplayValue().includes(".")) {
      this.display.innerHTML = this.getDisplayValue();
    } else {
      this.display.innerHTML += buttonValue;
    }
  }
  numberButtonZero(buttonValue) {
    console.log("numberButtonZero Event");

    //If the display value is equal to zero, Set value in the display to the current display value...
    //Otherwise, concatonate zero to the current display value...

    if (this.getDisplayValue() == "0") {
      this.display.innerHTML = this.getDisplayValue();
    } else {
      this.display.innerHTML += buttonValue;
    }
  }
  numberButtonEvent(buttonValue) {
    console.log("numberButtonEvent");

    /**
     * If the Current Operation is set, SAVE the Current Display Value to the Calculator App
     * object and ClearDisplay...
     */

    /**
     * If the Display Value is equal to zero, set the value in the display to the Current Display
     * Value... Otherwise, concatonate zero to the Current Display Value...
     *
     */

    if (this.currentOperationSet) {
      this.saveDisplayValue();
      this.clearDisplay();
    }

    if (this.getDisplayValue() == "0") {
      //Change the text of the AC button to "C"
      //Toggle AC button
      this.display.innerHTML = buttonValue;
    } else {
      this.display.innerHTML += buttonValue;
    }
  }

  /**
   * Adding Event Listener To Operation Buttons
   */

  addEventListenerToOperationButtons() {
    const operationButtonArray = Array.from(this.operationButtons);

    operationButtonArray.forEach((operationButton) => {
      operationButton.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(e.target.id);
        console.log(e.target.childNodes);
        console.log(e.target.childNodes[0].data);
        console.log(e.target.childNodes[0].nodeValue);

        //Get the Current Operation
        let operation = this.getOperationType(e.target);
        //Get the Current Display Value
        let currentDisplayValue = this.getDisplayValue();
        //Make sure the operation is NOT the EQUAL operation
        //Set the Current Operation on the instance of the this CalculatorApp
        //Set OperationStarted to TRUE

        if (operation != "equal") {
          /**
           * When the EQUAL button is clicked, COMPUTE the answer
           *
           * In order to compute the answer, I need to know which operation is being performed (Operation) ...
           * In addition, I need the TWO numbers that the operation is being performed on...
           *
           * The FIRST of the two numbers (Value1) should already be saved from when the OPERATION was selected...
           * The SECOND of the two numbers (Value2) will be the CURRENT DISPLAY VALUE
           *
           */
          this.currentOperation = operation;
          this.currentOperationSet = true;
          console.log(
            `The mission is to ${operation} and it's about to go DOWN!!!`
          );
          console.log(`Current Display Value: ${currentDisplayValue}`);
          // this.completeOperation(currentDisplayValue, operation);

          this.numbers.push(currentDisplayValue);
        } else {
          /**
           * When any button OTHER THAN the EQUAL button is clicked, save the OPERATION and the CURRENT DISPLAY VALUE
           */
          console.log(`The operator is ${operation} it's time to COMPUTE!!!`);
          console.log(`Current Display Value: ${currentDisplayValue}`);

          // this.prepareOperation(currentDisplayValue, operation);
          // this.numbers.push(currentDisplayValue);
          // this.operationStarted = true;
        }
      });
    });
  }
  
}
