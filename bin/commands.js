import print from './colorizer.js';
import { wordl, WORDS } from './wordl.js';

function commands(args) {
    const type = args.shift();
    if (!type) {
        print("Initialising...");
        setTimeout(fancyWelcome, 1500);

        function fancyWelcome() {
            print("Welcome to");
            print("#yellow[                      oooo]");
            print("#yellow[Yb                    `888]");
            print("#yellow[ `Yb         .ooooo.   888 .oo.    .ooooo.  oooo    ooo oooo d8b  .ooooo.  ooo. .oo.]");
            print("#yellow[   `Yb      d88' `\"Y8  888P\"Y88b  d88' `88b  `88.  .8'  `888\"\"8P d88' `88b `888P\"Y88b]");
            print("#yellow[   .dP      888        888   888  888ooo888   `88..8'    888     888   888  888   888]");
            print("#yellow[ .dP        888   .o8  888   888  888    .o    `888'     888     888   888  888   888]");
            print("#yellow[dP          `Y8bod8P' o888o o888o `Y8bod8P'     `8'     d888b    `Y8bod8P' o888o o888o]");
            print(" ")
            print("Educational project CLI application");
            print("#c[Initialised at " + new Date() + "");
            print("#c[type #esc[--help] to see list of commands]")
        }
    } else {
        switch (type) {
            case '-h':
            case '--help':
                print("echo #c[will repeat your text]")
                print("slovo #c[wordle-like game is russian]")
                break
            case 'slovo':
                wordl(WORDS);
                break
            case 'echo':
                //TO DO echo converts letters from different layouts
                const content = args.join(' ')
                print("#c[did u say #esc[" + content + "]?]")
                break
            default:
                print("no such command")
                print("#c[type #esc[--help] to see list of commands]")
        }
    }
}

export default commands;