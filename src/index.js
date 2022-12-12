#!/usr/bin/env node

// import readlineSync from 'readline-sync';

//  export const startGame = () => {
// // приветствие
//   console.log('Welcome to the Brain Games!');
//   const getUsername = () => readlineSync.question('May I have your name? ');
//   const userName = getUsername();
//   console.log(`Hello, ${userName}!`);
//   // функция, генерирующая рандомное число
//  // const getRandomNumber = (max) => Math.round(Math.random() * max);
// // условия игры <...>
//   let correctAttempts = 1;
//   const maxAttempts = 3;
// //логика
//     // переменные и игра
//     const getRules = () => {
//   if (userAnswer === correctAnswer && correctAttempts < maxAttempts) {
//     console.log('Correct!');
//     correctAttempts += 1;
//   } else if (userAnswer === correctAnswer && correctAttempts >= maxAttempts) {
//     console.log('Correct!');
//     console.log(`Congratulations, ${userName}!`);
//   } else if (userAnswer !== correctAnswer) {
//     console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
//     console.log(`Let's try again, ${userName}`);
//     // завершить игру
//     break;
//   }
//   }
// }

import readlineSync from 'readline-sync';
// import calcGame from './games/game-calc.js';
// import evenGame from './games/game-even.js';

const gameLogic = (gameQuestion, generateGame) => {
  console.log('Welcome to the Brain Games!');
  const getUsername = () => readlineSync.question('May I have your name? ');
  const userName = getUsername();
  console.log(`Hello, ${userName}!`);
  console.log(gameQuestion);
  const maxAttempts = 3;
  for (let i = 1; i <= maxAttempts; i += 1) {
    const [question, correctAnswer] = generateGame();
    console.log('Question: ', question);
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const userAnswer = getUserAnswer();
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      return;
      // завершить игру
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
// gameLogic(calcGame);
// gameLogic(evenGame);
