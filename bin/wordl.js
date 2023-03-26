const print = require('./colorizer')

function wordl(words) {
	//starting code
	console.clear();
	let count = 5;
	print('#yellow[> SLOVO] - Отгадай слово из 5 букв за 5 попыток!');
	print('#c[введите #esc[exit] - чтобы закончить]');
	print('');
	print('К О #black[#bgred[Ф]] Т А - такой буквы в слове нет');
	print('Т #black[#bgblue[А]] П О К - такая буква есть, но в другой позиции');
	print('#black[#bggreen[П]] О Е З Д - такая буква есть и она в нужном месте');
	print('');
	print(`Осталось ${count} попыток`);
	print('');
	print('Введите Вашу догадку:');
	let riddle = words[Math.floor(Math.random() * words.length)];
	//gameflow
	process.stdin.on('data', (data) => {
		const word = data.toString().toLowerCase().trim();
		if (word === 'exit') {
			process.stdin.removeAllListeners('data');
			process.exit();
		}
		if (word === riddle) {
			print('#yellow[Поздравляю, это верное слово!]');
			process.stdin.removeAllListeners('data');
			// TO DO
		}
		


	});
}

//temprorary words list, would be replaced by .json file
const WORDS = ['печка', 'баран', 'комар']

module.exports = { wordl, WORDS };