function hitungHuruf(kata) {
    var arrKata = kata.split(" ");
    var sameLetsCount = [];
    var lets = [];
    
    for (var h = 0; h < arrKata.length; h++) {
        var sameLets = [];
        var k = 0;
        for (var i = arrKata[h].length - 1; i > 0; i--) {
            for (var j = i - 1; j >= 0; j--) {
                if (arrKata[h][i] === arrKata[h][j]) {
                    if (sameLets.length === 0) {
                        sameLets.push(arrKata[h][i]);
                    } else if (arrKata[h][i] !== sameLets[k]) {
                        sameLets.push(arrKata[h][i]);
                        k++;
                    }
                }
            }
        }
        if (sameLets.length > 0) {
            sameLetsCount.push(sameLets.length);
            lets.push(arrKata[h]);
        }
    }

    if (sameLetsCount.length > 0) {
        var max = sameLetsCount.reduce (
          function(a, b) {
            return Math.max(a, b);
          }
        )
    } else {
        return -1;
    }
    var maxIndex = sameLetsCount.indexOf(max);
    var luckyLet = lets[maxIndex];
    return luckyLet;
}
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau