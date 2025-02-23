document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  drawCards(movies);
}

const GLOBALS = {
  masterContainer: document.getElementById("master-container"),
};

function drawCards(arr) {
  const container = GLOBALS.masterContainer;

  for (let i = 0; i < arr.length; i++) {
    const movie = arr[i];
    const card = document.createElement("div");
    card.innerHTML = getMovieCardHTML(movie);

    // favorite button
    const favButton = card.querySelector(`#fav-${movie.imdbID}`);
    favButton.addEventListener("click", function () {
      addToFavorites(movie);
    });

    container.appendChild(card);
  }
}
