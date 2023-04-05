import print from './colorizer.js';

class argvHandler {
  constructor() {
    this.commands = {};
    this.chainMarker = null;
  }

  help(description) {
    if (typeof description === 'string') {
      this.help = print(description);
    } else if (typeof description === 'function') {
      this.help = description;
    } else {
      console.error('only string or function can be an argument');
    }
  }

  command(command, description, handler) {
    this.commands[command] = { description, handler, options: {} };
    this.chainMarker = this.commands[command];
    return this;
  }

  option(option) {
    option.split(' ');
    if (this.chainMarker) {
      this.currentCommand.options[option] = true;
    }
    return this;
  }

  listen() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (args.includes('--help' || '-h') || !this.commands[command]) {
      if (args.length === 1) {
        this.help();
      } else {
        args.splice(args.indexOf('--help' || '-h'), 1);
        args.forEach((argument) => {
          const helpOutput = this.commands[argument].description;
          print(helpOutput);
        });
      }
    } else {
      const options = [];
      
    }
  }
}

export default argvHandler;
