import getRandomNumber from '../utils.js';
import { startGame } from '../index.js';

startGame();
// математические операции
const mathOperations = ['+', '-', '*'];
const getMathOperation = () => mathOperations[getRandomNumber(2)];
// условия
// игра
for (let i = 1; i <= 3; i += 1) {
  const givenNumber1 = getRandomNumber(10);
  const givenNumber2 = getRandomNumber(10);
  const operation = getMathOperation();
  const calcEval = (operations) => {
    let result;
    switch (operations) {
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
    return result;
  };
  const userAnswer = getUserAnswer();
  const intcorrectAnswer = calcEval(operation);
  const correctAnswer = intcorrectAnswer.toString();
}
