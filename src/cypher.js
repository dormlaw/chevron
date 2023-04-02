const enigma = {
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
  reflector:
    [24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19],
  rotors: [
    [1, 17, 10, 2, 5, 3, 23, 12, 13, 20, 6, 9, 22, 8, 19, 15, 16, 14, 11, 4, 25, 21, 0, 7, 18, 24],
    [17, 8, 5, 12, 7, 21, 23, 20, 24, 0, 2, 22, 1, 10, 9, 15, 11, 3, 25, 4, 6, 14, 16, 13, 19, 18],
    [24, 3, 22, 14, 7, 10, 21, 0, 9, 2, 8, 15, 18, 11, 19, 1, 23, 6, 20, 16, 17, 25, 12, 4, 13, 5],
  ],
};

function encrypt(message, { alphabet, reflector, rotors }, key = 'abc') {
  // preparing data for encryption
  // all letters to lower case
  // swap <space> with '_'
  // split to array for further work
  const messageString = message.toString();
  const messageArray = messageString.toLowerCase()
    .split('')
    .map((letter) => (letter === ' ' ? '_' : letter));

  // console.log(messageArray);

  // get starting points of rotors depending of key
  const rotationCounter = [];
  rotors.forEach((rotor) => {
    const rotorKey = key[rotors.indexOf(rotor)];
    const rotorStartingPoint = alphabet.indexOf(rotorKey);
    if (rotorStartingPoint !== -1) {
      rotationCounter.push(rotorStartingPoint);
    } else {
      rotationCounter.push(0);
    }
  });

  // console.log(rotationCounter);

  // start encrypting
  const encryptedArray = [];
  for (let i = 0; i < messageArray.length; i += 1) {
    const letter = messageArray[i];
    const inputIndex = alphabet.indexOf(letter);
    // console.log(inputIndex);
    let encryptedLetter = letter;
    if (inputIndex !== -1) {
      encryptedLetter = rotors[0][inputIndex];
      // console.log(encryptedLetter);
      encryptedLetter = rotors[1][encryptedLetter];
      // console.log(encryptedLetter);
      encryptedLetter = rotors[2][encryptedLetter];
      // console.log(encryptedLetter);
      encryptedLetter = reflector[encryptedLetter];
      // console.log(encryptedLetter);
      encryptedLetter = rotors[2].indexOf(encryptedLetter);
      // console.log(encryptedLetter);
      encryptedLetter = rotors[1].indexOf(encryptedLetter);
      // console.log(encryptedLetter);
      encryptedLetter = rotors[0].indexOf(encryptedLetter);
      // console.log(encryptedLetter);
      encryptedLetter = alphabet[encryptedLetter];
    }
    encryptedArray.push(encryptedLetter);
    // console.log(letter);
    // console.log(inputIndex);
    // console.log(encryptedLetter);
  }

  // return <spaces> and capital letters
  // stringify encrypted message
  const encryptedMessage = encryptedArray.map((letter, index) => {
    if (letter === '_') {
      return ' ';
    }
    if (messageString[index] === messageString[index].toUpperCase()) {
      return letter.toUpperCase();
    }
    return letter;
  }).join('');

  return encryptedMessage;
}

// console.log(encrypt('Hello, bro!', enigma));

export { enigma, encrypt };
