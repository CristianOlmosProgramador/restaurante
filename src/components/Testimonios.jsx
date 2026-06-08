import { useState, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { config } from '../config/config'

/**
 * Sección de Testimonios — formato editorial destacado.
 * Muestra una reseña grande a la vez y permite cambiar entre clientas
 * con flechas o tocando sus avatares. Rota automáticamente y se pausa
 * al interactuar con el usuario.
 */
export default function Testimonios() {
  const testimonios = config.testimonios
  const total = testimonios.length

  const [activo, setActivo] = useState(0)
  const [pausado, setPausado] = useState(false)

  // Navegación circular.
  const ir = useCallback(
    (dir) => setActivo((i) => (i + dir + total) % total),
    [total]
  )

  // Auto-rotación cada 6s (se detiene si el usuario pausa al pasar el cursor).
  useEffect(() => {
    if (pausado || total <= 1) return
    const id = setInterval(() => ir(1), 6000)
    return () => clearInterval(id)
  }, [pausado, ir, total])

  const t = testimonios[activo]

  return (
    <section id="testimonios" className="seccion testimonios">
      <div className="contenedor">
        <div className="seccion-cabecera centrada reveal">
          <span className="eyebrow" data-num="04">
            <span className="linea" />
            Testimonios
          </span>
          <h2 className="titulo">
            Lo que dicen <em>nuestras clientas</em>
          </h2>
        </div>

        <div
          className="testimonios__destacado reveal delay-1"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          {/* Comilla decorativa */}
          <span className="testimonios__comilla serif" aria-hidden="true">
            “
          </span>

          {/* Reseña activa */}
          <div className="testimonios__cuerpo" key={activo}>
            <div className="testimonios__estrellas">
              {Array.from({ length: t.estrellas }).map((_, idx) => (
                <Star key={idx} size={20} fill="currentColor" />
              ))}
            </div>

            <blockquote className="testimonios__texto serif">
              {t.texto}
            </blockquote>

            <div className="testimonios__autor">
              {t.foto && (
                <img src={t.foto} alt={t.nombre} loading="lazy" />
              )}
              <div>
                <strong>{t.nombre}</strong>
                <span>Clienta de {config.negocio}</span>
              </div>
            </div>
          </div>

          {/* Controles: flechas + avatares + contador */}
          <div className="testimonios__controles">
            <button
              className="testimonios__flecha"
              onClick={() => ir(-1)}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="testimonios__avatares">
              {testimonios.map((item, i) => (
                <button
                  key={item.nombre}
                  className={`testimonios__avatar ${
                    i === activo ? 'activo' : ''
                  }`}
                  onClick={() => setActivo(i)}
                  aria-label={`Ver testimonio de ${item.nombre}`}
                >
                  {item.foto ? (
                    <img src={item.foto} alt={item.nombre} loading="lazy" />
                  ) : (
                    <span>{item.nombre.charAt(0)}</span>
                  )}
                </button>
              ))}
            </div>

            <button
              className="testimonios__flecha"
              onClick={() => ir(1)}
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <span className="testimonios__contador serif">
            {String(activo + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}
