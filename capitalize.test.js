const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('capitalize the first letter of a string', () => {
    // Arrange
    const input = 'muluken';
    const expectedOutput = 'Muluken';
    // Act
    const result = capitalize(input);
    // Assert
    expect(result).toBe(expectedOutput);
  });

  test('return an empty string when input is an empty string', () => {
    // Arrange
    const input = '';
    const expectedOutput = '';
    // Act
    const result = capitalize(input);
    // Assert
    expect(result).toBe(expectedOutput);
  });

  test('capitalize the first letter of a single-letter string', () => {
    // Arrange
    const input = 'm';
    const expectedOutput = 'M';
    // Act
    const result = capitalize(input);
    // Assert
    expect(result).toBe(expectedOutput);
  });

  test('capitalize the first letter of a string with leading or trailing spaces', () => {
    // Arrange
    const input = '  muluken Zemed  ';
    const expectedOutput = 'Muluken Zemed';
    // Act
    const result = capitalize(input);
    // Assert
    expect(result).toBe(expectedOutput);
  });
});