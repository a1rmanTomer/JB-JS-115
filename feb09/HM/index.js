console.log("Script start");

function displayProducts() {
  const container = document.getElementById("product-container");
  container.className = "row mt-2";

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const card = document.createElement("div");
    card.className = "col-3 mt-2";

    card.innerHTML = `
        <div class="card h-100">
          <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text"><strong>Price:</strong> ${product.price}₪</p>
          </div>
        </div>
      `;

    container.appendChild(card);
  }
}

console.log("Script end");
