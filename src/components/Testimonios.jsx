import { Quote, Star, Utensils } from 'lucide-react'
import { config } from '../config/config'

export default function Testimonios() {
  const promedio = (
    config.testimonios.reduce((sum, item) => sum + item.estrellas, 0) /
    config.testimonios.length
  ).toFixed(1)

  return (
    <section id="testimonios" className="seccion resenas">
      <div className="contenedor">
        <div className="resenas__head reveal">
          <div>
            <span className="eyebrow" data-num="04">
              <span className="linea" />
              Opiniones
            </span>
            <h2 className="titulo">
              Mesas que vuelven <em>por sabor</em>
            </h2>
          </div>

          <aside className="resenas__score" aria-label="Puntaje promedio">
            <strong>{promedio}</strong>
            <div>
              <span>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </span>
              <p>Promedio de reseñas recientes</p>
            </div>
          </aside>
        </div>

        <div className="resenas__grid">
          {config.testimonios.map((item, i) => (
            <article
              className={`resena-card reveal delay-${(i % 3) + 1}`}
              key={item.nombre}
            >
              <div className="resena-card__top">
                <span className="resena-card__quote">
                  <Quote size={20} />
                </span>
                <span className="resena-card__fuente">{item.fuente}</span>
              </div>

              <blockquote>{item.texto}</blockquote>

              <div className="resena-card__plato">
                <Utensils size={16} />
                <span>Pidio {item.recomendado}</span>
              </div>

              <footer>
                {item.foto && <img src={item.foto} alt={item.nombre} loading="lazy" />}
                <div>
                  <strong>{item.nombre}</strong>
                  <span>
                    {Array.from({ length: item.estrellas }).map((_, idx) => (
                      <Star key={idx} size={13} fill="currentColor" />
                    ))}
                  </span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
