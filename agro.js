// ==================== VARIABLES GLOBALES ====================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

// ==================== FUNCIÓN DE FORMATO DE MONEDA ====================
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(amount);
};

// ==================== GESTIÓN DE USUARIOS ====================
const saveUser = (username, password, email) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  // Verificar si ya existe el usuario
  if (users.some(u => u.username === username)) {
    alert("⚠️ Ese usuario ya existe, intenta con otro.");
    return false;
  }

  const newUser = { username, password, email };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(newUser));
  currentUser = newUser;
  return true;
};

const loginUser = (username, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    currentUser = user;
    return true;
  }
  return false;
};

const logoutUser = () => {
  currentUser = null;
  localStorage.removeItem("loggedInUser");
  window.location.reload();
};

// ==================== FORMULARIOS DE LOGIN/REGISTRO ====================
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerContainer = document.getElementById("register-form-container");
  const registerForm = document.getElementById("register-form"); // Asegúrate de tener este ID en el form real

  // Toggle entre login y registro
  document.getElementById("show-register")?.addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerContainer.style.display = "block";
  });

  document.getElementById("show-login")?.addEventListener("click", (e) => {
    e.preventDefault();
    registerContainer.style.display = "none";
    loginForm.style.display = "block";
  });

  // Login
  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (loginUser(username, password)) {
      alert("¡Bienvenido " + username + "! ✅");
      window.location.href = "index.html"; // Página principal
    } else {
      alert("Usuario o contraseña incorrectos ❌");
    }
  });

  // Registro
  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("new-username").value.trim();
    const email = document.getElementById("new-email").value.trim();
    const password = document.getElementById("new-password").value.trim();

    if (saveUser(username, password, email)) {
      alert("Cuenta creada con éxito 🎉");
      window.location.href = "index.html"; // Página principal
    }
  });

  // Inicializar carrito al cargar
  updateCartCount();
  showCartItems();
});

// ==================== CARRITO ====================
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const updateCartCount = () => {
  const cartCount = document.getElementById('cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) {
    if (totalItems > 0) {
      cartCount.textContent = totalItems;
      cartCount.classList.remove('hidden');
    } else {
      cartCount.classList.add('hidden');
    }
  }
};

const addToCart = (productId) => {
  const productToAdd = products.find(p => p.id === productId);
  if (productToAdd) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...productToAdd, quantity: 1 });
    }
    saveCart();
    updateCartCount();
    showCartItems();
  }
};

const showCartItems = () => {
  const cartList = document.getElementById("cart-items");
  if (cartList) {
    cartList.innerHTML = "";
    if (cart.length === 0) {
      cartList.innerHTML = "<li>🛒 Tu carrito está vacío</li>";
      return;
    }
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}`;
      cartList.appendChild(li);
    });
    // Botón de hacer pedido
    const orderBtn = document.createElement("button");
    orderBtn.textContent = "Hacer pedido 🛍️";
    orderBtn.classList.add("order-btn");
    orderBtn.addEventListener("click", makeOrder);
    cartList.appendChild(orderBtn);
  }
};

const makeOrder = () => {
  if (!currentUser) {
    alert("⚠️ Debes iniciar sesión para hacer un pedido.");
    return;
  }
  if (cart.length === 0) {
    alert("Tu carrito está vacío ❌");
    return;
  }
  alert(`✅ Pedido realizado con éxito por ${currentUser.username}. ¡Gracias por tu compra!`);
  cart = [];
  saveCart();
  updateCartCount();
  showCartItems();
};

// ==================== OFERTAS ====================
const addToCartFromOffer = (offerId) => {
  console.log(`Añadiendo oferta ${offerId} al carrito`);
};
const showOfferDetails = (offerId) => {
  console.log(`Mostrando detalles de la oferta ${offerId}`);
};

// ==================== CIERRE DE SESIÓN ====================
document.getElementById("logout-btn")?.addEventListener("click", () => {
  logoutUser();
});

// ==================== DATOS DE PRODUCTOS ====================
const products = sampleProducts; // ya tienes tus productos arriba
