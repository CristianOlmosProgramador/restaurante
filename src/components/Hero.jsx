import { MessageCircle, ArrowDown } from 'lucide-react'
import { config, whatsappLink } from '../config/config'

/**
 * Hero editorial asimétrico.
 * - Imagen de fondo con overlay degradado vinoso.
 * - Titular serif con palabra en cursiva.
 * - Tarjeta de imagen flotante con sello dorado giratorio.
 * - Estadística de marca, indicador de scroll.
 */
export default function Hero() {
  return (
    <header className="hero">
      {/* Fondo */}
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${config.heroImagen})` }}
      />

      <div className="contenedor hero__contenido">
        {/* Columna de texto */}
        <div>
          <span className="hero__kicker reveal">
            <span className="linea" />
            Salón de belleza · {config.direccion.split(',').pop().trim()}
          </span>

          <h1 className="reveal delay-1">
            Tu belleza,
            <br />
            nuestra <em>pasión</em>.
          </h1>

          <p className="reveal delay-2">
            En {config.negocio} elevamos cada corte, color y tratamiento al nivel
            de un ritual. Reserva tu hora y déjate cuidar por verdaderas
            artistas.
          </p>

          <div className="hero__botones reveal delay-3">
            <a
              href={whatsappLink()}
              className="btn btn-wsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Reservar por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver servicios
            </a>
          </div>
        </div>
      </div>

      {/* Estadística de marca */}
      <div className="hero__estadistica reveal delay-4">
        <div className="num">+{2026 - Number(config.fundacion)}</div>
        <div className="etq">años de experiencia</div>
      </div>

      {/* Indicador de scroll */}
      <div className="hero__scroll">
        <span className="barra" />
        <ArrowDown size={14} />
        Desliza
      </div>
    </header>
  )
}
