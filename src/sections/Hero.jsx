import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src="/images/dog-hero-flipped.jpeg" alt="Pastor Alemán Adiestramiento Montesuma" className="hero-bg-img" />
        <div className="hero-overlay" />
        <div className="hero-overlay-green" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-top">ADIESTRAMIENTO</span>
          <span className="hero-title-mid"><span className="hero-title-green">MONTESUMA</span></span>
          <span className="hero-title-sub">Rastreo · Protección · Obediencia</span>
        </h1>
        <p className="hero-desc">
          Transformamos perros en compañeros extraordinarios.<br />
          Metodología profesional. Resultados reales. Desde Costa Rica para el mundo.
        </p>
        <div className="hero-ctas">
          <a href="#servicios" className="btn-primary"
            onClick={e=>{e.preventDefault();document.getElementById('servicios')?.scrollIntoView({behavior:'smooth'})}}>
            Ver Servicios
          </a>
          <a href="#contacto" className="btn-outline"
            onClick={e=>{e.preventDefault();document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}}>
            Contáctenos
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><strong>+30</strong><span>Años de Experiencia</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>3</strong><span>Especialidades</span></div>
          <div className="hero-stat-divider" />
          <div className="hero-stat"><strong>100%</strong><span>Compromiso</span></div>
        </div>
      </div>

      <div className="hero-badge"><img src="/images/logo-white.png" alt="Logo Montesuma" /></div>
    </section>
  )
}
