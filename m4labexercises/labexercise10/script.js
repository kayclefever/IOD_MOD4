let products = [];
let filteredProducts = [];

// Fetch data from Fake Store API
axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    products = response.data;
    filteredProducts = products;
    populateCategoryDropdown();
    displayProducts(filteredProducts);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Populate the category dropdown
function populateCategoryDropdown() {
  const categories = [...new Set(products.map((product) => product.category))];
  const categorySelect = document.getElementById("categorySelect");

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

// Display products in Bootstrap cards
function displayProducts(products) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Clear existing products

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("col-md-4");

    productCard.innerHTML = `
      <div class="card">
        <img src="${product.image}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <p class="card-text"><strong>$${product.price}</strong></p>
        </div>
      </div>
    `;

    productList.appendChild(productCard);
  });
}

// Filter products based on search input and selected category
function filterProducts() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const selectedCategory = document.getElementById("categorySelect").value;

  filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  displayProducts(filteredProducts);
}
function sortProducts(sortBy) {
  filteredProducts.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
  });
  displayProducts(filteredProducts);
}
