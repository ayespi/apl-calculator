class CalculatorApp{
    constructor(){
        this.display = document.getElementById('display');
        this.allClearButton = document.getElementById('btn-clear');
        this.plusMinusButton = document.getElementById('btn-plusminus');
        this.percentButton = document.getElementById('btn-percent');
        this.divideButton = document.getElementById('btn-divide');
        this.sevenButton = document.getElementById('btn-seven');
        this.eightButton = document.getElementById('btn-eight');
        this.nineButton = document.getElementById('btn-nine');
        this.multiplyButton = document.getElementById('btn-multiply');
        this.fourButton = document.getElementById('btn-four');
        this.fiveButton = document.getElementById('btn-five');
        this.sixButton = document.getElementById('btn-six');
        this.subtractButton = document.getElementById('btn-subtract');
        this.oneButton = document.getElementById('btn-one');
        this.twoButton = document.getElementById('btn-two');
        this.threeButton = document.getElementById('btn-three');
        this.addButton = document.getElementById('btn-add');
        this.zeroButton = document.getElementById('btn-zero');
        this.decimalButton = document.getElementById('btn-decimal');
        this.equalButton = document.getElementById('btn-equal');
        this.numberArray = [];
        this.num1, num2 = 0;
        this.currentOperation = null;
    }

    resetDisplay() {
        this.display.innerHTML = 0;
    }
    
    clearDisplay() {
        this.display.innerHTML = '';
    }
    
    getDisplayElement() {
        return this.display;
    }
    
    getDisplayValue() {
        return this.getDisplayElement().innerHTML;
    }
    
    displayValueIsZero() {
        let displayValue = this.getDisplayValue();
        if (displayValue == 0) {
            return true;
        }
        return false;
    }
    
    setDisplayValue(numberValue){
        this.display.innerHTML = parseFloat(numberValue);
    }

}









allClearButton.addEventListener("click", (e) => {
    console.log(e.target);
    resetDisplay();
});

plusMinusButton.addEventListener("click", (e) => {
    console.log(e.target);
    if(display.innerHTML != 0){
        let displayValue = parseFloat(getDisplayValue());
        console.log(displayValue/-1);
        display.innerHTML = displayValue/-1;
    }
});

percentButton.addEventListener("click", (e) => {
    console.log(e.target);
    let displayValue = parseFloat(getDisplayValue())/100;
    console.log(displayValue);
    // display.innerHTML = displayValue;
    setDisplayValue(displayValue);
});

divideButton.addEventListener("click", (e) => {
    console.log(e.target);
    currentOperation = divide;
    let displayValue = parseFloat(getDisplayValue());
    num1 = displayValue;
    numberArray.push(num1);
});
/*
Every number button (1-9) works the same way. 

For example:
When the display is reset to zero, pressing the 7 button will result in the zero being replaced by 7. Subsequent presses of the 7 button will result in the number 7 being appended to the numbers in the display.
*/
sevenButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 7
    // Otherwise, append 7 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 7;
    }else{
        display.innerHTML = getDisplayValue()+7;
    }
});

eightButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 8
    // Otherwise, append 8 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 8;
    }else{
        display.innerHTML = getDisplayValue()+8;
    }
});

nineButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 9
    // Otherwise, append 9 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 9;
    }else{
        display.innerHTML = getDisplayValue()+9;
    }
});

multiplyButton.addEventListener("click", (e) => {
    console.log(e.target);
    currentOperation = multiply;
    let displayValue = parseFloat(getDisplayValue());
    num1 = displayValue;
    numberArray.push(num1);
});

fourButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 4
    // Otherwise, append 4 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 4;
    }else{
        display.innerHTML = getDisplayValue()+4;
    }
});

fiveButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 5
    // Otherwise, append 5 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 5;
    }else{
        display.innerHTML = getDisplayValue()+5;
    }
});

sixButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 6
    // Otherwise, append 6 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 6;
    }else{
        display.innerHTML = getDisplayValue()+6;
    }
});

subtractButton.addEventListener("click", (e) => {
    console.log(e.target);
    let displayValue = parseFloat(getDisplayValue());
    num1 = displayValue;
    numberArray.push(num1);
});

oneButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 1
    // Otherwise, append 1 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 1;
    }else{
        display.innerHTML = getDisplayValue()+1;
    }
});

twoButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 2
    // Otherwise, append 2 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 2;
    }else{
        display.innerHTML = getDisplayValue()+2;
    }
});

threeButton.addEventListener("click", (e) => {
    console.log(e.target);
    // If display value is equal to zero: Replace zero with 3
    // Otherwise, append 3 to the display contents
    if(displayValueIsZero()){
        clearDisplay();
        display.innerHTML = 3;
    }else{
        display.innerHTML = getDisplayValue()+3;
    }
});

addButton.addEventListener("click", (e) => {
    console.log(e.target);
});

zeroButton.addEventListener("click", (e) => {
    console.log(e.target);
});

decimalButton.addEventListener("click", (e) => {
    console.log(e.target);
    let displayValue = parseFloat(getDisplayValue());
    num1 = displayValue;
    numberArray.push(num1);
});

equalButton.addEventListener("click", (e) => {
    console.log(e.target);
    let displayValue = parseFloat(getDisplayValue());
    num2 = displayValue;
    numberArray.push(num1);
});
