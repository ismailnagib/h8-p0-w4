function ubahHuruf(kata) {
    var alfabet = "abcdefghijklmnopqrstuvwxyza";
    var setelahDirubah = "";
    for (var i = 0; i < kata.length; i++) {
        var j = alfabet.indexOf(kata[i]);
        setelahDirubah += alfabet[j+1];
    }
    return setelahDirubah;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu