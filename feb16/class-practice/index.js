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

const allCarsButton = document.getElementById("allCarsButton");
allCarsButton.addEventListener("click", function () {
  displayAllCars(carsForSale, carsForRental);
});

const allProductsButton = document.getElementById("loadProductsButton");
allProductsButton.addEventListener("click", function () {
  displayProducts(products);
});

const productSearchBox = document.getElementById("productSearch");
productSearchBox.addEventListener("keyup", function () {
  const searchTerm = productSearchBox.value.toLowerCase();
  filterProducts(searchTerm);
});

const carSearchBox = document.getElementById("carSearch");
carSearchBox.addEventListener("keyup", function () {
  const searchTerm = carSearchBox.value.toLowerCase();
  filterCars(searchTerm);
});

// the form logic:
document
  .getElementById("newCarForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the form values
    const name = document.getElementById("carName").value;
    const horsepower = document.getElementById("carHorsepower").value;
    const mpg = document.getElementById("carMPG").value;
    const cylinders = document.getElementById("carCylinders").value;
    const displacement = document.getElementById("carDisplacement").value;
    const weight = document.getElementById("carWeight").value;
    const acceleration = document.getElementById("carAcceleration").value;
    const year = document.getElementById("carYear").value;
    const origin = document.getElementById("carOrigin").value;

    const newCar = {
      Name: name,
      Horsepower: horsepower,
      Miles_per_Gallon: mpg,
      Cylinders: cylinders,
      Displacement: displacement,
      Weight_in_lbs: weight,
      Acceleration: acceleration,
      Year: year,
      Origin: origin,
    };

    carsForSale.unshift(newCar);
    displayAllCars(carsForSale, carsForRental);
    this.reset();
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

  if (!Array.isArray(carArr)) throw new Error("products is not a valid array");

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

  if (!Array.isArray(newArray))
    throw new Error("products is not a valid array");
  if (newArray.length === 0) throw new Error("given array is empty");

  drawCars(newArray);
}

// draw the products:
function displayProducts(arr) {
  if (!Array.isArray(arr)) throw new Error("products is not a valid array");
  if (arr.length === 0) throw new Error("given array is empty");

  const container = document.getElementById("master-container");
  container.className = "container mt-2";

  let row;
  for (let i = 0; i < arr.length; i++) {
    if (i % 4 == 0) {
      row = document.createElement("div");
      row.className = "row mt-2";
      container.appendChild(row);
    }

    const product = arr[i];

    const card = document.createElement("div");
    card.className = "col-12 col-lg-3 mt-2";
    card.innerHTML = getProductCard(product);

    row.appendChild(card);
  }
}

//filter products by name
function filterProducts(searchTerm) {
  clearAll();

  const filteredProducts = [];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const productTitle = product.title.toLowerCase();

    if (productTitle.includes(searchTerm)) {
      filteredProducts.push(product);
    }
  }

  displayProducts(filteredProducts);
}

//filter cars by values
// get the value:

function loadPrevRadio() {
  const localStorageSelectedRadio = localStorage.getItem("checkedRadio");
  if (localStorageSelectedRadio) {
    const radioToCheck = document.getElementById(
      `${localStorageSelectedRadio}`
    );
    radioToCheck.checked = true;
  }
}
loadPrevRadio();

function getSelectedRadioValue(name) {
  const radios = document.querySelectorAll(`input[name="${name}"]`);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      // save to local storage the selected radio
      localStorage.setItem("checkedRadio", `${radios[i].value}`);
      return radios[i].value;
    }
  }
  return null;
}

// actual car filter
function filterCars(searchTerm) {
  clearAll();

  const filterCriteria = getSelectedRadioValue("inlineRadioOptions");
  joinedCars = [...carsForRental, ...carsForSale];

  if (!filterCriteria) {
    drawCars(joinedCars);
    return;
  }

  const filteredCars = joinedCars.filter((car) => {
    const carValue = car[filterCriteria];
    return (
      carValue &&
      String(carValue).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  drawCars(filteredCars);
}

console.log("Script end");
