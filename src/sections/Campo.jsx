import './Campo.css'
import { MdLocationOn, MdOutlineGrass, MdFitnessCenter } from 'react-icons/md'
import { GiJumpingDog, GiForest } from 'react-icons/gi'

const features = [
  { icon: <MdOutlineGrass size={24}/>, title: 'Campo en Zacate', desc: 'Amplio campo de zacate natural para ejercicios de rastreo, obediencia libre y trabajo en movimiento sin restricciones de espacio.' },
  { icon: <GiJumpingDog size={24}/>, title: 'Obstáculos & Agility', desc: 'Rampas, túneles, vallas, escaleras y conos de tracking. Infraestructura completa para entrenamiento deportivo IGP de alto nivel.' },
  { icon: <MdFitnessCenter size={24}/>, title: 'Zona de Protección', desc: 'Área delimitada para trabajo de mordida con equipamiento profesional y ayudante capacitado. Seguridad y control en todo momento.' },
  { icon: <GiForest size={24}/>, title: 'Entorno Natural', desc: 'Ubicados en Cartago, rodeados de naturaleza. El ambiente reduce el estrés del animal y favorece la concentración en el trabajo.' },
]

export default function Campo() {
  return (
    <section className="campo" id="campo">
      <div className="campo-inner">
        <div className="campo-content">
          <span className="section-label">Nuestras Instalaciones</span>
          <div className="accent-line" />
          <h2 className="campo-title">
            NUESTRO<br />
            <span className="campo-green">CAMPO</span><br />
            DE ENTRENAMIENTO
          </h2>

          <div className="campo-location">
            <MdLocationOn size={18} color="var(--green-bright)" />
            <span>Cartago, Costa Rica</span>
          </div>

          <p className="campo-desc">
            Ubicados en Cartago, contamos con instalaciones diseñadas específicamente
            para el adiestramiento canino profesional. El espacio, el equipamiento y el
            terreno están pensados para trabajar — no para aparentar.
          </p>
          <p className="campo-desc">
            Más de 30 años de experiencia respaldan cada decisión de diseño del campo.
            Desde los conos de rastreo hasta la zona de protección, todo tiene un propósito
            técnico. Aquí los perros aprenden a trabajar en condiciones reales.
          </p>

          <div className="campo-features">
            {features.map(f => (
              <div className="campo-feature" key={f.title}>
                <div className="campo-feature-icon">{f.icon}</div>
                <div>
                  <h4 className="campo-feature-title">{f.title}</h4>
                  <p className="campo-feature-desc">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="campo-visual">
          {/* No badge on image */}
          <div className="campo-img-main">
            <img src="/images/campo-panorama.jpeg" alt="Campo panorámico Adiestramiento Montesuma, Cartago Costa Rica" />
          </div>
          <div className="campo-img-secondary">
            <img src="/images/campo-agility.jpeg" alt="Campo de agility e instalaciones Montesuma" />
          </div>
        </div>
      </div>

      {/* Full-width strip — heavy phrase only, no location label */}
      <div className="campo-panorama-strip">
        <img src="/images/campo-panorama.jpeg" alt="Vista panorámica campo Montesuma" />
        <div className="panorama-overlay">
          <div className="panorama-text">
            <h3>EN NUESTRO CAMPO<br />SE ENTRENA DE VERDAD</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
