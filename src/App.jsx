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

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('visible')
            // Una vez animado, dejamos de observarlo (mejor rendimiento).
            observer.unobserve(entrada.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    )

    elementos.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
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
