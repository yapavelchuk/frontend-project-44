import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameQuestion = 'What is the result of the expression?';
const generateGame = () => {
  const givenNumber1 = getRandomNumber(10);
  const givenNumber2 = getRandomNumber(10);
  const mathOperations = ['+', '-', '*'];
  const getMathOperation = () => mathOperations[getRandomNumber(2)];
  const operator = getMathOperation();
  const question = `${givenNumber1} ${operator} ${givenNumber2}`;

  let result;
  switch (operator) {
    case '+':
      result = givenNumber1 + givenNumber2;
      break;
    case '-':
      result = givenNumber1 - givenNumber2;
      break;
    case '*':
      result = givenNumber1 * givenNumber2;
      break;
    default:
      result = null;
      break;
  }
  return [question, String(result)];
};

export default () => gameLogic(gameQuestion, generateGame);
