// ============================================================================
//  CONFIGURACIÓN CENTRAL DEL SITIO
// ----------------------------------------------------------------------------
//  Toda la información del negocio se consume desde este archivo.
//  Para personalizar el sitio de un cliente, SOLO se edita este archivo:
//  textos, datos de contacto, servicios, equipo, testimonios, etc.
// ============================================================================

export const config = {
  // --- Identidad del negocio ---
  negocio: 'Salón de Belleza',
  slogan: 'Tu belleza, nuestra pasión',

  // --- Contacto ---
  // El número de WhatsApp debe ir en formato internacional (sin espacios).
  whatsapp: '+56912345678',
  email: 'contacto@salondebelleza.cl',
  direccion: 'Av. Ejemplo 123, Santiago',

  // --- Web3Forms ---
  // Reemplaza por tu Access Key gratuita desde https://web3forms.com
  web3formsKey: 'TU_ACCESS_KEY_WEB3FORMS',

  // --- Google Maps ---
  // Pega aquí la URL del "src" del iframe de Google Maps (Compartir > Insertar mapa).
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.41!2d-70.6483!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zU2FudGlhZ28!5e0!3m2!1ses!2scl!4v1700000000000',

  // --- Horarios de atención ---
  horarios: {
    semana: 'Lunes a Viernes 9:00 - 20:00',
    sabado: 'Sábado 9:00 - 18:00',
    domingo: 'Cerrado',
  },

  // --- Imágenes del Hero editorial (Unsplash) ---
  heroImagen:
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80',
  heroImagenSecundaria:
    'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80',

  // Año de fundación (se muestra como dato de marca en el hero).
  fundacion: '2015',

  // --- Servicios ---
  servicios: [
    {
      nombre: 'Corte de pelo',
      precio: '$15.000',
      descripcion: 'Corte personalizado según tu estilo y rostro.',
    },
    {
      nombre: 'Tinte',
      precio: '$35.000',
      descripcion: 'Coloración profesional con productos premium.',
    },
    {
      nombre: 'Keratina',
      precio: '$55.000',
      descripcion: 'Tratamiento alisador que sella y nutre tu cabello.',
    },
    {
      nombre: 'Peinado',
      precio: '$20.000',
      descripcion: 'Peinados para toda ocasión, de día o de noche.',
    },
  ],

  // --- Galería de trabajos (Unsplash) ---
  galeria: [
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
  ],

  // --- Equipo / Staff ---
  equipo: [
    {
      nombre: 'Valentina López',
      rol: 'Colorista',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    },
    {
      nombre: 'Camila Torres',
      rol: 'Estilista',
      foto: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    },
    {
      nombre: 'Daniela Muñoz',
      rol: 'Especialista keratina',
      foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80',
    },
  ],

  // --- Testimonios ---
  testimonios: [
    {
      nombre: 'María González',
      texto: 'Excelente servicio, quedé feliz con mi cambio de look.',
      estrellas: 5,
      foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    },
    {
      nombre: 'Sofía Ramírez',
      texto: 'El mejor salón de Santiago, siempre vuelvo.',
      estrellas: 5,
      foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    {
      nombre: 'Javiera Pérez',
      texto: 'Profesionales increíbles, muy recomendadas.',
      estrellas: 5,
      foto: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80',
    },
  ],

  // --- Redes sociales ---
  redes: {
    instagram: 'https://instagram.com/salondebelleza',
    facebook: 'https://facebook.com/salondebelleza',
  },
}

// ---------------------------------------------------------------------------
//  Helpers derivados de la configuración (no editar normalmente).
// ---------------------------------------------------------------------------

// Genera el link de WhatsApp con mensaje predefinido.
export const whatsappLink = (
  mensaje = '¡Hola! Me gustaría reservar una hora 💇‍♀️'
) =>
  `https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
    mensaje
  )}`
