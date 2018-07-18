function sorting(arrNumber) {
  if (arrNumber.length > 0) {
    var largest = 0;
    for (var i = 0; i < arrNumber.length; i++) {
        if (largest === 0) {
            largest = arrNumber[i];
        } else {
            if (arrNumber[i] > largest) {
                largest = arrNumber[i];
            }
        }
    }

    var counter = 0;
    for (var j = 0; j < arrNumber.length; j++) {
        if (arrNumber[j] === largest) {
            counter ++;
        }
    }
    var result = [largest, counter];
    return result;
  } else {
      return [];
  }
}

function getTotal(arrNumber) {
  if (arrNumber.length > 0) {
    return "angka paling besar adalah " + arrNumber[0] + " dan jumlah kemunculan sebanyak " + arrNumber[1] + " kali";
  } else {
    return "";
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''