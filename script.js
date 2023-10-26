let display = document.getElementById('display');
let equation = '';

function appendNumber(num) {
    equation += num;
    display.value = equation;
}

function appendOperator(operator) {
    equation += operator;
    display.value = equation;
}

function appendFunction(func) {
    equation += `${func}(`;
    display.value = equation;
}

function calculateResult() {
    try {
        equation = eval(equation).toString();
        display.value = equation;
    } catch (error) {
        display.value = 'Error';
        equation = '';
    }
}

function clearDisplay() {
    equation = '';
    display.value = '';
}
function eraseLast() {
    equation = equation.slice(0, -1);  // Remove the last character from the equation
    display.value = equation;
}
