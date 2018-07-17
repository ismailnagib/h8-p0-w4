function digitPerkalianMinimum(angka) {
  var faktor1 = [];
  var faktor2 = [];
  var digitCount = [];
  for (var i = 1; i * i <= angka; i++) {
      if (angka % i === 0) {
          faktor1.push(i);
          faktor2.push(angka / i); 
      }
  }
  for (var j = 0; j < faktor1.length; j++) {
      digitCount.push((String(faktor1[j]) + String(faktor2[j])).length);
  }
  var min = digitCount.reduce (
    function(a, b) {
      return Math.min(a, b);
    }
  )
  return min;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2