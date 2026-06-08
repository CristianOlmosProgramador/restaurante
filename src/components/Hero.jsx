import { ArrowDown, Clock, MapPin, MessageCircle, Utensils } from 'lucide-react'
import { config, whatsappLink } from '../config/config'

export default function Hero() {
  const ciudad = config.direccion.split(',').pop().trim()
  const [tituloA, tituloB = 'mesa de barrio.'] = config.hero.titulo.split(' con ')

  return (
    <header className="hero hero-restaurante">
      <div
        className="hero__media"
        style={{ backgroundImage: `url(${config.heroImagen})` }}
      />

      <div className="contenedor hero__contenido hero__layout">
        <div className="hero__copy">
          <span className="hero__kicker reveal">
            <span className="linea" />
            {config.tipo} · {ciudad}
          </span>

          <h1 className="reveal delay-1">
            {tituloA}
            <br />
            <em>con {tituloB}</em>
          </h1>

          <p className="reveal delay-2">{config.hero.bajada}</p>

          <div className="hero__botones reveal delay-3">
            <a
              href={whatsappLink()}
              className="btn btn-wsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Reservar mesa
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver carta
            </a>
          </div>
        </div>

        <aside className="hero__mesa reveal delay-2" aria-label="Plato destacado">
          <div className="hero__mesa-media">
            <img src={config.heroImagenSecundaria} alt={config.hero.platoDestacado} />
            <span>
              <Utensils size={16} />
              {config.hero.destacado}
            </span>
          </div>
          <div className="hero__mesa-body">
            <p className="hero__mesa-label">Hoy recomendamos</p>
            <h2>{config.hero.platoDestacado}</h2>
            <p>{config.hero.detalleDestacado}</p>
            <div className="hero__mesa-meta">
              <span>
                <Clock size={15} />
                {config.horarios.semana.replace(/^[^0-9]*/, '')}
              </span>
              <span>
                <MapPin size={15} />
                {ciudad}
              </span>
            </div>
          </div>
        </aside>
      </div>

      <div className="hero__estadisticas reveal delay-4">
        {config.hero.datos.map((dato) => (
          <div key={dato.texto}>
            <strong>{dato.valor}</strong>
            <span>{dato.texto}</span>
          </div>
        ))}
      </div>

      <div className="hero__scroll">
        <span className="barra" />
        <ArrowDown size={14} />
        Desliza
      </div>
    </header>
  )
}
