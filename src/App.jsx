import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Nosotros from './components/Nosotros'
import Servicios from './components/Servicios'
import Galeria from './components/Galeria'
import Testimonios from './components/Testimonios'
import Reserva from './components/Reserva'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'
import IconWhatsApp from './components/IconWhatsApp'

import { whatsappLink } from './config/config'

export default function App() {
  useEffect(() => {
    const elementos = document.querySelectorAll('.reveal, .reveal-img')
    const revelarTodo = () =>
      elementos.forEach((el) => el.classList.add('visible'))

    if (!('IntersectionObserver' in window)) {
      revelarTodo()
      return
    }

    let algunoRevelado = false

    const observer = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            algunoRevelado = true
            entrada.target.classList.add('visible')
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
        <Nosotros />
        <Servicios />
        <Galeria />
        <Testimonios />
        <Reserva />
        <Ubicacion />
      </main>
      <Footer />

      <a
        href={whatsappLink()}
        className="wsp-flotante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribenos por WhatsApp"
      >
        <IconWhatsApp size={30} />
      </a>
    </>
  )
}
