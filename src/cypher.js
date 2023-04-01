const enigma = {
  alphabet: 'йцукенгшщзхъфывапролджэячсмитьбю.,!?_ё',
  reflector: 'ё?зждлор.павфцим!счяуъкнэщ,бгшфйтю_еых',
  rotors: [
    {
      letters: '.эькмъчжаюхйшртнфыоуэвсздгпибёцщея!,?_',
      offset: 1,
    },
    {
      letters: 'чуре.ъщ!,жбхлсаозныфдвтпияшмгкю?цйэьё_',
      offset: 3,
    },
    {
      letters: '_йэгзврул!яфщохтпъмде,ычнасикшьжбцё?ш.',
      offset: 2,
    }
  ]
};

function encrypt(data, enigma, key = 'aaa') {
  const dataString = data.toString();
  const preparedArray = dataString.toLowerCase()
    .split('')
    .map((letter) => {
      let preparedLetter;
      if (letter === ' ') {
        preparedLetter = '_';
      } else preparedLetter = letter;
      return preparedLetter;
    });
  const rotationCounter = [];
  enigma.rotors.forEach((rotor) => {
    console.log(enigma.rotors[enigma.rotors.indexOf(rotor)].letters.charAt('a'))
    console.log(enigma.rotors[rotor].letters.indexOf('а'))
    rotationCounter.push(
      enigma.rotors[rotor].indexOf(key[enigma.rotors.indexOf(rotor)])
    )
  });
  let encryptedArray;
  for (letter of preparedArray) {
    let encryptedLetter;
    if (enigma.alphabet.includes(letter)) {
      const reflectorIndex = enigma.alphabet.indexOf(letter);
      encryptedLetter = enigma.reflector[reflectorIndex];
      enigma.rotors.forEach((rotor) => {
        const rotorOffset = 1
        const rotorIndex = enigma.rotors[rotor].indexOf(encryptedLetter + rotorOffset);
        encryptedLetter = enigma.rotors[rotor][rotorIndex];
        rotationCounter[enigma.rotors.indexOf(rotor)] += 1;
      });
    } else {
      encryptedArray.push(letter);
    }
  }
  const encryptedString = encryptedArray.join('');
  return encryptedString
}

console.log(encrypt('привет, братишка!', enigma));
