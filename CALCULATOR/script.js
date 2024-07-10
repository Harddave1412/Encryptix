let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

// Function to add character to display
function addToDisplay(char) {
  display.value += char;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
  operand1 = '';
  operand2 = '';
  operator = '';
}

// Function to perform calculation
function calculate() {
  let expression = display.value;

  // Parsing the expression to extract operands and operator
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === '+' || expression[i] === '-' || expression[i] === '*' || expression[i] === '/') {
      operator = expression[i];
      operand1 = expression.substring(0, i);
      operand2 = expression.substring(i + 1);
      break;
    }
  }

  // Converting operands to numbers
  let num1 = parseFloat(operand1);
  let num2 = parseFloat(operand2);

  // Performing calculation based on operator
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = NaN;
  }

  // Displaying the result
  display.value = result;

  // Reset operands and operator
  operand1 = '';
  operand2 = '';
  operator = '';
}
