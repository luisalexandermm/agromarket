<<<<<<< HEAD
// ==================== VARIABLES GLOBALES ====================
let cart = [];
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
  const newUser = { username, password, email };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(newUser));
  currentUser = newUser;
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
  const registerForm = document.getElementById("register-form-container");

  // Toggle entre login y registro
  document.getElementById("show-register").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  document.getElementById("show-login").addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (loginUser(username, password)) {
        alert("¡Bienvenido " + username + "! ✅");
        window.location.href = "agromarket.html"; // Página principal
      } else {
        alert("Usuario o contraseña incorrectos ❌");
      }
    });
  }

  // Registro
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("new-username").value;
      const email = document.getElementById("new-email").value;
      const password = document.getElementById("new-password").value;

      saveUser(username, password, email);
      alert("Cuenta creada con éxito 🎉");
      window.location.href = "index.html"; // Página principal
    });
  }
});

// ==================== CARRITO ====================
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
    updateCartCount();
    showCartItems();
  }
};

const showCartItems = () => {
  const cartList = document.getElementById("cart-items");
  if (cartList) {
    cartList.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}`;
      cartList.appendChild(li);
    });
  }
};

// ==================== OFERTAS ====================
const addToCartFromOffer = (offerId) => {
  console.log(`Añadiendo oferta ${offerId} al carrito`);
};
const showOfferDetails = (offerId) => {
  console.log(`Mostrando detalles de la oferta ${offerId}`);
};

// ==================== EVENTOS ====================
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  showCartItems(); });

// ==================== CIERRE DE SESIÓN ====================
document.getElementById("logout-btn")?.addEventListener("click", () => {
  logoutUser();
});
// Datos de productos
const sampleProducts = [
    {
        id: '1',
        name: 'Plátano Verde',
        price: 3500,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1588746501895-b4b9807cb5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0YW5vJTIwYmFuYW5hJTIwdHJvcGljYWwlMjBmcnVpdHxlbnwxfHx8fDE3NTcwMjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-10',
        location: 'Finca La Esperanza',
        description: 'Plátano verde fresco, ideal para patacones y sancocho. Cosechado esta mañana.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '2',
        name: 'Pescado Bocachico',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1696425238816-60797dd15272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZpc2glMjBwYWNpZmljJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTcwMjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Pescados',
        expirationDate: '2024-09-05',
        location: 'Río Atrato',
        description: 'Bocachico fresco del río Atrato, pescado esta madrugada. Excelente para sudao.',
        inStock: true
    },
    {
        id: '3',
        name: 'Frutas Tropicales Mix',
        price: 12000,
        originalPrice: 15000,
        image: 'https://images.unsplash.com/photo-1737992468893-9c109da39f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0cyUyMGNvbG9tYmlhfGVufDF8fHx8MTc1NzAyODMzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-08',
        location: 'Vereda El Jardín',
        description: 'Variedad de frutas tropicales: guayaba, maracuyá, lulo. Perfectas para jugos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '4',
        name: 'Yuca Blanca',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1728893680594-4c52d06463bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dWNhJTIwY2Fzc2F2YSUyMHZlZ2V0YWJsZXxlbnwxfHx8fDE3NTcwMjgzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-12',
        location: 'Finca San José',
        description: 'Yuca blanca fresca y tierna. Perfecta para hervir o hacer casabe.',
        inStock: true
    },
    {
        id: '5',
        name: 'Arroz del Chocó',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1505216980056-a7b7b1c6e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYXJyb3olMjBjb2xvbWJpYXxlbnwxfHx8fDE3NTcwMjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Granos',
        expirationDate: '2024-12-15',
        location: 'Cultivos del Bajo Atrato',
        description: 'Arroz de alta calidad cultivado en el Chocó. Grano largo y aromático.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '6',
        name: 'Coco Verde',
        price: 4000,
        originalPrice: 5000,
        image: 'https://images.unsplash.com/photo-1571798543828-30ea66c3f914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwY29jbyUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-20',
        location: 'Plantación Palmira',
        description: 'Coco verde fresco con agua natural. Ideal para refrescarse y cocinar.',
        inStock: false
    },
    {
        id: '7',
        name: 'Mango Tommy',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHRyb3BpY2FsJTIwZnJ1aXR8ZW58MXx8fHwxNzU3MDI4MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-07',
        location: 'Huerto Los Mangos',
        description: 'Mango Tommy maduro y dulce. Perfecto para comer fresco o hacer jugos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '8',
        name: 'Ñame Criollo',
        price: 3000,
        image: 'https://images.unsplash.com/photo-1691671473605-389f2da37e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNzYXZhJTIweXVjYSUyMHJvb3QlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzU3MDI5MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-15',
        location: 'Cultivo La Montaña',
        description: 'Ñame criollo de excelente calidad. Ideal para sancocho y otros platos típicos.',
        inStock: true
    },
    // Productos adicionales (se muestran con "Ver más")
    {
        id: '9',
        name: 'Plátano Maduro',
        price: 4500,
        originalPrice: 5500,
        image: 'https://images.unsplash.com/photo-1617631716600-6a454b430367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGFpbiUyMGJhbmFuYSUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-08',
        location: 'Finca La Esperanza',
        description: 'Plátano maduro dulce, perfecto para hacer tajadas y postres. Punto ideal de madurez.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '10',
        name: 'Camarones Frescos',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1619810815691-4766cd4b8054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNocmltcCUyMHByYXduc3xlbnwxfHx8fDE3NTcwMjg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Pescados',
        expirationDate: '2024-09-05',
        location: 'Costa Pacífica',
        description: 'Camarones frescos del Pacífico chocoano, ideales para encocados y arroces marineros.',
        inStock: true
    },
    {
        id: '11',
        name: 'Papaya Hawaiana',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1651821322744-73ee50bf4046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjB0cm9waWNhbCUyMGZydWl0fGVufDF8fHx8MTc1NjkxMzQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-12',
        location: 'Huerto Tropical',
        description: 'Papaya hawaiana dulce y jugosa. Rica en vitaminas y perfecta para desayunos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '12',
        name: 'Cilantro Fresco',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1644709438449-3d9b34793988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaWxhbnRybyUyMGNvcmlhbmRlciUyMGhlcmJzfGVufDF8fHx8MTc1NzAyODYzOXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Especias',
        expirationDate: '2024-09-08',
        location: 'Huerta Familiar',
        description: 'Cilantro fresco cultivado localmente. Esencial para la cocina chocoana y el hogao.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '13',
        name: 'Guayaba Agria',
        price: 5500,
        originalPrice: 6500,
        image: 'https://images.unsplash.com/photo-1682457529707-4594be92105f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMHRyb3BpY2FsJTIwZnJ1aXR8ZW58MXx8fHwxNzU3MDI4NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-10',
        location: 'Monte Nativo',
        description: 'Guayaba agria del monte, perfecta para dulces, mermeladas y bebidas refrescantes.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '14',
        name: 'Fríjol Cabecita Negra',
        price: 9000,
        image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFucyUyMGZyaWpvbCUyMGxlZ3VtZXN8ZW58MXx8fHwxNzU3MDI4NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Granos',
        expirationDate: '2024-12-20',
        location: 'Cultivos del Atrato',
        description: 'Fríjol cabecita negra tradicional del Chocó. Excelente para preparar el clásico "fríjol chocoano".',
        inStock: true,
        isOrganic: true
    },
    {
        id: '15',
        name: 'Queso Fresco Costeño',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNoZWVzZSUyMHF1ZXNvfGVufDF8fHx8MTc1NzAyODY0OXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Lácteos',
        expirationDate: '2024-09-08',
        location: 'Quesería La Palma',
        description: 'Queso fresco costeño artesanal, ideal para arepas, sancocho y desayunos típicos.',
        inStock: true
    },
    {
        id: '16',
        name: 'Aguacate Lorena',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1581757784712-50c2257ed830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwcGFsdGElMjBhZ3VhY2F0ZXxlbnwxfHx8fDE3NTcwMjg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-14',
        location: 'Finca El Aguacate',
        description: 'Aguacate Lorena cremoso y nutritivo. Perfecto para acompañar comidas o preparar batidos.',
        inStock: true,
        isOrganic: true
    }
=======
// ==================== VARIABLES GLOBALES ====================
let cart = [];
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
  const newUser = { username, password, email };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(newUser));
  currentUser = newUser;
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
  const registerForm = document.getElementById("register-form-container");

  // Toggle entre login y registro
  document.getElementById("show-register").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block";
  });

  document.getElementById("show-login").addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
  });

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (loginUser(username, password)) {
        alert("¡Bienvenido " + username + "! ✅");
        window.location.href = "agromarket.html"; // Página principal
      } else {
        alert("Usuario o contraseña incorrectos ❌");
      }
    });
  }

  // Registro
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("new-username").value;
      const email = document.getElementById("new-email").value;
      const password = document.getElementById("new-password").value;

      saveUser(username, password, email);
      alert("Cuenta creada con éxito 🎉");
      window.location.href = "index.html"; // Página principal
    });
  }
});

// ==================== CARRITO ====================
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
    updateCartCount();
    showCartItems();
  }
};

const showCartItems = () => {
  const cartList = document.getElementById("cart-items");
  if (cartList) {
    cartList.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.quantity} - ${formatCurrency(item.price * item.quantity)}`;
      cartList.appendChild(li);
    });
  }
};

// ==================== OFERTAS ====================
const addToCartFromOffer = (offerId) => {
  console.log(`Añadiendo oferta ${offerId} al carrito`);
};
const showOfferDetails = (offerId) => {
  console.log(`Mostrando detalles de la oferta ${offerId}`);
};

// ==================== EVENTOS ====================
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  showCartItems(); });

// ==================== CIERRE DE SESIÓN ====================
document.getElementById("logout-btn")?.addEventListener("click", () => {
  logoutUser();
});
// Datos de productos
const sampleProducts = [
    {
        id: '1',
        name: 'Plátano Verde',
        price: 3500,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1588746501895-b4b9807cb5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0YW5vJTIwYmFuYW5hJTIwdHJvcGljYWwlMjBmcnVpdHxlbnwxfHx8fDE3NTcwMjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-10',
        location: 'Finca La Esperanza',
        description: 'Plátano verde fresco, ideal para patacones y sancocho. Cosechado esta mañana.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '2',
        name: 'Pescado Bocachico',
        price: 18000,
        image: 'https://images.unsplash.com/photo-1696425238816-60797dd15272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZpc2glMjBwYWNpZmljJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTcwMjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Pescados',
        expirationDate: '2024-09-05',
        location: 'Río Atrato',
        description: 'Bocachico fresco del río Atrato, pescado esta madrugada. Excelente para sudao.',
        inStock: true
    },
    {
        id: '3',
        name: 'Frutas Tropicales Mix',
        price: 12000,
        originalPrice: 15000,
        image: 'https://images.unsplash.com/photo-1737992468893-9c109da39f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0cyUyMGNvbG9tYmlhfGVufDF8fHx8MTc1NzAyODMzMnww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-08',
        location: 'Vereda El Jardín',
        description: 'Variedad de frutas tropicales: guayaba, maracuyá, lulo. Perfectas para jugos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '4',
        name: 'Yuca Blanca',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1728893680594-4c52d06463bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dWNhJTIwY2Fzc2F2YSUyMHZlZ2V0YWJsZXxlbnwxfHx8fDE3NTcwMjgzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-12',
        location: 'Finca San José',
        description: 'Yuca blanca fresca y tierna. Perfecta para hervir o hacer casabe.',
        inStock: true
    },
    {
        id: '5',
        name: 'Arroz del Chocó',
        price: 8500,
        image: 'https://images.unsplash.com/photo-1505216980056-a7b7b1c6e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYXJyb3olMjBjb2xvbWJpYXxlbnwxfHx8fDE3NTcwMjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Granos',
        expirationDate: '2024-12-15',
        location: 'Cultivos del Bajo Atrato',
        description: 'Arroz de alta calidad cultivado en el Chocó. Grano largo y aromático.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '6',
        name: 'Coco Verde',
        price: 4000,
        originalPrice: 5000,
        image: 'https://images.unsplash.com/photo-1571798543828-30ea66c3f914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwY29jbyUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODMzNnww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-20',
        location: 'Plantación Palmira',
        description: 'Coco verde fresco con agua natural. Ideal para refrescarse y cocinar.',
        inStock: false
    },
    {
        id: '7',
        name: 'Mango Tommy',
        price: 6000,
        image: 'https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHRyb3BpY2FsJTIwZnJ1aXR8ZW58MXx8fHwxNzU3MDI4MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-07',
        location: 'Huerto Los Mangos',
        description: 'Mango Tommy maduro y dulce. Perfecto para comer fresco o hacer jugos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '8',
        name: 'Ñame Criollo',
        price: 3000,
        image: 'https://images.unsplash.com/photo-1691671473605-389f2da37e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNzYXZhJTIweXVjYSUyMHJvb3QlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzU3MDI5MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-15',
        location: 'Cultivo La Montaña',
        description: 'Ñame criollo de excelente calidad. Ideal para sancocho y otros platos típicos.',
        inStock: true
    },
    // Productos adicionales (se muestran con "Ver más")
    {
        id: '9',
        name: 'Plátano Maduro',
        price: 4500,
        originalPrice: 5500,
        image: 'https://images.unsplash.com/photo-1617631716600-6a454b430367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGFpbiUyMGJhbmFuYSUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-08',
        location: 'Finca La Esperanza',
        description: 'Plátano maduro dulce, perfecto para hacer tajadas y postres. Punto ideal de madurez.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '10',
        name: 'Camarones Frescos',
        price: 25000,
        image: 'https://images.unsplash.com/photo-1619810815691-4766cd4b8054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNocmltcCUyMHByYXduc3xlbnwxfHx8fDE3NTcwMjg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Pescados',
        expirationDate: '2024-09-05',
        location: 'Costa Pacífica',
        description: 'Camarones frescos del Pacífico chocoano, ideales para encocados y arroces marineros.',
        inStock: true
    },
    {
        id: '11',
        name: 'Papaya Hawaiana',
        price: 7000,
        image: 'https://images.unsplash.com/photo-1651821322744-73ee50bf4046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjB0cm9waWNhbCUyMGZydWl0fGVufDF8fHx8MTc1NjkxMzQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-12',
        location: 'Huerto Tropical',
        description: 'Papaya hawaiana dulce y jugosa. Rica en vitaminas y perfecta para desayunos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '12',
        name: 'Cilantro Fresco',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1644709438449-3d9b34793988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaWxhbnRybyUyMGNvcmlhbmRlciUyMGhlcmJzfGVufDF8fHx8MTc1NzAyODYzOXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Especias',
        expirationDate: '2024-09-08',
        location: 'Huerta Familiar',
        description: 'Cilantro fresco cultivado localmente. Esencial para la cocina chocoana y el hogao.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '13',
        name: 'Guayaba Agria',
        price: 5500,
        originalPrice: 6500,
        image: 'https://images.unsplash.com/photo-1682457529707-4594be92105f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMHRyb3BpY2FsJTIwZnJ1aXR8ZW58MXx8fHwxNzU3MDI4NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-10',
        location: 'Monte Nativo',
        description: 'Guayaba agria del monte, perfecta para dulces, mermeladas y bebidas refrescantes.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '14',
        name: 'Fríjol Cabecita Negra',
        price: 9000,
        image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFucyUyMGZyaWpvbCUyMGxlZ3VtZXN8ZW58MXx8fHwxNzU3MDI4NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Granos',
        expirationDate: '2024-12-20',
        location: 'Cultivos del Atrato',
        description: 'Fríjol cabecita negra tradicional del Chocó. Excelente para preparar el clásico "fríjol chocoano".',
        inStock: true,
        isOrganic: true
    },
    {
        id: '15',
        name: 'Queso Fresco Costeño',
        price: 15000,
        image: 'https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNoZWVzZSUyMHF1ZXNvfGVufDF8fHx8MTc1NzAyODY0OXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Lácteos',
        expirationDate: '2024-09-08',
        location: 'Quesería La Palma',
        description: 'Queso fresco costeño artesanal, ideal para arepas, sancocho y desayunos típicos.',
        inStock: true
    },
    {
        id: '16',
        name: 'Aguacate Lorena',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1581757784712-50c2257ed830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwcGFsdGElMjBhZ3VhY2F0ZXxlbnwxfHx8fDE3NTcwMjg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-14',
        location: 'Finca El Aguacate',
        description: 'Aguacate Lorena cremoso y nutritivo. Perfecto para acompañar comidas o preparar batidos.',
        inStock: true,
        isOrganic: true
    }
>>>>>>> e63591af35b5dd8b211d4847a59c07b9ad89a009
];