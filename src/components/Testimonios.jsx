import { Star } from 'lucide-react'
import { config } from '../config/config'

/**
 * Sección de Testimonios — fondo vinoso y citas editoriales.
 * Cada card muestra estrellas en dorado, la reseña en serif cursiva,
 * y el autor con foto enmarcada en champagne.
 */
export default function Testimonios() {
  return (
    <section id="testimonios" className="seccion testimonios">
      <div className="contenedor">
        <div className="seccion-cabecera reveal">
          <span className="eyebrow" data-num="04">
            <span className="linea" />
            Testimonios
          </span>
          <span className="testimonios__comilla serif">”</span>
          <h2 className="titulo">
            Lo que dicen <em>nuestras clientas</em>
          </h2>
        </div>

        <div className="testimonios__grid">
          {config.testimonios.map((t, i) => (
            <article
              key={t.nombre}
              className={`testimonio-card reveal delay-${(i % 3) + 1}`}
            >
              <div className="testimonio-card__estrellas">
                {Array.from({ length: t.estrellas }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="testimonio-card__texto">{t.texto}</p>

              <div className="testimonio-card__autor">
                {t.foto && <img src={t.foto} alt={t.nombre} loading="lazy" />}
                <div>
                  <strong>{t.nombre}</strong>
                  <span>Clienta feliz</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
