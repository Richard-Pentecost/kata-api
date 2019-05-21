const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('../lib/strings');

exports.hello = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};

exports.upper = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
};

exports.lower = (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
};

exports.countCharacters = (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.string) });
};

exports.firstCharacters = (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
};
