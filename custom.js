const form = document.getElementById("customForm");
const errorMsg = document.querySelector(".error-msg");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("date");
const occasionInput = document.getElementById("occasion");
const quantityInput = document.getElementById("quantity");
const budgetInput = document.getElementById("budget");
const addressInput = document.getElementById("address");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    errorMsg.style.display = "none";
    errorMsg.textContent = "";

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const occasion = occasionInput.value;
    const date = dateInput.value;
    const quantity = quantityInput.value;
    const budget = budgetInput.value;
    const address = addressInput.value.trim();

    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (name==="") {
        return showError("Full name is required");
    }

    if(!phoneRegex.test(phone)) {
        return showError("Enter a valid 10-digit phone number");
    }
    if(!emailRegex.test(email)) {
        return showError("Enter a valid email address");
    }

    if(occasion === "") {
        return showError("Please select an occasion");
    }

   if (date === "") {
    return showError("Please select event date");
   }

   if (quantity < 1) {
    return showError("Quantity must be at least 1");
  }

  if (budget === "") {
    return showError("Please select budget range");
  }

  if (address === "") {
    return showError("Delivery address is required");
  }

   const newOrder = {
  name,
  phone,
  email,
  occasion,
  date,
  quantity,
  budget,
  address,
  notes: document.getElementById("notes")?.value.trim() || "", 
  time: new Date().toISOString()
 };

 let orders = JSON.parse(localStorage.getItem("customOrders")) || [];

 orders.push(newOrder);

 localStorage.setItem("customOrders", JSON.stringify(orders));

 alert("Custom request submitted successfully!");
 form.reset();
   
 });

 function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
 }