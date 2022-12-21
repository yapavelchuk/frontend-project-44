import getRandomNumber from '../utils.js';
import runTheGame from '../index.js';

const gameRule = 'What is the result of the expression?';
const calculateExpression = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};
const generateNextRoundData = () => {
  const givenNumber1 = getRandomNumber();
  const givenNumber2 = getRandomNumber();
  const mathOperations = ['+', '-', '*'];
  const minValue = 0;
  const maxValue = mathOperations.length - 1;
  const operator = mathOperations[getRandomNumber(minValue, maxValue)];
  const question = `${givenNumber1} ${operator} ${givenNumber2}`;
  const result = calculateExpression(operator, givenNumber1, givenNumber2);
  return [question, String(result)];
};

export default () => runTheGame(gameRule, generateNextRoundData);
