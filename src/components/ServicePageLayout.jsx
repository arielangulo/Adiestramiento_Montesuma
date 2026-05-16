import { Link } from 'react-router-dom'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import './ServicePageLayout.css'

export default function ServicePageLayout({ service }) {
  return (
    <div className="sp-wrapper">

      {/* HERO */}
      <header className="sp-hero">
        {service.heroVideo ? (
          <video
            className="sp-hero-media"
            src={service.heroVideo}
            autoPlay muted loop playsInline
          />
        ) : (
          <img
            className="sp-hero-media"
            src={service.heroImg}
            alt={service.titleLines.join(' ')}
          />
        )}
        <div className="sp-hero-overlay" />
        <div className="sp-hero-content">
          <span className="section-label">{service.label}</span>
          <h1 className="sp-hero-title">
            {service.titleLines.map((line, i) => (
              <span key={i} className={i % 2 === 1 ? 'green-line' : ''}>{line}</span>
            ))}
          </h1>
          <p className="sp-hero-tagline">{service.tagline}</p>
          <div className="sp-hero-ctas">
            <a
              href="https://wa.me/50688455565?text=Hola%20Adiestramiento%20Montesuma!%20Me%20interesa%20saber%20más%20sobre%20sus%20servicios."
              target="_blank" rel="noreferrer"
              className="btn-primary"
            >
              <FaWhatsapp /> Consultar ahora
            </a>
            <a
              href="#mas-info"
              className="btn-outline"
              onClick={(e) => { e.preventDefault(); document.getElementById('mas-info')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Ver más info
            </a>
          </div>
        </div>
        <div className="sp-scroll-hint"><div className="sp-scroll-line" /></div>
      </header>

      {/* INTRO */}
      <section className="sp-intro" id="mas-info">
        <div className="sp-intro-inner">
          <div className="sp-intro-text">
            <span className="section-label">{service.introLabel}</span>
            <div className="accent-line" />
            <h2 className="sp-section-title">{service.introTitle}</h2>
            {service.introParas.map((p, i) => <p key={i} className="sp-para">{p}</p>)}
          </div>
          {service.introImg && (
            <div className="sp-intro-img">
              <img src={service.introImg} alt={service.introTitle} />
              {service.introBadge && (
                <div className="sp-intro-badge">
                  <span className="badge-big">{service.introBadge.big}</span>
                  <span className="badge-small">{service.introBadge.small}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* MODALITIES */}
      <section className="sp-modalities">
        <div className="sp-mod-inner">
          <div className="sp-mod-header">
            <span className="section-label">{service.modalitiesLabel}</span>
            <div className="accent-line" />
            <h2 className="sp-section-title">{service.modalitiesTitle}</h2>
          </div>
          <div className="sp-mod-grid">
            {service.modalities.map((m, i) => (
              <div className="sp-mod-card" key={i}>
                <div className="sp-mod-icon">{m.icon}</div>
                <h3 className="sp-mod-title">{m.title}</h3>
                <p className="sp-mod-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      {service.process && (
        <section className="sp-process">
          <div className="sp-process-inner">
            <span className="section-label">{service.process.label}</span>
            <div className="accent-line" />
            <h2 className="sp-section-title">{service.process.title}</h2>
            <div className="sp-process-steps">
              {service.process.steps.map((s, i) => (
                <div className="sp-step" key={i}>
                  <div className="sp-step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="sp-step-body">
                    <h4 className="sp-step-title">{s.title}</h4>
                    <p className="sp-step-desc">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA STRIP */}
      <section className="sp-cta-strip">
        <div className="sp-cta-inner">
          <div className="sp-cta-text">
            <h2 className="sp-cta-title">{service.ctaTitle}</h2>
            <p className="sp-cta-sub">{service.ctaSub}</p>
          </div>
          <div className="sp-cta-btns">
            <a
              href="https://wa.me/50688455565?text=Hola%20Adiestramiento%20Montesuma!%20Quiero%20información%20sobre%20sus%20servicios."
              target="_blank" rel="noreferrer"
              className="btn-primary"
            >
              <FaWhatsapp /> WhatsApp · 8845-5565
            </a>
            <a
              href="https://www.facebook.com/criadero.montesuma/"
              target="_blank" rel="noreferrer"
              className="btn-facebook"
            >
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="sp-others">
        <div className="sp-others-inner">
          <span className="section-label">También ofrecemos</span>
          <div className="sp-others-grid">
            {service.others.map(o => (
              <Link to={o.href} key={o.href} className="sp-other-card">
                <img src={o.img} alt={o.title} />
                <div className="sp-other-overlay" />
                <div className="sp-other-text">
                  <h3>{o.title}</h3>
                  <span>Ver servicio →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <div className="sp-footer-strip">
        <Link to="/" className="sp-footer-logo">
          <img src="/images/logo-white.png" alt="Montesuma" />
          <span>Adiestramiento Montesuma · Costa Rica</span>
        </Link>
        <div className="sp-footer-links">
          <Link to="/rastreo">Rastreo</Link>
          <Link to="/proteccion">Protección</Link>
          <Link to="/obediencia">Obediencia</Link>
        </div>
      </div>

    </div>
  )
}
