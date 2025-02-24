document.addEventListener("DOMContentLoaded", function () {
  init();
});

// main runtime
function init() {
  if (typeof jokes !== "undefined") {
    drawJokes(jokes);
  } else {
    // the favorites page loop
    let favPageArr = JSON.parse(localStorage.getItem("favJokes"));

    if (favPageArr.length > 0) {
      drawJokes(favPageArr);
    } else {
      return;
    }
  }
}

// global key defs
const GLOBAL = {
  masterContainer: document.getElementById("master-container"),
};

let favs = [];
if (localStorage?.getItem("favJokes")) {
  favs = JSON.parse(localStorage.getItem("favJokes"));
}

function clearAll() {
  GLOBAL.masterContainer.innerHTML = "";
}

function drawJokes(arr) {
  clearAll();

  if (!Array.isArray(arr)) return;

  for (let i = 0; i < arr.length; i++) {
    const joke = arr[i];
    const card = document.createElement("div");
    card.innerHTML = getJokeCardHTML(joke);

    const favButton = card.querySelector(`#fav-${joke.id}`);
    favButton.addEventListener("click", function () {
      let isDuplicate = false;
      favs.forEach((item) => {
        if (item.id === joke.id) {
          isDuplicate = true;
        }
      });

      if (isDuplicate) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This joke is already in the favorites!",
        });
      } else {
        favs.push(joke);
        localStorage.setItem("favJokes", JSON.stringify(favs));

        const newArr = arr;
        newArr.splice(i, 1);
        // drawJokes(newArr);
        Swal.fire({
          title: "Added to favorites!",
          icon: "success",
        });
      }
    });

    const delButton = card.querySelector(`#del-${joke.id}`);
    delButton.addEventListener("click", function () {
      arr.splice(i, 1);
      drawJokes(arr);
      const strFavs = JSON.stringify(localStorage.getItem("favJokes"));
      if (strFavs.includes(`${joke.id}`)) {
        localStorage.setItem("favJokes", JSON.stringify(arr));
      }
      Swal.fire({
        title: "Joke removed successfully!",
        icon: "success",
      });
    });

    GLOBAL.masterContainer.appendChild(card);
  }
}
