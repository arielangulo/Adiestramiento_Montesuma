import ServicePageLayout from '../components/ServicePageLayout'
import { MdOutlinePets, MdFamilyRestroom, MdOutlineEmojiEvents, MdTune } from 'react-icons/md'
import { GiDogBowl } from 'react-icons/gi'

const data = {
  label: 'Servicio de Obediencia · Adiestramiento Montesuma',
  heroVideo: '/images/video-obediencia.mp4',
  heroImg: '/images/obediencia-blanco-sit.jpeg',
  titleLines: ['OBEDIENCIA', 'CANINA'],
  tagline: 'La base de todo perro de trabajo. Sin obediencia, no hay nada.',

  introLabel: 'Por qué la obediencia lo define todo',
  introTitle: 'UN PERRO SIN CONTROL ES UN PERRO SIN FORMAR.',
  introImg: '/images/obediencia-blanco-heel.jpeg',
  introBadge: { big: '100%', small: 'Resultados\nMedibles' },
  introParas: [
    'La obediencia no es un lujo — es el fundamento de todo. Un perro que no responde a comandos básicos en cualquier ambiente, con cualquier nivel de distracción, no está entrenado. Está condicionado solo en el salón de su casa.',
    'En Adiestramiento Montesuma construimos obediencia real: respuestas confiables en la calle, en el campo, con otros perros, con gente desconocida, bajo presión. Lo que se ve en una sesión controlada no vale nada si no se sostiene afuera.',
    'Trabajamos con cualquier raza y cualquier edad. Si su perro jala la correa, no obedece, salta encima de las personas o no viene cuando se le llama — eso tiene solución. Y la solución no depende del perro, depende del trabajo.',
  ],

  modalitiesLabel: 'Niveles y enfoques de obediencia',
  modalitiesTitle: 'NIVELES DE FORMACIÓN',
  modalities: [
    { icon: <GiDogBowl size={30}/>, title: 'Obediencia Básica', desc: 'Sentado, quieto, echado, venga, no. Los comandos que todo perro debe dominar sin excepción. Punto de partida para cualquier formación más avanzada.' },
    { icon: <MdFamilyRestroom size={30}/>, title: 'Obediencia para Convivencia', desc: 'Control en la vida cotidiana: no saltar, no jalar, respeto en espacios públicos, comportamiento con visitas y niños. Un perro que funciona en la vida real.' },
    { icon: <MdTune size={30}/>, title: 'Obediencia Avanzada', desc: 'Talón libre sin correa, quieto a distancia larga, envíos, retorno al flanco, secuencias combinadas. Para quienes exigen el nivel más alto de control y precisión.' },
    { icon: <MdOutlineEmojiEvents size={30}/>, title: 'Obediencia Deportiva IGP', desc: 'Fase B del reglamento IGP: 10 ejercicios de obediencia con precisión milimétrica. Formación para competición nacional e internacional bajo estándar FCI.' },
  ],

  process: {
    label: 'De cero a control absoluto',
    title: 'PROCESO DE ENTRENAMIENTO',
    steps: [
      { title: 'Evaluación conductual', desc: 'Observamos la relación actual entre perro y dueño, los problemas existentes y el nivel de respuesta real. Sin diagnóstico honesto no hay plan efectivo.' },
      { title: 'Comunicación antes que comandos', desc: 'Le enseñamos a usted a marcar, recompensar y comunicarse correctamente. Entrenar al perro es el 50%. El otro 50% es que usted sepa cómo manejarlo.' },
      { title: 'Comandos básicos en ambiente controlado', desc: 'El perro aprende en un contexto de alta tasa de éxito. Construimos comprensión y confianza antes de subir la dificultad.' },
      { title: 'Generalización en distintos ambientes', desc: 'El mismo ejercicio en el campo, la calle, la plaza, con distracciones reales. Un perro que solo obedece en casa no sirve de nada afuera.' },
      { title: 'Herramientas para el dueño', desc: 'Usted aprende a mantener lo trabajado en casa. Un perro bien entrenado con un dueño sin herramientas retrocede en semanas.' },
    ],
  },

  ctaTitle: 'SU PERRO PUEDE SER\nMEJOR DE LO QUE CREE.',
  ctaSub: 'Contáctenos. Sin rodeos: le decimos qué necesita su perro y cómo lograrlo.',

  others: [
    { href: '/rastreo', title: 'RASTREO', img: '/images/dog-tracking.jpeg' },
    { href: '/proteccion', title: 'PROTECCIÓN', img: '/images/dog-proteccion.jpeg' },
  ],
}

export default function Obediencia() {
  return <ServicePageLayout service={data} />
}
