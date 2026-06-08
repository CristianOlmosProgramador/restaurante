import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Servicios from './components/Servicios'
import Galeria from './components/Galeria'
import Equipo from './components/Equipo'
import Testimonios from './components/Testimonios'
import Contacto from './components/Contacto'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'

import { whatsappLink } from './config/config'

/**
 * Componente raíz.
 *
 * Aquí vive el Intersection Observer que activa las animaciones de entrada:
 * cualquier elemento con la clase `.reveal` se anima cuando entra en pantalla.
 * No se usa ninguna librería externa, solo la API nativa del navegador.
 */
export default function App() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal, .reveal-img')

    // Función auxiliar para revelar todo de una vez (fallback de seguridad).
    const revelarTodo = () =>
      elementos.forEach((el) => el.classList.add('visible'))

    // Si el navegador no soporta IntersectionObserver, mostramos todo.
    if (!('IntersectionObserver' in window)) {
      revelarTodo()
      return
    }

    // Bandera para detectar si el observer realmente llegó a dispararse.
    let algunoRevelado = false

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            algunoRevelado = true
            entrada.target.classList.add('visible')
            // Una vez animado, dejamos de observarlo (mejor rendimiento).
            observer.unobserve(entrada.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    elementos.forEach((el) => observer.observe(el))

    // Red de seguridad: si en 2s el observer no disparó (contextos donde
    // IntersectionObserver no funciona, como ciertos previews/iframes),
    // revelamos todo para que el contenido —en especial el portafolio—
    // nunca quede oculto de forma permanente.
    const seguridad = setTimeout(() => {
      if (!algunoRevelado) revelarTodo()
    }, 2000)

    return () => {
      observer.disconnect()
      clearTimeout(seguridad)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Servicios />
        <Galeria />
        <Equipo />
        <Testimonios />
        <Contacto />
        <Ubicacion />
      </main>
      <Footer />

      {/* Botón flotante de WhatsApp, siempre visible */}
      <a
        href={whatsappLink()}
        className="wsp-flotante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </>
  )
}
