const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string');
  }
  const trimmedString = string.trim();
  return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
};
module.exports = capitalize;