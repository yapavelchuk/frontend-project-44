import getRandomNumber from '../utils.js';
import runTheGame from '../index.js';

const gameRule = 'What number is missing in the progression?';
const createProgression = (startNumber, constSummand, numbersCount = 10) => {
  const progression = [];
  for (let i = startNumber; progression.length <= numbersCount; i += constSummand) {
    progression.push(i);
  }
  return progression;
};
const generateNextRoundData = () => {
  const givenNumber1 = getRandomNumber();
  const givenNumber2 = getRandomNumber();
  const lastElementofProgression = 9;
  const hiddenElement = getRandomNumber(0, lastElementofProgression);
  const resultingProgression = createProgression(givenNumber1, givenNumber2);
  const correctAnswer = resultingProgression[hiddenElement];
  resultingProgression[hiddenElement] = '..';
  return [resultingProgression.join(' '), String(correctAnswer)];
};

export default () => runTheGame(gameRule, generateNextRoundData);
