// const fs = require("fs");
// fs.copyFileSync("file1.txt","file2.txt");


var superheroes = require("superheroes");
var mySuperheroName = superheroes.random();
console.log('Superhero name: ' + mySuperheroName);

var supervillains = require("supervillains");
var mySupervillainName = supervillains.random();
console.log('Supervillain name: ' +mySupervillainName);
