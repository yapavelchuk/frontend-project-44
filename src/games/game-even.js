import getRandomNumber from '../utils.js';
import runTheGame from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

const generateDataforNextRound = () => {
  const givenNumber = getRandomNumber();
  const correctAnswer = isEven(givenNumber);
  return [givenNumber, correctAnswer];
};

export default () => runTheGame(gameRule, generateDataforNextRound);
