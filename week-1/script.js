function registerUser() {
  if (ruser.value.trim() === "" || rpass.value.trim() === "") {
    alert("All fields are required!");
    return;
  }
  if (rpass.value.length < 4) {
    alert("Password should be at least 4 characters");
    return;
  }
  if (localStorage.getItem('user') === ruser.value) {
    alert("User already exists! Try a different name");
    return;
  }
  localStorage.setItem('user', ruser.value);
  localStorage.setItem('pass', rpass.value);
  alert('Registered Successfully');
  location.href = "index.html";
}

function loginUser() {
  if (luser.value.trim() === "" || lpass.value.trim() === "") {
    alert("Please enter username and password!");
    return;
  }
  if (luser.value === localStorage.getItem('user') &&
      lpass.value === localStorage.getItem('pass')) {
    alert('Login Success');
    location.href = "catalog.html";
  } else {
    alert('Invalid username or password');
  }
}

const products = [
  {name:"Shoes", price:999, img:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"},
  {name:"Bag", price:499, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDsY1b1y3fo7fPJX-uXb35VhpA41VwUC4pw&s"},
  {name:"Watch", price:1299, img:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=400&q=60"},
  {name:"T-Shirt", price:299, img:"https://images.pexels.com/photos/6786614/pexels-photo-6786614.jpeg"},
  {name:"Sunglasses", price:699, img:"https://images.pexels.com/photos/249210/pexels-photo-249210.jpeg"},
  {name:"Headphones", price:899, img:"https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg"},
  {name:"Water Bottle", price:199, img:"https://media.istockphoto.com/id/2183430912/photo/stainless-steel-thermos-bottles-with-lids.jpg"},
  {name:"Wallet", price:399, img:"https://images.pexels.com/photos/910122/pexels-photo-910122.jpeg"}
];

let cart = JSON.parse(localStorage.getItem('cart') || "[]");

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function showCount() {
  document.getElementById('count').innerText = cart.length;
}

function loadCatalog() {
  showCount();
  document.getElementById('items').innerHTML =
    products.map((p, i) => `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="add(${i})">Add to Cart</button>
      </div>
    `).join('');
}

function add(i) {
  cart.push(products[i]);
  saveCart();
  showCount();
}

function loadCart() {
  showCount();
  document.getElementById('cartItems').innerHTML =
    cart.map((c, i) => `
      <div class='cart-item'>
        <span>${c.name}</span>
        <span>₹${c.price}</span>
        <button onclick='removeItem(${i})'>X</button>
      </div>
    `).join('');
}

function removeItem(i) {
  cart.splice(i, 1);
  saveCart();
  loadCart();
}

function checkout() {
  alert("Checked out " + cart.length + " items!");
  cart = [];
  saveCart();
  loadCart();
}
