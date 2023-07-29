const stringLength = (string) => {
  if (string.length > 0 && string.length < 11) {
    return string.length;
  }
  throw new Error('String length must be between 1 and 10 characters.');
};

const reverseString = (string) => string.split('').reverse().join('');

module.exports = { stringLength, reverseString };