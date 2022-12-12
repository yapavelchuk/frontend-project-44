#!/usr/bin/env node
import playGame from '../src/games/game-calc.js';
// import readlineSync from 'readline-sync';

// const playGame = () => {
// // приветствие
//   console.log('Welcome to the Brain Games!');
//   const getUsername = () => readlineSync.question('May I have your name? ');
//   const userName = getUsername();
//   console.log(`Hello, ${userName}!`);
//   // функция, генерирующая рандомное число
//   const getRandomNumber = (max) => Math.round(Math.random() * max);
//   // математические операции
//   const mathOperations = ['+', '-', '*'];
//   const getMathOperation = () => mathOperations[getRandomNumber(2)];
//   // условия
//   console.log('What is the result of the expression?');
//   // игра
//   let correctAttempts = 1;
//   const maxAttempts = 3;
//   for (let i = 1; i <= 3; i += 1) {
//     const givenNumber1 = getRandomNumber(10);
//     const givenNumber2 = getRandomNumber(10);
//     const operation = getMathOperation();
//     const calcEval = (operations) => {
//       let result;
//       switch (operations) {
//         case '+':
//           result = givenNumber1 + givenNumber2;
//           break;
//         case '-':
//           result = givenNumber1 - givenNumber2;
//           break;
//         case '*':
//           result = givenNumber1 * givenNumber2;
//           break;
//         default:
//           result = null;
//           break;
//       }
//       return result;
//     };
//     console.log('Question:', givenNumber1, operation, givenNumber2);
//     const getUserAnswer = () => readlineSync.question('Your answer: ');
//     const userAnswer = getUserAnswer();
//     const intcorrectAnswer = calcEval(operation);
//     const correctAnswer = intcorrectAnswer.toString();
//     if (userAnswer === correctAnswer && correctAttempts < maxAttempts) {
//       console.log('Correct!');
//       correctAttempts += 1;
//     } else if (userAnswer === correctAnswer && correctAttempts >= maxAttempts) {
//       console.log('Correct!');
//       console.log(`Congratulations, ${userName}!`);
//     } else if (userAnswer !== correctAnswer) {
//       console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
//       console.log(`Let's try again, ${userName}`);
//       // завершить игру
//       break;
//     }
//   }
// };
playGame();
