import { config } from '../config/config'

/**
 * Sección de Ubicación.
 * Panel de horarios sobre fondo oscuro + mapa de Google Maps embebido.
 */
export default function Ubicacion() {
  const esCerrado = (txt) => /cerrado/i.test(txt)

  return (
    <section id="ubicacion" className="seccion ubicacion">
      <div className="contenedor">
        <div className="seccion-cabecera centrada reveal">
          <span className="eyebrow" data-num="06">
            <span className="linea" />
            Ubicación
          </span>
          <h2 className="titulo">
            Te esperamos <em>aquí</em>
          </h2>
          <p className="subtitulo">{config.direccion}</p>
        </div>

        <div className="ubicacion__grid">
          {/* Horarios */}
          <div className="ubicacion__horarios reveal">
            <h3 className="serif">Horarios</h3>
            <p className="sub">Atención presencial</p>

            <div className="ubicacion__horario-item">
              <span className="dia">Lunes — Viernes</span>
              <span className="hora">
                {config.horarios.semana.replace(/^[^0-9]*/, '')}
              </span>
            </div>
            <div className="ubicacion__horario-item">
              <span className="dia">Sábado</span>
              <span className="hora">
                {config.horarios.sabado.replace(/^[^0-9]*/, '')}
              </span>
            </div>
            <div className="ubicacion__horario-item">
              <span className="dia">Domingo</span>
              <span
                className={`hora ${
                  esCerrado(config.horarios.domingo) ? 'cerrado' : ''
                }`}
              >
                {config.horarios.domingo}
              </span>
            </div>
          </div>

          {/* Mapa */}
          <div className="ubicacion__mapa reveal delay-2">
            <iframe
              src={config.mapsEmbed}
              title={`Ubicación de ${config.negocio}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
