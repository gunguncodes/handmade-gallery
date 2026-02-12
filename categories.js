// Get category type from URL
const params = new URLSearchParams(window.location.search);
const categoryType = params.get("type");

// Set title
const title = document.getElementById("categoryTitle");

if (categoryType) {
  title.textContent = categoryType.toUpperCase() + " COLLECTION";
  title.style.color = "#533b2f";
  title.style.fontFamily = "Montserrat","sans-serif";
} else {
  title.textContent = "Collection";
}

// Dummy data
const productsData = {
  haldi: [
    { id: 1, name: "Classic Haldi Tray", price: 249, img: "haldi1.jpg" },
    { id: 2, name: "Haldi platter", price: 399, img: "download (4).jpg" },
    { id: 3, name: "Premium Haldi Decor", price: 399, img: "Haldi Platter (2).jpg" },
    { id: 4, name: "Premium Haldi Decor", price: 399, img: "Haldi platter.jpg" },
    { id: 5, name: "Premium Haldi Decor", price: 399, img: "Haldi Ceremony Essentials Platter__Exquisite 19-inch wooden platter, carefully crafted to make your haldi ceremony unforgettable!___Shringar Samaan____- 2 Steel Bowls for haldi application_- 2 Haldi Application Bru.jpg" },
    { id: 6, name: "Premium Haldi Decor", price: 399, img: "Haldi program decoration idea___.jpg" },
    { id: 7, name: "Premium Haldi Decor", price: 399, img: "haldi2.O.jpg" },
    { id: 8, name: "Premium Haldi Decor", price: 399, img: "💛 (1).jpg" },
    { id: 9, name: "Premium Haldi Decor", price: 399, img: "💛.jpg" },
    { id: 10, name: "Premium Haldi Decor", price: 399, img: "download.jpg" },
  ],
  birthday: [
    { id: 11, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 12, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 13, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 14, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 15, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 16, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 17, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 18, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 19, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 20, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
  ],
  mehendi: [
    { id: 21, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 22, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 23, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 24, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 25, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 26, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 27, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 28, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 29, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
    { id: 30, name: "Mehendi Decor Tray", price: 2799, img: "mehendi.jpg" },
  ]
};

const container = document.querySelector(".products");

if (productsData[categoryType]) {

  productsData[categoryType].forEach(product => {

    container.innerHTML += `
      <div class="product-card">
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
      </div>
    `;

  });

} else {
  container.innerHTML = "<p>No products found.</p>";
}
