// ===== AGRO MERCADO DIGITAL DE QUIBDÓ - JAVASCRIPT COMPLETO =====
// Sistema completo con facturación automática, QR y notificaciones
// JavaScript Puro - Diseño moderno y responsivo

// ===== CONFIGURACIÓN DEL SISTEMA =====
const CONFIG = {
  whatsapp: '+573226654844',
  email: 'alrxandermaturana76@gmail.com',
  creadores: [
    'Luis Alexander',
    'Edith Yaritza', 
    'Jhorfanys Andrea'
  ],
  barrios: [
    { nombre: 'Centro', costoEnvio: 0 },
    { nombre: 'Kennedy', costoEnvio: 3000 },
    { nombre: 'Medrano', costoEnvio: 3000 },
    { nombre: 'Pandeyuca', costoEnvio: 5000 },
    { nombre: 'San Vicente', costoEnvio: 5000 },
    { nombre: 'La Yesca', costoEnvio: 4000 },
    { nombre: 'Roma', costoEnvio: 4000 },
    { nombre: 'Niño Jesús', costoEnvio: 3500 },
    { nombre: 'Alameda', costoEnvio: 3000 },
    { nombre: 'Yesca La Nueva', costoEnvio: 4500 },
    { nombre: 'Obrero', costoEnvio: 3500 },
    { nombre: 'Silencio', costoEnvio: 5000 },
    { nombre: 'Ciudadela del Norte', costoEnvio: 5500 },
    { nombre: 'Miramar', costoEnvio: 3500 },
    { nombre: 'Caribe', costoEnvio: 4000 }
  ]
};

// ===== DATOS DE PRODUCTOS DEL MERCADO DE QUIBDÓ =====
const sampleProducts = [
    {
        id: '1',
        name: 'Plátano Verde',
        price: 3500,
        originalPrice: 4000,
        image: 'https://images.unsplash.com/photo-1588746501895-b4b9807cb5d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGF0YW5vJTIwYmFuYW5hJTIwdHJvcGljYWwlMjBmcnVpdHxlbnwxfHx8fDE3NTcwMjgzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        category: 'Frutas',
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
    // ===== PRODUCTOS ADICIONALES (SE MUESTRAN EN SUBPÁGINAS) =====
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
        image: 'https://images.unsplash.com/photo-1628793561336-5e90cb873032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9uaW9ucyUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzU3Nzg2MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        image: 'https://images.unsplash.com/photo-1587041770006-965fc1251180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbm5hdHRvJTIwYWNoaW90ZSUyMHNlZWRzJTIwc3BpY2V8ZW58MXx8fHwxNzU3Nzg2MTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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

// ===== VARIABLES GLOBALES =====
let cart = [];
let user = null;
let selectedCategory = null;

// ===== FUNCIONES DE UTILIDAD =====
function formatPrice(price) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(price);
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function generateQRCode() {
  return 'QBD-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}

function getCurrentDate() {
  return new Date().toLocaleString('es-CO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// ===== FUNCIONES DE PRODUCTOS =====
function getAllProducts() {
  return sampleProducts;
}

function getFeaturedProducts() {
  // Solo los primeros 15 productos para productos destacados
  return sampleProducts.slice(0, 15);
}

function getProductsByCategory(category) {
  return sampleProducts.filter(product => product.category === category);
}

function getProductsWithDiscounts() {
  return sampleProducts.filter(product => product.originalPrice);
}

function getProductById(id) {
  return sampleProducts.find(product => product.id === id);
}

// ===== FUNCIONES DE CARRITO =====
function addToCart(productData) {
  console.log('Agregando producto al carrito:', productData);
  
  let product;
  
  // Si productData es un string (ID), buscar el producto
  if (typeof productData === 'string') {
    product = getProductById(productData);
  } else {
    // Si es un objeto, usarlo directamente
    product = productData;
  }
  
  if (!product || !product.inStock) {
    showNotification('Producto no disponible', 'error');
    return;
  }
  
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
    console.log('Producto existente, nueva cantidad:', existingItem.quantity);
  } else {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1
    };
    cart.push(newItem);
    console.log('Nuevo producto agregado:', newItem);
  }
  
  saveCart();
  updateCartCounter();
  updateCartDisplay();
  showNotification(`${product.name} agregado al carrito`, 'success');
  console.log('Carrito actual:', cart);
}

function updateQuantity(productId, quantity) {
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = quantity;
    saveCart();
    updateCartDisplay();
    updateCartCounter();
  }
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartDisplay();
  updateCartCounter();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartDisplay();
  updateCartCounter();
}

function calculateSubtotal() {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function calculateTotal(neighborhood) {
  const subtotal = calculateSubtotal();
  const neighborhoodInfo = CONFIG.barrios.find(b => b.nombre === neighborhood);
  const deliveryCost = neighborhoodInfo ? neighborhoodInfo.costoEnvio : 0;
  const freeDeliveryThreshold = neighborhood === 'Centro' ? 20000 : 30000;
  const finalDelivery = subtotal >= freeDeliveryThreshold ? 0 : deliveryCost;
  
  return {
    subtotal,
    delivery: finalDelivery,
    total: subtotal + finalDelivery
  };
}

// ===== FUNCIONES DE ALMACENAMIENTO =====
function saveCart() {
  localStorage.setItem('agro-mercado-cart', JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem('agro-mercado-cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCounter();
  }
}

function saveUser(userData) {
  localStorage.setItem('agro-mercado-user', JSON.stringify(userData));
  user = userData;
}

function loadUser() {
  const savedUser = localStorage.getItem('agro-mercado-user');
  if (savedUser) {
    user = JSON.parse(savedUser);
    updateUserDisplay();
  }
}

// ===== FUNCIONES DE INTERFAZ =====
function showNotification(message, type = 'info') {
  // Remover notificación existente si hay una
  const existingNotification = document.getElementById('notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Crear nueva notificación
  const notification = document.createElement('div');
  notification.id = 'notification';
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Estilos en línea para garantizar funcionamiento
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-weight: 500;
    max-width: 300px;
  `;
  
  // Colores según tipo
  switch (type) {
    case 'success':
      notification.style.background = '#16a34a';
      notification.style.color = 'white';
      break;
    case 'error':
      notification.style.background = '#dc2626';
      notification.style.color = 'white';
      break;
    case 'info':
    default:
      notification.style.background = '#2563eb';
      notification.style.color = 'white';
      break;
  }
  
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

function updateCartCounter() {
  const counter = document.getElementById('cart-count');
  if (counter) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    console.log('Total items en carrito:', totalItems);
    
    if (totalItems > 0) {
      counter.textContent = totalItems;
      counter.classList.remove('hidden');
      counter.style.display = 'flex';
    } else {
      counter.classList.add('hidden');
      counter.style.display = 'none';
    }
  }
}

function updateUserDisplay() {
  const userSection = document.getElementById('user-section');
  const loginBtn = document.getElementById('login-btn');
  const userName = document.getElementById('user-name');
  
  console.log('Actualizando display de usuario:', user);
  
  if (user && userSection && loginBtn && userName) {
    userName.textContent = user.name.split(' ')[0];
    userSection.classList.remove('hidden');
    userSection.style.display = 'flex';
    loginBtn.classList.add('hidden');
    loginBtn.style.display = 'none';
    console.log('Usuario mostrado:', user.name);
  } else if (userSection && loginBtn) {
    userSection.classList.add('hidden');
    userSection.style.display = 'none';
    loginBtn.classList.remove('hidden');
    loginBtn.style.display = 'flex';
    console.log('Botón de login mostrado');
  }
}

// ===== FUNCIONES DE RENDERIZADO =====
function renderProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = '';
  
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });
}

function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  const discount = product.originalPrice ? 
    Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  
  const stockClass = product.inStock ? '' : 'disabled';
  const stockText = product.inStock ? '🛒 Agregar al Carrito' : '❌ Sin stock';
  
  card.innerHTML = `
    <div class="product-image-container">
      <img src="${product.image}" alt="${product.name}" loading="lazy" class="product-image">
      <div class="product-badges">
        ${discount > 0 ? `<div class="product-badge badge-offer">-${discount}%</div>` : ''}
        ${product.isOrganic ? '<div class="product-badge badge-organic">🌱 Orgánico</div>' : ''}
      </div>
    </div>
    
    <div class="product-content">
      <div class="product-header">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          ${product.originalPrice ? 
            `<div class="product-price-old">${formatPrice(product.originalPrice)}</div>` 
            : ''
          }
          <div>${formatPrice(product.price)}</div>
        </div>
      </div>
      
      <div class="product-meta">
        <span>📍 ${product.location}</span>
        <span>📅 ${product.expirationDate}</span>
      </div>
      
      <p class="product-description">${product.description}</p>
      
      <button 
        class="product-btn ${stockClass}" 
        onclick="addToCart('${product.id}')"
        ${!product.inStock ? 'disabled' : ''}
      >
        ${stockText}
      </button>
    </div>
  `;
  
  return card;
}

function filterByCategory(category) {
  selectedCategory = category;
  
  const products = getProductsByCategory(category);
  renderProducts(products, 'products-grid');
  
  // Update UI
  const titleElement = document.getElementById('productos-title');
  const descriptionElement = document.getElementById('productos-description');
  const resetBtn = document.getElementById('reset-category-btn');
  
  if (titleElement) titleElement.textContent = `${category} Frescos`;
  if (descriptionElement) descriptionElement.textContent = 
    `Los mejores ${category.toLowerCase()} del Chocó, frescos y de calidad`;
  if (resetBtn) resetBtn.style.display = 'inline-flex';
  
  navigateToSection('productos');
}

function resetCategoryFilter() {
  selectedCategory = null;
  
  const featuredProducts = getFeaturedProducts();
  renderProducts(featuredProducts, 'products-grid');
  
  // Update UI
  const titleElement = document.getElementById('productos-title');
  const descriptionElement = document.getElementById('productos-description');
  const resetBtn = document.getElementById('reset-category-btn');
  
  if (titleElement) titleElement.textContent = 'Productos Destacados';
  if (descriptionElement) descriptionElement.textContent = 
    'Los mejores productos frescos de la región, seleccionados especialmente para ti';
  if (resetBtn) resetBtn.style.display = 'none';
}

// ===== FUNCIONES DE NAVEGACIÓN =====
function navigateToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FUNCIONES DE CARRITO SIDEBAR =====
function openCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');
  
  if (cartSidebar) cartSidebar.classList.add('open');
  if (overlay) overlay.classList.remove('hidden');
  updateCartDisplay();
}

function closeCart() {
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');
  
  if (cartSidebar) cartSidebar.classList.remove('open');
  if (overlay) overlay.classList.add('hidden');
}

function updateCartDisplay() {
  const cartItems = document.getElementById('cart-items');
  const cartFooter = document.getElementById('cart-footer');
  const emptyCart = document.getElementById('empty-cart');
  
  if (!cartItems) return;
  
  if (cart.length === 0) {
    if (emptyCart) emptyCart.style.display = 'block';
    if (cartFooter) cartFooter.classList.add('hidden');
    cartItems.innerHTML = '';
    return;
  }
  
  if (emptyCart) emptyCart.style.display = 'none';
  if (cartFooter) cartFooter.classList.remove('hidden');
  
  // Render cart items
  cartItems.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 0.5rem;">
      
      <div class="cart-item-info">
        <h4 class="cart-item-name">${item.name}</h4>
        <p class="cart-item-price">${formatPrice(item.price)}</p>
      </div>
      
      <div class="cart-controls">
        <button class="cart-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">
          −
        </button>
        <span class="quantity-display">${item.quantity}</span>
        <button class="cart-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">
          +
        </button>
        <button class="cart-btn" onclick="removeFromCart('${item.id}')" style="margin-left: 0.5rem; background: #dc2626;">
          🗑️
        </button>
      </div>
      
      <div class="cart-item-total">
        ${formatPrice(item.price * item.quantity)}
      </div>
    </div>
  `).join('');
  
  // Update summary
  const subtotal = calculateSubtotal();
  const subtotalAmount = document.getElementById('cart-total-amount');
  if (subtotalAmount) subtotalAmount.textContent = formatPrice(subtotal);
}

// ===== FUNCIONES DE CHECKOUT =====
function openCheckout() {
  if (cart.length === 0) {
    showNotification('Tu carrito está vacío', 'error');
    return;
  }
  
  closeCart();
  const checkoutModal = document.getElementById('checkout-modal');
  const overlay = document.getElementById('overlay');
  
  if (checkoutModal) checkoutModal.classList.add('show');
  if (overlay) overlay.classList.remove('hidden');
  initializeCheckout();
}

function closeCheckout() {
  const checkoutModal = document.getElementById('checkout-modal');
  const overlay = document.getElementById('overlay');
  
  if (checkoutModal) checkoutModal.classList.remove('show');
  if (overlay) overlay.classList.add('hidden');
}

function initializeCheckout() {
  // Fill neighborhood select
  const neighborhoodSelect = document.getElementById('customer-neighborhood');
  if (neighborhoodSelect) {
    neighborhoodSelect.innerHTML = '<option value="">Selecciona tu barrio</option>' +
      CONFIG.barrios.map(barrio => 
        `<option value="${barrio.nombre}">
          ${barrio.nombre} - ${barrio.costoEnvio === 0 ? 'Gratis' : formatPrice(barrio.costoEnvio)}
        </option>`
      ).join('');
    
    // Add neighborhood change listener
    neighborhoodSelect.addEventListener('change', updateDeliveryCostInfo);
  }
  
  // Show step 1
  showCheckoutStep(1);
}

function updateDeliveryCostInfo() {
  const neighborhood = document.getElementById('customer-neighborhood')?.value;
  const infoDiv = document.getElementById('delivery-cost-info');
  
  if (neighborhood && infoDiv) {
    const totals = calculateTotal(neighborhood);
    infoDiv.innerHTML = `
      <div style="margin-top: 0.5rem; padding: 1rem; background: #f0f9ff; border-radius: 0.5rem;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span>Subtotal productos:</span>
          <span>${formatPrice(totals.subtotal)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span>Costo de domicilio:</span>
          <span style="${totals.delivery === 0 ? 'color: #16a34a; font-weight: 600;' : ''}">
            ${totals.delivery === 0 ? 'GRATIS' : formatPrice(totals.delivery)}
          </span>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 2px solid #16a34a; padding-top: 0.5rem; font-weight: 600; color: #16a34a;">
          <span>TOTAL:</span>
          <span>${formatPrice(totals.total)}</span>
        </div>
      </div>
    `;
  } else if (infoDiv) {
    infoDiv.innerHTML = '';
  }
}

function showCheckoutStep(step) {
  // Hide all steps
  document.querySelectorAll('.checkout-step').forEach(s => s.style.display = 'none');
  
  // Show current step
  const currentStep = document.getElementById(`step-${step}`);
  if (currentStep) {
    currentStep.style.display = 'block';
  }
  
  // Update title
  const title = document.getElementById('checkout-title');
  const titles = {
    1: 'Información de Entrega',
    2: 'Confirmación de Pedido',
    3: 'Pedido Enviado'
  };
  if (title) title.textContent = titles[step] || 'Checkout';
}

function goToStep1() {
  showCheckoutStep(1);
}

function goToStep2() {
  if (validateStep1()) {
    calculateAndShowSummary();
    showCheckoutStep(2);
  }
}

function validateStep1() {
  const fields = [
    { id: 'customer-name', name: 'nombre' },
    { id: 'customer-phone', name: 'teléfono' },
    { id: 'customer-address', name: 'dirección' },
    { id: 'customer-neighborhood', name: 'barrio' },
    { id: 'payment-method', name: 'método de pago' }
  ];
  
  let valid = true;
  let firstErrorField = null;
  
  fields.forEach(field => {
    const element = document.getElementById(field.id);
    if (!element || !element.value.trim()) {
      if (!firstErrorField) firstErrorField = element;
      showNotification(`Por favor completa el campo ${field.name}`, 'error');
      valid = false;
    }
  });
  
  // Validación específica del teléfono
  const phoneElement = document.getElementById('customer-phone');
  if (phoneElement && phoneElement.value.trim()) {
    const phone = phoneElement.value.trim();
    if (phone.length < 10 || !/^\d+$/.test(phone.replace(/[\s\-\+\(\)]/g, ''))) {
      showNotification('Por favor ingresa un número de teléfono válido', 'error');
      valid = false;
    }
  }
  
  if (!valid && firstErrorField) {
    firstErrorField.focus();
  }
  
  return valid;
}

function calculateAndShowSummary() {
  const neighborhood = document.getElementById('customer-neighborhood')?.value;
  const totals = calculateTotal(neighborhood);
  
  // Update customer info
  const summaryName = document.getElementById('summary-name');
  const summaryPhone = document.getElementById('summary-phone');
  const summaryEmail = document.getElementById('summary-email');
  const summaryAddress = document.getElementById('summary-address');
  const summaryPayment = document.getElementById('summary-payment');
  
  if (summaryName) summaryName.textContent = document.getElementById('customer-name')?.value || '';
  if (summaryPhone) summaryPhone.textContent = document.getElementById('customer-phone')?.value || '';
  if (summaryEmail) summaryEmail.textContent = document.getElementById('customer-email')?.value || 'No proporcionado';
  if (summaryAddress) summaryAddress.textContent = 
    `${document.getElementById('customer-address')?.value || ''}, ${neighborhood}`;
  if (summaryPayment) summaryPayment.textContent = document.getElementById('payment-method')?.value || '';
  
  const notes = document.getElementById('customer-notes')?.value;
  const notesWrapper = document.getElementById('summary-notes-wrapper');
  const summaryNotes = document.getElementById('summary-notes');
  if (notes && notesWrapper && summaryNotes) {
    summaryNotes.textContent = notes;
    notesWrapper.style.display = 'block';
  } else if (notesWrapper) {
    notesWrapper.style.display = 'none';
  }
  
  // Render checkout items
  const checkoutItems = document.getElementById('checkout-items');
  if (checkoutItems) {
    checkoutItems.innerHTML = cart.map(item => `
      <div class="checkout-item">
        <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
        <div class="checkout-item-info">
          <span class="checkout-item-name">${item.name}</span>
          <span class="checkout-item-quantity">Cantidad: ${item.quantity}</span>
        </div>
        <span class="checkout-item-price">${formatPrice(item.price * item.quantity)}</span>
      </div>
    `).join('');
  }
  
  // Update totals
  const checkoutSubtotal = document.getElementById('checkout-subtotal');
  const checkoutDelivery = document.getElementById('checkout-delivery');
  const checkoutTotal = document.getElementById('checkout-total');
  
  if (checkoutSubtotal) checkoutSubtotal.textContent = formatPrice(totals.subtotal);
  if (checkoutDelivery) checkoutDelivery.textContent = 
    totals.delivery === 0 ? 'Gratis' : formatPrice(totals.delivery);
  if (checkoutTotal) checkoutTotal.textContent = formatPrice(totals.total);
}

function finalizeOrder() {
  const customerData = {
    name: document.getElementById('customer-name')?.value || '',
    phone: document.getElementById('customer-phone')?.value || '',
    email: document.getElementById('customer-email')?.value || '',
    address: document.getElementById('customer-address')?.value || '',
    neighborhood: document.getElementById('customer-neighborhood')?.value || '',
    paymentMethod: document.getElementById('payment-method')?.value || '',
    notes: document.getElementById('customer-notes')?.value || ''
  };
  
  processOrder(customerData);
}

// ===== FUNCIONES DE PROCESAMIENTO DE PEDIDO =====
function processOrder(customerData) {
  console.log('Procesando pedido:', customerData);
  console.log('Productos en carrito:', cart);
  
  if (cart.length === 0) {
    showNotification('El carrito está vacío', 'error');
    return;
  }
  
  const totals = calculateTotal(customerData.neighborhood);
  const qrCode = generateQRCode();
  const invoiceNumber = `AMQ-${Date.now()}`;
  
  const order = {
    number: invoiceNumber,
    date: getCurrentDate(),
    customer: customerData,
    products: [...cart], // Copia del carrito
    totals: totals,
    qrCode: qrCode,
    fullAddress: `${customerData.address}, ${customerData.neighborhood}, Quibdó, Chocó`
  };
  
  console.log('Orden creada:', order);
  
  // Generate and open printable invoice
  generatePrintableInvoice(order);
  
  // Send to WhatsApp (esperar un poco para que se abra la factura primero)
  setTimeout(() => {
    sendWhatsApp(order);
  }, 1500);
  
  // Send email (esperar un poco más)
  setTimeout(() => {
    sendEmail(order);
  }, 3000);
  
  // Show confirmation
  showCheckoutStep(3);
  showNotification('¡Pedido procesado exitosamente!', 'success');
  
  // Clear cart after 6 seconds
  setTimeout(() => {
    clearCart();
    closeCheckout();
    showNotification('Pedido completado. ¡Gracias por tu compra!', 'success');
  }, 6000);
}

function generatePrintableInvoice(order) {
  const invoiceHTML = `
  <!DOCTYPE html>
  <html>
  <head>
      <title>Factura ${order.number}</title>
      <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 20px auto; padding: 20px; }
          .header { text-align: center; border-bottom: 2px solid #16a34a; padding-bottom: 20px; margin-bottom: 20px; }
          .logo { color: #16a34a; font-size: 24px; font-weight: bold; }
          .invoice-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
          .customer-info, .delivery-info { background: #f9f9f9; padding: 15px; border-radius: 5px; width: 45%; }
          .items-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          .items-table th, .items-table td { border: 1px solid #ddd; padding: 12px; text-align: left; }
          .items-table th { background-color: #16a34a; color: white; }
          .totals { margin-top: 20px; text-align: right; }
          .total-line { display: flex; justify-content: space-between; padding: 5px 0; }
          .final-total { border-top: 2px solid #16a34a; font-weight: bold; font-size: 18px; color: #16a34a; }
          .qr-section { text-align: center; margin: 30px 0; padding: 20px; background: #f0f9ff; border-radius: 10px; }
          .qr-code { font-size: 36px; font-weight: bold; color: #1d4ed8; letter-spacing: 3px; margin: 10px 0; }
          .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
          @media print { body { margin: 0; } .no-print { display: none; } }
      </style>
  </head>
  <body>
      <div class="header">
          <div class="logo">🌱 AGRO MERCADO DIGITAL DE QUIBDÓ</div>
          <p>Productos frescos del Chocó directo a tu mesa</p>
      </div>

      <div class="invoice-info">
          <div>
              <strong>FACTURA N°:</strong> ${order.number}<br>
              <strong>FECHA:</strong> ${order.date}<br>
              <strong>ATENDIDO POR:</strong> ${CONFIG.creadores.join(', ')}
          </div>
          <div style="text-align: right;">
              <strong>WhatsApp:</strong> ${CONFIG.whatsapp}<br>
              <strong>Email:</strong> ${CONFIG.email}<br>
              <strong>Quibdó, Chocó - Colombia</strong>
          </div>
      </div>

      <div class="invoice-info">
          <div class="customer-info">
              <h3>INFORMACIÓN DEL CLIENTE</h3>
              <strong>Nombre:</strong> ${order.customer.name}<br>
              <strong>Teléfono:</strong> ${order.customer.phone}<br>
              ${order.customer.email ? `<strong>Email:</strong> ${order.customer.email}<br>` : ''}
              <strong>Método de Pago:</strong> ${order.customer.paymentMethod}
          </div>
          
          <div class="delivery-info">
              <h3>DIRECCIÓN DE ENTREGA</h3>
              <strong>Barrio:</strong> ${order.customer.neighborhood}<br>
              <strong>Dirección:</strong> ${order.customer.address}<br>
              <strong>Ciudad:</strong> Quibdó, Chocó<br>
              ${order.customer.notes ? `<strong>Notas:</strong> ${order.customer.notes}` : ''}
          </div>
      </div>

      <table class="items-table">
          <thead>
              <tr>
                  <th>PRODUCTO</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO UNITARIO</th>
                  <th>SUBTOTAL</th>
              </tr>
          </thead>
          <tbody>
              ${order.products.map(item => `
              <tr>
                  <td>${item.name}</td>
                  <td>${item.quantity}</td>
                  <td>${formatPrice(item.price)}</td>
                  <td>${formatPrice(item.price * item.quantity)}</td>
              </tr>
              `).join('')}
          </tbody>
      </table>

      <div class="totals">
          <div class="total-line">
              <span>Subtotal Productos:</span>
              <span>${formatPrice(order.totals.subtotal)}</span>
          </div>
          <div class="total-line">
              <span>Costo de Domicilio:</span>
              <span>${order.totals.delivery === 0 ? 'GRATIS' : formatPrice(order.totals.delivery)}</span>
          </div>
          <div class="total-line final-total">
              <span>TOTAL A PAGAR:</span>
              <span>${formatPrice(order.totals.total)}</span>
          </div>
      </div>

      <div class="qr-section">
          <h3>CÓDIGO DE VALIDACIÓN</h3>
          <div class="qr-code">${order.qrCode}</div>
          <p><strong>IMPORTANTE:</strong> Muestra este código al domiciliario para validar tu compra</p>
          <p>Este código será enviado también a tu WhatsApp</p>
      </div>

      <div class="footer">
          <p><strong>¡GRACIAS POR TU COMPRA!</strong></p>
          <p>Tiempo estimado de entrega: ${order.customer.neighborhood === 'Centro' ? '30-45' : '45-75'} minutos</p>
          <p>Agro Mercado Digital de Quibdó - Conectando productores locales con familias chocoanas</p>
          <div class="no-print" style="margin-top: 20px;">
              <button onclick="window.print()" style="background: #16a34a; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
                  🖨️ Imprimir Factura
              </button>
              <button onclick="window.close()" style="background: #666; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px;">
                  Cerrar
              </button>
          </div>
      </div>
  </body>
  </html>
  `;
  
  // Open new window with invoice
  const invoiceWindow = window.open('', '_blank');
  invoiceWindow.document.write(invoiceHTML);
  invoiceWindow.document.close();
  
  // Auto-print after 1 second
  setTimeout(() => {
    invoiceWindow.print();
  }, 1000);
}

function sendWhatsApp(order) {
  const message = `
🌱 *FACTURA AGRO MERCADO DE QUIBDÓ*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 *Factura:* ${order.number}
📅 *Fecha:* ${order.date}

👤 *DATOS DEL CLIENTE*
• Nombre: ${order.customer.name}
• Teléfono: ${order.customer.phone}
• Email: ${order.customer.email || 'No proporcionado'}

📍 *DIRECCIÓN DE ENTREGA*
${order.fullAddress}

🛍️ *PRODUCTOS*
${order.products.map(item => 
  `• ${item.name}
  Cantidad: ${item.quantity}
  Precio unitario: ${formatPrice(item.price)}
  Subtotal: ${formatPrice(item.price * item.quantity)}`
).join('\n\n')}

💰 *RESUMEN DE COMPRA*
• Subtotal: ${formatPrice(order.totals.subtotal)}
• Domicilio: ${order.totals.delivery === 0 ? 'GRATIS' : formatPrice(order.totals.delivery)}
• *TOTAL: ${formatPrice(order.totals.total)}*

💳 *Método de pago:* ${order.customer.paymentMethod}

${order.customer.notes ? `📝 *Notas adicionales:* ${order.customer.notes}` : ''}

🔐 *CÓDIGO DE VALIDACIÓN QR:*
*${order.qrCode}*

📋 *INSTRUCCIONES:*
• Muestra este código al domiciliario para validar tu compra
• Mantén tu teléfono disponible para coordinación
• Tiempo estimado: ${order.customer.neighborhood === 'Centro' ? '30-45' : '45-75'} minutos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
¡Gracias por tu compra! 🌱
*Agro Mercado Digital de Quibdó*
Productos frescos del Pacífico colombiano
  `.trim();
  
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${CONFIG.whatsapp.replace('+', '')}?text=${encodedMessage}`;
  console.log('Enviando WhatsApp a:', CONFIG.whatsapp);
  
  window.open(whatsappUrl, '_blank');
}

function sendEmail(order) {
  const subject = encodeURIComponent(`💰 NUEVO INGRESO MONETARIO - Mercado Quibdó - ${formatPrice(order.totals.total)} - ${order.customer.name}`);
  
  const body = `
💰 REGISTRO DE INGRESO MONETARIO - MERCADO DE QUIBDÓ
═══════════════════════════════════════════════════

🔔 NUEVO INGRESO REGISTRADO

📋 INFORMACIÓN DE LA VENTA:
• Factura: ${order.number}
• Fecha y Hora: ${order.date}
• Atendido por: ${CONFIG.creadores.join(', ')}

👤 DATOS DEL CLIENTE:
• Nombre: ${order.customer.name}
• Teléfono: ${order.customer.phone}
• Email: ${order.customer.email || 'No proporcionado'}
• Dirección: ${order.fullAddress}
• Método de pago: ${order.customer.paymentMethod}

🛍️ PRODUCTOS VENDIDOS:
${order.products.map((item, index) => 
  `${index + 1}. ${item.name}
     - Cantidad: ${item.quantity}
     - Precio unitario: ${formatPrice(item.price)}
     - Subtotal: ${formatPrice(item.price * item.quantity)}`
).join('\n')}

💵 RESUMEN FINANCIERO:
• Subtotal productos: ${formatPrice(order.totals.subtotal)}
• Costo domicilio: ${order.totals.delivery === 0 ? 'GRATIS' : formatPrice(order.totals.delivery)}
• TOTAL INGRESADO: ${formatPrice(order.totals.total)}

🔐 CÓDIGO DE VALIDACIÓN QR: ${order.qrCode}

${order.customer.notes ? `📝 NOTAS ADICIONALES: ${order.customer.notes}` : ''}

📊 DATOS PARA CONTABILIDAD:
• Monto bruto: ${formatPrice(order.totals.total)}
• Fecha contable: ${new Date().toLocaleDateString('es-CO')}
• Método de pago: ${order.customer.paymentMethod}
• Barrio entrega: ${order.customer.neighborhood}

═══════════════════════════════════════════════════
🌱 Agro Mercado Digital de Quibdó
📧 Sistema Automatizado de Registro de Ingresos
📱 WhatsApp: ${CONFIG.whatsapp}
  `.trim();
  
  const encodedBody = encodeURIComponent(body);
  const emailUrl = `mailto:alrxandermaturana76@gmail.com?subject=${subject}&body=${encodedBody}`;
  
  console.log('Enviando email de ingreso monetario a: alrxandermaturana76@gmail.com');
  console.log('Monto total:', formatPrice(order.totals.total));
  
  window.open(emailUrl, '_blank');
}

// ===== FUNCIONES DE LOGIN =====
function openLogin() {
  const loginModal = document.getElementById('login-modal');
  const overlay = document.getElementById('overlay');
  
  if (loginModal) loginModal.classList.add('show');
  if (overlay) overlay.classList.remove('hidden');
}

function closeLogin() {
  const loginModal = document.getElementById('login-modal');
  const overlay = document.getElementById('overlay');
  
  if (loginModal) loginModal.classList.remove('show');
  if (overlay) overlay.classList.add('hidden');
}

function showLoginForm() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  if (loginForm) loginForm.classList.remove('hidden');
  if (registerForm) registerForm.classList.add('hidden');
}

function showRegisterForm() {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  if (loginForm) loginForm.classList.add('hidden');
  if (registerForm) registerForm.classList.remove('hidden');
}

function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  
  console.log('Intentando login:', email);
  
  if (!email || !password) {
    showNotification('Por favor completa todos los campos', 'error');
    return;
  }
  
  // Simulate login
  const userData = {
    id: generateId(),
    name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
    email: email,
    loginDate: new Date().toISOString()
  };
  
  console.log('Usuario creado:', userData);
  saveUser(userData);
  updateUserDisplay();
  closeLogin();
  showNotification('Sesión iniciada correctamente', 'success');
}

function handleRegister(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const password = formData.get('password');
  
  console.log('Intentando registro:', { name, email, phone });
  
  if (!name || !email || !phone || !password) {
    showNotification('Por favor completa todos los campos', 'error');
    return;
  }
  
  if (password.length < 6) {
    showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
    return;
  }
  
  // Simulate registration
  const userData = {
    id: generateId(),
    name: name,
    email: email,
    phone: phone,
    registerDate: new Date().toISOString()
  };
  
  console.log('Usuario registrado:', userData);
  saveUser(userData);
  updateUserDisplay();
  closeLogin();
  showNotification('Cuenta creada exitosamente', 'success');
}

function logout() {
  console.log('Cerrando sesión');
  user = null;
  localStorage.removeItem('agro-mercado-user');
  updateUserDisplay();
  showNotification('Sesión cerrada correctamente', 'info');
}

function closeAll() {
  closeCart();
  closeCheckout();
  closeLogin();
}

// ===== FUNCIONES DE INICIALIZACIÓN =====
function renderBarriosList() {
  const barriosList = document.getElementById('barrios-list');
  if (barriosList) {
    barriosList.innerHTML = CONFIG.barrios.map(barrio => `
      <div class="zone-item">
        📍
        <div class="zone-info">
          <span class="zone-name">${barrio.nombre}</span>
          <p class="zone-cost">Costo: ${barrio.costoEnvio === 0 ? 'Gratis' : formatPrice(barrio.costoEnvio)}</p>
        </div>
      </div>
    `).join('');
  }
}

function setupScrollToTop() {
  const scrollBtn = document.getElementById('scroll-top-btn');
  
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        scrollBtn.classList.remove('hidden');
      } else {
        scrollBtn.classList.add('hidden');
      }
    });
  }
}

function initializeApp() {
  console.log('🏪 Inicializando Mercado de Quibdó...');
  
  // Load data from localStorage
  loadCart();
  loadUser();
  
  // Render productos destacados (solo los primeros 15)
  const featuredProducts = getFeaturedProducts();
  renderProducts(featuredProducts, 'products-grid');
  console.log('Productos destacados renderizados:', featuredProducts.length);
  
  // Render offers
  const offerProducts = getProductsWithDiscounts();
  renderProducts(offerProducts, 'offers-grid');
  console.log('Ofertas renderizadas:', offerProducts.length);
  
  // Render barrios list
  renderBarriosList();
  
  // Setup scroll to top
  setupScrollToTop();
  
  // Update user display
  updateUserDisplay();
  
  console.log('✅ Mercado de Quibdó inicializado correctamente');
  console.log(`📦 Total productos disponibles: ${sampleProducts.length}`);
  console.log(`⭐ Productos destacados: ${featuredProducts.length}`);
  console.log(`💰 Productos en oferta: ${offerProducts.length}`);
}

// ===== FUNCIONES GLOBALES PARA HTML =====
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.openCart = openCart;
window.closeCart = closeCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.goToStep1 = goToStep1;
window.goToStep2 = goToStep2;
window.finalizeOrder = finalizeOrder;
window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.showLoginForm = showLoginForm;
window.showRegisterForm = showRegisterForm;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.logout = logout;
window.navigateToSection = navigateToSection;
window.filterByCategory = filterByCategory;
window.resetCategoryFilter = resetCategoryFilter;
window.scrollToTop = scrollToTop;
window.closeAll = closeAll;

// ===== FUNCIÓN PARA AGREGAR NUEVOS PRODUCTOS =====
window.addNewProduct = function(productData) {
  // Función helper para agregar productos fácilmente
  sampleProducts.push(productData);
  console.log('Nuevo producto agregado:', productData);
  
  // Re-renderizar si estamos en la página principal
  if (!selectedCategory) {
    const featuredProducts = getFeaturedProducts();
    renderProducts(featuredProducts, 'products-grid');
  }
};

// ===== INICIALIZACIÓN AL CARGAR LA PÁGINA =====
document.addEventListener('DOMContentLoaded', initializeApp);