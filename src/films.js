// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((item) => item.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((item) => item.director === director);
  // console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesDirector = array.filter((item) => item.director === director);
  const result = moviesDirector.reduce(
    (sum, movie) => sum + movie.score / moviesDirector.length,
    0
  );
  // console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  const result = array
    .map((item) => item.title)
    .sort()
    .slice(0, 20);
  // console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = [];
  result = [...array].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  // console.log('EXERCISE 5 ->', result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category

function moviesAverageByCategory(array, category) {
  const moviesCategory = array.filter((item) => item.genre.includes(category));
  // console.log("EXERCICE 6 moviesCategory ->", moviesCategory  );
  const result = moviesCategory.reduce(
    (sum, movie) => sum + movie.score / moviesCategory.length,
    0
  );
  // console.log("EXERCICE 6 ->", Math.floor(result * 100) / 100  );
  return Math.round(result * 100) / 100;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  // retorna un array amb aquestes pel·lícules però amb la durada en minuts!.
  const result = array.map((item) => ({
    ...item,
    duration: !parseInt(item.duration.split(' ')[1])
      ? parseInt(item.duration.split(' ')[0]) * 60
      : parseInt(item.duration.split(' ')[0]) * 60 +
        parseInt(item.duration.split(' ')[1])
  }));
  // console.log('EXERCICE 7 ->', result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const result = array.map(movie => movie.year === year  && movie).filter(movie => movie !== false);

  const average = result.reduce(
    (sum, movie) => sum + movie.score / result.length,
    0
  );
  const bestMovie = result.filter(movie => movie.score > average)
  //  console.log('EXERCICE 8 ->', result, bestMovie);
  return bestMovie;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
