import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const generateGame = () => {
  const givenNumber = getRandomNumber(50);
  const isPrime = (n) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };
  const sayPrimeOrNot = (n) => {
    const answer = isPrime(n) ? 'yes' : 'no';
    return answer;
  };
  const correctAnswer = sayPrimeOrNot(givenNumber);
  return [givenNumber, correctAnswer];
};

export default () => gameLogic(gameQuestion, generateGame);
