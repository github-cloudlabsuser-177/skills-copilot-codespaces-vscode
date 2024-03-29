function calculator() {
    const operator = prompt('Enter operator ( +, -, *, / ): ');

    const number1 = parseFloat(prompt('Enter first number: '));
    const number2 = parseFloat(prompt('Enter second number: '));

    let result;

    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        if (number2 != 0) {
            result = number1 / number2;
        } else {
            alert("You can't divide by zero!");
            return;
        }
    } else {
        alert('Invalid operator');
        return;
    }

    alert(`The result is ${result}`);
}

calculator();