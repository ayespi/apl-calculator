class CalculatorCompute {
  constructor() {
    this.currentOperation = null;
    this.result = null;
    this.value1 = 0;
    this.value2 = 0;
  }

  reset() {
    this.currentOperation = null;
    this.numbers = [];
    this.value1 = 0;
    this.value2 = 0;
    console.log("Computation Operation Reset...");
  }

  setValue(value) {
    this.numbers.push(value);
  }

  getCurrentOperation() {
    return this.currentOperation;
  }

  setCurrentOperation(operation) {
    this.currentOperation = operation;
  }

  add() {
    this.result = this.value1 + this.value2;
    return this.result;
  }

  subtract() {
    this.result = this.value1 - this.value2;
    return this.result;
  }

  multiply() {
    this.result = this.value1 * this.value2;
    return this.result;
  }

  divide() {
    this.result = this.value1 / this.value2;
    return this.result;
  }

  evaluate() {
    console.log("Compute Operation Initiated...");
    switch (this.getCurrentOperation()) {
      case "add":
        this.result = this.add();
        break;
      case "subtract":
        this.result = this.subtract();
        break;
      case "multiply":
        this.result = this.multiply();
        break;
      case "divide":
        this.result = this.divide();
        break;
      default:
        this.reset();
        break;
    }
    return this.result;
  }
}

const compute = new CalculatorCompute();
