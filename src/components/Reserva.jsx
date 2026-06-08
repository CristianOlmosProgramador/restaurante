import { useState } from 'react'
import { CalendarCheck, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { config, whatsappLink } from '../config/config'

export default function Reserva() {
  const [estado, setEstado] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado('enviando')

    const formData = new FormData(e.target)
    formData.append('access_key', config.web3formsKey)
    formData.append('subject', `Nueva reserva desde ${config.negocio}`)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()

      if (data.success) {
        setEstado('ok')
        e.target.reset()
      } else {
        setEstado('error')
      }
    } catch {
      setEstado('error')
    }
  }

  return (
    <section id="reserva" className="seccion contacto">
      <div className="contenedor">
        <div className="contacto__grid">
          <div className="contacto__info reveal">
            <span className="eyebrow" data-num="05">
              <span className="linea" />
              Reserva
            </span>
            <h2 className="titulo">
              Guarda tu <em>mesa</em>
            </h2>
            <p>
              Para desayunos, almuerzos, cenas o celebraciones pequenas. Dejanos
              tus datos y confirmaremos disponibilidad a la brevedad.
            </p>

            <div className="contacto__datos">
              <div className="contacto__dato">
                <span className="contacto__dato-icono">
                  <Phone size={20} strokeWidth={1.4} />
                </span>
                <span>
                  <span className="etq">Telefono</span>
                  <a className="val" href={`tel:${config.whatsapp}`}>
                    {config.whatsapp}
                  </a>
                </span>
              </div>

              <div className="contacto__dato">
                <span className="contacto__dato-icono">
                  <Mail size={20} strokeWidth={1.4} />
                </span>
                <span>
                  <span className="etq">Email</span>
                  <a className="val" href={`mailto:${config.email}`}>
                    {config.email}
                  </a>
                </span>
              </div>

              <div className="contacto__dato">
                <span className="contacto__dato-icono">
                  <MapPin size={20} strokeWidth={1.4} />
                </span>
                <span>
                  <span className="etq">Direccion</span>
                  <span className="val">{config.direccion}</span>
                </span>
              </div>
            </div>

            <a
              href={whatsappLink()}
              className="btn btn-wsp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Reservar por WhatsApp
            </a>
          </div>

          <form className="contacto__form reveal delay-2" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="tucorreo@ejemplo.cl" required />

            <label htmlFor="telefono">Telefono</label>
            <input id="telefono" name="telefono" type="tel" placeholder="+56 9 1234 5678" />

            <label htmlFor="personas">Personas</label>
            <input id="personas" name="personas" type="number" min="1" max="20" placeholder="4" required />

            <label htmlFor="mensaje">Fecha, hora y comentarios</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Ej: Viernes 20:30, mesa interior, cumpleanos..."
              required
            />

            <input
              type="checkbox"
              name="botcheck"
              style={{ display: 'none' }}
              tabIndex="-1"
              autoComplete="off"
            />

            <button
              type="submit"
              className="btn btn-primario"
              disabled={estado === 'enviando'}
            >
              {estado === 'enviando' ? 'Enviando...' : 'Solicitar reserva'}
              <CalendarCheck size={18} />
            </button>

            {estado === 'ok' && (
              <p className="contacto__mensaje ok">
                Gracias. Recibimos tu solicitud y confirmaremos tu reserva.
              </p>
            )}
            {estado === 'error' && (
              <p className="contacto__mensaje error">
                Ocurrio un error. Intenta nuevamente o escribenos por WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
