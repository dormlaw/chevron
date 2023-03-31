import readlineSync from 'readline-sync';
import print from './utils/colorizer.js';
import generateRandomNumber from './utils/generateRandomNum.js';

function getProgression(start, step, length) {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

function progressionGameInit() {
  const start = generateRandomNumber(1, 9);
  const step = generateRandomNumber(1, 5);
  const length = generateRandomNumber(5, 9);
  const quizPoint = generateRandomNumber(1, length);
  const progression = getProgression(start, step, length);
  const answer = progression[quizPoint];
  progression[quizPoint] = '..';
  return { progression, answer };
}

function progressionGameStart({ progression, answer }) {
  print('');
  print('#yellow[> pifagor] - Угадайте число в арифмтеической прогрессии:');
  print(`  ${progression.join(' ')}`);
  const question = readlineSync.question('  ');
  switch (question) {
    case answer.toString():
      print('  #green[Верно!]');
      break;
    default:
      print('  Жаль, но ты дурак');
  }
}

export { progressionGameInit, progressionGameStart };
