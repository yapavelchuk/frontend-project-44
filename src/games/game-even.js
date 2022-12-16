import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};
const generateDataforNextRound = () => {
  const givenNumber = getRandomNumber();
  const sayEvenOrNot = (number) => (isEven(number) ? 'yes' : 'no');
  const correctAnswer = sayEvenOrNot(givenNumber);
  return [givenNumber, correctAnswer];
};

export default () => gameLogic(gameRule, generateDataforNextRound);
