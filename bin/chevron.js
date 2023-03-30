#!/usr/bin/env node

import commandHandler from '../src/commandHandler.js';

const command = process.argv.slice(2);
commandHandler(command);
