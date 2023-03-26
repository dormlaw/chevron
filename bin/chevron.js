const commands = require('./commands');

const command = process.argv.slice(2); //обрезаем 2 при запуске через npm, 1 при "chmod +x chevron.js"
commands(command);