import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Rastreo from './pages/Rastreo'
import Proteccion from './pages/Proteccion'
import Obediencia from './pages/Obediencia'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0,0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rastreo" element={<Rastreo />} />
        <Route path="/proteccion" element={<Proteccion />} />
        <Route path="/obediencia" element={<Obediencia />} />
      </Routes>
    </>
  )
}
