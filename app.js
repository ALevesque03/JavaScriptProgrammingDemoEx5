/*
    Author: Anthony Levesque
    Topic: Demo 5 Control Flow and Loops
    Date: January 31, 2022
*/

let a = 10;
let b = 15;
let c  = 5;
let x = 5;
//let y = 5;
let y = '5';
let z = 6;

console.log(x);
console.log(y);

if(x == y){
    console.log(`x is equal to y`);
} else{
    console.log(`x is not equal to y`);
}

if(x === y){
    console.log(`x is equal to y`);
} else{
    console.log(`x is not equal to y`);
}

let s = '45.7';
let t = 45.7;

if(s == t){
    console.log(`s is equal to t`);
} else{
    console.log(`s is not equal to t`);
}

if(s === t){
    console.log(`s is equal to t`);
} else{
    console.log(`s is not equal to t`);
}



if (a > 15){
    console.log(`a is greater than 15`);
} else{
    console.log(`a is less than or equal to 15`);
}

if (x == y || a > b){
    console.log('True');
}else{
    console.log('False');
}

if (a > b || x == y){
    console.log('True');
}else{
    console.log('False');
}

if (x == y && a >b){
    console.log('True');
}else{
    console.log('False');
}

let dayOfWeek;
let today = new Date().getDay();

switch(today){
    case 0:
        dayOfWeek = 'Sunday';
        break;
    case 1:
        dayOfWeek = 'Monday';
        break;
    case 2:
        dayOfWeek = 'Tuesday';
        break;
    case 3:
        dayOfWeek = 'Wenesday';
        break;
    case 4:
        dayOfWeek = 'Thursday';
        break;
    case 5:
        dayOfWeek = 'Friday';
        break;
    case 6:
        dayOfWeek = 'Saturday';
        break;
    default:
        dayOfWeek = 'NA';
        break;
}

console.log(dayOfWeek);

console.log('~~~~~~~~~~~~~~');

for(let i = 0; i <10; i++){
    console.log(i);
}

console.log('~~~~~~~~~~~~~~');

let j = 5;
while(j<10){
    console.log(j);
    j++;
}