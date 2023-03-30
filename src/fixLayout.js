// not working as intended
function fixLayout(string) {
  const layout = new Map([
    ['`', 'ё'], ['ё', '`'],
    ['q', 'й'], ['й', 'q'],
    ['w', 'ц'], ['ц', 'w'],
    ['e', 'у'], ['у', 'e'],
    ['r', 'к'], ['к', 'r'],
    ['t', 'е'], ['е', 't'],
    ['y', 'н'], ['н', 'y'],
    ['u', 'г'], ['г', 'u'],
    ['i', 'ш'], ['ш', 'i'],
    ['o', 'щ'], ['щ', 'o'],
    ['p', 'з'], ['з', 'p'],
    ['[', 'х'], ['х', '['],
    [']', 'ъ'], ['ъ', ']'],
    ['a', 'ф'], ['ф', 'a'],
    ['s', 'ы'], ['ы', 's'],
    ['d', 'в'], ['в', 'd'],
    ['f', 'а'], ['а', 'f'],
    ['g', 'п'], ['п', 'g'],
    ['h', 'р'], ['р', 'h'],
    ['j', 'о'], ['о', 'j'],
    ['k', 'л'], ['л', 'k'],
    ['l', 'д'], ['д', 'l'],
    [';', 'ж'], ['ж', ';'],
    ["'", 'э'], ['э', "'"],
    ['z', 'я'], ['я', 'z'],
    ['x', 'ч'], ['ч', 'x'],
    ['c', 'с'], ['с', 'c'],
    ['v', 'м'], ['м', 'v'],
    ['b', 'и'], ['и', 'b'],
    ['n', 'т'], ['т', 'n'],
    ['m', 'ь'], ['ь', 'm'],
    [',', 'б'], ['б', ','],
    ['.', 'ю'], ['ю', '.'],
  ]);

  const fixedString = string.split('').map((letter) => {
    let fixedLetter;
    if (letter === letter.toUpperCase()) {
      fixedLetter = layout.get(letter.toLowerCase()).toUpperCase();
    } else {
      fixedLetter = layout.get(letter);
    }
    return fixedLetter;
  })
    .join('');
  return fixedString;
}

export default fixLayout;