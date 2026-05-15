import ServicePageLayout from '../components/ServicePageLayout'
import { MdSearch, MdTerrain, MdOutlineGrass, MdOutlinePets } from 'react-icons/md'

const data = {
  label: 'Servicio de Rastreo · Adiestramiento Montesuma',
  heroVideo: null,
  heroImg: '/images/dog-tracking.jpeg',
  titleLines: ['RASTREO', 'CANINO'],
  tagline: 'El olfato más poderoso del mundo, llevado al límite de su capacidad.',

  introLabel: 'Qué es el rastreo canino',
  introTitle: 'EL INSTINTO CONVERTIDO EN DISCIPLINA',
  introBadge: { big: 'IGP', small: 'Estándar\nInternacional' },
  introParas: [
    'El rastreo canino es la disciplina más exigente del trabajo canino. El perro sigue el rastro olfativo exacto que una persona dejó sobre el suelo, ignorando todo lo demás. No es búsqueda al azar — es precisión absoluta.',
    'En Adiestramiento Montesuma trabajamos bajo estándares IGP/IPO internacionales. Formamos perros para competición deportiva de alto nivel, operaciones reales de búsqueda y rescate, y apoyo a cuerpos de seguridad.',
    'El proceso es gradual, progresivo y exigente. Empezamos desde los fundamentos olfativos y construimos hasta rastreos de alta complejidad en distintas superficies, temperaturas y condiciones de terreno.',
  ],

  modalitiesLabel: 'Tipos de rastreo que trabajamos',
  modalitiesTitle: 'MODALIDADES DE RASTREO',
  modalities: [
    { icon: <MdOutlineGrass size={30}/>, title: 'Rastreo en Zacate', desc: 'El punto de partida. El olor queda atrapado en la vegetación. Trabajamos ángulos, cruces, objetos y variaciones de ruta hasta lograr precisión constante.' },
    { icon: <MdTerrain size={30}/>, title: 'Rastreo en Tierra', desc: 'Mayor dificultad técnica. El olor penetra el suelo y se dispersa diferente. Exige mayor concentración y paciencia del perro. Es donde se prueba el trabajo real.' },
    { icon: <MdSearch size={30}/>, title: 'Búsqueda y Rescate', desc: 'Trabajo en área abierta para localizar personas desaparecidas. El perro utiliza viento y olfato para cubrir terreno de forma sistemática y eficiente.' },
    { icon: <MdOutlinePets size={30}/>, title: 'Rastreo Deportivo IGP', desc: 'Competición internacional bajo reglamento FCI. Preparamos para niveles IGP 1, 2 y 3 con exigencia técnica y mental de alto rendimiento.' },
  ],

  process: {
    label: 'Cómo funciona el proceso',
    title: 'ETAPAS DEL ENTRENAMIENTO',
    steps: [
      { title: 'Evaluación inicial', desc: 'Valoramos el temperamento, drive olfativo y nivel actual del perro. Definimos un plan claro según el objetivo: deporte, trabajo operativo o formación básica.' },
      { title: 'Activación nasal', desc: 'Ejercicios de motivación olfativa para despertar el instinto de búsqueda. El perro aprende que su nariz es su herramienta principal — y que usarla trae recompensa.' },
      { title: 'Rastreos simples', desc: 'Rutas cortas y directas en superficie uniforme. El perro construye confianza y aprende a seguir el rastro con precisión antes de aumentar la dificultad.' },
      { title: 'Complejización progresiva', desc: 'Aumentamos longitud, ángulos, tiempo de envejecimiento del rastro y cambiamos superficies. El perro desarrolla paciencia, profundidad y constancia.' },
      { title: 'Consolidación en condiciones reales', desc: 'Viento, lluvia, rastros cruzados, terreno irregular. Si no funciona en condiciones reales, no está entrenado.' },
    ],
  },

  ctaTitle: 'EL POTENCIAL DE SU PERRO\nESTÁ SIN EXPLOTAR.',
  ctaSub: 'Contáctenos. Evaluamos su perro y le decimos exactamente qué puede lograr.',

  others: [
    { href: '/proteccion', title: 'PROTECCIÓN', img: '/images/dog-proteccion.jpeg' },
    { href: '/obediencia', title: 'OBEDIENCIA', img: '/images/obediencia-dog.jpeg' },
  ],
}

export default function Rastreo() {
  return <ServicePageLayout service={data} />
}
