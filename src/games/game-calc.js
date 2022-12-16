import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameRule = 'What is the result of the expression?';
const calculateExpressionValue = (number1, operator, number2) => {
  const mathOperations = ['+', '-', '*'];
  mathOperations[getRandomNumber(0, 2)] = operator;
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
  const mathOperations = ['+', '-', '*'];
  const operator = mathOperations[getRandomNumber(0, 2)];
  const givenNumber1 = getRandomNumber();
  const givenNumber2 = getRandomNumber();
  const question = `${givenNumber1} ${operator} ${givenNumber2}`;
  const result = calculateExpressionValue(givenNumber1, operator, givenNumber2);
  return [question, String(result)];
};

export default () => gameLogic(gameRule, generateRoundData);
