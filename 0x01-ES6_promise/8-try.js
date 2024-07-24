const divideFunction = (numerator, denominator) => {
  if (!denominator) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
};

export default divideFunction;
