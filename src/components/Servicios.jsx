import { useMemo, useState } from 'react'
import { Coffee, Sandwich, Soup, Utensils } from 'lucide-react'
import { config } from '../config/config'

const ICONOS = {
  Sandwichs: Sandwich,
  Fondos: Utensils,
  Dulces: Coffee,
  Carta: Soup,
}

const DESCRIPCIONES = {
  Sandwichs: 'Marraqueta, pan amasado y clasicos chilenos para compartir.',
  Fondos: 'Platos calientes, caseros y pensados para hora de almuerzo.',
  Dulces: 'Cafe, kuchen y preparaciones dulces para cerrar la sobremesa.',
  Carta: 'Seleccion de la casa.',
}

export default function Servicios() {
  const categorias = useMemo(
    () =>
      config.servicios.reduce((acc, item) => {
        const categoria = item.categoria || 'Carta'
        if (!acc[categoria]) acc[categoria] = []
        acc[categoria].push(item)
        return acc
      }, {}),
    []
  )

  const nombres = Object.keys(categorias)
  const [categoriaActiva, setCategoriaActiva] = useState(nombres[0])
  const platos = categorias[categoriaActiva]
  const IconoActivo = ICONOS[categoriaActiva] || Soup

  return (
    <section id="servicios" className="seccion carta carta-digital">
      <div className="contenedor">
        <div className="carta__head reveal">
          <div>
            <span className="eyebrow" data-num="02">
              <span className="linea" />
              Carta chilena
            </span>
            <h2 className="titulo">
              Elige por <em>momento de mesa</em>
            </h2>
          </div>
          <p>
            Una carta digital con categorias claras, pensada para restaurantes
            reales: facil de leer, rapida de actualizar y lista para crecer.
          </p>
        </div>

        <div className="menu-board reveal delay-1">
          <aside className="menu-board__nav" aria-label="Categorias de carta">
            <span className="menu-board__label">Menu</span>
            {nombres.map((categoria, i) => {
              const Icono = ICONOS[categoria] || Soup
              const activa = categoria === categoriaActiva

              return (
                <button
                  key={categoria}
                  className={activa ? 'activo' : ''}
                  type="button"
                  onClick={() => setCategoriaActiva(categoria)}
                  aria-pressed={activa}
                >
                  <Icono size={20} strokeWidth={1.6} />
                  <span>
                    <strong>{categoria}</strong>
                    <small>{String(categorias[categoria].length).padStart(2, '0')} platos</small>
                  </span>
                  <em>{String(i + 1).padStart(2, '0')}</em>
                </button>
              )
            })}
          </aside>

          <article className="menu-board__panel">
            <header className="menu-board__panel-head">
              <span>
                <IconoActivo size={24} strokeWidth={1.6} />
              </span>
              <div>
                <p>Categoria seleccionada</p>
                <h3>{categoriaActiva}</h3>
                <small>{DESCRIPCIONES[categoriaActiva] || DESCRIPCIONES.Carta}</small>
              </div>
            </header>

            <div className="menu-list">
              {platos.map((item) => (
                <div className="menu-item" key={item.nombre}>
                  <div className="menu-item__main">
                    <h4>{item.nombre}</h4>
                    <span className="menu-item__dots" aria-hidden="true" />
                    <strong>{item.precio}</strong>
                  </div>
                  <p>{item.descripcion}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
