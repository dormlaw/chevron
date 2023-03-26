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

    //list of supported tags
    const TAGS = new Map([
        ['test', '\x1b[0m'],
        ['esc', '\033[0m'],
        ['c', '\033[2m'],
        ['black', '\033[30m'],
        ['blue', '\033[34m'],
        ['yellow', '\033[33m'],
        ['green', '\033[32m'],
        ['red', '\033[31m'],
        ['bgblue', '\033[44m'],
        ['bgyellow', '\033[43m'],
        ['bggreen', '\033[42m'],
        ['bgred', '\033[41m'],
    ])

    const string = "#esc[" + data.toString() + "]";
    let colorizedString = '';
    let keyStack = [];

    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (char === '|') {
            let escapedChar = string.substr(i + 1, 1);
            colorizedString += escapedChar
            i += 1
            continue
        } else if (char === '#') {
            let tagEnd = string.indexOf('[', i);
            if (tagEnd !== -1) {
                let tag = string.substring(i + 1, tagEnd);
                if (TAGS.has(tag)) {
                    let key = TAGS.get(tag)
                    keyStack.push(key);
                    colorizedString += key;
                    i = tagEnd;
                    continue;
                }
            }
        } else if (char === ']' && keyStack.length !== 0) {
            if (keyStack.length > 1) {
                //because ANSI escape codes dont have ending tegs
                //we need to get back to previous style, if its exists
                colorizedString += keyStack[keyStack.length - 2]
            }
            keyStack.pop();
            continue;
        }

        colorizedString += char;
    }

    return console.log(colorizedString);
}

module.exports = print;