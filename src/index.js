#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const startGame = () => {
// приветствие
  console.log('Welcome to the Brain Games!');
  const getUsername = () => readlineSync.question('May I have your name? ');
  const userName = getUsername();
  console.log(`Hello, ${userName}!`);
  // функция, генерирующая рандомное число
  const getRandomNumber = (max) => Math.round(Math.random() * max);
// условия игры <...>
  let correctAttempts = 1;
  const maxAttempts = 3;
}
//логика
export const getRules = () => {
    // переменные и игра 
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
