import getRandomNumber from '../utils.js';
import runTheGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const generateNextRoundData = () => {
  const givenNumber = getRandomNumber();
  const correctAnswer = isEven(givenNumber) ? 'yes' : 'no';
  return [givenNumber, correctAnswer];
};

export default () => runTheGame(gameRule, generateNextRoundData);
