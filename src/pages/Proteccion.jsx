import ServicePageLayout from '../components/ServicePageLayout'
import { MdShield, MdSecurity, MdOutlineCheckCircle } from 'react-icons/md'
import { GiPoliceBadge } from 'react-icons/gi'

const data = {
  label: 'Servicio de Protección · Adiestramiento Montesuma',
  heroVideo: '/images/video-proteccion.mp4',
  heroImg: '/images/dog-security.jpeg',
  titleLines: ['PERRO DE', 'PROTECCIÓN'],
  tagline: '¿Quiere un perro que muerda, o un perro entrenado? La diferencia la define todo.',

  introLabel: 'Protección canina profesional',
  introTitle: 'CONTROL TOTAL. FUERZA REAL.',
  introImg: '/images/dog-mad.jpeg',
  introBadge: { big: 'K9', small: 'Protección\nProfesional' },
  introParas: [
    'Un perro de protección sin metodología es un peligro. Un perro de protección bien formado es una herramienta de seguridad extraordinaria. En Adiestramiento Montesuma no formamos perros agresivos — formamos perros con control absoluto que pueden actuar cuando la situación lo exige.',
    'El equilibrio es la clave: un animal capaz de neutralizar una amenaza real que al mismo tiempo convive sin problemas con la familia, obedece al primer comando y no representa ningún riesgo fuera de contexto.',
    'Trabajamos con razas de alto drive: Pastor Alemán, Malinois, Rottweiler. Pero el temperamento del perro pesa más que su raza. No todo perro sirve para protección, y eso lo evaluamos con honestidad desde el principio.',
  ],

  modalitiesLabel: 'Áreas de formación en protección',
  modalitiesTitle: 'MODALIDADES DE PROTECCIÓN',
  modalities: [
    { icon: <MdShield size={30}/>, title: 'Protección Personal', desc: 'El perro detecta amenazas, alerta al dueño y actúa bajo comando directo. Formación para protección de personas en situaciones cotidianas de alto riesgo.' },
    { icon: <MdSecurity size={30}/>, title: 'Guardia Perimetral', desc: 'Protección de propiedades, fincas y negocios. El perro patrulla, detecta intrusos y opera como disuasivo efectivo con criterio y control.' },
    { icon: <GiPoliceBadge size={30}/>, title: 'Trabajo de Mordida IGP', desc: 'Disciplina deportiva internacional bajo reglamento FCI. Guarda, búsqueda, ataque y obediencia en secuencia. Exigencia técnica de alto nivel.' },
    { icon: <MdOutlineCheckCircle size={30}/>, title: 'Control Bajo Presión', desc: 'El componente más importante. El perro suelta, obedece y se calma al instante bajo cualquier nivel de presión. Sin esto, no hay perro de protección — hay un problema.' },
  ],

  process: {
    label: 'El proceso de formación',
    title: 'CÓMO FORMAMOS UN PERRO DE PROTECCIÓN',
    steps: [
      { title: 'Evaluación de temperamento', desc: 'No todo perro sirve para protección. Evaluamos confianza, drive, nervio y estabilidad bajo presión. Si no pasa, lo decimos directo.' },
      { title: 'Obediencia primero', desc: 'Antes de cualquier trabajo de protección, el perro necesita obediencia sólida. Sin control básico impecable no avanzamos. Punto.' },
      { title: 'Trabajo de presa y mordida', desc: 'Introducimos la mordida de forma estructurada. El perro aprende a morder con decisión y a soltar al instante. Los dos van juntos.' },
      { title: 'Escenarios controlados', desc: 'Trabajo con ayudante profesional en secuencias de búsqueda, guarda, ataque y obediencia. Cada fase se consolida antes de agregar la siguiente.' },
      { title: 'Prueba en condiciones reales', desc: 'Ambientes variados, distracciones, presión real. El perro que solo trabaja en el campo de entrenamiento no sirve para protección real.' },
    ],
  },

  ctaTitle: '¿QUIERE UN PERRO QUE\nREALMENTE PROTEJA?',
  ctaSub: 'Hablemos. Le explicamos qué nivel de formación necesita su perro y qué puede esperar.',

  others: [
    { href: '/rastreo', title: 'RASTREO', img: '/images/dog-tracking.jpeg' },
    { href: '/obediencia', title: 'OBEDIENCIA', img: '/images/obediencia-dog.jpeg' },
  ],
}

export default function Proteccion() {
  return <ServicePageLayout service={data} />
}
