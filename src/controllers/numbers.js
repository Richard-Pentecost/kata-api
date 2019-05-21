const {
  add,
  subtract,
  multiply,
  divide,
  remainder,
} = require('../lib/numbers');

// const isNumeric1 = (string) => {
//   return /^\d+$/.test(string);
// };

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

exports.add = (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.subtract = (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: subtract(b, a) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
};

exports.multiply = (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = multiply(a, b);

  if (answer) {
    res.status(200).json({ result: answer });
  } else {
    let message;
    if (!a || !b) {
      message = 'Parameters "a" and "b" are required.';
    } else {
      message = 'Parameters "a" and "b" must be valid numbers.';
    };
    res.status(400).json({ error: message });
  }
};

exports.divide = (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = divide(a, b);

  if ((a === 0 || answer) && b !== 0) {
    res.status(200).json({ result: answer });
  } else {
    let message;
    if (b === 0) {
      message = 'Unable to divide by 0.';
    } else if (!a || !b) {
      message = 'Parameters "a" and "b" are required.';
    } else {
      message = 'Parameters "a" and "b" must be valid numbers.';
    }
    res.status(400).json({ error: message });
  }
};

exports.remainder = (req, res) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = remainder(a, b);

  if ((a === 0 || answer) && b !== 0) {
    res.status(200).json({ result: answer });
  } else {
    let message;
    if (b === 0) {
      message = 'Unable to divide by 0.';
    } else if (!a || !b) {
      message = 'Parameters "a" and "b" are required.';
    } else {
      message = 'Parameters must be valid numbers.';
    }
    res.status(400).json({ error: message });
  }
};
