const movieFactory = (movie) => {
  return `
            <div class="movie">
            <h3 class="title">Title: ${movie.title}</h3>
            <h4 class="releaseDate">Release date: ${movie.releaseDate}</h4>
            <h4 class="releaseDate">Release date: ${movie.releaseDate}</h4>
            <h4 class="releaseDate">Release date: ${movie.id}</h4>
            </div>
            `;
};

const renderMovies = (movies) => {
  const container = document.querySelector("#movie-container");
  movies.forEach((movie) => {
    const movieAsHTML = movieFactory(movie);
    container.innerHTML += movieAsHTML;
  });
};
