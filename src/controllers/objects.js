const { createPerson } = require('../lib/objects');

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

exports.createPerson = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  if (isNumeric(age) && name) {
    res.status(200).json({ result: createPerson(name, age) });
  } else {
    if (!age || !name) {
      res.status(400).json({ error: 'Name and age parameters required' });
    } else {
      res.status(400).json({ error: 'Age must be a number' });
    }
  }
};
