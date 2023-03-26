const print = require('./colorizer')

const fs = require('fs');
const jsonData = fs.readFileSync('./bin/WORDS.json');
const jsonObj = JSON.parse(jsonData);
const WORDS = jsonObj.words;

function wordl(words) {

	const monitor = (type) => {
		console.clear();
		print('#yellow[> SLOVO] - Отгадай слово из 5 букв за 5 попыток!');
		print('#c[введите #esc[exit] - чтобы закончить]');
		print('');
		print('К О #black[#bgred[Ф]] Т А - такой буквы в слове нет');
		print('Т #black[#bgblue[А]] П О К - такая буква есть, но в другой позиции');
		print('#black[#bggreen[П]] О Е З Д - такая буква есть и она в нужном месте');
		print('');
		print(`Осталось ${count} попыток`);
		for (let i = 0; i < answers.length; i++)
			print(answers[i].join(' '))
		if (type === 'error-length') {
			print('');
			print('Слово должно состоять из 5 букв');
			print('Попробуйте ещё:');
		}
		if (type === 'error-word') {
			print('');
			print('Такого слова нет в словаре...');
			print('Попробуйте ещё:');
		}
		if (type === 'guess') {
			print('');
			print('Введите Вашу догадку:');
		}
		if (type === 'winner') {
			print('#yellow[Поздравляю, это верное слово!]');
		}
		if (type === 'looser') {
			print('К сожалению все попытки закончились');
			print(`Верное слово было: ${riddle.join(' ')}`);
		}
	}

	//starting code
	let riddleWord = words[Math.floor(Math.random() * words.length)];
	let riddle = riddleWord.split('');
	let count = 5;
	let answers = []
	monitor('guess');

	//gameflow
	process.stdin.on('data', (data) => {
		const word = data.toString().toLowerCase().trim();
		if (word === 'exit') {
			process.stdin.removeAllListeners('data');
			process.exit();
		}
		if (word.length === 5) {
			if (words.includes(word)) {
				let answer = word.split('');
				for (let i = 0; i < 5; i++) {
					if (answer[i] === riddle[i]) {
						answer[i] = '#black[#bggreen[' + answer[i].toUpperCase() + ']]'
					} else if (riddle.includes(answer[i])) {
						answer[i] = '#black[#bgblue[' + answer[i].toUpperCase() + ']]'
					} else {
						answer[i] = '#black[#bgred[' + answer[i].toUpperCase() + ']]'
					}
				};
				answers.push(answer);
				count--;
				if (word === riddleWord) {
					monitor('winner')
					process.stdin.removeAllListeners('data');
					process.exit();
				}
				monitor('guess');
			} else {
				monitor('error-word')
			}
		} else {
			monitor('error-length');
		}
		if (count === 0) {
			monitor('looser')
		}
	});
}

//temprorary words list, would be replaced by .json file
// const WORDS = ['печка', 'баран', 'комар']

module.exports = { wordl, WORDS };