import Hero from '../sections/Hero'
import Servicios from '../sections/Servicios'
import Hoteleria from '../sections/Hoteleria'
import Equipo from '../sections/Equipo'
import Campo from '../sections/Campo'
import Contacto from '../sections/Contacto'

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicios />
      <Hoteleria />
      <Equipo />
      <Campo />
      <Contacto />
    </main>
  )
}
