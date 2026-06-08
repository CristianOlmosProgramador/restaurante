// ============================================================================
//  CONFIGURACION CENTRAL DEL SITIO
// ----------------------------------------------------------------------------
//  Para personalizar el sitio de un cliente, SOLO se edita este archivo:
//  textos, datos de contacto, carta, galeria, testimonios y redes sociales.
// ============================================================================

export const config = {
  negocio: 'Mesa Nativa',
  slogan: 'Cocina chilena contemporanea, cafe de especialidad y sobremesa lenta',
  tipo: 'Restaurante chileno',

  whatsapp: '+56912345678',
  email: 'reservas@mesanativa.cl',
  direccion: 'Av. Italia 1245, Providencia, Santiago',

  web3formsKey: 'TU_ACCESS_KEY_WEB3FORMS',

  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.41!2d-70.6483!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zU2FudGlhZ28!5e0!3m2!1ses!2scl!4v1700000000000',

  horarios: {
    semana: 'Lunes a Viernes 8:30 - 22:00',
    sabado: 'Sabado 9:30 - 23:00',
    domingo: 'Domingo 10:00 - 17:00',
  },

  heroImagen:
    'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85',
  heroImagenSecundaria:
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85',
  fundacion: '2019',

  hero: {
    titulo: 'Cocina chilena con mesa de barrio.',
    bajada:
      'Sabores reconocibles, tecnica actual y una carta pensada para compartir desde el desayuno hasta la sobremesa.',
    destacado: 'Especial de la casa',
    platoDestacado: 'Mechada a lo pobre',
    detalleDestacado: 'Papas doradas, huevo frito, cebolla y pebre fresco',
    datos: [
      { valor: '4.8', texto: 'calificacion promedio' },
      { valor: '+35', texto: 'preparaciones chilenas' },
      { valor: '8:30', texto: 'desde la manana' },
    ],
  },

  nosotros: {
    texto:
      'Mesa Nativa combina cafe de especialidad, panaderia fresca y cocina chilena de barrio con una presentacion actual. Un lugar pensado para desayunar con calma, almorzar rico, reunirse o cerrar el dia con algo dulce.',
    destacados: [
      {
        nombre: 'Cafe de especialidad',
        descripcion: 'Espresso, filtrados y bebidas frias preparados por baristas.',
        foto: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=85',
      },
      {
        nombre: 'Cocina todo el dia',
        descripcion: 'Sandwichs, fondos caseros, dulces de vitrina y sabores de temporada.',
        foto: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=85',
      },
      {
        nombre: 'Reservas y eventos',
        descripcion: 'Mesas para grupos, celebraciones pequenas y coffee breaks.',
        foto: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=85',
      },
    ],
  },

  servicios: [
    {
      categoria: 'Sandwichs',
      nombre: 'Chacarero Nativo',
      precio: '$9.900',
      descripcion: 'Carne, porotos verdes, tomate, aji verde y mayo casera en marraqueta.',
    },
    {
      categoria: 'Sandwichs',
      nombre: 'Barros Luco',
      precio: '$8.900',
      descripcion: 'Lomo sellado, queso mantecoso fundido y pan amasado tostado.',
    },
    {
      categoria: 'Fondos',
      nombre: 'Mechada a lo pobre',
      precio: '$12.900',
      descripcion: 'Mechada jugosa, papas doradas, huevo frito, cebolla y pebre.',
    },
    {
      categoria: 'Fondos',
      nombre: 'Pastel de choclo',
      precio: '$11.900',
      descripcion: 'Pino tradicional, pollo, huevo, aceituna y pastelera dorada al horno.',
    },
    {
      categoria: 'Dulces',
      nombre: 'Kuchen sureno',
      precio: '$4.900',
      descripcion: 'Porcion de kuchen de manzana o murta para acompanar el cafe.',
    },
    {
      categoria: 'Dulces',
      nombre: 'Cafe + sopaipillas',
      precio: '$5.900',
      descripcion: 'Cafe de especialidad con sopaipillas tibias y pebre suave.',
    },
  ],

  galeria: [
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85',
  ],

  testimonios: [
    {
      nombre: 'Camila Rojas',
      texto: 'El cafe es excelente y la carta tiene sabores bien chilenos. El chacarero estaba notable.',
      estrellas: 5,
      fuente: 'Google Reviews',
      recomendado: 'Chacarero Nativo',
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    },
    {
      nombre: 'Matias Herrera',
      texto: 'Reservamos para un cumpleanos pequeno y todo salio impecable. La mechada y el pebre se pasaron.',
      estrellas: 5,
      fuente: 'Reserva familiar',
      recomendado: 'Mechada a lo pobre',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    },
    {
      nombre: 'Fernanda Silva',
      texto: 'Tiene ambiente de barrio pero presentacion muy cuidada. El kuchen con cafe es obligatorio.',
      estrellas: 5,
      fuente: 'Instagram',
      recomendado: 'Kuchen sureno',
      foto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80',
    },
  ],

  redes: {
    instagram: 'https://instagram.com/mesanativa',
    facebook: 'https://facebook.com/mesanativa',
  },
}

export const whatsappLink = (
  mensaje = 'Hola, me gustaria hacer una reserva en Mesa Nativa'
) =>
  `https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    mensaje
  )}`
