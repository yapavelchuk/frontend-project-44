#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gameLogic = (gameRule, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);
  const maxAttempts = 3;
  for (let i = 1; i <= maxAttempts; i += 1) {
    const [question, correctAnswer] = generateRoundData();
    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
      // завершить игру
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default gameLogic;
