document.addEventListener("click", (e) => {
  const target = e.target;

  if (target.matches("[data-filter]")) {
    e.preventDefault();

    const category = target.dataset.filter;

    const filtered = products.filter(product =>
      product.category === category
    );

    renderProducts(filtered);
  }

  if (target.id === "show-all") {
    e.preventDefault();
    renderProducts(products);
  }
});