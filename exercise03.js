function cariMedian(arr) {
  var i = arr.length;
  if (i % 2 === 1) {
      return arr[(i-1)/2];
  } else {
      return (arr[i/2] + arr[i/2-1])/2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5