let num1 = null;
let num2 = null;
let operator = null;
let memory = 0;

function pressNumber(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function pressOperator(op) {
  num1 = parseFloat(document.getElementById("display").value);
  operator = op;
  document.getElementById("display").value = "";
}

function calculateResult() {
  num2 = parseFloat(document.getElementById("display").value);
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default:
      result = "Error";
  }

  document.getElementById("display").value = result;
  num1 = null;
  num2 = null;
  operator = null;
}

function resetCalculator() {
  num1 = null;
  num2 = null;
  operator = null;
  document.getElementById("display").value = "";
}
