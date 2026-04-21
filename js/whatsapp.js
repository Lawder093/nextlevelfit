function sendWhatsApp(productName) {
  const phone = "5215512345678"; // reemplaza por tu número real

  const message =
    `Hola, me interesa el producto ${productName} de Next Level Fit.`;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}