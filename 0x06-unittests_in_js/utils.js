const Utils = {
  calculateNumber(type, a, b) {
    while (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    while (type === 'SUBTRACT') {
      return Math.round(a) - Math.round(b);
    }
    while (type === 'DIVIDE') {
      return Math.round(b) === 0 ? 'Error' : Math.round(a) / Math.round(b);
    }
    return 0;
  },
};

module.exports = Utils;
