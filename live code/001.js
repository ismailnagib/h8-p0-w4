/**
Reverse Even
Implementasikan function reverseEven untuk membalikkan setiap elemen string dengan urutan ganjil
yang ada di dalamnya.
Contoh:
- input: ['awtian', 'raijin', 'thunderkeg']
  output: ['naitwa', 'raijin', 'gekrednuht']
- input: ['draco', 'luna', 'riddle', 'hagrid']
  output: ['ocard', 'luna', 'elddir', 'hagrid']
- input: []
  output: []
Aturan coding:
WAJIB MENYERTAKAN ALGORITHMA DAN PSEUDOCODE
Dilarang menggunakan built-in function:
- .map()
- .filter()
- .reduce()
- .reverse()
- .split()
- .join()
*/

// PSEUDOCODE

// STORE "input" with any ARRAY value
// STORE "reversed" with empty string
// STORE i with value = 0
// WHILE i < ARRAY LENGTH
//   IF INDEX + 1 of a "value" inside "input" % 2 = 1 THEN
//     STORE j with value = ARRAY "value" LENGTH - 1
//     WHILE j >= 0
//       CHANGE "reversed" TO "reversed" + "value" with INDEX i with INDEX j
//       CHANGE j = j - 1
//     END LOOP
//     PUT "reversed" inside ARRRAY AND DELETE "value"
//     CHANGE "reversed" value to empty string
//   END IF
//   CHANGE i = i + 1
// END LOOP


// CODE

function reverseEven (arr) {
  var reversed = "";
  for (var i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 === 1) {
      for ( var j = arr[i].length - 1; j >= 0; j--) {
        reversed += arr[i][j];
      }
      arr.splice(i, 1, reversed);
      reversed = "";
    }
  }
  return arr;
}

console.log(reverseEven(['clinkz', 'jahrakal', 'kael']));
// [ 'zknilc', 'jahrakal', 'leak' ]

console.log(reverseEven(['moonfang', 'nightshade', 'lightbringer', 'strygwyr']));
// [ 'gnafnoom', 'nightshade', 'regnirbthgil', 'strygwyr' ]

console.log(reverseEven([]));
// []