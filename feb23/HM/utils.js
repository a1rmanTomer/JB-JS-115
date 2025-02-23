function addToFavorites(element) {
  favs = JSON.parse(localStorage?.getItem("favorites")) || [];

  if (!favs.includes(element)) {
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
