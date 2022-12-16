import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameRule = 'What is the result of the expression?';
const calculateExpressionValue = (operator, number1, number2) => {
  let resultOfExpression;
  switch (operator) {
    case '+':
      resultOfExpression = number1 + number2;
      break;
    case '-':
      resultOfExpression = number1 - number2;
      break;
    case '*':
      resultOfExpression = number1 * number2;
      break;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
  return resultOfExpression;
};
const generateRoundData = () => {
  const givenNumber1 = getRandomNumber();
  const givenNumber2 = getRandomNumber();
  const minValue = 0;
  const maxValue = 2;
  const mathOperations = ['+', '-', '*'];
  const operator = mathOperations[getRandomNumber(minValue, maxValue)];
  const question = `${givenNumber1}${operator}${givenNumber2}`;
  const result = calculateExpressionValue(operator, givenNumber1, givenNumber2);
  return [question, String(result)];
};

export default () => gameLogic(gameRule, generateRoundData);
