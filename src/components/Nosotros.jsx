import { CalendarCheck, Coffee, Flame, Utensils } from 'lucide-react'
import { config } from '../config/config'

const ICONOS = [Coffee, Utensils, CalendarCheck]

export default function Nosotros() {
  return (
    <section id="nosotros" className="seccion experiencia">
      <div className="contenedor">
        <div className="experiencia__grid">
          <div className="experiencia__intro reveal">
            <span className="eyebrow" data-num="01">
              <span className="linea" />
              Mesa Nativa
            </span>
            <h2 className="titulo">
              Una experiencia de <em>barrio chileno</em>
            </h2>
            <p>{config.nosotros.texto}</p>
          </div>

          <div className="experiencia__foto reveal delay-1">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85"
              alt={`Cocina de ${config.negocio}`}
              loading="lazy"
            />
            <span>
              <Flame size={18} />
              Cocina hecha al momento
            </span>
          </div>

          <div className="experiencia__items">
            {config.nosotros.destacados.map((item, i) => {
              const Icono = ICONOS[i] || Coffee

              return (
                <article
                  key={item.nombre}
                  className={`experiencia-card reveal delay-${(i % 3) + 2}`}
                >
                  <span>
                    <Icono size={22} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3>{item.nombre}</h3>
                    <p>{item.descripcion}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
