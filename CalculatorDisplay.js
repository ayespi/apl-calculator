class CalculatorDisplay {
  constructor(displayElement) {
    this.display = displayElement;
    this.currentValue = "";
    this.previousValue = "";
  }

  reset() {
    this.display.innerHTML = "0";
  }
  initialize() {
    this.reset();
  }
  update(value){
    this.display.innerHTML = value;
  }
  getCurrentValue(){
    return this.currentValue;
  }
  getPreviousValue(){
    return this.previousValue;
  }
  setCurrentValue(value){
    this.currentValue = value;
  }
  setPreviousValue(){
    this.previousValue = this.getCurrentValue();
  }
}
