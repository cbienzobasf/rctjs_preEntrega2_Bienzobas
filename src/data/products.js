// Array de productos mock para simular una base de datos
const products = [
  // Sección de productos de la categoría Invitaciones
  {
    id: "inv1", // Identificador único del producto
    name: "Invitación Elegante Dorada", // Nombre del producto
    description: "Invitación de boda en papel perlado con detalles en dorado y caligrafía moderna", // Descripción detallada
    category: "Invitaciones", // Categoría del producto para filtrado
    price: 2500, // Precio por invitación
    stock: 8, // Stock fijo aleatorio
    images: [ // Array con rutas locales de las imágenes del producto
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv1-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv1-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv1-3.webp"
    ]
  },
  {
    id: "inv2",
    name: "Invitación Rústica",
    description: "Invitación estilo rústico en papel kraft con encaje y cordel",
    category: "Invitaciones",
    price: 2000,
    stock: 5, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv2-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv2-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv2-3.webp"
    ]
  },
  {
    id: "inv3",
    name: "Invitación Minimalista",
    description: "Diseño limpio y moderno en papel mate con tipografía simple",
    category: "Invitaciones",
    price: 1800,
    stock: 10, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv3-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv3-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv3-3.webp"
    ]
  },
  {
    id: "inv4",
    name: "Invitación Floral",
    description: "Diseño con motivos florales en acuarela y papel texturizado",
    category: "Invitaciones",
    price: 3000,
    stock: 3, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv4-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv4-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv4-3.webp"
    ]
  },
  {
    id: "inv5",
    name: "Invitación Digital",
    description: "Invitación digital personalizada para envío por WhatsApp o email",
    category: "Invitaciones",
    price: 1500,
    stock: 15, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv5-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv5-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/invitaciones/inv5-3.webp"
    ]
  },

  // Decoración
  {
    id: "dec1",
    name: "Centro de Mesa Floral",
    description: "Arreglo floral con rosas y velas para centro de mesa",
    category: "Decoración",
    price: 45000, // Centro de mesa floral
    stock: 6, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec1-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec1-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec1-3.webp"
    ]
  },
  {
    id: "dec2",
    name: "Cortina de Luces LED",
    description: "Cortina de luces LED blancas cálidas de 3x3 metros",
    category: "Decoración",
    price: 35000, // Cortina de luces LED
    stock: 4, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec2-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec2-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec2-3.webp"
    ]
  },
  {
    id: "dec3",
    name: "Set de Velas Aromáticas",
    description: "Set de 10 velas aromáticas en recipientes de cristal",
    category: "Decoración",
    price: 28000, // Set de velas aromáticas
    stock: 7, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec3-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec3-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec3-3.webp"
    ]
  },
  {
    id: "dec4",
    name: "Camino de Mesa",
    description: "Camino de mesa en tela de encaje blanco de 3 metros",
    category: "Decoración",
    price: 25000, // Camino de mesa
    stock: 9, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec4-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec4-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec4-3.webp"
    ]
  },
  {
    id: "dec5",
    name: "Arco Decorativo",
    description: "Arco decorativo de flores artificiales y tela",
    category: "Decoración",
    price: 120000, // Arco decorativo
    stock: 2, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec5-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec5-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/decoracion/dec5-3.webp"
    ]
  },

  // Recuerdos
  {
    id: "rec1",
    name: "Mini Suculentas",
    description: "Pequeñas suculentas en macetas decorativas",
    category: "Recuerdos",
    price: 3500, // Mini suculentas
    stock: 20, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec1-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec1-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec1-3.webp"
    ]
  },
  {
    id: "rec2",
    name: "Jabones Artesanales",
    description: "Jabones aromáticos decorativos en caja personalizada",
    category: "Recuerdos",
    price: 4000, // Jabones artesanales
    stock: 15, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec2-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec2-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec2-3.webp"
    ]
  },
  {
    id: "rec3",
    name: "Velas Personalizadas",
    description: "Velas pequeñas con nombres de invitados",
    category: "Recuerdos",
    price: 2500, // Velas personalizadas
    stock: 25, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec3-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec3-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec3-3.webp"
    ]
  },
  {
    id: "rec4",
    name: "Llaveros Personalizados",
    description: "Llaveros grabados con fecha de la boda",
    category: "Recuerdos",
    price: 3000, // Llaveros personalizados
    stock: 30, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec4-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec4-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec4-3.webp"
    ]
  },
  {
    id: "rec5",
    name: "Bolsas de Confeti",
    description: "Bolsitas de confeti biodegradable",
    category: "Recuerdos",
    price: 1500, // Bolsas de confeti
    stock: 40, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec5-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec5-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/recuerdos/rec5-3.webp"
    ]
  },

  // Accesorios
  {
    id: "acc1",
    name: "Tiara de Novia",
    description: "Tiara de cristales y perlas para novia",
    category: "Accesorios",
    price: 85000, // Tiara de novia
    stock: 3, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc1-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc1-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc1-3.webp"
    ]
  },
  {
    id: "acc2",
    name: "Set de Copas",
    description: "Set de copas decoradas para novios",
    category: "Accesorios",
    price: 45000, // Set de copas
    stock: 5, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc2-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc2-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc2-3.webp"
    ]
  },
  {
    id: "acc3",
    name: "Cojín para Anillos",
    description: "Cojín bordado para anillos de boda",
    category: "Accesorios",
    price: 25000, // Cojín para anillos
    stock: 8, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc3-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc3-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc3-3.webp"
    ]
  },
  {
    id: "acc4",
    name: "Liga de Novia",
    description: "Liga de encaje con detalles en azul",
    category: "Accesorios",
    price: 15000, // Liga de novia
    stock: 12, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc4-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc4-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc4-3.webp"
    ]
  },
  {
    id: "acc5",
    name: "Ramo de Novia",
    description: "Ramo artificial de rosas blancas y rosadas",
    category: "Accesorios",
    price: 95000, // Ramo de novia
    stock: 4, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc5-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc5-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/accesorios/acc5-3.webp"
    ]
  },

  // Iluminación
  {
    id: "ilu1",
    name: "Guirnalda de Luces",
    description: "Guirnalda de luces LED blancas de 10 metros",
    category: "Iluminación",
    price: 29990, // Guirnalda de luces
    stock: 10, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu1-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu1-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu1-3.webp"
    ]
  },
  {
    id: "ilu2",
    name: "Farolillos Colgantes",
    description: "Set de 10 farolillos de papel con LED",
    category: "Iluminación",
    price: 45000, // Farolillos colgantes
    stock: 6, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu2-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu2-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu2-3.webp"
    ]
  },
  {
    id: "ilu3",
    name: "Velas LED Recargables",
    description: "Pack de 20 velas LED con control remoto",
    category: "Iluminación",
    price: 38000, // Velas LED recargables
    stock: 8, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu3-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu3-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu3-3.webp"
    ]
  },
  {
    id: "ilu4",
    name: "Proyector de Luz",
    description: "Proyector LED con patrones personalizables",
    category: "Iluminación",
    price: 75000, // Proyector de luz
    stock: 3, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu4-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu4-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu4-3.webp"
    ]
  },
  {
    id: "ilu5",
    name: "Tira LED RGB",
    description: "Tira LED de 5 metros con cambio de colores",
    category: "Iluminación",
    price: 42000, // Tira LED RGB
    stock: 7, // Stock fijo aleatorio
    images: [
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu5-1.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu5-2.webp",
      "/rctjs_preEntrega1_Bienzobas/processed_images/iluminacion/ilu5-3.webp"
    ]
  }
];

// Exportamos el array de productos para su uso en otros componentes
export default products; 