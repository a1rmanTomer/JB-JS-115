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

// fetch it from LS
let lsFav = JSON.parse(localStorage.getItem("favorites"));

// def the workable fav arr
let favorites = () => {
  if (lsFav && lsFav.length > 0) {
    return lsFav;
  } else {
    return [];
  }
};

// draw a jokes array
function drawJokes(arr) {
  for (let i = 0; i < arr.length; i++) {
    const joke = arr[i];
    const card = document.createElement("div");
    card.innerHTML = getJokeCardHTML(joke);

    GLOBAL.masterContainer.appendChild(card);
  }
}
