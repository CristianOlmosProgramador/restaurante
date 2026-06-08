import { config } from '../config/config'

/**
 * Sección de Servicios — lista editorial.
 * Cada servicio es una fila con número, nombre serif, descripción y precio.
 * Al hacer hover, un relleno vinoso sube desde abajo e invierte el color.
 */
export default function Servicios() {
  return (
    <section id="servicios" className="seccion servicios">
      <div className="contenedor">
        <div className="seccion-cabecera reveal">
          <span className="eyebrow" data-num="01">
            <span className="linea" />
            Carta de servicios
          </span>
          <h2 className="titulo">
            El arte de <em>realzar</em> tu belleza
          </h2>
          <p className="subtitulo">
            Cada servicio está pensado como un ritual, con productos de primera
            calidad y manos expertas.
          </p>
        </div>

        <div className="servicios__lista reveal delay-1">
          {config.servicios.map((servicio, i) => (
            <div className="servicio-fila" key={servicio.nombre}>
              <span className="servicio-fila__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="servicio-fila__nombre">{servicio.nombre}</h3>
              <p className="servicio-fila__desc">{servicio.descripcion}</p>
              <span className="servicio-fila__precio">{servicio.precio}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
