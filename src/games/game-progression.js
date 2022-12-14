import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameQuestion = 'What number is missing in the progression?';
const generateGame = () => {
  const givenNumber1 = getRandomNumber(20);
  const givenNumber2 = getRandomNumber(10);
  const maxAmountofNumbers = 9;
  const progression = [];
  const hiddenElement = getRandomNumber(maxAmountofNumbers);
  for (let i = givenNumber1; progression.length <= maxAmountofNumbers; i += givenNumber2) {
    progression.push(i);
  }
  const correctAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  return [progression.join(' '), String(correctAnswer)];
};

export default () => gameLogic(gameQuestion, generateGame);
