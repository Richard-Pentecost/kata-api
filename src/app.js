const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const {
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
} = require('./lib/numbers');

const app = express();
app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/count-characters/:string', (req, res) => {
  res.status(200).json({ result: countCharacters(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (req.query.length) {
    res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

// const isNumeric1 = (string) => {
//   return /^\d+$/.test(string);
// };

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

app.get('/numbers/add/:a/and/:b', (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: add(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.status(200).json({ result: subtract(b, a) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
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
});

app.post('/numbers/divide', (req, res) => {
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
});

app.post('/numbers/remainder', (req, res) => {
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
});

module.exports = app;
