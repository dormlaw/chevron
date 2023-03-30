import fs from 'fs';
import path from 'path';
import print from './utils/colorizer.js';
import fancyWelcome from './utils/fancyWelcome.js';
import wordle from './wordle.js';
import fixLayout from './fixLayout.js';
import { progressionGameInit, progressionGameStart } from './progressionGame.js';

const dirname = path.dirname(new URL(import.meta.url).pathname);
const wordsFilePath = path.join(dirname, '../assets/WORDS.json');
const wordsData = fs.readFileSync(wordsFilePath);
const WORDS = JSON.parse(wordsData).words;

function commandHandler(args) {
  const command = args.shift();
  const content = args.join(' ');
  if (!command) {
    fancyWelcome();
    print('type #blue[--help] to see list of commands');
  } else {
    switch (command) {
      case '-h':
      case '--help':
        print('#yellow[kadabra] will fix your layout');
        print('#yellow[slovo] wordle-like game in russian');
        print('#yellow[pifagor] guess the number in progression');
        break;
      case 'slovo':
        wordle(WORDS);
        break;
      case 'kadabra':
        if (content) {
          print(`#c[did u say #esc[${fixLayout(content)}]?]`);
        } else {
          print('please type anything');
        }
        break;
      case 'pifagor':
        progressionGameStart(progressionGameInit());
        break;
      default:
        print('no such command');
        print('#c[type #esc[--help] to see list of commands]');
    }
  }
}

export default commandHandler;
