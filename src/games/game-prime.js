import getRandomNumber from '../utils.js';
import runTheGame from '../index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const generateDataforNextRound = () => {
  const givenNumber = getRandomNumber();
  const sayPrimeOrNot = (number) => (isPrime(number) ? 'yes' : 'no');
  const correctAnswer = sayPrimeOrNot(givenNumber);
  return [givenNumber, correctAnswer];
};

export default () => runTheGame(gameRule, generateDataforNextRound);
