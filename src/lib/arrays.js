const getNthElement = (index, array) => array[index % array.length];

const arrayToCSVString = (array) => {
  return array.reduce((acc, next) => { 
    if(acc === '') {
      return acc + next;
    } else {
      return acc + ',' + next; 
    }
  }, '')
};

const csvStringToArray = (string) => string.split(',');

const addToArray = (element, array) => {
  array.push(element);
}
const addToArray2 = (element, array) => {
  const newArray = array.map((arrElement) => arrElement);
  newArray.push(element);
  return newArray;
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = (numbers) => {
  return numbers.map(element => element.toString());
};

const uppercaseWordsInArray = (strings) => strings.map(element => element.toUpperCase());

const reverseWordsInArray = (strings) => {
  return strings.map(element => element.split('').reverse().join(''));
};

const onlyEven = (numbers) => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(element => element !== array[index]);
};

const elementsStartingWithAVowel = (strings) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return strings.filter(element => vowels.indexOf(element[0].toLowerCase()) !== -1);
};

const removeSpaces = (string) => {
  return string.split(' ').join('');
};

const sumNumbers = (numbers) => {
  return numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
};

const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => {
    if (a[a.length - 1] < b[b.length - 1]) {
      return -1;
    }
    else if (a[a.length - 1] > b[b.length - 1]) {
      return 1;
    }
    else {
      return 0;
    }
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
};
