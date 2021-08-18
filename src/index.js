const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length; i+=10) {
    if (expr[i] == '*') {
      result += ' ';
      continue;
    }
    let current = '';
    for (let j = 0; j < 10; j +=2) {
      if (expr[i + j] == 1) {
        if (expr[i + j + 1] == 0) {
          current += '.';
        } else {
          current += '-';
        }
      }
    }
    result += MORSE_TABLE[current];
  }
  return result;
}

module.exports = {
    decode
}