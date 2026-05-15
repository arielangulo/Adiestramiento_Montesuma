import { Link } from 'react-router-dom'
import './Servicios.css'

const servicios = [
  {
    title: 'Rastreo', href: '/rastreo',
    img: '/images/tracking-dog.jpeg',
    desc: 'Seguimiento de rastros olfativos en distintas superficies. Formación deportiva IGP, búsqueda y rescate, y trabajo policial.',
    items: ['Rastreo en zacate y tierra','Búsqueda y rescate','Competencia IGP/IPO','Condiciones adversas'],
  },
  {
    title: 'Protección', href: '/proteccion',
    img: '/images/security-dog.jpeg',
    desc: '¿Quiere un perro que muerda, o un perro entrenado? Formamos perros de protección real: controlados, obedientes y capaces.',
    items: ['Protección personal y familiar','Trabajo de mordida IGP','Control total bajo presión','Guardia perimetral'],
    tagline: '¿Quiere un perro que muerda o un perro entrenado?',
  },
  {
    title: 'Obediencia', href: '/obediencia',
    img: '/images/dog-resting.jpeg',
    desc: 'La base de todo gran perro. Construimos comunicación real entre dueño y perro, logrando respuestas confiables en cualquier ambiente.',
    items: ['Obediencia básica y avanzada','Control de impulsos','Talón libre y distancia','Competencia deportiva'],
  },
]

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="servicios-container">
        <div className="servicios-header">
          <span className="section-label">Nuestros Servicios de Entrenamiento</span>
          <div className="accent-line" />
          <h2 className="servicios-title">FORMACIÓN<br/><span className="title-green">PROFESIONAL</span></h2>
          <p className="servicios-subtitle">Tres disciplinas. Un estándar. Resultados que transforman.</p>
        </div>
        <div className="servicios-grid">
          {servicios.map(s => (
            <Link to={s.href} key={s.title} className={`servicio-card ${s.highlight ? 'highlight' : ''}`}>
              <div className="card-img-wrap">
                <img src={s.img} alt={s.title} className="card-img" />
                <div className="card-img-overlay" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{s.title}</h3>
                {s.tagline && <p className="card-tagline">{s.tagline}</p>}
                <p className="card-desc">{s.desc}</p>
                <ul className="card-list">
                  {s.items.map(item => <li key={item}><span className="list-dot"/>{item}</li>)}
                </ul>
                <div className="card-cta-btn">
                  Ver servicio completo
                  <span className="card-cta-arrow">→</span>
                </div>
              </div>
              {s.highlight && <div className="highlight-border"/>}
            </Link>
          ))}
        </div>
        <div className="resultados-strip">
          <div className="resultados-text">
            <h3>NUESTROS RESULTADOS</h3>
            <h3 className="text-green">HABLAN POR SÍ SOLOS</h3>
          </div>
          <div className="resultados-imgs">
            <img src="/images/dog-jump.jpeg" alt="Perro en acción" />
            <img src="/images/proteccion-ataque.jpeg" alt="Sesión de protección" />
            <img src="/images/obediencia-negro-heel.jpeg" alt="Pastor alemán" />
          </div>
        </div>
      </div>
    </section>
  )
}
