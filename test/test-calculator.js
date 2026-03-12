/**
 * Simple test file for the calculator
 */
const assert = require('assert');
const { add, subtract, multiply, divide } = require('../src/calculator.js');

console.log('Running calculator tests...\n');

// Test addition
console.log('Testing addition:');
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);
assert.strictEqual(add(0, 0), 0);
console.log('✓ Addition tests passed\n');

// Test subtraction
console.log('Testing subtraction:');
assert.strictEqual(subtract(5, 3), 2);
assert.strictEqual(subtract(0, 5), -5);
assert.strictEqual(subtract(-2, -3), 1);
console.log('✓ Subtraction tests passed\n');

// Test multiplication
console.log('Testing multiplication:');
assert.strictEqual(multiply(3, 4), 12);
assert.strictEqual(multiply(-2, 3), -6);
assert.strictEqual(multiply(0, 100), 0);
console.log('✓ Multiplication tests passed\n');

// Test division
console.log('Testing division:');
assert.strictEqual(divide(8, 2), 4);
assert.strictEqual(divide(10, -2), -5);
assert.strictEqual(divide(0, 5), 0);
console.log('✓ Division tests passed\n');

// Test division by zero error
console.log('Testing division by zero error handling:');
try {
    divide(5, 0);
    console.log('✗ Division by zero test failed - should have thrown an error');
} catch (error) {
    console.log('✓ Division by zero correctly throws an error:', error.message);
}

console.log('\nAll tests passed! ✅');