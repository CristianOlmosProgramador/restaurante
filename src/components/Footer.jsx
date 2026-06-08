import { Coffee, Facebook, Instagram } from 'lucide-react'
import { config } from '../config/config'

const LINKS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Carta', href: '#servicios' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Reserva', href: '#reserva' },
]

export default function Footer() {
  const anio = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo serif">
              <Coffee size={22} strokeWidth={1.6} />
              {config.negocio}
              <span className="punto">.</span>
            </div>
            <p>
              {config.slogan}. Te esperamos en {config.direccion} para una mesa
              rica, simple y bien atendida.
            </p>
          </div>

          <div>
            <h4>Navegacion</h4>
            <ul className="footer__links">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Siguenos</h4>
            <div className="footer__redes">
              {config.redes.instagram && (
                <a
                  href={config.redes.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              )}
              {config.redes.facebook && (
                <a
                  href={config.redes.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {anio} {config.negocio}. Todos los derechos reservados.
          </span>
          <span>
            Hecho por{' '}
            <a
              href="https://webalpaso.cl"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebAlPaso
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
