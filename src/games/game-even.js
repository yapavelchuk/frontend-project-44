import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
const generateGame = () => {
  const givenNumber = getRandomNumber(100);
  const correctAnswer = (givenNumber % 2 === 0) ? 'yes' : 'no';
  return [givenNumber, correctAnswer];
};

export default () => gameLogic(gameQuestion, generateGame);
