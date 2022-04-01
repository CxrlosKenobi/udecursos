/* Data format:
  ramos: {
    'id': { id: 'id', content: 'NAME', color: '#FFFFFF', credits: 0, code: 'courseCode', prerequisites: [] }
*/

const Electronica = {
  Tasks: {
    'task-1': { id: 'task-1', content: 'Física I', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-2': { id: 'task-2', content: 'Álgebra I', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-3': { id: 'task-3', content: 'Cálculo I', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-4': { id: 'task-4', content: 'Química General I', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-5': { id: 'task-5', content: 'Introducción a la Ing. Electrónica', color: "black", credits: "1", code: "000000-0", prerequisites: [] },
    
    'task-6': { id: 'task-6', content: 'Física II', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-7': { id: 'task-7', content: 'Álgebra II', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-8': { id: 'task-8', content: 'Cálculo II', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-9': { id: 'task-9', content: 'Química General II', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-10': { id: 'task-10', content: 'Introducción a la Innovación en Ing.', color: "black", credits: "1", code: "000000-0", prerequisites: [] },

    'task-11': { id: 'task-11', content: 'Cálculo III', color: "black", credits: "5", code: "000000-0", prerequisites: [] },
    'task-12': { id: 'task-12', content: 'Ecuaciones Diferenciales Ordinarias', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-13': { id: 'task-13', content: 'Estadística y Probabilidades', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-14': { id: 'task-14', content: 'Electro-magnetismo', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-15': { id: 'task-15', content: 'Programación', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-16': { id: 'task-16', content: 'Español Académico', color: "black", credits: "2", code: "000000-0", prerequisites: [] },

    'task-17': { id: 'task-17', content: 'Modelación de procesos', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-18': { id: 'task-18', content: 'Calculo Numérico', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-19': { id: 'task-19', content: 'Complemento de Cálculo', color: "black", credits: "5", code: "000000-0", prerequisites: [] },
    'task-20': { id: 'task-20', content: 'Teoria de Circuitos (c)', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-21': { id: 'task-21', content: 'Labortorio de Circuitos Eléctricos (c)', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-22': { id: 'task-22', content: 'Taller de Habilidades Comunicacionales', color: "black", credits: "4", code: "000000-0", prerequisites: [], shrink: true },

    'task-23': { id: 'task-23', content: 'Electrónica', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-24': { id: 'task-24', content: 'Redes de Corriente Alterna (c)', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-25': { id: 'task-25', content: 'Laboratorio de Redes de Corriente Alterna (c)', color: "black", credits: "3", code: "000000-0", prerequisites: [], shrink: true },
    'task-26': { id: 'task-26', content: 'Sistemas Lineales Dinámicos', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-27': { id: 'task-27', content: 'Economía', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-28': { id: 'task-28', content: 'Innovación', color: "black", credits: "3", code: "000000-0", prerequisites: [] },

    'task-29': { id: 'task-29', content: 'Diseño Sistemas Digitales', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-30': { id: 'task-30', content: 'Micro-electrónica', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-31': { id: 'task-31', content: 'Sistemas de Control', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-32': { id: 'task-32', content: 'Procesamiento Digital de Señales', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-33': { id: 'task-33', content: 'Laboratorio de Electrónica', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-34': { id: 'task-34', content: 'Formulación y Evaluación de Proyectos', color: "black", credits: "4", code: "000000-0", prerequisites: [] },

    'task-35': { id: 'task-35', content: 'Sistemas Computacionales (c)', color: "black", credits: "4", code: "000000-0", prerequisites: [], shrink: true },
    'task-36': { id: 'task-36', content: 'Electrónica de Potencia', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-37': { id: 'task-37', content: 'Laboratorio de Sistemas de Control', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-38': { id: 'task-38', content: 'Fundamentos de Máquinas Eléctricas y Ctrl. de Movimiento', color: "black", credits: "3", code: "000000-0", prerequisites: [], shrink: true },
    'task-39': { id: 'task-39', content: 'Programación de Sistemas (c)', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-40': { id: 'task-40', content: 'Inglés Comunicacional Básico I', color: "black", credits: "5", code: "000000-0", prerequisites: [] },

    'task-41': { id: 'task-41', content: 'Taller de Sistemas Digitales', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-42': { id: 'task-42', content: 'Taller de Sistemas Electrónicos', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-43': { id: 'task-43', content: 'Deporte en Equipo Toda Carrera', color: "black", credits: "2", code: "000000-0", prerequisites: [] },
    'task-44': { id: 'task-44', content: 'Sistemas de Comunicaciones', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-45': { id: 'task-45', content: 'Redes de Datos', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-46': { id: 'task-46', content: 'Inglés Comunicativo Nivel Básico II', color: "black", credits: "5", code: "000000-0", prerequisites: [] },

    'task-47': { id: 'task-47', content: 'Electivo I', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-48': { id: 'task-48', content: 'Electivo II', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-49': { id: 'task-49', content: 'Electivo III', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-50': { id: 'task-50', content: 'Gestion de Empresas', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-51': { id: 'task-51', content: 'Intro. a la Sustentabilidad en Ing.', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-52': { id: 'task-52', content: 'Inglés Comunicativo Nivel Intermedio I', color: "black", credits: "5", code: "000000-0", prerequisites: [], shrink: true },
    'task-53': { id: 'task-53', content: 'Práctica Laboral (*)', color: "black", credits: "2", code: "000000-0", prerequisites: [] },

    'task-54': { id: 'task-54', content: 'Electivo IV', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-55': { id: 'task-55', content: 'Electivo V', color: "black", credits: "3", code: "000000-0", prerequisites: [] },
    'task-56': { id: 'task-56', content: 'Complementario', color: "black", credits: "1", code: "000000-0", prerequisites: [] },
    'task-57': { id: 'task-57', content: 'Proyecto Electrónico', color: "black", credits: "1", code: "000000-0", prerequisites: [] },
    'task-58': { id: 'task-58', content: 'Proyecto de Memoria de Título', color: "black", credits: "1", code: "000000-0", prerequisites: [] },
    'task-59': { id: 'task-59', content: 'Inglés Comunicativo Nivel Intermedio II', color: "black", credits: "5", code: "000000-0", prerequisites: [], shrink: true },

    'task-60': { id: 'task-60', content: 'Práctica Profesional (*)', color: "black", credits: "4", code: "000000-0", prerequisites: [] },
    'task-61': { id: 'task-61', content: 'Memoria de Título', color: "black", credits: "20", code: "000000-0", prerequisites: [] },
  },

  Columns: {
    'column-1': {
      id: 'column-1',
      title: 'I',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
      credits: ''
    },
    'column-2': {
      id: 'column-2',
      title: 'II',
      taskIds: ['task-6', 'task-7', 'task-8', 'task-9', 'task-10'],
      credits: ''
    },
    'column-3': {
      id: 'column-3',
      title: 'III',
      taskIds: ['task-11', 'task-12', 'task-13', 'task-14', 'task-15', 'task-16'],
      credits: ''
    },
    'column-4': {
      id: 'column-4',
      title: 'IV',
      taskIds: ['task-17', 'task-18', 'task-19', 'task-20', 'task-21', 'task-22'],
      credits: ''
    },
    'column-5': {
      id: 'column-5',
      title: 'V',
      taskIds: ['task-23', 'task-24', 'task-25', 'task-26', 'task-27', 'task-28'],
      credits: ''
    },
    'column-6': {
      id: 'column-6',
      title: 'VI',
      taskIds: ['task-29', 'task-30', 'task-31', 'task-32', 'task-33', 'task-34'],
      credits: ''
    },
    'column-7': {
      id: 'column-7',
      title: 'VII',
      taskIds: ['task-35', 'task-36', 'task-37', 'task-38', 'task-39', 'task-40'],
      credits: ''
    },
    'column-8': {
      id: 'column-8',
      title: 'VIII',
      taskIds: ['task-41', 'task-42', 'task-43', 'task-44', 'task-45', 'task-46'],
      credits: ''
    },
    'column-9': {
      id: 'column-9',
      title: 'IX',
      taskIds: ['task-47', 'task-48', 'task-49', 'task-50', 'task-51', 'task-52', 'task-53'],
      credits: ''
    },
    'column-10': {
      id: 'column-10',
      title: 'X',
      taskIds: ['task-54', 'task-55', 'task-56', 'task-57', 'task-58', 'task-59'],
      credits: ''
    },
    'column-11': {
      id: 'column-11',
      title: 'XI',
      taskIds: ['task-60', 'task-61'],
      credits: ''
    }
  },

  ColumnOrder: [
    'column-1', 'column-2', 
    'column-3', 'column-4',
    'column-5', 'column-6',
    'column-7', 'column-8',
    'column-9', 'column-10',
    'column-11'
  ]
};

export default Electronica;
