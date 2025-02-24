document.addEventListener("DOMContentLoaded", function () {
  init();
});

function init() {
  if (localStorage?.getItem("drawArray")) {
    movies = JSON.parse(localStorage.getItem("drawArray"));
  }
  drawCards(movies);
}

const GLOBALS = {
  masterContainer: document.getElementById("master-container"),
};

function drawCards(arr) {
  clearCards();

  const container = GLOBALS.masterContainer;

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    const card = document.createElement("div");
    card.innerHTML = getCardHTML(elem);

    // favorite button
    const favButton = card.querySelector(`#fav-${elem.imdbID}`);
    favButton.addEventListener("click", function () {
      addToFavorites(elem);
    });

    // remove favorite button
    const favRemoveButton = card.querySelector(`#rem-${elem.imdbID}`);
    favRemoveButton.addEventListener("click", function () {
      removeFromFavorites(elem);
    });

    // delete button
    const delButton = card.querySelector(`#del-${elem.imdbID}`);
    delButton.addEventListener("click", function () {
      deleteCard(i);
    });

    container.appendChild(card);
  }
}
