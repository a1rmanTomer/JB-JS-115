console.log("Script start");

// clear all data
function clearAll() {
  const container = document.getElementById("master-container");
  container.innerHTML = ``;
}

// event listeners for buttons:
const rentButton = document.getElementById("rentalCarsButton");
rentButton.addEventListener("click", function () {
  drawCars(carsForRental);
});

const saleButton = document.getElementById("saleCarsButton");
saleButton.addEventListener("click", function () {
  drawCars(carsForSale);
});

// all of 1.1-1.3 functions:
// get card element - cars
function getCarCard(element) {
  const name = element.Name;
  const horsePower = element.Horsepower;
  const mpg = element.Miles_per_Gallon;

  return `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="car-title">${name}</h5>
          <p class="car-HP"><strong>HP:</strong> ${horsePower}</p>
          <p class="car-mpg"><strong>MPG:</strong> ${mpg}</p>
        </div>
      </div>
    `;
}

// get card element - products
function getProductCard(element) {
  const name = element.title;
  const description = element.description;
  const price = element.price;
  const pic = element.thumbnail;

  return `
    <div class="card h-100">
      <img src="${pic}" class="card-img-top" alt="${name}">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
        <p class="card-text"><strong>Price:</strong> ${price}₪</p>
      </div>
    </div>
  `;
}

// draw the cars cards from given array
function drawCars(carArr) {
  clearAll();

  if (!Array.isArray(carArr)) return;
  if (carArr.length === 0) return;

  const container = document.getElementById("master-container");
  container.className = "container mt-2";

  let row;
  for (let i = 0; i < carArr.length; i++) {
    if (i % 4 == 0) {
      row = document.createElement("div");
      row.className = "row mt-2";
      container.appendChild(row);
    }

    const car = carArr[i];

    const card = document.createElement("div");
    card.className = "col-12 col-lg-3 mt-2";
    card.innerHTML = getCarCard(car);

    row.appendChild(card);
  }
}

// display both car arrays
function displayAllCars(arr1, arr2) {
  const newArray = [...arr1, ...arr2];

  drawCars(newArray);
}

console.log("Script end");
