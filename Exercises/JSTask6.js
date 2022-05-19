'use strict';

let darthvader = {
    allegiance: "Empire", weapon: "Lightsabre", sith: true
};
console.log(darthvader);

console.log("Darth Vader's allegiance is to the "+darthvader.allegiance);
console.log("Darth Vader's weapon of choice is a "+darthvader.weapon);
console.log("Darth Vader is a Sith? "+darthvader.sith);
console.log("Darth Vader is a Jedi? "+!darthvader.sith);


let myArray = ["hello", "everyone"];
console.log(myArray.length);

myArray.push("we", "are", "many");
console.log(myArray.length);
myArray.shift();

for (let values of myArray) {
    console.log(values);
}