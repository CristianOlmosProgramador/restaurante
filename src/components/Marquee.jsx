import { Coffee, Sandwich, Soup, Utensils } from 'lucide-react'
import { config } from '../config/config'

const ICONOS = [Utensils, Sandwich, Soup, Coffee]

export default function Marquee() {
  const palabras = config.servicios.map((s) => s.nombre)
  const contenido = [...palabras, ...palabras]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {contenido.map((palabra, i) => {
          const Icono = ICONOS[i % ICONOS.length]

          return (
            <span key={`${palabra}-${i}`}>
              <Icono size={18} strokeWidth={1.7} />
              {palabra}
            </span>
          )
        })}
      </div>
    </div>
  )
}
