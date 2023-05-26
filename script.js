"use strict";

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

const num = 20;
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
}