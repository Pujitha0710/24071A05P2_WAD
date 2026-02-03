function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  errorSpan.style.color = "red";
}
function clearError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  // Registration
  const regForm = document.getElementById("registrationForm");
  if (regForm) {
    regForm.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;
      const name = document.getElementById("regName");
      const email = document.getElementById("regEmail");
      const username = document.getElementById("regUsername");
      const password = document.getElementById("regPassword");
      const confirmPassword = document.getElementById("regConfirmPassword");
      const phone = document.getElementById("regPhone");
      const address = document.getElementById("regAddress");

      if (name.value.trim() === "") { showError(name,"Name required"); valid=false; } else clearError(name);
      const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) { showError(email,"Invalid email"); valid=false; } else clearError(email);
      if (username.value.trim()==="") { showError(username,"Username required"); valid=false; } else clearError(username);
      if (password.value.length<6) { showError(password,"Min 6 chars"); valid=false; } else clearError(password);
      if (confirmPassword.value!==password.value) { showError(confirmPassword,"Passwords must match"); valid=false; } else clearError(confirmPassword);
      const phonePattern=/^[0-9]{10}$/;
      if (!phone.value.match(phonePattern)) { showError(phone,"10-digit phone required"); valid=false; } else clearError(phone);
      if (address.value.trim()==="") { showError(address,"Address required"); valid=false; } else clearError(address);

      document.getElementById("regMsg").textContent = valid ? "Registration Successful!" : "Fix errors above!";
      document.getElementById("regMsg").style.color = valid ? "green" : "red";
    });
  }

  // Login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;
      const email=document.getElementById("loginEmail");
      const password=document.getElementById("loginPassword");
      if (email.value.trim()==="") { showError(email,"Email required"); valid=false; } else clearError(email);
      if (password.value.trim()==="") { showError(password,"Password required"); valid=false; } else clearError(password);
      document.getElementById("loginMsg").textContent = valid ? "Login Successful!" : "Fix errors above!";
      document.getElementById("loginMsg").style.color = valid ? "green" : "red";
    });
  }

  // Catalog
  const catalogForm=document.getElementById("catalogForm");
  if (catalogForm) {
    catalogForm.addEventListener("submit", e => {
      e.preventDefault();
      const qty=document.getElementById("catalogQuantity");
      if (isNaN(qty.value)||qty.value<=0) { showError(qty,"Enter valid quantity"); }
      else { clearError(qty); alert("Item added to cart!"); }
    });
  }

  // Cart
  const cartForm=document.getElementById("cartForm");
  if (cartForm) {
    cartForm.addEventListener("submit", e => {
