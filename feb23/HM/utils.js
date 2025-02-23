function addToFavorites(element) {
  favs = JSON.parse(localStorage?.getItem("favorites")) || [];

  let isDuplicate = false;

  favs.forEach((fav) => {
    const id = fav.imdbID;
    if (id === element.imdbID) {
      isDuplicate = true;
    }
  });

  if (!isDuplicate) {
    favs.push(element);
    localStorage.setItem("favorites", JSON.stringify(favs));
    console.log(`Item [${element.imdbID}] was added to favorites`);

    Swal.fire({
      title: "Success!",
      text: "Added successfully to favorites.",
      icon: "success",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "This is already favored!",
    });
  }
}

function isInFavorites(element) {
  const localFavLs = JSON.parse(localStorage?.getItem("favorites"));
  const isFav = false;
  localFavLs.forEach((lsFav) => {
    if (lsFav === element) {
      isFav = true;
    }
  });
  return isFav;
}
