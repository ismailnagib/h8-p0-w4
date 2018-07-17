function urutkanAbjad(str) {
  var letter = [];
  for (var i = 0; i < str.length; i++) {
      letter.push(str[i]);
  }
  letter.sort();
  return letter.join("");
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'