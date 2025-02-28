console.log("Hey")

const display = document.getElementById("display");
// console.log(display);

//numeric numbers to display on screen
const numericButtons = document.querySelectorAll(".numericButton");
console.log(numericButtons); //check to make sure the numeric buttons are working

for (let numbtn of numericButtons){
    numbtn.addEventListener("click", function(){
        console.log(numbtn)
        display.value += this.innerText;
        console.log(display.value);
    })
}

//event for when clear is pushed
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", clear);

//generic clearing function
function clear(){
    display.value = "";
}

//event for when operator is pushed
const operatorButtons = document.querySelectorAll(".operatorButton");
console.log(operatorButtons); //check to make sure the operator buttons are working

//operator function to get the operator and log the first number 
function operatorAssignment(){
    operand1 = display.value;
    console.log("Operand1:" + operand1)
    clear();
    operator = this.innerText;
}

for (let opbtn of operatorButtons){
    opbtn.addEventListener("click", operatorAssignment);
}

//event for when equal button is pushed 
const equalButton = document.querySelector(".equalButton")
equalButton.addEventListener("click", equal)

//equal function to log the operator and second number
function equal(){
    let result = 0;

    let operand2 = display.value;
    console.log("Operand1: " + operand1);
    console.log("Operand2: " + operand2);
    console.log("Operator: " + operator);

    //switch case to perform calculations
    switch (operator){
    case "+": 
        result = parseInt(operand1) + parseInt(operand2);
        break;
    case "-":
        result = parseInt(operand1) - parseInt(operand2);
        break;
    case "*":
        result = parseInt(operand1) * parseInt(operand2)
        break;
    case "/":
        result = parseInt(parseInt(operand1) / parseInt(operand2))
        break;
    }

    display.value = result;
    operand1 = "";
    operand2 = "";
    operator = "";
}

