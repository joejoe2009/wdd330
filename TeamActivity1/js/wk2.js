// requirement1
function reqOne() {

  const input = document.getElementById('req1Input').value;
  const outputElement = document.getElementById('req1Output');
  outputElement.innerHTML = 'You entered: ' + input;
}

      // requirement 2
function reqTwo() {
const input = document.getElementById('req2Input').value;
const outputElement = document.getElementById('req2Output');
const inputInt = parseInt(input);
if (inputInt !== NaN) {
  outputElement.innerHTML = 'total: ' + sum(inputInt);
}
}

function sum(number) {
let total = 0;
for (let i = 1; i <= number; i++) {
  total += i;
}
return total;
}

// requirement 3
function add() {
const number1 = document.getElementById('req3Number1').value;
const number2 = document.getElementById('req3Number2').value;
const outputElement = document.getElementById('req3Output');
const num1Float = parseFloat(number1);
const num2Float = parseFloat(number2);
if ((num1Float !== NaN) & (num2Float !== NaN)) {
  const total = num1Float + num2Float;
  outputElement.innerHTML = 'Total: ' + total;
}
}

function getNum(numId) {
const number = document.getElementById(numId).value;
const numberFloat = parseFloat(number);
if (numberFloat !== NaN) {
  return numberFloat;
} else return 0;
}
function updateTotal(value) {
const outputElement = document.getElementById('stretchOutput');
outputElement.innerHTML = 'Total: ' + value;
}
// function declaration
function add2(num1, num2) {
return num1 + num2;
}
// function expression
const sub2 = function(num1, num2) {
return num1 - num2;
};
// arrow function
const mult2 = (num1, num2) => num1 * num2;

// example of using a callback to pull it all together
function performOperation(operation) {
// the argument 'operation' is a function...so when we are ready we can call that function in our code below
const total = operation(
  getNum('stretchNumber1'),
  getNum('stretchNumber2')
);
updateTotal(total);
}