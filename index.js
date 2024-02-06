const beyonceHash = {
  hits: [
    { title: 'Bootylicious', group: true, group_name: 'destinysChild', hair: ['straight', 'blonde', 'pink tips'], signature_look: 'fedora with yellow feather', video_theme: 'dressing room dance', best_line: 'Move your body up and down, make your booty touch the ground', fierceness: 7, formation: false, dancers: 20
    },
    { title: 'Single Ladies', group: false, group_name: 'none', hair: ['honey brown', 'half up, half down'], signature_look: 'black bodysuit and legs for days', video_theme: 'single ladies dance', best_line: 'if you like it then you should\'ve put a ring on it', fierceness: 10, formation: true, dancers: 2 
    },
    { title: 'Let Me Upgrade You', group: false, group_name: 'none', hair: ['beaded bun', 'wet hair', 'honey brown', 'waves'], signature_look: 'flapper dress and bodysuit', video_theme: 'decadence, water, gold beads and pearls', best_line: 'I could do for you what Martin did for the people', fierceness: 10, formation: true, dancers: 5 
    },
    { title: 'Sorry', group: false, group_name: 'none', hair: ['braids', 'bun', 'blonde', 'waves', 'bob'], signature_look: 'braided crown with gold bikini top', video_theme: 'party bus and Serena Williams in bodysuit', best_line: 'Boi bye', fierceness: 10, formation: false, dancers: 1 
    },
    { title: 'Say My Name', group: true, group_name: 'destinysChild', hair: ['blonde', 'curly', 'braid', 'pony tail'], signature_look: 'none', video_theme: 'color blocked scenes with group', best_line: 'say my name, say my name', fierceness: 7, formation: true, dancers: 6 
    },
    { title: 'Feeling Myself', group: true, group_name: 'Nicki Minaj featuring Beyonce', hair: ['blonde', 'waves'], signature_look: 'sporty bodysuit', video_theme: 'Coachella music festival', best_line: 'Im felling myself', fierceness: 9, formation: false, dancers: 0 
    }
  ],
  movies: [
    { title: 'Austin Power\'s Goldmember', year: 2002, rating: 5},
    { title: 'Dreamgirls', year: 2006, rating: 7},
    { title: 'Obsessed', year: 2009, rating: 6},
    { title: 'Cadillac Records', year: 2008, rating: 8},
    { title: 'Life is But a Dream', year: 2013, rating: 6},
    { title: 'The Pink Panther', year: 2006, rating: 4},
    { title: 'Epic', year: 2013, rating: 7},
    { title: 'The Fighting Temptations', year: 2003, rating: 5}
  ]
};

// 1. Print all the songs
function printAllSongs() {
  beyonceHash.hits.forEach( hit =>{console.log(hit)});
}

// 2. Print all the movies
function printAllMovies() {
  beyonceHash.movies.forEach(movie => {console.log(movie)});
}

// 3. Return an array of all Beyonce's hit song titles
function hitSongTitles() {
  const songs = []
  beyonceHash.hits.forEach(hit => songs.push(hit.title));
    return songs;
}

// 4. Return an array of all Beyonce's fierceness ratings
//TODO: refactor to map?
function allFiercenessRatings() {
  const returnRatings = []
  beyonceHash.hits.forEach(hit => returnRatings.push(hit.fierceness));
  return returnRatings;
}

// 5. Return all the songs where Beyonce is wearing a bodysuit or a bodysuit is part of the video theme
function songsWithBodySuits() {
  const bodystring = 'bodysuit';
  const returnSongs = [];

  beyonceHash.hits.forEach(song =>{
    if(song.signature_look.toLowerCase().includes(bodystring) || song.video_theme.toLowerCase().includes(bodystring) ){
      returnSongs.push(song);
    }
  });

  return returnSongs;
}

// 6. Return an array with all of the songs where Beyonce's fierceness is greater than or equal to a given number
//TODO: refactor to filter?
function getSongsByFiercenessGTE(minFierceness) {
  const returnSongs = [];

  beyonceHash.hits.forEach(hit =>{
    if(hit.fierceness >= minFierceness){
      returnSongs.push(song);
    }
  });

  return returnSongs;
}

// 7. Return an array with all of the movies Beyonce made after or during a given year
//TODO: refactor to filter?
function getMoviesByDateGTE(minYear) {
  const recentMovies = [];

  beyonceHash.movies.forEach(movie =>{
    if(movie.year >= minYear){
      recentMovies.push(movie);
    }
  });

  return recentMovies;
}

// 8. Return all hit songs where Beyonce was in a group
function groupHits() {
  return beyonceHash.hits.filter(hit => hit.group)
}

// 9. Return a hit song where Beyonce's hair is blonde
function findBlondeHit() {
  return beyonceHash.hit.find(hit => hit.hair.find(hairstyle => hairstyle.toLowerCase() == 'blonde'))
}
//console.log('\nFind Blonde:' + findBlondeHit());

// 10. Return the hit song "Sorry"
function sorry() {
  return getSong('Sorry');
}
/*
console.log('\n Get Sorry:');
console.log(sorry());
*/
// 11. Return a given song
function getSong(songName) {
  return beyonceHash.hits.find(hit => hit.title.toLowerCase() === songName.toLowerCase());
}

// 12. Return all hit songs where Beyonce's fierceness rating is 10
function fiercestHits() {
  //assume scale of 1-10
  return getSongsByFiercenessGTE(10);
}

// 13. Return the sum of Beyonce's fierceness value for all of her hit songs
function hitFiercenessSum() {
  return allFiercenessRatings().reduce((accumulator, rating) => accumulator + rating);
}

//console.log(hitFiercenessSum());

// 14. Return the average fierceness value for all Beyonce's hit songs
function hitFiercenessAverage() {
  return hitFiercenessSum() / allFiercenessRatings().length;
}
//console.log(hitFiercenessAverage());

// 15. Return the sum of Beyonce's rating value for all of her movies
function ratingSum() {
  //prettier way of doing this?
  return beyonceHash.movies.map(movie => movie.rating).reduce((accumulator, rating) => accumulator + rating);
}
//console.log(ratingSum());

// 16. Return the average rating value for all of her movies
function ratingAverage() {
  //assumes each movie alwyas has a rating
  return ratingSum() / beyonceHash.movies.length;
}
//console.log(ratingAverage());

// 17. Return the sum of the total number of dancers in all of the hit song videos
function hitDancerSum() {
  return beyonceHash.hits.map(hit => hit.dancers).reduce((accumulator, dancers) => accumulator + dancers);
}
//console.log(hitDancerSum());

// 18. Return an array of Beyonce's hairstyles without repeats
//TODO: all good up to flat(), filter returns empty array... something is wrong with my predicate
function uniqueHairstyles() {
  return beyonceHash.hits.map(hit => hit.hair).flat().filter((hairStyle, currentIndex, hairStyles) => {
    hairStyles.indexOf(hairStyle) === currentIndex});
}
console.log(uniqueHairstyles())

// 19. Return an object where the properties are song names and the value is an object which contains that song's fierceness and the average fierceness for all songs
//an array is technically an object, right?
function songFiercenessByName() {
  const songs = new Map();
  const fiercenessAvg = hitFiercenessAverage();
  beyonceHash.hits.forEach(hit => {
    songs.set(hit.title, [hit.fierceness, fiercenessAvg]);
  });

  return songs;
}
console.log(songFiercenessByName());

// 20. Return an object where the properties are movie names and the value is an object which contains that movie's rating and the average rating for all movies

function movieRatingsByName() {
  const movieRatings = new Map();
  const avgRating = ratingAverage();
  beyonceHash.movies.forEach(movie => movieRatings.set(movie.title, [movie.rating, avgRating]));
  return movieRatings;
}
console.log(movieRatingsByName());
// 21. Return an object with Beyonce's hairstyles as the keys and a tally of each hairstyle, eg. `{ "blonde": 3, ... }`
function hairStyleFrequency() {
}


//Run tests
//console.log('Songs:')
//printAllSongs();
//console.log('\nMovies:')
//printAllMovies();
//console.log('\nSong Titles Array:')
//console.log(hitSongTitles())

