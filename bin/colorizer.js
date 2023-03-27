/*  print() - colorize string in CLI with ANSI escape codes and logs it into console
    colorize string, using custom tags
    tags syntax:
    "#tag[string]"
    "#" - opening symbol
    "tag" - tag code, from table bellow
    "[" - start of colorized string
    "]" - end of colorized string
    supports nested tegs
    "|" - used as escape symbol for "]"
    "#" and "]" - will be escaped automaticly, if no "tags" used
*/
function print(data) {
  // list of supported tags
  const TAGS = new Map([
    ['test', '\x1b[0m'],
    ['esc', '\x1b[0m'],
    ['c', '\x1b[2m'],
    ['black', '\x1b[30m'],
    ['blue', '\x1b[34m'],
    ['yellow', '\x1b[33m'],
    ['green', '\x1b[32m'],
    ['red', '\x1b[31m'],
    ['bgblue', '\x1b[44m'],
    ['bgyellow', '\x1b[43m'],
    ['bggreen', '\x1b[42m'],
    ['bgred', '\x1b[41m'],
  ]);

  const string = `#esc[${data.toString()}]`;
  let colorizedString = '';
  const keyStack = [];

  for (let i = 0; i < string.length; i += 1) {
    const char = string.charAt(i);
    if (char === '|') {
      const escapedChar = string.substr(i + 1, 1);
      colorizedString += escapedChar;
      i += 1;
      continue;
    } else if (char === '#') {
      const tagEnd = string.indexOf('[', i);
      if (tagEnd !== -1) {
        const tag = string.substring(i + 1, tagEnd);
        if (TAGS.has(tag)) {
          const key = TAGS.get(tag);
          keyStack.push(key);
          colorizedString += key;
          i = tagEnd;
          continue;
        }
      }
    } else if (char === ']' && keyStack.length !== 0) {
      if (keyStack.length > 1) {
        // because ANSI escape codes dont have ending tegs
        // we need to get back to previous style, if its exists
        colorizedString += keyStack[keyStack.length - 2];
      }
      keyStack.pop();
      continue;
    }

    colorizedString += char;
  }

  return console.log(colorizedString);
}

export default print;
