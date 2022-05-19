'use strict';

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);

console.log(strictA != strictB);
console.log(strictA !== strictB);


let age = 27;
if (age<18&&age>65) {
    if (age<18) {
        console.log(age+": underage!")
    } else {
        console.log(age+": over desired range!")
    }
} else {
    console.log(age+": within desired range!")
}

let age2 = (age > 50 ? "Over 50" : "Under 50");

console.log(age2);