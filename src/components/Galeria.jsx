import { Plus } from 'lucide-react'
import { config } from '../config/config'

/**
 * Galería de trabajos — grid asimétrico editorial.
 * Las imágenes se revelan con una "cortina" (reveal-img) y hacen zoom al hover.
 */
export default function Galeria() {
  return (
    <section id="galeria" className="seccion galeria">
      <div className="contenedor">
        <div className="seccion-cabecera reveal">
          <span className="eyebrow" data-num="02">
            <span className="linea" />
            Portafolio
          </span>
          <h2 className="titulo">
            Trabajos que <em>hablan</em> por nosotras
          </h2>
        </div>

        <div className="galeria__grid">
          {config.galeria.map((foto, i) => (
            <figure
              key={i}
              className={`galeria__item reveal delay-${(i % 4) + 1}`}
            >
              <img
                src={foto}
                alt={`Trabajo de ${config.negocio} ${i + 1}`}
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
