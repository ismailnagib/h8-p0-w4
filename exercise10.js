function checkAB(str) {
  var posisiA = [];
  var posisiB = [];
  for (var i = 0; i < str.length; i ++) {
      if (str[i] === "a" || str[i] === "A") {
          posisiA.push(i);
      } else if (str[i] === "b" || str[i] === "B") {
          posisiB.push(i);
      }
  }
  if (posisiA.length > 0 && posisiB.length > 0) {
      for (var j = 0; j < posisiA.length; j++) {
          for (var k = 0; k < posisiB.length; k++) {
              if (Math.abs(posisiA[j] - posisiB[k]) === 4) {
                  return true;
              }
          }
      }
      return false;
  } else {
      return false;
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false