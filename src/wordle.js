import print from './utils/colorizer.js';
import fancyWelcome from './utils/fancyWelcome.js';

function wordle(words) {
  // starting code
  const riddleWord = words[Math.floor(Math.random() * words.length)];
  const riddle = riddleWord.split('');
  let count = 5;
  const answers = [];
  const monitor = (type) => {
    console.clear();
    fancyWelcome();
    print('#yellow[> SLOVO] - Отгадай слово из 5 букв за 5 попыток!');
    print('#c[введите #esc[exit] чтобы пкинуть игру]');
    print('');
    print('К О #black[#bgred[Ф]] Т А - такой буквы в слове нет');
    print('Т #black[#bgblue[А]] П О К - такая буква есть, но в другой позиции');
    print('#black[#bggreen[П]] О Е З Д - такая буква есть и она в нужном месте');
    print('');
    print(`Осталось ${count} попыток`);
    for (let i = 0; i < answers.length; i += 1) {
      print(answers[i].join(' '));
      print('');
    }
    switch (type) {
      case 'error-length':
        print('');
        print('Слово должно состоять из 5 букв');
        print('Попробуйте ещё:');
        break;
      case 'error-word':
        print('');
        print('Такого слова нет в словаре...');
        print('Попробуйте ещё:');
        break;
      case 'winner':
        print('#yellow[Поздравляю, это верное слово!]');
        break;
      case 'looser':
        print('К сожалению все попытки закончились');
        print(`Верное слово было: #black[#bggreen[ ${riddle.join(' ').toUpperCase()} ]]`);
        break;
      default:
        print('');
        print('Введите Вашу догадку:');
        break;
    }
  };
  monitor('guess');

  // gameflow
  process.stdin.on('data', (data) => {
    const word = data.toString().toLowerCase().trim();
    if (word === 'exit') {
      process.stdin.removeAllListeners('data');
      process.exit();
    }
    if (word.length === 5) {
      if (words.includes(word)) {
        const answer = word.split('');
        for (let i = 0; i < 5; i += 1) {
          if (answer[i] === riddle[i]) {
            answer[i] = `#black[#bggreen[${answer[i].toUpperCase()}]]`;
          } else if (riddle.includes(answer[i])) {
            answer[i] = `#black[#bgblue[${answer[i].toUpperCase()}]]`;
          } else {
            answer[i] = `#black[#bgred[${answer[i].toUpperCase()}]]`;
          }
        }
        answers.push(answer);
        count -= 1;
        if (word === riddleWord) {
          monitor('winner');
          process.stdin.removeAllListeners('data');
          process.exit();
        }
        monitor();
      } else {
        monitor('error-word');
      }
    } else {
      monitor('error-length');
    }
    if (count === 0) {
      monitor('looser');
      process.stdin.removeAllListeners('data');
      process.exit();
    }
  });
}

export default wordle;
