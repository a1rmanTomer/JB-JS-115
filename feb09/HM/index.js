console.log("Script start");

// clear all
function clearAll() {
  const container = document.getElementById("master-container");

  container.innerHTML = ``;
}

// 1.1
function displayRentalCars() {
  const container = document.getElementById("master-container");
  container.className = "container mt-2";

  let row;

  for (let i = 0; i < carsForRental.length; i++) {
    if (i % 4 === 0) {
      row = document.createElement("div");
      row.className = "row mt-2";
      container.appendChild(row);
    }

    const car = carsForRental[i];
    const card = document.createElement("div");
    card.className = "col-12 col-lg-3 mt-2";

    card.innerHTML = `
                                    <div class="card h-100">
                                        <div class="card-body">
                                                <h5 class="car-title">${car.Name}</h5>
                                                <p class="car-HP"><strong>HP:</strong> ${car.Horsepower}</p>
                                                <p class="car-mpg"><strong>MPG:</strong> ${car.Miles_per_Gallon}</p>
                                        </div>
                                </div>
                            `;

    row.appendChild(card);
  }
}
// 1.2
function displayCarsForSale() {
  const container = document.getElementById("master-container");
  container.className = "container mt-2";

  let row;

  for (let i = 0; i < carsForSale.length; i++) {
    if (i % 4 === 0) {
      row = document.createElement("div");
      row.className = "row mt-2";
      container.appendChild(row);
    }

    const car = carsForSale[i];
    const card = document.createElement("div");
    card.className = "col-12 col-lg-3 mt-2";

    card.innerHTML = `
                                    <div class="card h-100">
                                        <div class="card-body">
                                                <h5 class="car-title">${car.Name}</h5>
                                                <p class="car-HP"><strong>HP:</strong> ${car.Horsepower}</p>
                                                <p class="car-mpg"><strong>MPG:</strong> ${car.Miles_per_Gallon}</p>
                                        </div>
                                </div>
                            `;

    row.appendChild(card);
  }
}

// 1.3
function displayAllCars() {
  displayRentalCars();
  displayCarsForSale();
}

// 4
function displayProducts() {
  const container = document.getElementById("master-container");
  container.className = "container mt-2";

  let row;

  for (let i = 0; i < products.length; i++) {
    if (i % 4 === 0) {
      row = document.createElement("div");
      row.className = "row mt-2";
      container.appendChild(row);
    }

    const product = products[i];
    const card = document.createElement("div");
    card.className = "col-12 col-lg-3 mt-2";

    card.innerHTML = `
                                <div class="card h-100">
                                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
                                        <div class="card-body">
                                                <h5 class="card-title">[${product.id}] ${product.title}</h5>
                                                <p class="card-text">${product.description}</p>
                                                <p class="card-text"><strong>Price:</strong> ${product.price}₪</p>
                                        </div>
                                </div>
                        `;

    row.appendChild(card);
  }
}

console.log("Script end");
