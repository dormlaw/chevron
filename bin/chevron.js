#!/usr/bin/env node

import commands from './commands.js';

const command = process.argv.slice(2);
commands(command);
