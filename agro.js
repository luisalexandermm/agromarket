// Datos de productos del Mercado de Quibdó
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
    // Productos adicionales
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
    },
    // Productos adicionales para "Ver más"
    {
        id: '17',
        name: 'Jengibre Fresco',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1634612828694-8988aa4254df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGdpbmdlciUyMHJvb3QlMjBzcGljZXxlbnwxfHx8fDE3NTcwMjkxODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Especias',
        expirationDate: '2024-09-18',
        location: 'Huerta Medicinal',
        description: 'Jengibre fresco con propiedades antiinflamatorias. Ideal para tés medicinales y cocina.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '18',
        name: 'Limón Mandarino',
        price: 3200,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1709828933413-96855c9cfcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlbW9uJTIwbGltZSUyMGNpdHJ1c3xlbnwxfHx8fDE3NTcwMjkxODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-16',
        location: 'Cultivo Cítrico',
        description: 'Limón mandarino jugoso y aromático. Perfecto para limonadas, ceviches y aderezos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '19',
        name: 'Espinaca Criolla',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1741515042603-70545daeb0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNwaW5hY2glMjBncmVlbnMlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc1NzAyOTE5NXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-08',
        location: 'Huerta Verde',
        description: 'Espinaca criolla fresca, rica en hierro y vitaminas. Ideal para ensaladas y guisos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '20',
        name: 'Tomate Chonto',
        price: 4200,
        image: 'https://images.unsplash.com/photo-1571738328207-7975ff683308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lc3xlbnwxfHx8fDE3NTcwMjkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-12',
        location: 'Invernadero Local',
        description: 'Tomate chonto maduro y carnoso. Perfecto para salsas, ensaladas y guisos chocoanos.',
        inStock: true
    },
    {
        id: '21',
        name: 'Cebolla Cabezona',
        price: 3800,
        image: 'https://images.unsplash.com/photo-1651821322744-73ee50bf4046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjB0cm9waWNhbCUyMGZydWl0fGVufDF8fHx8MTc1NjkxMzQ2MXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-20',
        location: 'Cultivo San Pedro',
        description: 'Cebolla cabezona dulce y aromática. Base fundamental de la cocina chocoana.',
        inStock: true
    },
    {
        id: '22',
        name: 'Pimiento Dulce',
        price: 5200,
        originalPrice: 6000,
        image: 'https://images.unsplash.com/photo-1583223399321-6bb6e5ba148e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJzJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTcwMjkyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Verduras',
        expirationDate: '2024-09-14',
        location: 'Huerto Familiar',
        description: 'Pimiento dulce colorido y crujiente. Ideal para sofrítos, ensaladas y rellenos.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '23',
        name: 'Achiote en Pepa',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFucyUyMGZyaWpvbCUyMGxlZ3VtZXN8ZW58MXx8fHwxNzU3MDI4NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Especias',
        expirationDate: '2024-12-31',
        location: 'Recolección Selvática',
        description: 'Achiote en pepa natural del Chocó. Condimento tradicional para dar color y sabor.',
        inStock: true,
        isOrganic: true
    },
    {
        id: '24',
        name: 'Chontaduro Cocido',
        price: 6500,
        image: 'https://images.unsplash.com/photo-1617631716600-6a454b430367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGFpbiUyMGJhbmFuYSUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Frutas',
        expirationDate: '2024-09-09',
        location: 'Palma Nativa',
        description: 'Chontaduro cocido tradicional del Pacífico. Rico en carbohidratos y proteínas vegetales.',
        inStock: true,
        isOrganic: true
    }
];

// Estado de la aplicación
class MercadoQuibdoApp {
    constructor() {
        this.cartItems = [];
        this.currentUser = null;
        this.showMoreProducts = false;
        this.isCartOpen = false;
        this.isLoginModalOpen = false;
        this.currentSection = 'inicio';
        
        this.init();
    }

    // Inicialización de la aplicación
    init() {
        this.loadFromStorage();
        this.setupEventListeners();
        this.loadProducts();
        this.loadOffers();
        this.setupScrollButton();
        this.setupSearch();
        this.updateUserDisplay();
        this.updateCartCount();
    }

    // Configurar event listeners
    setupEventListeners() {
        // Navegación
        document.querySelectorAll('[data-navigate]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.getAttribute('data-navigate');
                this.navigateToSection(section);
            });
        });

        // Carrito
        const cartBtn = document.querySelector('[data-action="open-cart"]');
        if (cartBtn) {
            cartBtn.addEventListener('click', () => this.openCart());
        }

        const cartCloseBtn = document.querySelector('[data-action="close-cart"]');
        if (cartCloseBtn) {
            cartCloseBtn.addEventListener('click', () => this.closeCart());
        }

        // Login/Logout
        const loginBtn = document.querySelector('[data-action="open-login"]');
        if (loginBtn) {
            loginBtn.addEventListener('click', () => this.openLoginModal());
        }

        const logoutBtn = document.querySelector('[data-action="logout"]');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }

        // Modal
        const loginModal = document.getElementById('login-modal');
        if (loginModal) {
            const closeBtn = loginModal.querySelector('[data-action="close-modal"]');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => this.closeLoginModal());
            }
        }

        // Overlay
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.closeAll());
        }

        // Ver más productos
        const showMoreBtn = document.getElementById('show-more-btn');
        if (showMoreBtn) {
            showMoreBtn.addEventListener('click', () => this.toggleProducts());
        }

        // Scroll to top
        const scrollTopBtn = document.getElementById('scroll-top-btn');
        if (scrollTopBtn) {
            scrollTopBtn.addEventListener('click', () => this.scrollToTop());
        }

        // Forms
        this.setupForms();
    }

    // Configurar formularios
    setupForms() {
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => this.handleLogin(e));
        }

        const registerForm = document.getElementById('register-form');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Toggle de contraseña
        document.querySelectorAll('[data-action="toggle-password"]').forEach(btn => {
            btn.addEventListener('click', (e) => this.togglePassword(e.target));
        });

        // Switch entre forms
        const showRegisterBtn = document.querySelector('[data-action="show-register"]');
        if (showRegisterBtn) {
            showRegisterBtn.addEventListener('click', () => this.showRegisterForm());
        }

        const showLoginBtn = document.querySelector('[data-action="show-login"]');
        if (showLoginBtn) {
            showLoginBtn.addEventListener('click', () => this.showLoginForm());
        }
    }

    // Cargar datos desde localStorage
    loadFromStorage() {
        const savedCart = localStorage.getItem('mercado-quibdo-cart');
        if (savedCart) {
            this.cartItems = JSON.parse(savedCart);
        }

        const savedUser = localStorage.getItem('mercado-quibdo-user');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
        }
    }

    // Guardar en localStorage
    saveToStorage() {
        localStorage.setItem('mercado-quibdo-cart', JSON.stringify(this.cartItems));
        if (this.currentUser) {
            localStorage.setItem('mercado-quibdo-user', JSON.stringify(this.currentUser));
        }
    }

    // Navegación
    navigateToSection(section) {
        this.currentSection = section;
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Configurar botón de scroll
    setupScrollButton() {
        const scrollBtn = document.getElementById('scroll-top-btn');
        if (!scrollBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
    }

    // Configurar búsqueda
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            this.searchProducts(query);
        });
    }

    searchProducts(query) {
        if (!query) {
            this.loadProducts();
            return;
        }

        const filteredProducts = sampleProducts.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );

        this.renderProducts(filteredProducts.slice(0, 8), 'products-grid');
    }

    // Gestión de productos
    loadProducts() {
        const initialProducts = sampleProducts.slice(0, 8);
        const additionalProducts = sampleProducts.slice(8);
        
        this.renderProducts(initialProducts, 'products-grid');
        this.renderProducts(additionalProducts, 'additional-products-grid');
    }

    loadOffers() {
        const offerProducts = sampleProducts.filter(product => product.originalPrice);
        this.renderProducts(offerProducts, 'offers-grid');
    }

    renderProducts(products, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = products.map(product => this.createProductCard(product)).join('');
        
        // Agregar event listeners a los botones
        container.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('data-product-id');
                this.addToCart(productId);
            });
        });
    }

    createProductCard(product) {
        const daysUntilExpiration = Math.ceil(
            (new Date(product.expirationDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
        );
        
        const isExpiringSoon = daysUntilExpiration <= 3;
        const isOnSale = product.originalPrice && product.originalPrice > product.price;
        
        let badges = '';
        if (isOnSale) {
            badges += '<span class="product-badge badge-offer">Oferta</span>';
        }
        if (product.isOrganic) {
            badges += '<span class="product-badge badge-organic">Orgánico</span>';
        }
        if (isExpiringSoon) {
            badges += '<span class="product-badge badge-expiring">¡Últimos días!</span>';
        }

        return `
            <div class="product-card">
                <div class="product-image-container">
                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="product-image"
                        onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2VuIG5vIGRpc3BvbmlibGU8L3RleHQ+PC9zdmc+'"
                    />
                    
                    <div class="product-badges">
                        ${badges}
                    </div>

                    ${!product.inStock ? `
                        <div class="product-out-of-stock">
                            <span class="out-of-stock-label">Agotado</span>
                        </div>
                    ` : ''}
                </div>

                <div class="product-content">
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price-container">
                            ${isOnSale ? `
                                <span class="product-price-old">
                                    ${product.originalPrice?.toLocaleString()}
                                </span>
                            ` : ''}
                            <span class="product-price">
                                ${product.price.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <p class="product-description">${product.description}</p>

                    <div class="product-meta">
                        <div class="product-location">
                            <i data-lucide="map-pin" class="icon icon-sm"></i>
                            <span>${product.location}</span>
                        </div>
                        <span class="product-category ${isExpiringSoon ? 'text-warning' : ''}">
                            ${product.category}
                        </span>
                    </div>

                    <div class="product-expiry">
                        <div class="product-expiry-date">
                            <i data-lucide="clock" class="icon icon-sm"></i>
                            <span>Vence: ${new Date(product.expirationDate).toLocaleDateString()}</span>
                        </div>
                        ${isExpiringSoon ? `
                            <span class="product-expiry-warning">
                                ${daysUntilExpiration} día(s) restante(s)
                            </span>
                        ` : ''}
                    </div>

                    <button
                        class="btn btn-primary product-add-btn"
                        data-action="add-to-cart"
                        data-product-id="${product.id}"
                        ${!product.inStock ? 'disabled' : ''}
                    >
                        <i data-lucide="shopping-cart" class="icon icon-sm"></i>
                        ${product.inStock ? 'Agregar al carrito' : 'Agotado'}
                    </button>
                </div>
            </div>
        `;
    }

    toggleProducts() {
        this.showMoreProducts = !this.showMoreProducts;
        const additionalProducts = document.getElementById('additional-products');
        const showMoreBtn = document.getElementById('show-more-btn');
        
        if (this.showMoreProducts) {
            additionalProducts.classList.add('expanded');
            showMoreBtn.innerHTML = `
                <i data-lucide="eye-off" class="icon icon-sm"></i>
                Ver menos productos
            `;
        } else {
            additionalProducts.classList.remove('expanded');
            showMoreBtn.innerHTML = `
                <i data-lucide="eye" class="icon icon-sm"></i>
                Ver más productos (${sampleProducts.slice(8).length} más)
            `;
        }
    }

    // Gestión del carrito
    addToCart(productId) {
        const product = sampleProducts.find(p => p.id === productId);
        if (!product || !product.inStock) return;

        const existingItem = this.cartItems.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cartItems.push({ ...product, quantity: 1 });
        }

        this.updateCartCount();
        this.saveToStorage();
        this.showAddToCartFeedback();
    }

    updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            this.removeFromCart(productId);
            return;
        }
        
        const item = this.cartItems.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.updateCartDisplay();
            this.updateCartCount();
            this.saveToStorage();
        }
    }

    removeFromCart(productId) {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
        this.updateCartDisplay();
        this.updateCartCount();
        this.saveToStorage();
    }

    updateCartCount() {
        const count = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElement = document.getElementById('cart-count');
        
        if (cartCountElement) {
            if (count > 0) {
                cartCountElement.textContent = count;
                cartCountElement.classList.remove('hidden');
            } else {
                cartCountElement.classList.add('hidden');
            }
        }
    }

    openCart() {
        this.isCartOpen = true;
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');
        
        if (cartSidebar) cartSidebar.classList.add('open');
        if (overlay) overlay.classList.remove('hidden');
        
        this.updateCartDisplay();
    }

    closeCart() {
        this.isCartOpen = false;
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');
        
        if (cartSidebar) cartSidebar.classList.remove('open');
        if (overlay) overlay.classList.add('hidden');
    }

    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');
        const cartFooter = document.getElementById('cart-footer');

        if (!cartItemsContainer) return;

        if (this.cartItems.length === 0) {
            cartItemsContainer.innerHTML = '';
            if (emptyCart) emptyCart.classList.remove('hidden');
            if (cartFooter) cartFooter.classList.add('hidden');
            return;
        }

        if (emptyCart) emptyCart.classList.add('hidden');
        if (cartFooter) cartFooter.classList.remove('hidden');

        cartItemsContainer.innerHTML = this.cartItems.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiNhYWEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZW48L3RleHQ+PC9zdmc+'">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-location">${item.location}</p>
                    <p class="cart-item-price">$${item.price.toLocaleString()}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-item-btn" onclick="app.updateQuantity('${item.id}', ${item.quantity - 1})">
                        <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14"/>
                        </svg>
                    </button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="cart-item-btn" onclick="app.updateQuantity('${item.id}', ${item.quantity + 1})">
                        <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 5v14m-7-7h14"/>
                        </svg>
                    </button>
                </div>
                <button class="cart-item-remove" onclick="app.removeFromCart('${item.id}')">
                    <svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m3 6 5 6 5-6"/>
                        <path d="m8 21 4-7 4 7"/>
                        <path d="M12 3v7"/>
                    </svg>
                </button>
            </div>
        `).join('');

        // Actualizar total
        const total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const cartTotal = document.getElementById('cart-total-amount');
        if (cartTotal) {
            cartTotal.textContent = `${total.toLocaleString()}`;
        }
    }

    checkout() {
        if (this.cartItems.length === 0) return;
        
        const total = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const itemsList = this.cartItems.map(item => `${item.name} x${item.quantity}`).join(', ');
        
        const whatsappMessage = `¡Hola! Quiero hacer un pedido del Mercado de Quibdó:\n\n${itemsList}\n\nTotal: $${total.toLocaleString()}\n\n¿Pueden confirmar disponibilidad y tiempo de entrega?`;
        const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappUrl, '_blank');
    }

    showAddToCartFeedback() {
        // Crear notificación
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.innerHTML = `
            <div class="flex items-center gap-2">
                <i data-lucide="check" class="icon icon-sm"></i>
                Producto agregado al carrito
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Mostrar
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Ocultar y remover
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 2000);
    }

    // Gestión de usuario
    openLoginModal() {
        this.isLoginModalOpen = true;
        const modal = document.getElementById('login-modal');
        const overlay = document.getElementById('overlay');
        
        if (modal) modal.classList.add('show');
        if (overlay) overlay.classList.remove('hidden');
    }

    closeLoginModal() {
        this.isLoginModalOpen = false;
        const modal = document.getElementById('login-modal');
        const overlay = document.getElementById('overlay');
        
        if (modal) modal.classList.remove('show');
        if (overlay) overlay.classList.add('hidden');
    }

    showLoginForm() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const modalTitle = document.getElementById('modal-title');
        
        if (loginForm) loginForm.classList.remove('hidden');
        if (registerForm) registerForm.classList.add('hidden');
        if (modalTitle) modalTitle.textContent = 'Iniciar Sesión';
    }

    showRegisterForm() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const modalTitle = document.getElementById('modal-title');
        
        if (loginForm) loginForm.classList.add('hidden');
        if (registerForm) registerForm.classList.remove('hidden');
        if (modalTitle) modalTitle.textContent = 'Registro';
    }

    handleLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        
        // Simulación de login
        const userData = {
            name: email.split('@')[0],
            email: email
        };
        
        this.login(userData);
        this.closeLoginModal();
    }

    handleRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        
        // Simulación de registro
        const userData = {
            name: name,
            email: email
        };
        
        this.login(userData);
        this.closeLoginModal();
    }

    login(userData) {
        this.currentUser = userData;
        this.updateUserDisplay();
        this.saveToStorage();
    }

    logout() {
        this.currentUser = null;
        this.updateUserDisplay();
        localStorage.removeItem('mercado-quibdo-user');
    }

    updateUserDisplay() {
        const userSection = document.getElementById('user-section');
        const loginBtn = document.querySelector('[data-action="open-login"]');
        const userName = document.getElementById('user-name');
        
        if (this.currentUser) {
            if (userName) userName.textContent = `Hola, ${this.currentUser.name}`;
            if (userSection) userSection.classList.remove('hidden');
            if (loginBtn) loginBtn.classList.add('hidden');
        } else {
            if (userSection) userSection.classList.add('hidden');
            if (loginBtn) loginBtn.classList.remove('hidden');
        }
    }

    togglePassword(button) {
        const input = button.previousElementSibling;
        const icon = button.querySelector('svg');
        
        if (input.type === 'password') {
            input.type = 'text';
            icon.setAttribute('data-lucide', 'eye');
        } else {
            input.type = 'password';
            icon.setAttribute('data-lucide', 'eye-off');
        }
        
        // Re-inicializar iconos de Lucide
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    }

    // Utilidades
    closeAll() {
        this.closeCart();
        this.closeLoginModal();
    }

    // Formatear números como moneda
    formatCurrency(amount) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    }

    // Formatear fechas
    formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('es-CO', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
}

// Funciones globales para compatibilidad
window.navigateToSection = function(section) {
    if (window.app) {
        window.app.navigateToSection(section);
    }
};

window.openCart = function() {
    if (window.app) {
        window.app.openCart();
    }
};

window.closeCart = function() {
    if (window.app) {
        window.app.closeCart();
    }
};

window.openLoginModal = function() {
    if (window.app) {
        window.app.openLoginModal();
    }
};

window.closeLoginModal = function() {
    if (window.app) {
        window.app.closeLoginModal();
    }
};

window.logout = function() {
    if (window.app) {
        window.app.logout();
    }
};

window.toggleProducts = function() {
    if (window.app) {
        window.app.toggleProducts();
    }
};

window.scrollToTop = function() {
    if (window.app) {
        window.app.scrollToTop();
    }
};

window.checkout = function() {
    if (window.app) {
        window.app.checkout();
    }
};

window.closeAll = function() {
    if (window.app) {
        window.app.closeAll();
    }
};

window.addToCart = function(productId) {
    if (window.app) {
        window.app.addToCart(productId);
    }
};

window.updateQuantity = function(productId, quantity) {
    if (window.app) {
        window.app.updateQuantity(productId, quantity);
    }
};

window.removeFromCart = function(productId) {
    if (window.app) {
        window.app.removeFromCart(productId);
    }
};

window.handleLogin = function(event) {
    if (window.app) {
        window.app.handleLogin(event);
    }
};

window.handleRegister = function(event) {
    if (window.app) {
        window.app.handleRegister(event);
    }
};

window.showLoginForm = function() {
    if (window.app) {
        window.app.showLoginForm();
    }
};

window.showRegisterForm = function() {
    if (window.app) {
        window.app.showRegisterForm();
    }
};

window.togglePassword = function(fieldId) {
    if (window.app) {
        const field = document.getElementById(fieldId);
        const button = field.nextElementSibling;
        window.app.togglePassword(button);
    }
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    window.app = new MercadoQuibdoApp();
    
    // Configurar event listeners adicionales
    document.body.addEventListener('click', function(e) {
        // Manejar clics en elementos con data-action
        const action = e.target.getAttribute('data-action');
        if (!action) return;

        switch (action) {
            case 'open-cart':
                window.app.openCart();
                break;
            case 'close-cart':
                window.app.closeCart();
                break;
            case 'open-login':
                window.app.openLoginModal();
                break;
            case 'close-modal':
                window.app.closeLoginModal();
                break;
            case 'logout':
                window.app.logout();
                break;
            case 'show-login':
                window.app.showLoginForm();
                break;
            case 'show-register':
                window.app.showRegisterForm();
                break;
            case 'toggle-password':
                window.app.togglePassword(e.target);
                break;
            case 'add-to-cart':
                const productId = e.target.getAttribute('data-product-id');
                if (productId) {
                    window.app.addToCart(productId);
                }
                break;
        }
    });

    // Manejar navegación
    document.body.addEventListener('click', function(e) {
        const section = e.target.getAttribute('data-navigate');
        if (section) {
            window.app.navigateToSection(section);
        }
    });
});

// Prevenir errores si no hay elementos
window.addEventListener('error', function(e) {
    console.warn('Error:', e.message);
});

// Manejar resize de ventana
window.addEventListener('resize', function() {
    // Cerrar elementos móviles si es necesario
    if (window.innerWidth > 768 && window.app) {
        // Mantener funcionalidad en dispositivos grandes
    }
});

// Export para módulos (opcional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MercadoQuibdoApp;
}