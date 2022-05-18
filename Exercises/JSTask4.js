'use strict';

let A = 100;
while (A <= 200) {
    console.log(`A = ${A}`);
    A++
}

let B = 100;
while (B <= 200) {
    if (B%2 == 0) {
        console.log(`B = ${B} (-)`);
        B++;
    } else {
        console.log(`B = ${B} (*)`);
        B++;
    }
}

let flag = true;
for (let i = 1; i < 11; i++) {
    let h = 1;
    flag = true;
    while (flag) {
        console.log(i);
        h++;
        if (h > 10) {
            flag = false;
        }
    }
}

for (let A2 = 100; A2 <= 200; A2++) {
    console.log(`A2 = ${A2}`);
}

for (let B2 = 100; B2 <= 200; B2++) {
    if (B2%2 == 0) {
        console.log(`B2 = ${B2} (-)`);
    } else {
        console.log(`B2 = ${B2} (*)`);
    }
}

let today = new Date();
let day = today.getDay();
switch (day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 6:
        console.log(`It's Saturday`);
        break;
    case 1:
        console.log(`It's Monday`);
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    default:
        console.log(`I don't understand, try again!`);
        break;
}