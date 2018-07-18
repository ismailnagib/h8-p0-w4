function kaliTerusRekursif(angka) {
    var str = String(angka);
    var container = 1;
    if (str.length > 1) {
        for (var i = 0; i < str.length; i++) {
            container *= Number(str[i]);
        }
        return kaliTerusRekursif(container);
    } else {
        return Number(str);
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6