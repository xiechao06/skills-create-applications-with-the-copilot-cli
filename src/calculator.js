#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supports the following basic math operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Usage: node calculator.js <number1> <operator> <number2>
 * Example: node calculator.js 5 + 3
 */

// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

// Function to perform modulo
function modulo(a, b) {
    if (b === 0) {
        throw new Error("Modulo by zero is not allowed");
    }
    return a % b;
}

// Function to perform exponentiation
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Function to perform square root
function squareRoot(n) {
    if (n < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(n);
}

// Main calculator function
function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        case '%':
            return modulo(num1, num2);
        case '^':
            return power(num1, num2);
        case 'sqrt':
            return squareRoot(num1);
        default:
            throw new Error(`Unsupported operator: ${operator}. Supported operators are: +, -, *, /, %, ^, sqrt`);
    }
}

// Only run CLI code when executed directly
if (require.main === module) {
    // Parse command line arguments
    const args = process.argv.slice(2);

    // Validate input (need at least 2 args, or 2 for sqrt)
    if (args.length < 2) {
        console.log('Usage: node calculator.js <number1> <operator> [<number2>]');
        console.log('Example: node calculator.js 5 + 3');
        console.log('         node calculator.js 16 sqrt');
        process.exit(1);
    }

    const [inputNum1, inputOperator, inputNum2] = args;

    // Convert inputs to numbers
    const num1 = parseFloat(inputNum1);
    const num2 = inputNum2 ? parseFloat(inputNum2) : null;

    // Check if inputs are valid numbers
    if (isNaN(num1) || (num2 !== null && isNaN(num2))) {
        console.error('Error: Please provide valid numbers for operands');
        process.exit(1);
    }

    try {
        // Perform calculation
        const result = calculate(num1, inputOperator, num2);

        // Display result
        if (inputOperator === 'sqrt') {
            console.log(`sqrt(${num1}) = ${result}`);
        } else {
            console.log(`${num1} ${inputOperator} ${num2} = ${result}`);
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

// Export functions for testing purposes
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    power,
    squareRoot,
    calculate
};