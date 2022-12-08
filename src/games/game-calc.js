import { getRules, startGame } from '../src/index.js'

startGame();
// математические операции
  const mathOperations = ['+', '-', '*'];
  const getMathOperation = () => mathOperations[getRandomNumber(2)];
   // условия
   console.log('What is the result of the expression?');
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
    console.log('Question:', givenNumber1, operation, givenNumber2);
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const userAnswer = getUserAnswer();
    const intcorrectAnswer = calcEval(operation);
    const correctAnswer = intcorrectAnswer.toString();
    getRules();
};