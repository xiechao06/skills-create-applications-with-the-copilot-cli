const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require('../calculator');

describe('Calculator Functions', () => {
    describe('add', () => {
        test('adds two positive numbers', () => {
            expect(add(5, 3)).toBe(8);
        });

        test('adds two negative numbers', () => {
            expect(add(-5, -3)).toBe(-8);
        });

        test('adds positive and negative numbers', () => {
            expect(add(-5, 10)).toBe(5);
        });

        test('adds zero to a number', () => {
            expect(add(5, 0)).toBe(5);
            expect(add(0, 5)).toBe(5);
        });

        test('adds decimal numbers', () => {
            expect(add(0.1, 0.2)).toBeCloseTo(0.3);
        });

        test('adds two zeros', () => {
            expect(add(0, 0)).toBe(0);
        });
    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(subtract(10, 4)).toBe(6);
        });

        test('subtracts negative result', () => {
            expect(subtract(3, 7)).toBe(-4);
        });

        test('subtracts two negative numbers', () => {
            expect(subtract(-5, -3)).toBe(-2);
        });

        test('subtracts zero from a number', () => {
            expect(subtract(5, 0)).toBe(5);
        });

        test('subtracts number from zero', () => {
            expect(subtract(0, 5)).toBe(-5);
        });

        test('subtracts decimal numbers', () => {
            expect(subtract(1.5, 0.5)).toBe(1);
        });
    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(multiply(6, 7)).toBe(42);
        });

        test('multiplies positive and negative numbers', () => {
            expect(multiply(-3, 4)).toBe(-12);
        });

        test('multiplies two negative numbers', () => {
            expect(multiply(-3, -4)).toBe(12);
        });

        test('multiplies by zero', () => {
            expect(multiply(5, 0)).toBe(0);
            expect(multiply(0, 5)).toBe(0);
        });

        test('multiplies by one', () => {
            expect(multiply(5, 1)).toBe(5);
            expect(multiply(1, 5)).toBe(5);
        });

        test('multiplies decimal numbers', () => {
            expect(multiply(0.5, 0.4)).toBeCloseTo(0.2);
        });
    });

    describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(divide(20, 4)).toBe(5);
        });

        test('divides positive by negative', () => {
            expect(divide(10, -2)).toBe(-5);
        });

        test('divides negative by positive', () => {
            expect(divide(-10, 2)).toBe(-5);
        });

        test('divides two negative numbers', () => {
            expect(divide(-10, -2)).toBe(5);
        });

        test('divides zero by a number', () => {
            expect(divide(0, 5)).toBe(0);
        });

        test('divides decimal numbers', () => {
            expect(divide(1.5, 0.5)).toBe(3);
        });

        test('throws error when dividing by zero', () => {
            expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
        });

        test('throws error when attempting zero divided by zero', () => {
            expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
        });
    });

    describe('modulo', () => {
        test('returns remainder of two positive numbers', () => {
            expect(modulo(10, 3)).toBe(1);
        });

        test('returns remainder when divisor is larger', () => {
            expect(modulo(3, 10)).toBe(3);
        });

        test('returns zero when numbers divide evenly', () => {
            expect(modulo(10, 5)).toBe(0);
        });

        test('handles negative dividend', () => {
            expect(modulo(-10, 3)).toBe(-1);
        });

        test('handles negative divisor', () => {
            expect(modulo(10, -3)).toBe(1);
        });

        test('handles both negative numbers', () => {
            expect(modulo(-10, -3)).toBe(-1);
        });

        test('handles zero dividend', () => {
            expect(modulo(0, 5)).toBe(0);
        });

        test('throws error when dividing by zero', () => {
            expect(() => modulo(5, 0)).toThrow('Modulo by zero is not allowed');
        });
    });

    describe('power', () => {
        test('raises positive base to positive exponent', () => {
            expect(power(2, 3)).toBe(8);
        });

        test('raises base to zero exponent', () => {
            expect(power(5, 0)).toBe(1);
            expect(power(0, 0)).toBe(1);
        });

        test('raises base to one', () => {
            expect(power(7, 1)).toBe(7);
        });

        test('raises negative base to positive exponent', () => {
            expect(power(-2, 3)).toBe(-8);
        });

        test('raises negative base to even exponent', () => {
            expect(power(-2, 4)).toBe(16);
        });

        test('raises to fractional exponent', () => {
            expect(power(4, 0.5)).toBe(2);
        });

        test('raises zero to positive exponent', () => {
            expect(power(0, 5)).toBe(0);
        });

        test('raises to negative exponent', () => {
            expect(power(2, -2)).toBe(0.25);
        });
    });

    describe('squareRoot', () => {
        test('returns square root of perfect square', () => {
            expect(squareRoot(16)).toBe(4);
        });

        test('returns square root of non-perfect square', () => {
            expect(squareRoot(2)).toBeCloseTo(1.414213562);
        });

        test('returns square root of zero', () => {
            expect(squareRoot(0)).toBe(0);
        });

        test('returns square root of one', () => {
            expect(squareRoot(1)).toBe(1);
        });

        test('returns square root of decimal', () => {
            expect(squareRoot(2.25)).toBe(1.5);
        });

        test('throws error for negative number', () => {
            expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
        });
    });

    describe('calculate', () => {
        test('performs addition', () => {
            expect(calculate(5, '+', 3)).toBe(8);
        });

        test('performs subtraction', () => {
            expect(calculate(10, '-', 4)).toBe(6);
        });

        test('performs multiplication', () => {
            expect(calculate(6, '*', 7)).toBe(42);
        });

        test('performs division', () => {
            expect(calculate(20, '/', 4)).toBe(5);
        });

        test('performs modulo', () => {
            expect(calculate(10, '%', 3)).toBe(1);
        });

        test('performs exponentiation', () => {
            expect(calculate(2, '^', 3)).toBe(8);
        });

        test('performs square root', () => {
            expect(calculate(16, 'sqrt', null)).toBe(4);
        });

        test('throws error for unsupported operator', () => {
            expect(() => calculate(5, '&', 3)).toThrow('Unsupported operator');
        });

        test('throws error for division by zero', () => {
            expect(() => calculate(5, '/', 0)).toThrow('Division by zero is not allowed');
        });

        test('throws error for modulo by zero', () => {
            expect(() => calculate(5, '%', 0)).toThrow('Modulo by zero is not allowed');
        });

        test('throws error for square root of negative', () => {
            expect(() => calculate(-4, 'sqrt', null)).toThrow('Cannot calculate square root of a negative number');
        });

        test('handles negative numbers', () => {
            expect(calculate(-5, '+', -3)).toBe(-8);
            expect(calculate(-10, '-', 5)).toBe(-15);
            expect(calculate(-4, '*', 3)).toBe(-12);
            expect(calculate(-10, '/', -2)).toBe(5);
        });
    });
});