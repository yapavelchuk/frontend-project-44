import getRandomNumber from '../utils.js';
import runTheGame from '../index.js';

const gameRule = 'What is the result of the expression?';
const calculateExpressionValue = (operator, number1, number2) => {
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
const generateDataforNextRound = () => {
  const givenNumber1 = getRandomNumber();
  const givenNumber2 = getRandomNumber();
  const minValue = 0;
  const maxValue = 2;
  const mathOperations = ['+', '-', '*'];
  const operator = mathOperations[getRandomNumber(minValue, maxValue)];
  const question = `${givenNumber1} ${operator} ${givenNumber2}`;
  const result = calculateExpressionValue(operator, givenNumber1, givenNumber2);
  return [question, String(result)];
};

export default () => runTheGame(gameRule, generateDataforNextRound);
