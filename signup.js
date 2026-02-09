const form = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const errorMsg = document.querySelector("#errorMsg");

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    errorMsg.textContent = "";
    errorMsg.style.color = "red";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmInput.value.trim();
     
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (name === "") {
        showError("Name is required");
        return;
    }

    if (email === "") {
        showError("Email is required");
        return;
    }

    if(!emailRegex.test(email)) {
        showError("Please enter a valid email");
        return;
    }

    if (password === "") {
        showError("Password is required");
        return;
    }

    if (!passwordRegex.test(password)) {
        showError("Password must be at least 8 characters with uppercase, lowercase, number and symbol");
        return;    
    }

     if (password !== confirmPassword) {
        showError("Passwords do not match");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    for (let i = 0; i < users.length; i++) {
     if (users[i].email === email) {
       showError("User already exists");
       return;
    }
    }

     const newUser = {
     name: name,
     email: email,
     password: password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful!");
    window.location.href = "signin.html";
   });

   function showError(message) {
     errorMsg.textContent = message;
     errorMsg.style.display = "block";
    }
