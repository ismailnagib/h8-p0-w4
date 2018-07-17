function cariModus(arr) {
  var modus = 0;
  var sameNums = [];
  var counts = [];

  // LOOP PERTAMA
  for (var i = arr.length - 1; i > 0; i--) {
    var sameCount = 0;
    // LOOP KEDUA
    for (var j = i - 1; j >= 0; j--) {
      if (arr[i] === arr[j]) {
        sameCount ++;
        sameNums.push(arr[i]);
      }
    }
    if (sameCount !== 0) {
        counts.push(sameCount);
    }
  }
  
  if (counts.length > 0) {
    var max = counts.reduce (
      function(a, b) {
        return Math.max(a, b);
      }
    )
  } else {
    return -1;
  }
  var maxIndex = counts.indexOf(max);
  modus = sameNums[maxIndex];
  if (max === arr.length - 1) {
    return -1;
  } else {
    return modus;
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1