let products = [];

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
});

async function loadProducts() {
  try {
    const response = await fetch("products.json");

    if (!response.ok) {
      throw new Error("No se pudo cargar products.json");
    }

    products = await response.json();
    renderProducts(products);

  } catch (error) {
    document.getElementById("catalog").innerHTML =
      "<p>Error cargando productos.</p>";

    console.error(error);
  }
}

function renderProducts(list) {
  const catalog = document.getElementById("catalog");

  if (!list.length) {
    catalog.innerHTML = "<p>No hay productos disponibles.</p>";
    return;
  }

  catalog.innerHTML = list.map(product => `
    <article class="card">
      <img src="${product.image}" alt="${product.name}">
      <div class="card-body">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">$${product.price}</p>
        <button onclick="sendWhatsApp('${product.name}')">
          Comprar por WhatsApp
        </button>
      </div>
    </article>
  `).join("");
}