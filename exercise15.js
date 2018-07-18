function changeVocals (str) {
    var lowerVoc = "abefijopuv";
    var upperVoc = "ABEFIJOPUV";
    var setelahDirubah = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "A" || str[i] === "a" || str[i] === "I" || str[i] === "i" || str[i] === "U" || str[i] === "u" || str[i] === "E" || str[i] === "e" || str[i] === "O" || str[i] === "o") {
            if (str[i] === str[i].toUpperCase()) {
                var j = upperVoc.indexOf(str[i]);
                setelahDirubah += upperVoc[j+1];
            } else if (str[i] === str[i].toLowerCase()) {
                var k = lowerVoc.indexOf(str[i]);
                setelahDirubah += lowerVoc[k+1];
            }
        } else {
            setelahDirubah += str[i];
        }
    }
    return setelahDirubah;
}

function reverseWord (str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function setLowerUpperCase (str) {
    var letter = [];
    for (var i = 0; i < str.length; i++) {
        letter.push(str[i]);
    }
    for (var j = 0; j < letter.length; j++) {
        if (letter[j] === letter[j].toUpperCase()) {
            letter[j] = letter[j].toLowerCase();
        } else if (letter[j] === letter[j].toLowerCase()) {
            letter[j] = letter[j].toUpperCase();
        }
    }
    return letter.join("");
}

function removeSpaces (str) {
    var password = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            password += str[i];
        }
    }
    return password;
}

function passwordGenerator (name) {
    if (name.length > 4) {
        var changed = changeVocals(name);
        var reversed = reverseWord(changed);
        var set = setLowerUpperCase(reversed);
        return removeSpaces(set);
    } else {
        return 'Minimal karakter yang diinputkan adalah 5 karakter';
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'