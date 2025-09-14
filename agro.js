// ===== AGRO MERCADO DIGITAL DE QUIBDÓ - JAVASCRIPT COMPLETO FUNCIONAL =====
// Sistema completo con facturación automática, QR, checkout y notificaciones
// JavaScript puro con todas las funcionalidades, botones corregidos y carrito mejorado
// Adaptado para todas las subpáginas con estilos consistentes

console.log('🚀 Iniciando Mercado de Quibdó - Versión Completa Funcional y Estilizada');

// ===== CONFIGURACIÓN DEL SISTEMA ACTUALIZADA =====
const CONFIG = {
  whatsapp: '+573226654844',           // WhatsApp del negocio desde HTML
  whatsappBusiness: '+573226654844',   // Número principal de negocio
  email: 'alrxandermaturana76@gmail.com', // Email principal desde HTML
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

// ===== DATOS COMPLETOS DE PRODUCTOS DEL MERCADO DE QUIBDÓ =====
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
        inStock: true
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
    // ===== PRODUCTOS ADICIONALES =====
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

// ===== FUNCIONES DE NOTIFICACIÓN =====
function showNotification(message, type = 'info') {
  console.log(`📢 Notificación ${type}: ${message}`);
  
  // Remover notificación existente
  const existingNotification = document.getElementById('notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Crear nueva notificación
  const notification = document.createElement('div');
  notification.id = 'notification';
  notification.className = `notification ${type}`;
  notification.textContent = message;
  
  // Estilos específicos según tipo
  const colors = {
    success: { bg: '#16a34a', color: 'white' },
    error: { bg: '#dc2626', color: 'white' },
    info: { bg: '#2563eb', color: 'white' }
  };
  
  const style = colors[type] || colors.info;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    background: ${style.bg};
    color: ${style.color};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    font-weight: 500;
    max-width: 300px;
  `;
  
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

// ===== FUNCIONES DE MODAL =====
function openLogin() {
  console.log('🔐 Abriendo modal de login');
  
  const loginModal = document.getElementById('login-modal');
  const overlay = document.getElementById('overlay');
  
  if (loginModal) {
    loginModal.classList.remove('hidden');
    loginModal.classList.add('show');
    loginModal.style.display = 'flex';
    console.log('✅ Modal de login abierto');
  } else {
    console.error('❌ No se encontró el modal de login con ID: login-modal');
    showNotification('Error: No se pudo abrir el login', 'error');
    return;
  }
  
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.classList.add('show');
    overlay.style.display = 'block';
  } else {
    console.warn('⚠️ No se encontró overlay');
  }
  
  // Mostrar formulario de login por defecto
  showLoginForm();
  showNotification('Modal de login abierto', 'info');
}

function closeLogin() {
  console.log('🔐 Cerrando modal de login');
  
  const loginModal = document.getElementById('login-modal');
  const overlay = document.getElementById('overlay');
  
  if (loginModal) {
    loginModal.classList.add('hidden');
    loginModal.classList.remove('show');
    loginModal.style.display = 'none';
  }
  
  if (overlay) {
    overlay.classList.add('hidden');
    overlay.classList.remove('show');
    overlay.style.display = 'none';
  }
  
  console.log('✅ Modal de login cerrado');
}

function showLoginForm() {
  console.log('📝 Mostrando formulario de login');
  
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  if (loginForm) {
    loginForm.classList.remove('hidden');
    loginForm.style.display = 'block';
  }
  
  if (registerForm) {
    registerForm.classList.add('hidden');
    registerForm.style.display = 'none';
  }
}

function showRegisterForm() {
  console.log('📝 Mostrando formulario de registro');
  
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  
  if (loginForm) {
    loginForm.classList.add('hidden');
    loginForm.style.display = 'none';
  }
  
  if (registerForm) {
    registerForm.classList.remove('hidden');
    registerForm.style.display = 'block';
  }
}

// ===== FUNCIONES DE CARRITO =====
function openCart() {
  console.log('🛒 Abriendo carrito');
  
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');
  
  if (cartSidebar) {
    cartSidebar.classList.add('open');
    console.log('✅ Carrito abierto');
  } else {
    console.error('❌ No se encontró el carrito con ID: cart-sidebar');
    showNotification('Error: No se pudo abrir el carrito', 'error');
    return;
  }
  
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.classList.add('show');
    overlay.style.display = 'block';
  }
  
  updateCartDisplay();
  showNotification('Carrito abierto', 'info');
}

function closeCart() {
  console.log('🛒 Cerrando carrito');
  
  const cartSidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('overlay');
  
  if (cartSidebar) {
    cartSidebar.classList.remove('open');
  }
  
  if (overlay) {
    overlay.classList.add('hidden');
    overlay.classList.remove('show');
    overlay.style.display = 'none';
  }
  
  console.log('✅ Carrito cerrado');
}

function addToCart(productData) {
  console.log('🛒 Agregando producto al carrito:', productData);
  
  let product;
  
  // Si productData es un string (ID), buscar el producto
  if (typeof productData === 'string') {
    product = sampleProducts.find(p => p.id === productData);
  } else {
    // Si es un objeto, usarlo directamente
    product = productData;
  }
  
  if (!product) {
    console.error('❌ Producto no encontrado:', productData);
    showNotification('Producto no encontrado', 'error');
    return;
  }
  
  if (!product.inStock) {
    showNotification('Producto sin stock', 'error');
    return;
  }
  
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
    console.log('✅ Cantidad actualizada:', existingItem.quantity);
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
    console.log('✅ Nuevo producto agregado:', newItem);
  }
  
  saveCart();
  updateCartCounter();
  updateCartDisplay();
  showNotification(`${product.name} agregado al carrito`, 'success');
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
  showNotification('Producto eliminado del carrito', 'info');
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartDisplay();
  updateCartCounter();
  showNotification('Carrito vaciado', 'info');
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

function updateCartCounter() {
  const counter = document.getElementById('cart-count');
  if (counter) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    console.log('🔢 Total items en carrito:', totalItems);
    
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

function updateCartDisplay() {
  console.log('🔄 Actualizando display del carrito - Versión mejorada');
  
  // Buscar múltiples posibles contenedores para mayor compatibilidad
  const possibleContainers = [
    document.getElementById('cart-items'),
    document.getElementById('cart-body'),
    document.querySelector('.cart-content'),
    document.querySelector('.cart-sidebar .cart-content'),
    document.querySelector('#cart-sidebar .cart-content')
  ];
  
  let itemsContainer = possibleContainers.find(container => container !== null);
  
  // Si no encuentra contenedor, crear uno dinámicamente
  if (!itemsContainer) {
    const cartSidebar = document.getElementById('cart-sidebar');
    if (cartSidebar) {
      const cartContent = cartSidebar.querySelector('.cart-content') || cartSidebar;
      cartContent.innerHTML = `
        <div class="cart-header" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
          <h2 style="margin: 0; font-size: 1.125rem; font-weight: 600; color: #374151;">🛒 Mi Carrito</h2>
          <button class="cart-close" onclick="closeCart()" style="background: none; border: none; font-size: 1.25rem; color: #6b7280; cursor: pointer; width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; border-radius: 0.25rem;">✕</button>
        </div>
        <div class="cart-items-wrapper" style="flex: 1; overflow-y: auto; padding: 1rem;">
          <div id="cart-items"></div>
          <div class="cart-empty" style="display: none; text-align: center; padding: 3rem 1rem; color: #6b7280;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🛒</div>
            <p style="margin-bottom: 0.5rem; font-weight: 500;">Tu carrito está vacío</p>
            <p style="margin: 0; font-size: 0.875rem;">¡Agrega algunos productos frescos!</p>
          </div>
        </div>
        <div class="cart-footer" style="display: none; padding: 1rem; border-top: 1px solid #e5e7eb; background: #f9fafb;">
          <div class="cart-summary" style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: #6b7280;">Subtotal:</span>
              <span id="cart-subtotal" style="font-weight: 600;">$0</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-weight: 600; font-size: 1.125rem; color: #16a34a; border-top: 1px solid #e5e7eb; padding-top: 0.5rem;">
              <span>Total:</span>
              <span id="cart-total">$0</span>
            </div>
          </div>
          <div class="cart-actions" style="display: flex; gap: 0.5rem;">
            <button onclick="continueShopping()" class="btn-secondary" style="flex: 1; padding: 0.75rem; border: 1px solid #d1d5db; background: white; color: #374151; border-radius: 0.5rem; cursor: pointer; font-weight: 500; transition: all 0.2s ease;">
              🛍️ Seguir comprando
            </button>
            <button onclick="openCheckout()" class="btn-primary" style="flex: 2; padding: 0.75rem; background: #16a34a; color: white; border: none; border-radius: 0.5rem; cursor: pointer; font-weight: 500; transition: all 0.2s ease;">
              💳 Proceder al Checkout
            </button>
          </div>
          <button onclick="clearCart()" style="width: 100%; margin-top: 0.5rem; padding: 0.5rem; background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; border-radius: 0.5rem; cursor: pointer; font-size: 0.875rem; transition: all 0.2s ease;">
            🗑️ Vaciar carrito
          </button>
        </div>
      `;
      itemsContainer = document.getElementById('cart-items');
    }
  }
  
  if (!itemsContainer) {
    console.error('❌ No se pudo crear el contenedor del carrito');
    return;
  }
  
  const emptyMessage = document.querySelector('.cart-empty');
  const cartFooter = document.querySelector('.cart-footer');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartTotal = document.getElementById('cart-total');
  
  if (cart.length === 0) {
    itemsContainer.innerHTML = '';
    if (emptyMessage) emptyMessage.style.display = 'block';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }
  
  if (emptyMessage) emptyMessage.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';
  
  // Render cart items con estilos mejorados
  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item" style="
      display: flex; 
      gap: 1rem; 
      padding: 1rem; 
      border: 1px solid #e5e7eb; 
      border-radius: 0.75rem; 
      margin-bottom: 0.75rem; 
      align-items: center;
      background: white;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      transition: all 0.2s ease;
    ">
      <img 
        src="${item.image}" 
        alt="${item.name}" 
        style="
          width: 70px; 
          height: 70px; 
          object-fit: cover; 
          border-radius: 0.5rem; 
          flex-shrink: 0;
          border: 2px solid #f3f4f6;
        "
      >
      
      <div class="cart-item-info" style="flex: 1; min-width: 0;">
        <h4 style="
          font-weight: 600; 
          margin-bottom: 0.25rem; 
          overflow: hidden; 
          text-overflow: ellipsis; 
          white-space: nowrap;
          color: #374151;
          font-size: 0.95rem;
        ">${item.name}</h4>
        <p style="
          color: #16a34a; 
          font-weight: 600; 
          margin: 0;
          font-size: 0.875rem;
        ">${formatPrice(item.price)} c/u</p>
        <span style="
          color: #6b7280; 
          font-size: 0.75rem;
        ">${item.category || 'Producto'}</span>
      </div>
      
      <div class="cart-controls" style="
        display: flex; 
        align-items: center; 
        gap: 0.5rem;
        background: #f9fafb;
        padding: 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid #e5e7eb;
      ">
        <button 
          class="quantity-btn" 
          onclick="updateQuantity('${item.id}', ${item.quantity - 1})" 
          style="
            width: 2rem; 
            height: 2rem; 
            border-radius: 50%; 
            background: #f3f4f6; 
            border: 1px solid #d1d5db; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            cursor: pointer;
            font-weight: 600;
            color: #374151;
            transition: all 0.2s ease;
          "
          onmouseover="this.style.background='#e5e7eb'"
          onmouseout="this.style.background='#f3f4f6'"
        >−</button>
        
        <span style="
          min-width: 2.5rem; 
          text-align: center; 
          font-weight: 600;
          color: #16a34a;
          background: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          border: 1px solid #16a34a;
        ">${item.quantity}</span>
        
        <button 
          class="quantity-btn" 
          onclick="updateQuantity('${item.id}', ${item.quantity + 1})" 
          style="
            width: 2rem; 
            height: 2rem; 
            border-radius: 50%; 
            background: #16a34a; 
            border: 1px solid #16a34a; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            cursor: pointer;
            font-weight: 600;
            color: white;
            transition: all 0.2s ease;
          "
          onmouseover="this.style.background='#059669'"
          onmouseout="this.style.background='#16a34a'"
        >+</button>
      </div>
      
      <div style="text-align: right; min-width: 70px;">
        <div style="
          font-weight: 600; 
          color: #16a34a;
          font-size: 0.95rem;
          margin-bottom: 0.25rem;
        ">
          ${formatPrice(item.price * item.quantity)}
        </div>
        <button 
          onclick="removeFromCart('${item.id}')" 
          style="
            background: #fef2f2; 
            color: #dc2626; 
            border: 1px solid #fecaca; 
            border-radius: 0.375rem; 
            padding: 0.25rem 0.5rem;
            cursor: pointer; 
            font-size: 0.75rem;
            font-weight: 500;
            transition: all 0.2s ease;
          "
          onmouseover="this.style.background='#fee2e2'"
          onmouseout="this.style.background='#fef2f2'"
          title="Eliminar producto"
        >🗑️ Quitar</button>
      </div>
    </div>
  `).join('');
  
  // Update totals
  const subtotal = calculateSubtotal();
  if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotal);
  if (cartTotal) cartTotal.textContent = formatPrice(subtotal);
  
  console.log('✅ Display del carrito actualizado con estilos mejorados');
}

function saveCart() {
  localStorage.setItem('agro-mercado-cart', JSON.stringify(cart));
  console.log('💾 Carrito guardado en localStorage');
}

function loadCart() {
  const savedCart = localStorage.getItem('agro-mercado-cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCounter();
    console.log('📂 Carrito cargado desde localStorage:', cart.length, 'items');
  }
}

// ===== FUNCIONES DE MANEJO DE FORMULARIOS =====
function handleLogin(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  
  console.log('🔐 Procesando login para:', email);
  
  if (!email || !password) {
    showNotification('Por favor completa todos los campos', 'error');
    return;
  }
  
  // Simular login exitoso
  const userData = {
    id: generateId(),
    name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
    email: email,
    loginDate: new Date().toISOString()
  };
  
  user = userData;
  localStorage.setItem('agro-mercado-user', JSON.stringify(userData));
  
  console.log('✅ Login exitoso:', userData);
  closeLogin();
  showNotification('Sesión iniciada correctamente', 'success');
  updateUserDisplay();
}

function handleRegister(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const password = formData.get('password');
  
  console.log('📝 Procesando registro para:', name);
  
  if (!name || !email || !phone || !password) {
    showNotification('Por favor completa todos los campos', 'error');
    return;
  }
  
  if (password.length < 6) {
    showNotification('La contraseña debe tener al menos 6 caracteres', 'error');
    return;
  }
  
  // Simular registro exitoso
  const userData = {
    id: generateId(),
    name: name,
    email: email,
    phone: phone,
    registerDate: new Date().toISOString()
  };
  
  user = userData;
  localStorage.setItem('agro-mercado-user', JSON.stringify(userData));
  
  console.log('✅ Registro exitoso:', userData);
  closeLogin();
  showNotification('Cuenta creada exitosamente', 'success');
  updateUserDisplay();
}

function logout() {
  console.log('🚪 Cerrando sesión');
  
  user = null;
  localStorage.removeItem('agro-mercado-user');
  updateUserDisplay();
  showNotification('Sesión cerrada correctamente', 'info');
}

function updateUserDisplay() {
  const userSection = document.getElementById('user-section');
  const loginBtn = document.getElementById('login-btn');
  const userName = document.getElementById('user-name');
  
  console.log('👤 Actualizando display de usuario:', user);
  
  if (user && userSection && loginBtn && userName) {
    userName.textContent = user.name.split(' ')[0];
    userSection.classList.remove('hidden');
    userSection.style.display = 'flex';
    loginBtn.classList.add('hidden');
    loginBtn.style.display = 'none';
  } else if (userSection && loginBtn) {
    userSection.classList.add('hidden');
    userSection.style.display = 'none';
    loginBtn.classList.remove('hidden');
    loginBtn.style.display = 'flex';
  }
}

// ===== FUNCIONES DE NAVEGACIÓN =====
function navigateToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    console.log('🧭 Navegando a sección:', sectionId);
  } else {
    console.warn('⚠️ Sección no encontrada:', sectionId);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  console.log('🔝 Scrolling to top');
}

// ===== FUNCIONES DE PRODUCTOS =====
function getAllProducts() {
  return sampleProducts;
}

function getFeaturedProducts() {
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

// ===== FUNCIONES DE CHECKOUT =====
function openCheckout() {
  console.log('💳 Abriendo checkout mejorado');
  
  if (cart.length === 0) {
    showNotification('Tu carrito está vacío', 'error');
    return;
  }
  
  // Si no hay usuario, solicitar login primero
  if (!user) {
    showNotification('Por favor inicia sesión para continuar con tu pedido', 'info');
    closeCart();
    openLogin();
    return;
  }
  
  closeCart();
  
  // Crear o encontrar modal de checkout
  let checkoutModal = document.getElementById('checkout-modal');
  let overlay = document.getElementById('overlay');
  
  // Si no existe, crear modal dinámicamente
  if (!checkoutModal) {
    createCheckoutModal();
    checkoutModal = document.getElementById('checkout-modal');
  }
  
  // Si no existe overlay, crearlo
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 40;
      display: none;
    `;
    document.body.appendChild(overlay);
    
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        closeCheckout();
      }
    });
  }
  
  if (checkoutModal) {
    checkoutModal.classList.add('show');
    checkoutModal.style.display = 'flex';
    console.log('✅ Modal de checkout abierto');
  }
  
  if (overlay) {
    overlay.classList.remove('hidden');
    overlay.style.display = 'block';
  }
  
  initializeCheckout();
}

function createCheckoutModal() {
  console.log('🏗️ Creando modal de checkout dinámicamente');
  
  const checkoutHTML = `
    <div id="checkout-modal" class="modal" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 70;
      padding: 1rem;
    ">
      <div class="checkout-content" style="
        background: white;
        border-radius: 1rem;
        width: 100%;
        max-width: 600px;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      ">
        <!-- Header -->
        <div class="checkout-header" style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          background: linear-gradient(135deg, #16a34a, #059669);
          color: white;
          border-radius: 1rem 1rem 0 0;
        ">
          <h2 id="checkout-title" style="margin: 0; font-size: 1.25rem; font-weight: 600;">
            📋 Información de Entrega
          </h2>
          <button onclick="closeCheckout()" style="
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            transition: all 0.2s ease;
          ">✕</button>
        </div>
        
        <!-- Progress Indicator -->
        <div class="progress-indicator" style="
          display: flex;
          justify-content: center;
          padding: 1rem;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        ">
          <div class="progress-steps" style="display: flex; gap: 1rem; align-items: center;">
            <div class="step active" style="
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              background: #16a34a;
              color: white;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 600;
              font-size: 0.875rem;
            ">1</div>
            <div style="width: 2rem; height: 2px; background: #e5e7eb;"></div>
            <div class="step" style="
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              background: #e5e7eb;
              color: #6b7280;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 600;
              font-size: 0.875rem;
            ">2</div>
            <div style="width: 2rem; height: 2px; background: #e5e7eb;"></div>
            <div class="step" style="
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              background: #e5e7eb;
              color: #6b7280;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: 600;
              font-size: 0.875rem;
            ">3</div>
          </div>
        </div>
        
        <!-- Content -->
        <div class="checkout-body" style="padding: 1.5rem;">
          <!-- Step 1: Customer Information -->
          <div id="step-1" class="checkout-step">
            <div style="margin-bottom: 1.5rem;">
              <h3 style="margin-bottom: 0.5rem; color: #374151; font-size: 1.125rem;">
                👤 Información Personal
              </h3>
              <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">
                Completa tus datos para el envío
              </p>
            </div>
            
            <form id="checkout-form" style="display: grid; gap: 1rem;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                    Nombre completo *
                  </label>
                  <input 
                    type="text" 
                    id="customer-name" 
                    required
                    style="
                      width: 100%;
                      padding: 0.75rem;
                      border: 1px solid #d1d5db;
                      border-radius: 0.5rem;
                      font-size: 0.875rem;
                      transition: all 0.2s ease;
                      box-sizing: border-box;
                    "
                  >
                </div>
                <div class="form-group">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                    Email (opcional)
                  </label>
                  <input 
                    type="email" 
                    id="customer-email"
                    style="
                      width: 100%;
                      padding: 0.75rem;
                      border: 1px solid #d1d5db;
                      border-radius: 0.5rem;
                      font-size: 0.875rem;
                      transition: all 0.2s ease;
                      box-sizing: border-box;
                    "
                  >
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                    Teléfono *
                  </label>
                  <input 
                    type="tel" 
                    id="customer-phone" 
                    required
                    placeholder="+57 300 123 4567"
                    style="
                      width: 100%;
                      padding: 0.75rem;
                      border: 1px solid #d1d5db;
                      border-radius: 0.5rem;
                      font-size: 0.875rem;
                      transition: all 0.2s ease;
                      box-sizing: border-box;
                    "
                  >
                </div>
                <div class="form-group">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                    WhatsApp para QR *
                  </label>
                  <input 
                    type="tel" 
                    id="customer-whatsapp" 
                    required
                    placeholder="+57 300 123 4567"
                    style="
                      width: 100%;
                      padding: 0.75rem;
                      border: 1px solid #d1d5db;
                      border-radius: 0.5rem;
                      font-size: 0.875rem;
                      transition: all 0.2s ease;
                      box-sizing: border-box;
                    "
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                  Dirección completa *
                </label>
                <input 
                  type="text" 
                  id="customer-address" 
                  required
                  placeholder="Ej: Calle 25 #15-30, Casa azul"
                  style="
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    transition: all 0.2s ease;
                    box-sizing: border-box;
                  "
                >
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                    Barrio *
                  </label>
                  <select 
                    id="customer-neighborhood" 
                    required
                    style="
                      width: 100%;
                      padding: 0.75rem;
                      border: 1px solid #d1d5db;
                      border-radius: 0.5rem;
                      font-size: 0.875rem;
                      transition: all 0.2s ease;
                      box-sizing: border-box;
                      background: white;
                    "
                  >
                    <option value="">Selecciona tu barrio</option>
                  </select>
                </div>
                <div class="form-group">
                  <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                    Método de pago *
                  </label>
                  <select 
                    id="payment-method" 
                    required
                    style="
                      width: 100%;
                      padding: 0.75rem;
                      border: 1px solid #d1d5db;
                      border-radius: 0.5rem;
                      font-size: 0.875rem;
                      transition: all 0.2s ease;
                      box-sizing: border-box;
                      background: white;
                    "
                  >
                    <option value="">Selecciona método</option>
                    <option value="Efectivo">💵 Efectivo</option>
                    <option value="Transferencia">📱 Transferencia</option>
                    <option value="Nequi">📲 Nequi</option>
                    <option value="Daviplata">🏦 Daviplata</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: #374151;">
                  Notas adicionales (opcional)
                </label>
                <textarea 
                  id="customer-notes" 
                  rows="3"
                  placeholder="Instrucciones especiales, referencias del lugar, etc."
                  style="
                    width: 100%;
                    padding: 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    transition: all 0.2s ease;
                    box-sizing: border-box;
                    resize: vertical;
                  "
                ></textarea>
              </div>
              
              <div id="delivery-cost-info" style="margin-top: 1rem;">
                <!-- Se llena dinámicamente -->
              </div>
            </form>
            
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
              <button onclick="closeCheckout()" style="
                flex: 1;
                padding: 0.75rem;
                border: 1px solid #d1d5db;
                background: white;
                color: #374151;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s ease;
              ">
                ← Cancelar
              </button>
              <button onclick="goToStep2()" style="
                flex: 2;
                padding: 0.75rem;
                background: #16a34a;
                color: white;
                border: none;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s ease;
              ">
                Continuar → 
              </button>
            </div>
          </div>
          
          <!-- Step 2: Order Summary -->
          <div id="step-2" class="checkout-step" style="display: none;">
            <div style="margin-bottom: 1.5rem;">
              <h3 style="margin-bottom: 0.5rem; color: #374151; font-size: 1.125rem;">
                📋 Confirmación de Pedido
              </h3>
              <p style="color: #6b7280; font-size: 0.875rem; margin: 0;">
                Revisa tu pedido antes de confirmar
              </p>
            </div>
            
            <!-- Customer Info Summary -->
            <div style="background: #f9fafb; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
              <h4 style="margin-bottom: 0.5rem; color: #374151;">👤 Datos de entrega</h4>
              <div style="font-size: 0.875rem; color: #6b7280; line-height: 1.5;">
                <div><strong>Nombre:</strong> <span id="summary-name"></span></div>
                <div><strong>Teléfono:</strong> <span id="summary-phone"></span></div>
                <div><strong>WhatsApp:</strong> <span id="summary-whatsapp"></span></div>
                <div><strong>Email:</strong> <span id="summary-email"></span></div>
                <div><strong>Dirección:</strong> <span id="summary-address"></span></div>
                <div><strong>Pago:</strong> <span id="summary-payment"></span></div>
                <div id="summary-notes-wrapper" style="display: none;">
                  <strong>Notas:</strong> <span id="summary-notes"></span>
                </div>
              </div>
            </div>
            
            <!-- Order Items -->
            <div style="margin-bottom: 1rem;">
              <h4 style="margin-bottom: 0.5rem; color: #374151;">🛍️ Productos</h4>
              <div id="checkout-items" style="max-height: 200px; overflow-y: auto;">
                <!-- Se llena dinámicamente -->
              </div>
            </div>
            
            <!-- Order Totals -->
            <div style="background: #f0f9ff; border-radius: 0.5rem; padding: 1rem; margin-bottom: 1rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Subtotal productos:</span>
                <span id="checkout-subtotal">$0</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Costo de domicilio:</span>
                <span id="checkout-delivery">$0</span>
              </div>
              <div style="
                display: flex; 
                justify-content: space-between; 
                border-top: 2px solid #16a34a; 
                padding-top: 0.5rem; 
                font-weight: 600; 
                color: #16a34a;
                font-size: 1.125rem;
              ">
                <span>TOTAL:</span>
                <span id="checkout-total">$0</span>
              </div>
            </div>
            
            <div style="display: flex; gap: 1rem; margin-top: 2rem;">
              <button onclick="goToStep1()" style="
                flex: 1;
                padding: 0.75rem;
                border: 1px solid #d1d5db;
                background: white;
                color: #374151;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s ease;
              ">
                ← Editar
              </button>
              <button onclick="finalizeOrder()" style="
                flex: 2;
                padding: 0.75rem;
                background: #16a34a;
                color: white;
                border: none;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s ease;
              ">
                🚀 Confirmar Pedido
              </button>
            </div>
          </div>
          
          <!-- Step 3: Order Sent -->
          <div id="step-3" class="checkout-step" style="display: none;">
            <div style="text-align: center; padding: 2rem;">
              <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
              <h3 style="margin-bottom: 1rem; color: #16a34a;">¡Pedido Enviado!</h3>
              <p style="color: #6b7280; margin-bottom: 2rem;">
                Tu pedido ha sido procesado exitosamente. Hemos enviado toda la información 
                a nuestro equipo y tu código QR de validación a tu WhatsApp.
              </p>
              <div style="background: #f0f9ff; border-radius: 0.5rem; padding: 1rem; margin-bottom: 2rem;">
                <p style="margin: 0; font-size: 0.875rem; color: #374151;">
                  ⏰ <strong>Tiempo estimado de entrega:</strong> 30-75 minutos<br>
                  📱 <strong>Seguimiento:</strong> Recibirás un código QR en tu WhatsApp<br>
                  💳 <strong>Pago:</strong> Al momento de la entrega
                </p>
              </div>
              <button onclick="closeCheckout()" style="
                background: #16a34a;
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: 500;
                transition: all 0.2s ease;
              ">
                🏠 Volver al inicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', checkoutHTML);
  console.log('✅ Modal de checkout creado dinámicamente');
}

function closeCheckout() {
  console.log('💳 Cerrando checkout');
  
  const checkoutModal = document.getElementById('checkout-modal');
  const overlay = document.getElementById('overlay');
  
  if (checkoutModal) {
    checkoutModal.classList.remove('show');
    checkoutModal.style.display = 'none';
  }
  
  if (overlay) {
    overlay.classList.add('hidden');
    overlay.style.display = 'none';
  }
}

function initializeCheckout() {
  // Pre-llenar datos del usuario si existe
  if (user) {
    const nameField = document.getElementById('customer-name');
    const emailField = document.getElementById('customer-email');
    const phoneField = document.getElementById('customer-phone');
    
    if (nameField && user.name) nameField.value = user.name;
    if (emailField && user.email) emailField.value = user.email;
    if (phoneField && user.phone) phoneField.value = user.phone;
  }
  
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
    { id: 'customer-whatsapp', name: 'WhatsApp del cliente' },
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
  
  // Validación específica del WhatsApp
  const whatsappElement = document.getElementById('customer-whatsapp');
  if (whatsappElement && whatsappElement.value.trim()) {
    const whatsapp = whatsappElement.value.trim();
    if (whatsapp.length < 10 || !/^\d+$/.test(whatsapp.replace(/[\s\-\+\(\)]/g, ''))) {
      showNotification('Por favor ingresa un número de WhatsApp válido', 'error');
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
  const summaryWhatsapp = document.getElementById('summary-whatsapp');
  const summaryEmail = document.getElementById('summary-email');
  const summaryAddress = document.getElementById('summary-address');
  const summaryPayment = document.getElementById('summary-payment');
  
  if (summaryName) summaryName.textContent = document.getElementById('customer-name')?.value || '';
  if (summaryPhone) summaryPhone.textContent = document.getElementById('customer-phone')?.value || '';
  if (summaryWhatsapp) summaryWhatsapp.textContent = document.getElementById('customer-whatsapp')?.value || '';
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
      <div class="checkout-item" style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; margin-bottom: 0.5rem;">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 0.25rem;">
        <div style="flex: 1; display: flex; flex-direction: column;">
          <span style="font-weight: 600; margin-bottom: 0.25rem;">${item.name}</span>
          <span style="font-size: 0.875rem; color: #6b7280;">Cantidad: ${item.quantity}</span>
        </div>
        <span style="font-weight: 600; color: #16a34a;">${formatPrice(item.price * item.quantity)}</span>
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
    whatsapp: document.getElementById('customer-whatsapp')?.value || '',
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
  console.log('🔄 Procesando pedido:', customerData);
  console.log('🛒 Productos en carrito:', cart);
  
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
    products: [...cart],
    totals: totals,
    qrCode: qrCode,
    fullAddress: `${customerData.address}, ${customerData.neighborhood}, Quibdó, Chocó`
  };
  
  console.log('📋 Orden creada:', order);
  
  // Generate and open printable invoice
  generatePrintableInvoice(order);
  
  // Send to WhatsApp
  setTimeout(() => {
    sendWhatsApp(order);
  }, 1500);
  
  // Send email
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
  const totalItems = order.products.reduce((sum, item) => sum + item.quantity, 0);
  const totalProductTypes = order.products.length;
  
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
          .stats-section { background: #e6f7ff; padding: 15px; border-radius: 5px; margin-bottom: 20px; text-align: center; }
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
              <strong>WhatsApp Negocio:</strong> ${CONFIG.whatsappBusiness}<br>
              <strong>WhatsApp Soporte:</strong> ${CONFIG.whatsapp}<br>
              <strong>Email:</strong> ${CONFIG.email}<br>
              <strong>Quibdó, Chocó - Colombia</strong>
          </div>
      </div>

      <div class="stats-section">
          <h3>📊 RESUMEN DEL PEDIDO</h3>
          <strong>Total productos: ${totalItems} unidades</strong> | 
          <strong>Tipos diferentes: ${totalProductTypes}</strong> | 
          <strong>Valor total: ${formatPrice(order.totals.total)}</strong>
      </div>

      <div class="invoice-info">
          <div class="customer-info">
              <h3>INFORMACIÓN DEL CLIENTE</h3>
              <strong>Nombre:</strong> ${order.customer.name}<br>
              <strong>Teléfono:</strong> ${order.customer.phone}<br>
              <strong>WhatsApp:</strong> ${order.customer.whatsapp}<br>
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
          <p>Este código será enviado también a tu WhatsApp: ${order.customer.whatsapp}</p>
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
  const totalItems = order.products.reduce((sum, item) => sum + item.quantity, 0);
  const totalProductTypes = order.products.length;
  
  const message = `
🌱 *NUEVO PEDIDO - AGRO MERCADO DE QUIBDÓ*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 *Factura:* ${order.number}
📅 *Fecha:* ${order.date}
👥 *Atendido por:* ${CONFIG.creadores.join(', ')}

📊 *RESUMEN DEL PEDIDO*
🛍️ Total productos: *${totalItems} unidades*
📦 Tipos de productos: *${totalProductTypes} diferentes*
💰 Valor total: *${formatPrice(order.totals.total)}*

👤 *DATOS DEL CLIENTE*
• Nombre: ${order.customer.name}
• Teléfono: ${order.customer.phone}
• WhatsApp Cliente: ${order.customer.whatsapp}
• Email: ${order.customer.email || 'No proporcionado'}

📍 *DIRECCIÓN DE ENTREGA*
• Barrio: *${order.customer.neighborhood}*
• Dirección: ${order.customer.address}
• Ciudad: Quibdó, Chocó

🛍️ *DETALLE DE PRODUCTOS*
${order.products.map((item, index) => 
  `${index + 1}. *${item.name}*
   📦 Cantidad: ${item.quantity}
   💵 Precio unit: ${formatPrice(item.price)}
   💰 Subtotal: ${formatPrice(item.price * item.quantity)}`
).join('\n\n')}

💰 *RESUMEN FINANCIERO*
• Subtotal productos: ${formatPrice(order.totals.subtotal)}
• Costo domicilio: ${order.totals.delivery === 0 ? 'GRATIS' : formatPrice(order.totals.delivery)}
• *TOTAL A COBRAR: ${formatPrice(order.totals.total)}*

💳 *Método de pago:* ${order.customer.paymentMethod}

${order.customer.notes ? `📝 *Notas del cliente:* ${order.customer.notes}` : ''}

🔐 *CÓDIGO QR PARA CLIENTE:*
*${order.qrCode}*

📲 *INSTRUCCIONES:*
1. Enviar código QR al WhatsApp del cliente: ${order.customer.whatsapp}
2. Preparar pedido de ${totalItems} productos
3. Tiempo estimado: ${order.customer.neighborhood === 'Centro' ? '30-45' : '45-75'} minutos
4. Confirmar dirección al llegar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌱 *Agro Mercado Digital de Quibdó*
📱 WhatsApp: ${CONFIG.whatsappBusiness}
📧 Email: ${CONFIG.email}
Productos frescos del Pacífico colombiano
  `.trim();
  
  const encodedMessage = encodeURIComponent(message);
  
  // Enviar al WhatsApp principal del negocio (del HTML)
  const whatsappBusinessUrl = `https://wa.me/${CONFIG.whatsappBusiness.replace('+', '')}?text=${encodedMessage}`;
  console.log('📱 Enviando WhatsApp al negocio:', CONFIG.whatsappBusiness);
  
  // Abrir WhatsApp del negocio principal
  window.open(whatsappBusinessUrl, '_blank');
  
  // También enviar al WhatsApp de configuración (si es diferente)
  if (CONFIG.whatsapp !== CONFIG.whatsappBusiness) {
    setTimeout(() => {
      const whatsappConfigUrl = `https://wa.me/${CONFIG.whatsapp.replace('+', '')}?text=${encodedMessage}`;
      console.log('📱 Enviando también a WhatsApp alternativo:', CONFIG.whatsapp);
      window.open(whatsappConfigUrl, '_blank');
    }, 1000);
  }
  
  // Después de 2 segundos, enviar QR al cliente
  setTimeout(() => {
    sendQRToCustomer(order);
  }, 2000);
}

function sendQRToCustomer(order) {
  const customerMessage = `
🌱 *TU PEDIDO - MERCADO DE QUIBDÓ*
━━━━━━━━━━━━━━━━━━━━━━━━━━

¡Hola ${order.customer.name}! 👋

Tu pedido ha sido confirmado:
📋 *Número:* ${order.number}
🛍️ *Total productos:* ${order.products.reduce((sum, item) => sum + item.quantity, 0)} unidades
💰 *Total a pagar:* *${formatPrice(order.totals.total)}*

🔐 *TU CÓDIGO DE VALIDACIÓN:*
*${order.qrCode}*

📋 *IMPORTANTE:*
• Muestra este código al domiciliario
• Tiempo estimado: ${order.customer.neighborhood === 'Centro' ? '30-45' : '45-75'} minutos
• Método de pago: ${order.customer.paymentMethod}

¡Gracias por tu compra! 🌿
*Agro Mercado Digital de Quibdó*
  `.trim();
  
  const encodedCustomerMessage = encodeURIComponent(customerMessage);
  const customerWhatsappUrl = `https://wa.me/${order.customer.whatsapp.replace('+', '')}?text=${encodedCustomerMessage}`;
  
  console.log('📱 Enviando QR al cliente:', order.customer.whatsapp);
  window.open(customerWhatsappUrl, '_blank');
}

function sendEmail(order) {
  const totalItems = order.products.reduce((sum, item) => sum + item.quantity, 0);
  const totalProductTypes = order.products.length;
  
  const subject = encodeURIComponent(`💰 NUEVO INGRESO - ${formatPrice(order.totals.total)} - ${totalItems} productos - ${order.customer.name} - ${order.customer.neighborhood}`);
  
  const body = `
💰 REGISTRO DE INGRESO MONETARIO - MERCADO DE QUIBDÓ
═══════════════════════════════════════════════════

🔔 NUEVO INGRESO REGISTRADO

📊 RESUMEN EJECUTIVO:
• Total productos vendidos: ${totalItems} unidades
• Tipos de productos: ${totalProductTypes} diferentes
• Valor total ingresado: ${formatPrice(order.totals.total)}
• Barrio de entrega: ${order.customer.neighborhood}
• Cliente: ${order.customer.name}

📋 INFORMACIÓN DE LA VENTA:
• Factura: ${order.number}
• Fecha y Hora: ${order.date}
• Atendido por: ${CONFIG.creadores.join(', ')}

👤 DATOS DEL CLIENTE:
• Nombre: ${order.customer.name}
• Teléfono: ${order.customer.phone}
• WhatsApp: ${order.customer.whatsapp}
• Email: ${order.customer.email || 'No proporcionado'}
• Dirección completa: ${order.fullAddress}
• Método de pago: ${order.customer.paymentMethod}

🛍️ DETALLE DE PRODUCTOS VENDIDOS:
${order.products.map((item, index) => 
  `${index + 1}. ${item.name}
     - Cantidad: ${item.quantity}
     - Precio unitario: ${formatPrice(item.price)}
     - Subtotal: ${formatPrice(item.price * item.quantity)}`
).join('\n')}

💵 RESUMEN FINANCIERO DETALLADO:
• Subtotal productos: ${formatPrice(order.totals.subtotal)}
• Costo domicilio: ${order.totals.delivery === 0 ? 'GRATIS' : formatPrice(order.totals.delivery)}
• TOTAL INGRESADO: ${formatPrice(order.totals.total)}

🔐 CÓDIGO DE VALIDACIÓN QR: ${order.qrCode}
📱 WhatsApp cliente para QR: ${order.customer.whatsapp}
📱 WhatsApp negocio: ${CONFIG.whatsappBusiness}

${order.customer.notes ? `📝 NOTAS DEL CLIENTE: ${order.customer.notes}` : ''}

📊 DATOS PARA CONTABILIDAD:
• Monto bruto: ${formatPrice(order.totals.total)}
• Fecha contable: ${new Date().toLocaleDateString('es-CO')}
• Método de pago: ${order.customer.paymentMethod}
• Barrio entrega: ${order.customer.neighborhood}
• Costo envío aplicado: ${order.totals.delivery === 0 ? '0' : formatPrice(order.totals.delivery)}

📈 ESTADÍSTICAS DEL PEDIDO:
• Cantidad total de productos: ${totalItems}
• Productos únicos: ${totalProductTypes}
• Promedio por producto: ${formatPrice(order.totals.subtotal / totalItems)}
• Zona de entrega: ${order.customer.neighborhood}

═══════════════════════════════════════════════════
🌱 Agro Mercado Digital de Quibdó
📧 Sistema Automatizado de Registro de Ingresos
📱 WhatsApp Negocio: ${CONFIG.whatsappBusiness}
📱 WhatsApp Configuración: ${CONFIG.whatsapp}
📱 WhatsApp Cliente: ${order.customer.whatsapp}
📧 Email Principal: ${CONFIG.email}
  `.trim();
  
  const encodedBody = encodeURIComponent(body);
  
  // Enviar al email principal del sistema (del HTML)
  const emailUrl = `mailto:${CONFIG.email}?subject=${subject}&body=${encodedBody}`;
  
  console.log('📧 Enviando email de ingreso monetario a:', CONFIG.email);
  console.log('📊 Resumen del pedido:', {
    total: formatPrice(order.totals.total),
    productos: totalItems,
    tipos: totalProductTypes,
    barrio: order.customer.neighborhood,
    cliente: order.customer.name,
    whatsappNegocio: CONFIG.whatsappBusiness,
    whatsappCliente: order.customer.whatsapp,
    emailDestino: CONFIG.email
  });
  
  // Abrir cliente de email con toda la información
  window.open(emailUrl, '_blank');
  
  // Mostrar confirmación de envío
  setTimeout(() => {
    showNotification(`Email de registro enviado a ${CONFIG.email}`, 'success');
  }, 1000);
}

// ===== FUNCIONES DE CIERRE UNIVERSAL =====
function closeAll() {
  console.log('❌ Cerrando todos los modales');
  closeLogin();
  closeCart();
  closeCheckout();
}

// ===== CONFIGURACIÓN DE EVENT LISTENERS =====
function setupEventListeners() {
  console.log('🔧 Configurando event listeners...');
  
  // Configurar botón de login
  const loginBtnSelectors = ['#login-btn', '.login-btn', '[data-action="login"]'];
  
  loginBtnSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('🔑 Click en botón de login');
          openLogin();
        });
        console.log(`✅ Listener agregado a: ${selector}`);
      }
    });
  });
  
  // Configurar botón de carrito
  const cartBtnSelectors = ['#cart-btn', '.cart-button', '[data-action="cart"]'];
  
  cartBtnSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('🛒 Click en botón de carrito');
          openCart();
        });
        console.log(`✅ Listener agregado a: ${selector}`);
      }
    });
  });
  
  // Configurar botones de cerrar
  const closeBtnSelectors = ['.modal-close', '[data-action="close"]', '.cart-close'];
  
  closeBtnSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      if (element) {
        element.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('❌ Click en botón de cerrar');
          closeAll();
        });
        console.log(`✅ Listener de cierre agregado a: ${selector}`);
      }
    });
  });
  
  // Configurar overlay
  const overlay = document.getElementById('overlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        console.log('🌫️ Click en overlay - cerrando modales');
        closeAll();
      }
    });
    console.log('✅ Overlay configurado');
  }
  
  // Configurar tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      console.log('⌨️ Tecla ESC presionada - cerrando modales');
      closeAll();
    }
  });
  
  console.log('✅ Event listeners configurados completamente');
}

// ===== FUNCIONES DE INICIALIZACIÓN =====
function loadUserData() {
  const savedUser = localStorage.getItem('agro-mercado-user');
  if (savedUser) {
    user = JSON.parse(savedUser);
    updateUserDisplay();
    console.log('👤 Usuario cargado:', user.name);
  }
}

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
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.classList.add('hidden');
        scrollBtn.style.display = 'none';
      }
    });
  }
}

// ===== FUNCIÓN PARA CONTINUAR COMPRANDO =====
function continueShopping() {
  console.log('🛒 Continuar comprando - cerrando modales');
  closeCart();
  closeCheckout();
  closeLogin();
  navigateToSection('productos');
  showNotification('¡Sigue explorando nuestros productos frescos!', 'info');
}

function initializeApp() {
  console.log('🚀 Inicializando Mercado de Quibdó - Versión Completa y Universal...');
  
  try {
    // Cargar datos persistentes
    loadCart();
    loadUserData();
    
    // Detectar tipo de página
    const currentPage = detectCurrentPage();
    console.log('📄 Página detectada:', currentPage);
    
    // Render productos según la página
    renderProductsForCurrentPage(currentPage);
    
    // Render barrios list (si existe el contenedor)
    renderBarriosList();
    
    // Setup scroll to top
    setupScrollToTop();
    
    // Crear elementos del carrito si no existen
    ensureCartElements();
    
    // Configurar event listeners después de un pequeño delay
    setTimeout(() => {
      setupEventListeners();
    }, 100);
    
    // Verificar elementos críticos y crearlos si no existen
    ensureCriticalElements();
    
    // Update user display
    updateUserDisplay();
    
    console.log('✅ Mercado de Quibdó inicializado correctamente');
    console.log(`📦 Total productos disponibles: ${sampleProducts.length}`);
    console.log(`🛒 Items en carrito: ${cart.length}`);
    console.log(`👤 Usuario: ${user ? user.name : 'No logueado'}`);
    console.log(`📱 WhatsApp negocio: ${CONFIG.whatsappBusiness}`);
    console.log(`📧 Email: ${CONFIG.email}`);
    
    // Mostrar notificación de bienvenida adaptada
    setTimeout(() => {
      const welcomeMessage = getWelcomeMessage(currentPage);
      showNotification(welcomeMessage, 'success');
    }, 1000);
    
  } catch (error) {
    console.error('❌ Error durante la inicialización:', error);
    showNotification('Error al inicializar la aplicación', 'error');
  }
}

function detectCurrentPage() {
  const url = window.location.pathname.toLowerCase();
  const title = document.title.toLowerCase();
  
  if (url.includes('frutas') || title.includes('frutas')) return 'frutas';
  if (url.includes('verduras') || title.includes('verduras')) return 'verduras';
  if (url.includes('pescados') || title.includes('pescados')) return 'pescados';
  if (url.includes('granos') || title.includes('granos')) return 'granos';
  if (url.includes('especias') || title.includes('especias')) return 'especias';
  if (url.includes('lacteos') || title.includes('lacteos')) return 'lacteos';
  
  return 'principal';
}

function renderProductsForCurrentPage(currentPage) {
  // Render productos según la página actual
  if (currentPage === 'principal') {
    // Página principal - productos destacados
    const featuredProducts = getFeaturedProducts();
    renderProducts(featuredProducts, 'products-grid');
    console.log('📦 Productos destacados renderizados:', featuredProducts.length);
    
    // Render ofertas si existe el contenedor
    const offerProducts = getProductsWithDiscounts();
    renderProducts(offerProducts, 'offers-grid');
    console.log('💰 Ofertas renderizadas:', offerProducts.length);
  } else {
    // Página de categoría específica
    const categoryProducts = getProductsByCategory(mapPageToCategory(currentPage));
    renderProducts(categoryProducts, 'products-grid');
    console.log(`📦 Productos de ${currentPage} renderizados:`, categoryProducts.length);
  }
}

function mapPageToCategory(page) {
  const categoryMap = {
    'frutas': 'Frutas',
    'verduras': 'Verduras', 
    'pescados': 'Pescados',
    'granos': 'Granos',
    'especias': 'Especias',
    'lacteos': 'Lácteos'
  };
  return categoryMap[page] || 'Frutas';
}

function getWelcomeMessage(currentPage) {
  const messages = {
    'principal': '¡Bienvenido al Mercado de Quibdó!',
    'frutas': '🍌 ¡Frutas frescas del Chocó!',
    'verduras': '🥕 ¡Verduras orgánicas y nutritivas!',
    'pescados': '🐟 ¡Pescados frescos del Pacífico!',
    'granos': '🌾 ¡Granos de alta calidad!',
    'especias': '🌿 ¡Especias naturales del Chocó!',
    'lacteos': '🧀 ¡Productos lácteos artesanales!'
  };
  return messages[currentPage] || '¡Bienvenido al Mercado de Quibdó!';
}

function ensureCartElements() {
  console.log('🔧 Verificando elementos del carrito...');
  
  // Asegurar que existe el sidebar del carrito
  if (!document.getElementById('cart-sidebar')) {
    const cartSidebar = document.createElement('div');
    cartSidebar.id = 'cart-sidebar';
    cartSidebar.className = 'cart-sidebar';
    
    // Detectar si es móvil
    const isMobile = window.innerWidth <= 768;
    const cartWidth = isMobile ? '100%' : '400px';
    
    cartSidebar.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: ${cartWidth};
      height: 100vh;
      background: white;
      box-shadow: -10px 0 25px -5px rgba(0, 0, 0, 0.1);
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 60;
      display: flex;
      flex-direction: column;
    `;
    
    // Añadir clase CSS para responsividad
    cartSidebar.classList.add('cart-sidebar-responsive');
    
    document.body.appendChild(cartSidebar);
    console.log('✅ Cart sidebar creado dinámicamente con responsividad');
  }
  
  // Asegurar que existe el overlay
  if (!document.getElementById('overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.className = 'hidden';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 40;
      display: none;
    `;
    document.body.appendChild(overlay);
    console.log('✅ Overlay creado dinámicamente');
  }
}

function ensureCriticalElements() {
  const criticalElements = ['#cart-sidebar', '#overlay'];
  
  criticalElements.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      console.log(`✅ Elemento encontrado: ${selector}`);
    } else {
      console.warn(`⚠️ Elemento faltante: ${selector}`);
      
      // Crear elementos faltantes si es necesario
      if (selector === '#cart-sidebar') {
        ensureCartElements();
      }
    }
  });
  
  console.log('✅ Verificación de elementos críticos completada');
}

// ===== FUNCIONES GLOBALES PARA HTML =====
// Hacer funciones disponibles globalmente para los onclick del HTML
window.openLogin = openLogin;
window.closeLogin = closeLogin;
window.showLoginForm = showLoginForm;
window.showRegisterForm = showRegisterForm;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.logout = logout;
window.openCart = openCart;
window.closeCart = closeCart;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.openCheckout = openCheckout;
window.closeCheckout = closeCheckout;
window.goToStep1 = goToStep1;
window.goToStep2 = goToStep2;
window.finalizeOrder = finalizeOrder;
window.continueShopping = continueShopping;
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

// ===== INICIALIZACIÓN AUTOMÁTICA =====
document.addEventListener('DOMContentLoaded', function() {
  console.log('📄 DOM cargado - iniciando aplicación');
  initializeApp();
});

// Respaldo en caso de que DOMContentLoaded ya haya pasado
if (document.readyState === 'loading') {
  // Aún cargando, usar DOMContentLoaded
  console.log('⏳ Esperando que termine de cargar el DOM...');
} else {
  // DOM ya cargado
  console.log('⚡ DOM ya estaba cargado - iniciando inmediatamente');
  initializeApp();
}

// ===== ESTILOS CSS DINÁMICOS PARA MEJOR COMPATIBILIDAD =====
function injectResponsiveStyles() {
  // Solo inyectar estilos si no existen
  if (document.getElementById('mercado-responsive-styles')) return;
  
  const styles = `
    <style id="mercado-responsive-styles">
      /* Estilos responsivos para el carrito y checkout */
      @media (max-width: 768px) {
        .cart-sidebar {
          width: 100% !important;
        }
        
        .checkout-content {
          width: 95% !important;
          margin: 0.5rem !important;
        }
        
        .cart-item {
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 0.75rem !important;
        }
        
        .cart-controls {
          width: 100% !important;
          justify-content: space-between !important;
        }
        
        .checkout-step form {
          grid-template-columns: 1fr !important;
        }
        
        .checkout-step form > div[style*="grid-template-columns"] {
          grid-template-columns: 1fr !important;
        }
      }
      
      /* Animaciones suaves */
      .cart-sidebar.open {
        transform: translateX(0) !important;
      }
      
      .modal.show {
        opacity: 1 !important;
        visibility: visible !important;
      }
      
      /* Botones hover mejorados */
      .quantity-btn:hover {
        transform: scale(1.05);
      }
      
      .btn-primary:hover {
        background: #059669 !important;
        transform: translateY(-1px);
      }
      
      .btn-secondary:hover {
        background: #f3f4f6 !important;
        border-color: #9ca3af !important;
      }
      
      /* Notificaciones responsivas */
      @media (max-width: 480px) {
        .notification {
          right: 0.5rem !important;
          left: 0.5rem !important;
          max-width: none !important;
        }
      }
      
      /* Mejoras visuales */
      .cart-item:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
      }
      
      .product-btn:hover {
        background: #059669 !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);
      }
      
      /* Checkout modal responsivo */
      .checkout-content {
        max-height: 95vh !important;
        overflow-y: auto !important;
      }
      
      .progress-steps {
        flex-wrap: wrap !important;
        gap: 0.5rem !important;
      }
      
      /* Smooth scrolling para mejor UX */
      html {
        scroll-behavior: smooth;
      }
    </style>
  `;
  
  document.head.insertAdjacentHTML('beforeend', styles);
  console.log('✅ Estilos responsivos inyectados');
}

// ===== MANEJO DE EVENTOS DE REDIMENSIONAMIENTO =====
function handleWindowResize() {
  const cartSidebar = document.getElementById('cart-sidebar');
  if (cartSidebar) {
    const isMobile = window.innerWidth <= 768;
    cartSidebar.style.width = isMobile ? '100%' : '400px';
  }
}

// ===== INICIALIZACIÓN DE ESTILOS Y EVENTOS =====
document.addEventListener('DOMContentLoaded', function() {
  injectResponsiveStyles();
  window.addEventListener('resize', handleWindowResize);
});

// Inyectar estilos inmediatamente si el DOM ya está cargado
if (document.readyState !== 'loading') {
  injectResponsiveStyles();
  window.addEventListener('resize', handleWindowResize);
}

console.log('📜 JavaScript del Mercado de Quibdó cargado exitosamente - Versión Completa y Responsiva');
console.log('🎨 Incluye: Carrito mejorado, Checkout estilizado, WhatsApp y Email automáticos, Responsividad completa');
console.log('📱 Compatible con todas las subpáginas y dispositivos móviles');
console.log('🔧 Configuración actual:', {
  whatsappNegocio: CONFIG.whatsappBusiness,
  whatsappSoporte: CONFIG.whatsapp,
  email: CONFIG.email,
  creadores: CONFIG.creadores.length + ' personas'
});
