import getRandomNumber from '../utils.js';
import gameLogic from '../index.js';

const gameQuestion = 'Find the greatest common divisor of given numbers.';
const generateGame = () => {
    const givenNumber1 = getRandomNumber(10);
    const givenNumber2 = getRandomNumber(10);
    const dividers = [2, 3, 5, 7];
    for (const divider of dividers) {
       if (givenNumber1 % divider === 0) {
        
       }
    }
  return [givenNumber, correctAnswer];
};

export default () => gameLogic(gameQuestion, generateGame);
