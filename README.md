# 💇‍♀️ Plantilla Peluquería · WebAlPaso

Landing page profesional para peluquerías y salones de estética.
Construida con **React + Vite** y **CSS puro** (sin Tailwind ni librerías de estilos).

## ✨ Características

- Diseño elegante, moderno y femenino — nivel agencia
- 100% responsive (mobile first)
- Navbar transparente que se vuelve blanca con sombra al hacer scroll
- Animaciones de entrada al scroll con **Intersection Observer nativo** (sin librerías)
- Formulario de contacto funcional con **Web3Forms** (sin backend)
- Íconos con **Lucide React**
- Tipografía **Poppins** (Google Fonts)
- Botón flotante de WhatsApp
- Listo para deploy en **Vercel**

## 🎨 Paleta

| Color            | Hex       |
| ---------------- | --------- |
| Rosa principal   | `#F472B6` |
| Rosa oscuro      | `#831843` |
| Fondo suave      | `#FFF0F7` |
| Gris texto       | `#4A4A4A` |
| Blanco           | `#FFFFFF` |

## 🚀 Uso

```bash
npm install      # instalar dependencias
npm run dev      # entorno de desarrollo (http://localhost:5173)
npm run build    # build de producción (carpeta /dist)
npm run preview  # previsualizar el build
```

## ⚙️ Personalización

**Todo el contenido se edita en un solo archivo:**

```
src/config/config.js
```

Ahí defines: nombre del negocio, slogan, WhatsApp, email, dirección,
horarios, servicios, galería, equipo, testimonios y redes sociales.

### Pasos para un cliente nuevo

1. Edita `src/config/config.js` con los datos del cliente.
2. Crea una Access Key gratis en [web3forms.com](https://web3forms.com) y
   pégala en `config.web3formsKey`.
3. Reemplaza `config.mapsEmbed` por el `src` del iframe de Google Maps
   (Compartir → Insertar mapa).
4. (Opcional) Cambia las imágenes de Unsplash por fotos reales del salón.

## 📦 Estructura

```
src/
  components/   → Navbar, Hero, Servicios, Galeria, Equipo,
                  Testimonios, Contacto, Ubicacion, Footer
  config/       → config.js (toda la data del sitio)
  App.jsx       → raíz + Intersection Observer
  main.jsx      → punto de entrada
  index.css     → estilos globales
```

## ☁️ Deploy en Vercel

1. Sube el proyecto a un repositorio Git.
2. Importa el repo en [vercel.com](https://vercel.com).
3. Framework preset: **Vite** (autodetectado). ¡Listo!

---

Hecho con 💖 por [WebAlPaso](https://webalpaso.cl)
