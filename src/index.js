const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let str = "";
  let count = 0;
  for (let i = 0; expr.length > i; i += 10) {
    let strMorse = "";
    let strTen = expr.substr(i, 10);
    for (let j = 0; strTen.length > j; j += 2) {
      let strTwo = strTen.substr(j, 2);
      if (strTwo === "10") {
        strMorse += ".";
      } else if (strTwo === "11") {
        strMorse += "-";
      } else if (strTwo === "**") {
        count++;
        if (count === 5) {
            str += " ";
          count = 0;
        }
      }
    }
    if (MORSE_TABLE[strMorse] !== undefined) {
      str += MORSE_TABLE[strMorse];
    }
  }
  return str;
}

module.exports = {
  decode
};
