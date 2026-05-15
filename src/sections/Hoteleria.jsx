import './Hoteleria.css'
import { MdHome, MdVisibility, MdDirectionsWalk, MdLocalPhone } from 'react-icons/md'

const features = [
  { icon: <MdHome size={26}/>, title: 'Instalaciones Seguras', desc: 'Espacios diseñados para el descanso y la seguridad del perro durante toda su estadía. Sin hacinamiento, sin descuido.' },
  { icon: <MdVisibility size={26}/>, title: 'Supervisión Permanente', desc: 'Personal capacitado presente todo el tiempo. Su perro no queda solo ni desatendido en ningún momento.' },
  { icon: <MdDirectionsWalk size={26}/>, title: 'Actividad Diaria', desc: 'Rutinas de ejercicio y movimiento diario para que su perro se mantenga activo, sin estrés acumulado por encierro.' },
  { icon: <MdLocalPhone size={26}/>, title: 'Reportes al Dueño', desc: 'Le informamos sobre el estado de su perro durante la estadía. Usted sabe cómo está su animal en todo momento.' },
]

export default function Hoteleria() {
  return (
    <section className="hoteleria" id="hoteleria">
      <div className="hoteleria-inner">
        <div className="hoteleria-visual">
          <div className="visual-main"><img src="/images/pastor-retrato.jpeg" alt="Perro descansando" /></div>
          <div className="visual-side">
            <img src="/images/dog-cat.jpeg" alt="Convivencia canina" />
            <img src="/images/dog-sign.jpeg" alt="Adiestramiento Montesuma" />
          </div>
          <div className="visual-badge">
            <span className="badge-num">24/7</span>
            <span className="badge-label">Supervisión<br/>Garantizada</span>
          </div>
        </div>

        <div className="hoteleria-content">
          <span className="section-label">Servicio de Hotelería Canina</span>
          <div className="accent-line" />
          <h2 className="hoteleria-title">HOTEL<br /><span className="title-green-stroke">CANINO</span><br />MONTESUMA</h2>
          <p className="hoteleria-desc">
            Cuando usted no puede estar, nosotros nos encargamos. Ofrecemos hospedaje
            canino profesional con el mismo nivel de cuidado y exigencia que aplicamos
            en nuestro adiestramiento.
          </p>
          <p className="hoteleria-desc-2">
            Su perro no es una mascota más. Lo tratamos como lo que es.
          </p>
          <div className="hoteleria-features">
            {features.map(f => (
              <div className="feature-item" key={f.title}>
                <span className="feature-icon">{f.icon}</span>
                <div>
                  <h4 className="feature-title">{f.title}</h4>
                  <p className="feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hoteleria-ctas">
            <a href="#contacto" className="btn-primary"
              onClick={e=>{e.preventDefault();document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}}>
              Reservar estadía
            </a>
            <a href="https://wa.me/50688455565" target="_blank" rel="noreferrer" className="btn-outline">
              Consultar disponibilidad
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
