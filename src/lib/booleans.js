const negate = (a) => !a;

const both = (a, b) => a && b;

const either = (a, b) => {
  return a || b;
}

const none = (a, b) => {
  return !a && !b;
}
const one = (a, b) => {
  if (a && !b) {
    return true;
  } else if (!a && b) {
    return true;
  } else {
    return false;
  }
};

const truthiness = (a) => a ? true : false;

const isEqual = (a, b) => a === b;

const isGreaterThan = (a, b) => a > b;

const isLessThanOrEqualTo = (a, b) => a <= b;

const isOdd = (a) => a % 2 === 1;

const isEven = (a) => a % 2 === 0;

const isSquare = (a) => {
  let total;
  let iterator = 0;
  do {
    total = iterator ** 2;
    iterator++;
    if (total === a) {
      return true;
    }
  } while (total < a) 
  return false;
};

const startsWith = (char, string) => string[0] === char;

const containsVowels = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < string.length; i++) {
    for (let n = 0; n < vowels.length; n++) {
      if (string[i].toLowerCase() === vowels[n]) {
        return true;
      }
    }
  }
  return false;
};

const isLowerCase = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 64 && string.charCodeAt(i) < 91) {
      return false;
    }
  }
  return true;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase,
};
