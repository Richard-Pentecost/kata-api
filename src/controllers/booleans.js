const {
  negate,
  truthiness,
} = require('../lib/booleans');

exports.negate = (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
};

exports.truthiness = (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
}