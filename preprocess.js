const jsonData = require('./words_dictionary.json');
//console.log(jsonData);
const fiveletterdata = [];
const fs = require('fs');

for (const property in jsonData) {
    //console.log(property);
    // Pick out only the 5-letter ones
    if (property.length == 5){
        //console.log (property);
        fiveletterdata.push(property);
    }
}

const myjsoncontent = JSON.stringify(fiveletterdata);
//console.log(myjsonsontent);


try {
  fs.writeFileSync('./5letterwords.json', myjsoncontent);
  //file written successfully
} catch (err) {
  console.error(err);
}