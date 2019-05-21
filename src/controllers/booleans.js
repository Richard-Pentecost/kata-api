const {
  negate,
  truthiness,
  isOdd,
  startsWith,
} = require('../lib/booleans');

const isNumeric = (string) => {
  return /^\d+$/.test(string);
};

exports.negate = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

exports.truthiness = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
};

exports.isOdd = (req, res) => {
  if (isNumeric(req.params.number)) {
    res.status(200).json({ result: isOdd(req.params.number) });
  } else {
    res.status(400).json({ error: 'Parameter must be a number.' });
  }
};

exports.startsWith = (req, res) => {
  const string = req.params.string;
  const char = req.params.character;
  if (char.length === 1) {
    res.status(200).json({ result: startsWith(char, string) });
  } else {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  }
};
