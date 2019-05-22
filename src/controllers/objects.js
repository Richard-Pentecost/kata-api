const { createPerson } = require('../lib/objects');

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

exports.createPerson = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  if (isNumeric(age)) {
    res.status(200).json({ result: createPerson(name, age) });
  } else {
    res.status(400).json({ error: 'Age must be a number' });
  }
};
