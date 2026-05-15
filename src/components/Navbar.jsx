import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'
import { MdSearch, MdShield, MdPets } from 'react-icons/md'
import './Navbar.css'

const servicios = [
  { label: 'Rastreo', href: '/rastreo', desc: 'Tracking & búsqueda', icon: <MdSearch size={18}/> },
  { label: 'Protección', href: '/proteccion', desc: 'Guardia y trabajo de mordida', icon: <MdShield size={18}/> },
  { label: 'Obediencia', href: '/obediencia', desc: 'Control y comunicación', icon: <MdPets size={18}/> },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const dropRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => { setMenuOpen(false); setDropOpen(false) }, [location.pathname])

  const scrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 350)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContacto = (e) => { e.preventDefault(); setMenuOpen(false); scrollTo('contacto') }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="logo-circle">
              <img src="/images/logo-white.png" alt="Adiestramiento Montesuma" />
            </div>
            <span className="navbar-brand">
              <strong>MONTESUMA</strong>
              <em>Costa Rica</em>
            </span>
          </Link>

          <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>

            <li className="has-drop" ref={dropRef}>
              <button
                className={`nav-drop-trigger ${dropOpen ? 'active' : ''}`}
                onClick={() => setDropOpen(!dropOpen)}
              >
                Servicios
                <FaChevronDown className={`drop-arrow ${dropOpen ? 'rotated' : ''}`} />
              </button>
              <div className={`nav-dropdown ${dropOpen ? 'visible' : ''}`}>
                <div className="dropdown-pip" />
                <div className="dropdown-inner">
                  <p className="dropdown-header">Nuestros Servicios</p>
                  {servicios.map(s => (
                    <Link key={s.href} to={s.href} className="drop-item" onClick={() => setDropOpen(false)}>
                      <div className="drop-item-icon">{s.icon}</div>
                      <div className="drop-item-text">
                        <span className="drop-label">{s.label}</span>
                        <span className="drop-desc">{s.desc}</span>
                      </div>
                      <span className="drop-arrow-right">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li><a href="#hoteleria" onClick={(e)=>{e.preventDefault();setMenuOpen(false);scrollTo('hoteleria')}}>Hotelería</a></li>
            <li><a href="#campo" onClick={(e)=>{e.preventDefault();setMenuOpen(false);scrollTo('campo')}}>Nuestro Campo</a></li>
            <li><a href="#contacto" onClick={handleContacto} className="nav-cta">Contáctenos</a></li>
          </ul>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            {menuOpen ? <FaTimes size={20}/> : <FaBars size={20}/>}
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-logo">
          <img src="/images/logo-white.png" alt="Montesuma" />
          <div>
            <strong>MONTESUMA</strong>
            <em>Costa Rica</em>
          </div>
        </div>
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <div className="mobile-section-label">Servicios de Entrenamiento</div>
          {servicios.map(s => (
            <Link key={s.href} to={s.href} className="mobile-service-link" onClick={() => setMenuOpen(false)}>
              <span className="mobile-svc-icon">{s.icon}</span>
              {s.label}
            </Link>
          ))}
          <a href="#hoteleria" onClick={(e)=>{e.preventDefault();setMenuOpen(false);scrollTo('hoteleria')}}>Hotelería</a>
          <a href="#campo" onClick={(e)=>{e.preventDefault();setMenuOpen(false);scrollTo('campo')}}>Nuestro Campo</a>
          <a href="#contacto" onClick={handleContacto} className="mobile-cta">Contáctenos</a>
        </nav>
      </div>
    </>
  )
}
