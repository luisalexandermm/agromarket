// Datos de productos del Mercado de Quibdó - IDÉNTICOS AL APP.TSX
const sampleProducts = [
    {
        id: '1',
        name: 'Plátano Verde',
        price: 3500,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1588746501895-b4b9807cb5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0YW5vJTIwYmFuYW5hJTIwdHJvcGljYWwlMjBmcnVpdHxlbnwxfHx8fDE3NTcwMjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1696425238816-60797dd15272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGZpc2glMjBwYWNpZmljJTIwc2VhZm9vZHxlbnwxfHx8fDE3NTcwMjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1737992468893-9c109da39f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0cyUyMGNvbG9tYmlhfGVufDF8fHx8MTc1NzAyODMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1728893680594-4c52d06463bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dWNhJTIwY2Fzc2F2YSUyMHZlZ2V0YWJsZXxlbnwxfHx8fDE3NTcwMjgzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1505216980056-a7b7b1c6e000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYXJyb3olMjBjb2xvbWJpYXxlbnwxfHx8fDE3NTcwMjgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1571798543828-30ea66c3f914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwY29jbyUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODMzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHRyb3BpY2FsJTIwZnJ1aXR8ZW58MXx8fHwxNzU3MDI4MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1691671473605-389f2da37e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNzYXZhJTIweXVjYSUyMHJvb3QlMjB2ZWdldGFibGV8ZW58MXx8fHwxNzU3MDI5MTc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Verduras',
        expirationDate: '2024-09-15',
        location: 'Cultivo La Montaña',
        description: 'Ñame criollo de excelente calidad. Ideal para sancocho y otros platos típicos.',
        inStock: true
    },
    // Nuevos productos agregados
    {
        id: '9',
        name: 'Plátano Maduro',
        price: 4500,
        originalPrice: 5500,
        image: 'https://images.unsplash.com/photo-1617631716600-6a454b430367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGFpbiUyMGJhbmFuYSUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1619810815691-4766cd4b8054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNocmltcCUyMHByYXduc3xlbnwxfHx8fDE3NTcwMjg2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1651821322744-73ee50bf4046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjB0cm9waWNhbCUyMGZydWl0fGVufDF8fHx8MTc1NjkxMzQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1644709438449-3d9b34793988?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaWxhbnRybyUyMGNvcmlhbmRlciUyMGhlcmJzfGVufDF8fHx8MTc1NzAyODYzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1682457529707-4594be92105f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWF2YSUyMHRyb3BpY2FsJTIwZnJ1aXR8ZW58MXx8fHwxNzU3MDI4NjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFucyUyMGZyaWpvbCUyMGxlZ3VtZXN8ZW58MXx8fHwxNzU3MDI4NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1723473620176-8d26dc6314cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNoZWVzZSUyMHF1ZXNvfGVufDF8fHx8MTc1NzAyODY0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1581757784712-50c2257ed830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdm9jYWRvJTIwcGFsdGElMjBhZ3VhY2F0ZXxlbnwxfHx8fDE3NTcwMjg2NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Frutas',
        expirationDate: '2024-09-14',
        location: 'Finca El Aguacate',
        description: 'Aguacate Lorena cremoso y nutritivo. Perfecto para acompañar comidas o preparar batidos.',
        inStock: true,
        isOrganic: true
    },
    // Productos adicionales que aparecen con "Ver más"
    {
        id: '17',
        name: 'Jengibre Fresco',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1634612828694-8988aa4254df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGdpbmdlciUyMHJvb3QlMjBzcGljZXxlbnwxfHx8fDE3NTcwMjkxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1709828933413-96855c9cfcc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGxlbW9uJTIwbGltZSUyMGNpdHJ1c3xlbnwxfHx8fDE3NTcwMjkxODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1741515042603-70545daeb0c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNwaW5hY2glMjBncmVlbnMlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc1NzAyOTE5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1571738328207-7975ff683308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG9lc3xlbnwxfHx8fDE3NTcwMjkyMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1651821322744-73ee50bf4046?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBheWElMjB0cm9waWNhbCUyMGZydWl0fGVufDF8fHx8MTc1NjkxMzQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1583223399321-6bb6e5ba148e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJzJTIwdmVnZXRhYmxlc3xlbnwxfHx8fDE3NTcwMjkyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1612504258838-fbf14fe4437d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFucyUyMGZyaWpvbCUyMGxlZ3VtZXN8ZW58MXx8fHwxNzU3MDI4NjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1617631716600-6a454b430367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGFpbiUyMGJhbmFuYSUyMHRyb3BpY2FsfGVufDF8fHx8MTc1NzAyODYzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Frutas',
        expirationDate: '2024-09-09',
        location: 'Palma Nativa',
        description: 'Chontaduro cocido tradicional del Pacífico. Rico en carbohidratos y proteínas vegetales.',
        inStock: true,
        isOrganic: true
    }
];

// Clase principal de la aplicación del Mercado de Quibdó
class MercadoQuibdoApp {
    constructor() {
        this.cart = this.loadCartFromStorage();
        this.user = this.loadUserFromStorage();
        this.showMoreProducts = false;
        this.isCartOpen = false;
        this.isLoginModalOpen = false;
        this.currentSection = 'inicio';
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadProducts();
        this.loadOffers();
        this.updateUI();
        this.handleScrollEffects();
    }

    setupEventListeners() {
        // Búsqueda
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchProducts(e.target.value.toLowerCase());
            });
        }

        // Scroll to top button
        this.updateScrollTopButton();
        window.addEventListener('scroll', () => {
            this.updateScrollTopButton();
        });
    }

    updateScrollTopButton() {
        const scrollTopBtn = document.getElementById('scroll-top-btn');
        if (scrollTopBtn) {
            if (window.scrollY > 400) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        }
    }

    handleScrollEffects() {
        // Smooth scroll para navegación
        const sections = ['inicio', 'productos', 'categorias', 'domicilios', 'ofertas', 'contacto'];
        
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.addEventListener('click', (e) => {
                    if (e.target.matches('[data-nav]')) {
                        e.preventDefault();
                        this.navigateToSection(e.target.dataset.nav);
                    }
                });
            }
        });
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

    // Gestión de productos
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

    filterByCategory(category) {
        const filtered = sampleProducts.filter(product => 
            product.category === category
        );
        
        this.renderProducts(filtered, 'products-grid');
        this.navigateToSection('productos');
        
        // Limpiar productos adicionales si están mostrados
        const additionalProducts = document.getElementById('additional-products');
        if (additionalProducts) {
            additionalProducts.classList.remove('expanded');
        }
        
        // Mostrar mensaje de filtrado
        this.showAddToCartFeedback(`Mostrando productos de: ${category}`);
    }

    // Gestión de products
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
        
        const priceHtml = product.originalPrice ? 
            `<div class="product-price">
                <span class="product-price-old">$${product.originalPrice.toLocaleString()}</span>
                <span>$${product.price.toLocaleString()}</span>
            </div>` :
            `<div class="product-price">$${product.price.toLocaleString()}</div>`;

        const badgesHtml = `
            <div class="product-badges">
                ${product.originalPrice ? '<span class="product-badge badge-offer">Oferta</span>' : ''}
                ${product.isOrganic ? '<span class="product-badge badge-organic">Orgánico</span>' : ''}
            </div>
        `;

        return `
            <div class="product-card">
                <div class="product-image-container">
                    <img 
                        src="${product.image}" 
                        alt="${product.name}" 
                        class="product-image"
                        loading="lazy"
                    >
                    ${badgesHtml}
                </div>
                <div class="product-content">
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        ${priceHtml}
                    </div>
                    <p class="product-description">${product.description}</p>
                    <div class="product-meta">
                        <span>📍 ${product.location}</span>
                        <span>📅 ${daysUntilExpiration} días</span>
                    </div>
                    <button 
                        class="product-btn ${!product.inStock ? 'disabled' : ''}" 
                        data-action="add-to-cart" 
                        data-product-id="${product.id}"
                        ${!product.inStock ? 'disabled' : ''}
                    >
                        ${product.inStock ? '🛒 Agregar al carrito' : '❌ Sin stock'}
                    </button>
                </div>
            </div>
        `;
    }

    toggleProducts() {
        const additionalProducts = document.getElementById('additional-products');
        const showMoreBtn = document.getElementById('show-more-btn');
        
        if (!additionalProducts || !showMoreBtn) return;

        this.showMoreProducts = !this.showMoreProducts;
        
        if (this.showMoreProducts) {
            additionalProducts.style.display = 'block';
            showMoreBtn.innerHTML = '👁️‍🗨️ Ver menos productos';
            showMoreBtn.classList.remove('btn-primary');
            showMoreBtn.classList.add('btn-secondary');
        } else {
            additionalProducts.style.display = 'none';
            showMoreBtn.innerHTML = '👁️ Ver más productos';
            showMoreBtn.classList.remove('btn-secondary');
            showMoreBtn.classList.add('btn-primary');
        }
    }

    // Gestión del carrito
    addToCart(productId) {
        const product = sampleProducts.find(p => p.id === productId);
        if (!product || !product.inStock) return;

        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...product, quantity: 1 });
        }

        this.saveCartToStorage();
        this.updateCartUI();
        this.showAddToCartFeedback(product.name);
    }

    updateCartQuantity(productId, newQuantity) {
        if (newQuantity <= 0) {
            this.removeFromCart(productId);
            return;
        }

        const item = this.cart.find(item => item.id === productId);
        if (item) {
            item.quantity = newQuantity;
            this.saveCartToStorage();
            this.updateCartUI();
        }
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCartToStorage();
        this.updateCartUI();
    }

    openCart() {
        this.isCartOpen = true;
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');
        
        if (cartSidebar) cartSidebar.classList.add('open');
        if (overlay) overlay.classList.remove('hidden');
        
        this.updateCartUI();
    }

    closeCart() {
        this.isCartOpen = false;
        const cartSidebar = document.getElementById('cart-sidebar');
        const overlay = document.getElementById('overlay');
        
        if (cartSidebar) cartSidebar.classList.remove('open');
        if (overlay) overlay.classList.add('hidden');
    }

    updateCartUI() {
        this.updateCartCount();
        this.updateCartItems();
        this.updateCartFooter();
    }

    updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (cartCount) {
            if (totalItems > 0) {
                cartCount.textContent = totalItems;
                cartCount.classList.remove('hidden');
            } else {
                cartCount.classList.add('hidden');
            }
        }
    }

    updateCartItems() {
        const cartItems = document.getElementById('cart-items');
        const emptyCart = document.getElementById('empty-cart');
        
        if (!cartItems || !emptyCart) return;

        if (this.cart.length === 0) {
            cartItems.style.display = 'none';
            emptyCart.style.display = 'block';
        } else {
            cartItems.style.display = 'block';
            emptyCart.style.display = 'none';
            cartItems.innerHTML = this.cart.map(item => this.createCartItemHTML(item)).join('');
            
            // Agregar event listeners
            this.attachCartItemListeners();
        }
    }

    createCartItemHTML(item) {
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString()}</div>
                </div>
                <div class="cart-controls">
                    <button class="cart-btn" data-action="decrease" data-product-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="cart-btn" data-action="increase" data-product-id="${item.id}">+</button>
                    <button class="cart-btn" data-action="remove" data-product-id="${item.id}" style="margin-left: 0.5rem; background: var(--red-danger); color: white;">🗑️</button>
                </div>
            </div>
        `;
    }

    attachCartItemListeners() {
        document.querySelectorAll('[data-action="increase"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.target.dataset.productId;
                const item = this.cart.find(item => item.id === productId);
                if (item) this.updateCartQuantity(productId, item.quantity + 1);
            });
        });

        document.querySelectorAll('[data-action="decrease"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.target.dataset.productId;
                const item = this.cart.find(item => item.id === productId);
                if (item) this.updateCartQuantity(productId, item.quantity - 1);
            });
        });

        document.querySelectorAll('[data-action="remove"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.target.dataset.productId;
                this.removeFromCart(productId);
            });
        });
    }

    updateCartFooter() {
        const cartFooter = document.getElementById('cart-footer');
        const cartTotal = document.getElementById('cart-total-amount');
        
        if (!cartFooter || !cartTotal) return;

        if (this.cart.length > 0) {
            const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = `$${total.toLocaleString()}`;
            cartFooter.classList.remove('hidden');
        } else {
            cartFooter.classList.add('hidden');
        }
    }

    checkout() {
        if (this.cart.length === 0) return;

        // Crear mensaje para WhatsApp
        let message = "🛒 *Pedido del Mercado de Quibdó* 🛒\n\n";
        
        this.cart.forEach(item => {
            message += `• ${item.name}\n`;
            message += `  Cantidad: ${item.quantity}\n`;
            message += `  Precio: $${(item.price * item.quantity).toLocaleString()}\n\n`;
        });

        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `💰 *Total: $${total.toLocaleString()}*\n\n`;
        message += "📍 *Datos de entrega:*\n";
        message += "Por favor, proporciona tu dirección y teléfono para coordinar la entrega.\n\n";
        message += "¡Gracias por elegir el Mercado de Quibdó! 🌿";

        // Abrir WhatsApp
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/573226654844?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Limpiar carrito después del pedido
        this.cart = [];
        this.saveCartToStorage();
        this.updateCartUI();
        this.closeCart();
        
        this.showAddToCartFeedback('¡Pedido enviado! Te contactaremos pronto. 📞');
    }

    // Gestión de usuario
    openLoginModal() {
        this.isLoginModalOpen = true;
        const loginModal = document.getElementById('login-modal');
        const overlay = document.getElementById('overlay');
        
        if (loginModal) {
            loginModal.classList.remove('hidden');
            loginModal.classList.add('show');
        }
        if (overlay) overlay.classList.remove('hidden');
        
        this.showLoginForm();
    }

    closeLoginModal() {
        this.isLoginModalOpen = false;
        const loginModal = document.getElementById('login-modal');
        const overlay = document.getElementById('overlay');
        
        if (loginModal) {
            loginModal.classList.remove('show');
            loginModal.classList.add('hidden');
        }
        if (overlay && !this.isCartOpen) {
            overlay.classList.add('hidden');
        }
    }

    showLoginForm() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        
        if (loginForm) loginForm.classList.remove('hidden');
        if (registerForm) registerForm.classList.add('hidden');
    }

    showRegisterForm() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        
        if (loginForm) loginForm.classList.add('hidden');
        if (registerForm) registerForm.classList.remove('hidden');
    }

    handleLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            email: formData.get('email'),
            name: formData.get('email').split('@')[0]
        };

        this.user = userData;
        this.saveUserToStorage();
        this.updateUserUI();
        this.closeLoginModal();
        this.showAddToCartFeedback(`¡Bienvenido, ${userData.name}! 👋`);
    }

    handleRegister(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email')
        };

        this.user = userData;
        this.saveUserToStorage();
        this.updateUserUI();
        this.closeLoginModal();
        this.showAddToCartFeedback(`¡Registro exitoso! Bienvenido, ${userData.name}! 🎉`);
    }

    logout() {
        this.user = null;
        localStorage.removeItem('mercado-quibdo-user');
        this.updateUserUI();
        this.showAddToCartFeedback('¡Hasta pronto! 👋');
    }

    updateUserUI() {
        const userSection = document.getElementById('user-section');
        const loginBtn = document.getElementById('login-btn');
        const userName = document.getElementById('user-name');
        
        if (this.user) {
            if (userSection) userSection.classList.remove('hidden');
            if (loginBtn) loginBtn.classList.add('hidden');
            if (userName) userName.textContent = this.user.name;
        } else {
            if (userSection) userSection.classList.add('hidden');
            if (loginBtn) loginBtn.classList.remove('hidden');
        }
    }

    // Utilidades
    showAddToCartFeedback(message) {
        // Crear elemento de notificación
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--green-primary);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: var(--shadow-lg);
            z-index: 9999;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    closeAll() {
        this.closeCart();
        this.closeLoginModal();
    }

    updateUI() {
        this.updateUserUI();
        this.updateCartUI();
    }

    // Persistencia
    saveCartToStorage() {
        localStorage.setItem('mercado-quibdo-cart', JSON.stringify(this.cart));
    }

    loadCartFromStorage() {
        const saved = localStorage.getItem('mercado-quibdo-cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveUserToStorage() {
        localStorage.setItem('mercado-quibdo-user', JSON.stringify(this.user));
    }

    loadUserFromStorage() {
        const saved = localStorage.getItem('mercado-quibdo-user');
        return saved ? JSON.parse(saved) : null;
    }
}

// Inicializar la aplicación cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    window.app = new MercadoQuibdoApp();
    console.log('🏪 Mercado de Quibdó cargado correctamente');
});

// Exponer funciones globales para compatibilidad con HTML
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

window.openLogin = function() {
    if (window.app) {
        window.app.openLoginModal();
    }
};

window.closeLogin = function() {
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

window.filterByCategory = function(category) {
    if (window.app) {
        window.app.filterByCategory(category);
    }
};