import './Equipo.css'

const equipo = [
  {
    nombre: 'John Meneses',
    cargo: 'Director & Adiestrador Principal',
    initials: 'JM',
    bio: 'Más de 30 años formando perros de trabajo bajo estándares IGP/IPO internacionales. Especialista en rastreo, protección y obediencia de alto rendimiento. Ha entrenado perros para protección personal, guardia perimetral y competición deportiva a nivel nacional.',
  },
  {
    nombre: 'Steven',
    cargo: 'Adiestrador & Entrenador de Campo',
    initials: 'ST',
    bio: 'Especialista en trabajo de campo y protección deportiva. Maneja las sesiones de mordida, los ejercicios de campo abierto y la supervisión diaria de los perros en hotelería. Amplia experiencia en lectura canina y trabajo con razas de alto drive.',
  },
]

export default function Equipo() {
  return (
    <section className="equipo" id="equipo">
      <div className="equipo-watermark">EQUIPO</div>
      <div className="equipo-container">
        <div className="equipo-header">
          <span className="section-label">Las Personas Detrás del Resultado</span>
          <div className="accent-line" />
          <h2 className="equipo-title">NUESTRO<br /><span className="title-green">EQUIPO</span></h2>
          <p className="equipo-subtitle">Dos profesionales. Un solo estándar.</p>
        </div>

        <div className="equipo-grid">
          {equipo.map((p, idx) => (
            <div className="equipo-card" key={idx}>
              <div className="equipo-avatar">
                <div className="avatar-circle">
                  <span className="avatar-initials">{p.initials}</span>
                </div>
                <div className="avatar-ring" />
              </div>
              <div className="equipo-card-body">
                <div className="equipo-card-top">
                  <h3 className="equipo-nombre">{p.nombre}</h3>
                  <span className="equipo-cargo">{p.cargo}</span>
                </div>
                <p className="equipo-bio">{p.bio}</p>
              </div>
              <div className="equipo-card-line" />
            </div>
          ))}
        </div>

        <div className="equipo-quote">
          <div className="quote-marks">"</div>
          <blockquote>
            Un perro mal entrenado no es culpa del perro.<br />
            <strong>Es responsabilidad del entrenador.</strong>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
