#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playGame = () => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  const getUsername = () => readlineSync.question('May I have your name? ');
  const userName = getUsername();
  console.log(`Hello, ${userName}!`);
  // функция, генерирующая рандомное число
  const getRandomNumber = () => Math.round(Math.random() * 100);
  // условия
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // игра
  let correctAttempts = 1;
  const maxAttempts = 3;
  for (let i = 1; i <= 3; i += 1) {
    const givenNumber = getRandomNumber();
    console.log('Question: ', givenNumber);
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const userAnswer = getUserAnswer();
    const correctAnswer = (givenNumber % 2 === 0) ? 'yes' : 'no';
    if (userAnswer === correctAnswer && correctAttempts < maxAttempts) {
      console.log('Correct!');
      correctAttempts += 1;
    } else if (userAnswer === correctAnswer && correctAttempts >= maxAttempts) {
      console.log('Correct!');
      console.log(`Congratulations, ${userName}!`);
    } else if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}`);
      // завершить игру
      break;
    }
  }
};
playGame();
