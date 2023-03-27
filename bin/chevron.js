#!/usr/bin/env node

import commands from '../src/commands.js';

const command = process.argv.slice(2);
commands(command);
