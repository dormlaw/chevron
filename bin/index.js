const commands = require('./commands');


console.log("Initialising...");
setTimeout(fancyWelcome, 1500);

function fancyWelcome() {
    console.log("Welcome to");
    console.log("\x1b[33m                      oooo");
    console.log("\x1b[33mYb                    `888");
    console.log("\x1b[33m `Yb         .ooooo.   888 .oo.    .ooooo.  oooo    ooo oooo d8b  .ooooo.  ooo. .oo.");
    console.log("\x1b[33m   `Yb      d88' `\"Y8  888P\"Y88b  d88' `88b  `88.  .8'  `888\"\"8P d88' `88b `888P\"Y88b");
    console.log("\x1b[33m   .dP      888        888   888  888ooo888   `88..8'    888     888   888  888   888");
    console.log("\x1b[33m .dP        888   .o8  888   888  888    .o    `888'     888     888   888  888   888");
    console.log("\x1b[33mdP          `Y8bod8P' o888o o888o `Y8bod8P'     `8'     d888b    `Y8bod8P' o888o o888o");
    console.log("\x1b[0m")
    console.log("Educational project CLI application");
    console.log("\x1b[2mInitialised at " + new Date() + "\x1b[0m");
    console.log("\x1b[2mtype \x1b[0mhelp \x1b[2mto see list of commands\x1b[0m")
}

process.stdin.on('data', (data) => {
    const command = data.toString().trim();
    commands(command);
  });