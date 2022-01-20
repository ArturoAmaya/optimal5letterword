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
//console.log(jsonData);
for  (const word in jsonData) {
    //console.log(jsonData[word]);
    let wordword = jsonData[word];
    for (const letter in wordword){
        //console.log(`looking at letter ${letter}`);
        let char = wordword.charAt(letter);
        //console.log(char);
        frequencies[char] = frequencies[char] + 1;
        runningtotal++;
    }
}

//console.log(frequencies);

// relative frequencies!
const relativefrequencies = frequencies;

for (const letter in relativefrequencies){
    relativefrequencies[letter] = relativefrequencies[letter]/runningtotal * 100;
}

//console.log(relativefrequencies);

// Now get the top 10
let highestfreq = [];
let relativefrequencies2 = relativefrequencies;
let currhighest = 0;
let highestletter;

for (let i = 0; i<10; i++){
    // init to first item
    highestletter = Object.keys(relativefrequencies2)[0]
    currhighest = relativefrequencies2[highestletter];

    //console.log(currhighest);
    //console.log(highestletter);
    for (const letter in relativefrequencies2){
        //console.log(relativefrequencies2[letter]);
        if (currhighest < relativefrequencies2[letter]){
            //console.log("new highest");
            highestletter = letter;
            currhighest = relativefrequencies2[letter];
        }
    }
    // add to new array and remove that letter from the object
    highestfreq[highestletter]=currhighest;
    delete relativefrequencies2[highestletter];

}

console.log(highestfreq);