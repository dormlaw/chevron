function fixLayout(string) {
  const rusString = 'йцукенгшщзхъфывапролджэячсмитьбюёЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮЁ';
  const engString = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.`QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>~';

  const fixedString = string.split('').map((letter) => {
    let fixedLetter;
    const rusIndex = rusString.indexOf(letter);
    const engIndex = engString.indexOf(letter);
    if (rusIndex !== -1) {
      fixedLetter = engString[rusIndex];
    } else if (engIndex !== -1) {
      fixedLetter = rusString[engIndex];
    } else {
      fixedLetter = letter;
    }
    return fixedLetter;
  })
    .join('');
  return fixedString;
}

export default fixLayout;
