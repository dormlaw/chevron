function commands(string) {
    const [type] = string.split(' ');
    let context = string.split(' ');
    context.shift();
    context = context.join(' ');
    switch (type) {
        case 'help':
            console.log("echo \x1b[2mwill repeat your text\x1b[0m")
            break
        case 'echo':
            console.log("\x1b[2mdid u say \x1b[0m" + context + "\x1b[2m?\x1b[0m")
            break
    }
}

module.exports = commands;