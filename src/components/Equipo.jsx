import { config } from '../config/config'

/**
 * Sección de Equipo — fichas editoriales.
 * Foto en blanco y negro que recupera el color al hacer hover,
 * número de ficha y nombre en serif con línea decorativa.
 */
export default function Equipo() {
  return (
    <section id="equipo" className="seccion equipo">
      <div className="contenedor">
        <div className="seccion-cabecera reveal">
          <span className="eyebrow" data-num="03">
            <span className="linea" />
            El equipo
          </span>
          <h2 className="titulo">
            Manos <em>expertas</em>, mirada de artista
          </h2>
          <p className="subtitulo">
            Profesionales apasionadas y en constante formación para cuidar cada
            detalle de tu look.
          </p>
        </div>

        <div className="equipo__grid">
          {config.equipo.map((persona, i) => (
            <article
              key={persona.nombre}
              className={`equipo-card reveal delay-${(i % 3) + 1}`}
            >
              <div className="equipo-card__foto">
                <span className="equipo-card__num">
                  0{i + 1}
                </span>
                <img src={persona.foto} alt={persona.nombre} loading="lazy" />
              </div>
              <h3 className="equipo-card__nombre">{persona.nombre}</h3>
              <span className="equipo-card__rol">{persona.rol}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
