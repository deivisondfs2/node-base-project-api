export default (value1, value2) => ({
  sum: () => {
    if (value1 >= 0 || value2 >= 0) return value1 + value2;

    throw new Error('Invalid Number');
  }
});
