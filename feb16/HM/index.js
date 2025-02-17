document.addEventListener("DOMContentLoaded", function () {
  init();
});

// main runtime
function init() {
  drawJokes(jokes);
}

// global key defs
const GLOBAL = {
  masterContainer: document.getElementById("master-container"),
};

let favs = [];
if (localStorage?.getItem("favJokes")) {
  favs = JSON.parse(localStorage.getItem("favJokes"));
} else {
}

function clearAll() {
  GLOBAL.masterContainer.innerHTML = "";
}

function drawJokes(arr) {
  for (let i = 0; i < arr.length; i++) {
    const joke = arr[i];
    const card = document.createElement("div");
    card.innerHTML = getJokeCardHTML(joke);

    const favButton = card.querySelector(`#fav-${joke.id}`);
    favButton.addEventListener("click", function () {
      favs.push(card);
      localStorage.setItem("favJokes", JSON.stringify(favs));

      favButton.style.color = "darkred";
    });

    const delButton = card.querySelector(`#del-${joke.id}`);
    delButton.addEventListener("click", function () {
      card.remove();
    });

    GLOBAL.masterContainer.appendChild(card);
  }
}
