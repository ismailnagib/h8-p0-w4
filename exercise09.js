function tukarBesarKecil(kalimat) {
  var letter = [];
  for (var i = 0; i < kalimat.length; i++) {
      letter.push(kalimat[i]);
  }
  for (var j = 0; j < letter.length; j++) {
      if (letter[j] === letter[j].toUpperCase()) {
          letter[j] = letter[j].toLowerCase();
      } else if (letter[j] === letter[j].toLowerCase()) {
          letter[j] = letter[j].toUpperCase();
      }
  }
  return letter.join("");
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"