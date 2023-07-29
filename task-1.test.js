const { stringLength, reverseString } = require('./task-1');

describe('stringLength', () => {
  test('returns the character count of the string', () => {
  // Arrange
    const name = 'Muluken';
    // Act
    const result = stringLength(name);
    // Assert
    expect(result).toBe(7);
  });

  test('throws an error if the string is less than 1 character long', () => {
    // Arrange
    const emptyString = '';
    // Act
    // Assert
    expect(() => stringLength(emptyString)).toThrow(Error);
  });

  test('throws an error if the string is more than 10 character long', () => {
    // Arrange
    const description = 'This is jest practice to test';
    // Act
    // Assert
    expect(() => stringLength(description)).toThrow(Error);
  });
});

test('reverse a string', () => {
  // Arrange
  const greeting = 'hello';
  // Act
  const reversedString = reverseString(greeting);
  // Assert
  expect(reversedString).toBe('olleh');
});