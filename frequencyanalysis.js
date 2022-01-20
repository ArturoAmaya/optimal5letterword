const jsonData = require('./5letterwords.json');

const frequencies = {
    "a": 0,
    "b": 0,
    "c": 0,
    "d": 0,
    "e": 0,
    "f": 0,
    "g": 0,
    "h": 0, 
    "i": 0,
    "j": 0,
    "k": 0,
    "l": 0,
    "m": 0,
    "n": 0,
    "o": 0,
    "p": 0,
    "q": 0,
    "r": 0,
    "s": 0,
    "t": 0,
    "u": 0,
    "v": 0,
    "w": 0,
    "x": 0,
    "y": 0,
    "z": 0,
}
let runningtotal = 0;
console.log(jsonData);
for  (const word in jsonData) {
    console.log(jsonData[word]);
    let wordword = jsonData[word];
    for (const letter in wordword){
        //console.log(`looking at letter ${letter}`);
        let char = wordword.charAt(letter);
        console.log(char);
        frequencies[char] = frequencies[char] + 1;
        runningtotal++;
    }
}

console.log(frequencies);

// relative frequencies!
const relativefrequencies = frequencies;

for (const letter in relativefrequencies){
    relativefrequencies[letter] = relativefrequencies[letter]/runningtotal * 100;
}

console.log(relativefrequencies);
