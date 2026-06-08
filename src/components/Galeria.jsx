import { Plus } from 'lucide-react'
import { config } from '../config/config'

export default function Galeria() {
  return (
    <section id="galeria" className="seccion galeria">
      <div className="contenedor">
        <div className="seccion-cabecera reveal">
          <span className="eyebrow" data-num="03">
            <span className="linea" />
            Galeria
          </span>
          <h2 className="titulo">
            Ambiente, cocina y <em>detalles</em>
          </h2>
        </div>

        <div className="galeria__grid">
          {config.galeria.map((foto, i) => (
            <figure
              key={foto}
              className={`galeria__item reveal delay-${(i % 4) + 1}`}
            >
              <img
                src={foto}
                alt={`Ambiente de ${config.negocio} ${i + 1}`}
                loading="lazy"
              />
              <span className="galeria__plus">
                <Plus size={26} strokeWidth={1.2} />
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
