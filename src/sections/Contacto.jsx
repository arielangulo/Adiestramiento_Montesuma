import './Contacto.css'
import { FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { MdPhone, MdLocationOn, MdSchedule, MdPets } from 'react-icons/md'

const contactInfo = [
  {
    icon: <MdPhone size={26} />,
    label: 'WhatsApp / Teléfono',
    value: '8845-5565',
    link: 'https://wa.me/50688455565',
    linkLabel: 'Escribir por WhatsApp',
  },
  {
    icon: <MdLocationOn size={26} />,
    label: 'Ubicación',
    value: 'Cartago, Costa Rica',
    sub: 'Consultar indicaciones exactas',
    link: "https://www.google.com/maps/place/9%C2%B054'09.9%22N+83%C2%B056'12.3%22W/@9.9027582,-83.9393234,17z",
    linkLabel: 'Ver en Google Maps',
  },
  {
    icon: <MdSchedule size={26} />,
    label: 'Horario de Atención',
    value: 'Lunes – Sábado',
    sub: '7:00 AM – 6:00 PM',
  },
  {
    icon: <MdPets size={26} />,
    label: 'Servicios',
    value: 'Rastreo · Protección · Obediencia',
    sub: 'Hotelería Canina disponible',
  },
]

// Embed URL with &style= to remove labels — use the satellite/clean version
// We hide the overlay label via CSS, keeping only the raw map
const LAT = 9.9027582
const LNG = -83.9367485
const MAPS_EMBED = `https://maps.google.com/maps?q=${LAT},${LNG}&z=16&output=embed&hl=es&disableDefaultUI=1`

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto-header-strip">
        <div className="strip-inner">
          <span className="section-label">Contáctenos</span>
          <h2 className="contacto-title">
            EMPIECE SU<br />
            <span className="title-green">ENTRENAMIENTO</span>
          </h2>
          <p className="contacto-subtitle">
            Háblenos de su perro. Evaluamos su caso y le decimos exactamente qué puede lograr.
          </p>
        </div>
      </div>

      <div className="contacto-body">
        <div className="contacto-grid">
          {contactInfo.map(item => (
            <div className="contact-card" key={item.label}>
              <div className="contact-icon">{item.icon}</div>
              <div className="contact-info">
                <span className="contact-label">{item.label}</span>
                <strong className="contact-value">{item.value}</strong>
                {item.sub && <span className="contact-sub">{item.sub}</span>}
                {item.link && (
                  <a href={item.link} target="_blank" rel="noreferrer" className="contact-link">
                    {item.linkLabel} →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="contacto-map-section">
          <div className="map-wrap">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(92%) hue-rotate(180deg) brightness(0.85) contrast(1.05) saturate(0.85)',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Adiestramiento Montesuma"
            />
            {/* Overlay to hide Google Maps branding/labels at bottom */}
            <div className="map-brand-cover" />
          </div>

          <div className="whatsapp-cta">
            <div className="wa-top">
              <FaWhatsapp size={40} color="#25D366" />
              <div>
                <h3 className="wa-title">¿LISTO PARA EMPEZAR?</h3>
                <p className="wa-sub">Respondemos rápido. Sin compromiso.</p>
              </div>
            </div>

            <div className="wa-number">8845-5565</div>

            <p className="wa-desc">
              Contanos sobre tu perro, su edad, raza y qué buscás lograr.
              Nuestro equipo te asesora y coordina una sesión inicial.
            </p>

            <a
              href="https://wa.me/50688455565?text=Hola%20Adiestramiento%20Montesuma!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
              target="_blank" rel="noreferrer"
              className="wa-btn"
            >
              <FaWhatsapp size={17} /> Escribir por WhatsApp
            </a>

            <a
              href="https://www.facebook.com/criadero.montesuma/"
              target="_blank" rel="noreferrer"
              className="fb-btn"
            >
              <FaFacebook size={17} /> Visitar en Facebook
            </a>

            <div className="wa-note">También podés llamar directamente al mismo número</div>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/images/logo-white.png" alt="Adiestramiento Montesuma" />
            <div>
              <strong>ADIESTRAMIENTO MONTESUMA</strong>
              <span>Costa Rica</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="#servicios" onClick={e=>{e.preventDefault();document.getElementById('servicios')?.scrollIntoView({behavior:'smooth'})}}>Servicios</a>
            <a href="#hoteleria" onClick={e=>{e.preventDefault();document.getElementById('hoteleria')?.scrollIntoView({behavior:'smooth'})}}>Hotelería</a>
            <a href="#campo" onClick={e=>{e.preventDefault();document.getElementById('campo')?.scrollIntoView({behavior:'smooth'})}}>Nuestro Campo</a>
            <a href="#contacto" onClick={e=>{e.preventDefault();document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'})}}>Contacto</a>
          </div>
          <div className="footer-right">
            <div className="footer-copy">© 2026 Adiestramiento Montesuma. Todos los derechos reservados.</div>
            <div className="footer-dev">Desarrollado por <span className="dev-name">Ariel Angulo Méndez</span></div>
          </div>
        </div>
      </footer>
    </section>
  )
}
