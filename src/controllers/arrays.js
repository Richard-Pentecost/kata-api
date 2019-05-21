const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

exports.getNthElement = (req, res) => {
  const index = req.params.index;
  const array = req.body.array;
  res.status(200).json({ result: getNthElement(index, array) });
};

exports.arrayToCSVString = (req, res) => {
  const array = req.body.array;
  res.status(200).json({ result: arrayToCSVString(array) });
};

exports.addToArray2 = (req, res) => {
  const array = req.body.array;
  const value = req.body.value;
  res.status(200).json({ result: addToArray2(value, array) });
};

exports.elementsStartingWithAVowel = (req, res) => {
  const array = req.body.array;
  res.status(200).json({ result: elementsStartingWithAVowel(array) });
};

exports.removeNthElement2 = (req, res) => {
  const array = req.body.array;
  const index = req.query.index || 0;
  res.status(200).json({ result: removeNthElement2(index, array) });
};
