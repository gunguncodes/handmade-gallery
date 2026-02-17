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
    { id: 5, name: "Premium Haldi Decor", price: 399, img: "download (4).jpg" },
    { id: 6, name: "Premium Haldi Decor", price: 399, img: "Haldi program decoration idea___.jpg" },
    { id: 7, name: "Premium Haldi Decor", price: 399, img: "haldi2.O.jpg" },
    { id: 8, name: "Premium Haldi Decor", price: 399, img: "💛 (1).jpg" },
    { id: 9, name: "Premium Haldi Decor", price: 399, img: "💛.jpg" },
    { id: 10, name: "Premium Haldi Decor", price: 399, img: "download.jpg" },
  ],
  birthday: [
    { id: 11, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
    { id: 12, name: "Birthday Bouquet", price: 499, img: "download (5).jpg" },
    { id: 13, name: "Birthday Bouquet", price: 499, img: "download (6).jpg" },
    { id: 14, name: "Birthday Surprise Box", price: 499, img: "download (8).jpg" },
    { id: 15, name: "Birthday Hamper", price: 499, img: "food.jpg" },
    { id: 16, name: "Birthday Surprise Box", price: 499, img: "Hamper.jpg" },
    { id: 17, name: "Birthday Surprise Box", price: 499, img: "download (8).jpg" },
    { id: 18, name: "Birthday Surprise Box", price: 499, img: "Nuts Hamper.jpg" },
    { id: 19, name: "Birthday Hamper for Baby", price: 499, img: "baby.jpg" },
    { id: 20, name: "Birthday Surprise Box", price: 499, img: "hbd1.jpg" },
  ],
  mehendi: [
    { id: 21, name: "Mehendi Decor Tray", price: 299, img: "mehendi.jpg" },
    { id: 22, name: "Mehendi Decor Tray", price: 399, img: "download (1).jpg" },
    { id: 23, name: "Mehendi Decor Tray", price: 299, img: "💚✨.jpg" },
    { id: 24, name: "Mehendi Decor Tray", price: 299, img: "download (2).jpg" },
    { id: 25, name: "Mehendi Decor Tray", price: 499, img: "download (3).jpg" },
    { id: 26, name: "Mehendi Decor Tray", price: 299, img: "Mehandi.jpg" },
    { id: 27, name: "Mehendi Decor Tray", price: 199, img: "mehendi1.jpg" },
    { id: 28, name: "Mehendi Decor Tray", price: 399, img: "mehendi2.jpg" },
    { id: 29, name: "Mehendi Decor Tray", price: 199, img: "download (1).jpg" },
    { id: 30, name: "Mehendi Decor Tray", price: 499, img: "mehendi.jpg" },
  ],
 anniversary: [
    { id: 31, name: "Chocolate Bouquet", price: 299, img: "download (5).jpg" },
    { id: 32, name: "25th Anniversary Bouquet", price: 399, img: "25th Anniversary Bouquet.jpg" },
    { id: 33, name: "Anniversary Hamper", price: 299, img: "anni1.jpg" },
    { id: 34, name: "Gift Box", price: 299, img: "anniversary.jpg" },
    { id: 35, name: "Chocolate Bouquet", price: 499, img: "download (6).jpg" },
    { id: 36, name: "Nut Hamper", price: 299, img: "Nuts Hamper.jpg" },
    { id: 37, name: "Photo Bouquet", price: 199, img: "Valentinstagsgeschenk Valentinstag.jpg" },
    { id: 38, name: "Wedding Bouquet", price: 399, img: "wedding.jpg" },
    { id: 39, name: "Saree Hamper", price: 199, img: "saree.jpg" },
    { id: 40, name: "Perfume box", price: 499, img: "custom2.O.jpg" },
  ],
  custom: [
    { id: 43, name: "Perfume Box", price: 499, img: "custom.jpg" },
    { id: 31, name: "Chocolate Bouquet", price: 299, img: "download (5).jpg" },
    { id: 32, name: "25th Anniversary Bouquet", price: 399, img: "25th Anniversary Bouquet.jpg" },
    { id: 33, name: "Anniversary Hamper", price: 299, img: "anni1.jpg" },
    { id: 34, name: "Gift Box", price: 299, img: "anniversary.jpg" },
    { id: 35, name: "Chocolate Bouquet", price: 499, img: "download (6).jpg" },
    { id: 36, name: "Nut Hamper", price: 299, img: "Nuts Hamper.jpg" },
    { id: 37, name: "Photo Bouquet", price: 199, img: "Valentinstagsgeschenk Valentinstag.jpg" },
    { id: 38, name: "Wedding Bouquet", price: 399, img: "wedding.jpg" },
    { id: 39, name: "Saree Hamper", price: 199, img: "saree.jpg" },
    { id: 40, name: "Perfume box", price: 499, img: "custom2.O.jpg" },
    { id: 41, name: "Saree Hamper", price: 199, img: "saree2.0.jpg" },
    { id: 42, name: "Custom Potlis", price: 499, img: "potli.jpg" },
    { id: 42, name: "Custom Potlis", price: 599, img: "potli2.O.jpg" },
    { id: 44, name: "Food Hamper", price: 499, img: "food.jpg" },

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
