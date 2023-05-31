'use strict';

/*  const numberOfFilms = +prompt('How much movie you are already watched?', ''); це модальне вілкно з запитанням

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
 };

 const a = prompt('What is the last movie did you watch?', ''),
        b = prompt('How many stars you can give to this movie?', ''),
        c = prompt('What is the last movie did you watch?', ''),
        d = prompt('How many stars you can give to this movie?', '');


personalMovieDB.movies[a] = b; в дерективу мовіДБ а саме в мові буде записано відповіді з а по с
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); 
*/



// -----------------------

/* if (4 == 4) {
    console.log('OK!');
} else {
    console.log('Error');
}

const num = 50;
if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too mush');
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error'); 
// якщо число 50 тоді ок якщо ні тоді помилка (тернарний оператор) */

/* const num = 49;
switch (num) {
    case 49: 
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('OK!');
        break;
    default:
        console.log('Not this time!');
        break;
} */

/* const hamburger = 5;
const fries = 0;

if (hamburger && fries) {
    console.log('I am not ungry');
} */

// --------------


/* const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries)


console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'test for test') */
// якщо перед && буде невірне значення false тоді дії дальше не будуть та в консоль виведе останне значення що було перед фолс.

/* 
if (hamburger === 3 && cola === 1 && fries) {
    console.log('I am not ungry');
} else {
        console.log('we will go to other one cafe')
} */



// --------------

/* const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets){


console.log('We are so happy');
} else {
        console.log('we will go to other one cafe')
} */



/* if (hamburger || cola || fries) {
//    тру         фолс     фалс оператор || зупиниться на hamburger і виведе в консоль тру або we are so happy
// якщо всі значення не правда то оператор || виведе останнє значиння де була неправда
    console.log('We are so happy');
} else {
        console.log('we will go to other one cafe')
} */


/* 
let lohnreport, alexReport, samReport, mariaReport = 'done';

console.log( lohnreport || alexReport || samReport || mariaReport); */

// ------------


let num = 50;

while (num < 55) {
	console.log(num); 
	num++;
}
