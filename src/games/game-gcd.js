import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';
const generateGame = () => {
  const givenNumber1 = getRandomNumber(100);
  const givenNumber2 = getRandomNumber(100);
  const findGCD = (x, y) => {
    if (y === 0) {
      return x;
    }
    return findGCD(y, x % y);
  };
  const givenNumber = `${givenNumber1} ${givenNumber2}`;
  const correctAnswer = findGCD(givenNumber1, givenNumber2);
  return [givenNumber, String(correctAnswer)];
};

export default () => gameLogic(gameQuestion, generateGame);
