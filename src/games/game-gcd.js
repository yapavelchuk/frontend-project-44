import getRandomNumber from '../utils.js';
import runTheGame from '../index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const findGCD = (x, y) => {
  if (y === 0) {
    return x;
  }
  return findGCD(y, x % y);
};
const generateNextRoundData = () => {
  const givenNumber1 = getRandomNumber();
  const givenNumber2 = getRandomNumber();
  const givenNumber = `${givenNumber1} ${givenNumber2}`;
  const correctAnswer = findGCD(givenNumber1, givenNumber2);
  return [givenNumber, String(correctAnswer)];
};

export default () => runTheGame(gameRule, generateNextRoundData);
