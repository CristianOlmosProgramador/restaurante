import { config } from '../config/config'

/**
 * Cinta animada (marquee) con los nombres de los servicios.
 * El texto se duplica para lograr un loop infinito sin cortes.
 * La animación se pausa al pasar el cursor (ver index.css).
 */
export default function Marquee() {
  // Lista base de palabras a desplazar.
  const palabras = config.servicios.map((s) => s.nombre)

  // Duplicamos el contenido para el efecto de bucle continuo.
  const contenido = [...palabras, ...palabras]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {contenido.map((palabra, i) => (
          <span key={i}>{palabra}</span>
        ))}
      </div>
    </div>
  )
}
