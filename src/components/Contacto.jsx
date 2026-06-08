import { useState } from 'react'
import { MessageCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { config, whatsappLink } from '../config/config'

/**
 * Sección de Contacto.
 * Formulario conectado a Web3Forms (envío sin backend) + datos y WhatsApp.
 *
 * Para activarlo: crea una Access Key gratis en https://web3forms.com
 * y pégala en config.web3formsKey.
 */
export default function Contacto() {
  // Estado del envío: idle | enviando | ok | error
  const [estado, setEstado] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado('enviando')

    const formData = new FormData(e.target)
    formData.append('access_key', config.web3formsKey)
    formData.append('subject', `Nuevo contacto desde ${config.negocio}`)

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
    <section id="contacto" className="seccion contacto">
      <div className="contenedor">
        <div className="contacto__grid">
          {/* Columna de información */}
          <div className="contacto__info reveal">
            <span className="eyebrow" data-num="05">
              <span className="linea" />
              Contacto
            </span>
            <h2 className="titulo">
              Reserva tu <em>hora</em>
            </h2>
            <p>
              Déjanos tus datos y te contactaremos a la brevedad, o escríbenos
              directamente por WhatsApp para una respuesta inmediata.
            </p>

            <div className="contacto__datos">
              <div className="contacto__dato">
                <span className="contacto__dato-icono">
                  <Phone size={20} strokeWidth={1.4} />
                </span>
                <span>
                  <span className="etq">Teléfono</span>
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
                  <span className="etq">Dirección</span>
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
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Formulario Web3Forms */}
          <form className="contacto__form reveal delay-2" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu nombre completo"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="tucorreo@ejemplo.cl"
              required
            />

            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              placeholder="+56 9 1234 5678"
            />

            <label htmlFor="mensaje">¿Qué servicio te interesa?</label>
            <textarea
              id="mensaje"
              name="mensaje"
              placeholder="Cuéntanos qué te gustaría..."
              required
            />

            {/* Honeypot anti-spam de Web3Forms */}
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
              {estado === 'enviando' ? 'Enviando...' : 'Enviar solicitud'}
              <ArrowRight size={18} />
            </button>

            {estado === 'ok' && (
              <p className="contacto__mensaje ok">
                ¡Gracias! Tu mensaje fue enviado con éxito. 💖
              </p>
            )}
            {estado === 'error' && (
              <p className="contacto__mensaje error">
                Ocurrió un error. Intenta nuevamente o escríbenos por WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
