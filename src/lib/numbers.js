const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const power = (a, b) => a ** b;

const round = (a) => {
  return Math.round(a);
};

const roundUp = (a) => {
  return Math.ceil(a);
};

const roundDown = (a) => Math.floor(a);

const absolute = (a) => {
  return Math.abs(a);
};

const quotient = (a, b) => {
  return Math.trunc(a/b);
};

const remainder = (a, b) => a%b;

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
};
