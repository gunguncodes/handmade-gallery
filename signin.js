const form = document.querySelector("#signinForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  errorMsg.style.color = "red";
  errorMsg.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "") {
    showError("Email is required");
    return;
  }

  if (password === "") {
    showError("Password is required");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  let userFound = false;

  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      userFound = true;

      // optional session marker
      localStorage.setItem("loggedInUser", email);

      alert("Login successful!");
      window.location.href = "index.html";
      return;
    }
  }

  if (!userFound) {
    showError("Invalid email or password");
  }
});

function showError(message) {
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
}
