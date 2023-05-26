 const numberOfFilms = +prompt('How much movie you are already watched?', '');

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


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);