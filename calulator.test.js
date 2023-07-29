const Calculator = require('./calculator');

describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });
  describe('add method', () => {
    test('add two positive numbers', () => {
      // Arrange
      const a = 6;
      const b = 2;
      // Act
      const result = calculator.add(a, b);
      // Assert
      expect(result).toBe(8);
    });

    test('add two negative numbers', () => {
      // Arrange
      const a = -6;
      const b = -2;
      // Act
      const result = calculator.add(a, b);
      // Assert
      expect(result).toBe(-8);
    });

    test('add a negative number and a positive number', () => {
      // Arrange
      const a = -6;
      const b = 2;
      // Act
      const result = calculator.add(a, b);
      // Assert
      expect(result).toBe(-4);
    });

    test('add one zero and a positive number', () => {
      // Arrange
      const a = 6;
      const b = 0;
      // Act
      const result = calculator.add(a, b);
      // Assert
      expect(result).toBe(6);
    });
  });

  describe('divide method', () => {
    test('divide two positive numbers', () => {
      // Arrange
      const a = 1;
      const b = 2;
      // Act
      const result = calculator.divide(a, b);
      // Assert
      expect(result).toBe(0.5);
    });

    test('divide two negative numbers', () => {
      // Arrange
      const a = -4;
      const b = -2;
      // Act
      const result = calculator.divide(a, b);
      // Assert
      expect(result).toBe(2);
    });

    test('divide a negative number and a positive number', () => {
      // Arrange
      const a = -2;
      const b = 4;
      // Act
      const result = calculator.divide(a, b);
      // Assert
      expect(result).toBe(-0.5);
    });

    test('throw an error when dividing by zero', () => {
      // Arrange
      const a = 2;
      const b = 0;
      // Act & Assert
      expect(() => calculator.divide(a, b)).toThrow(Error);
    });
  });

  describe('multiply method', () => {
    test('multiply two positive numbers', () => {
      // Arrange
      const a = 2;
      const b = 3;
      // Act
      const result = calculator.multiply(a, b);
      // Assert
      expect(result).toBe(6);
    });

    test('multiply two negative numbers', () => {
      // Arrange
      const a = -2;
      const b = -4;
      // Act
      const result = calculator.multiply(a, b);
      // Assert
      expect(result).toBe(8);
    });

    test('multiply a negative number and a positive number', () => {
      // Arrange
      const a = -2;
      const b = 3;
      // Act
      const result = calculator.multiply(a, b);
      // Assert
      expect(result).toBe(-6);
    });

    test('multiply one zero and a positive number', () => {
      // Arrange
      const a = 2;
      const b = 0;
      // Act
      const result = calculator.multiply(a, b);
      // Assert
      expect(result).toBe(0);
    });
  });
});