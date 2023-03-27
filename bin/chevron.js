#!/usr/bin/env node

import commands from './commands.js';

const command = process.argv.slice(2); //обрезаем 2 при запуске через npm, 1 при "chmod +x chevron.js"
commands(command);