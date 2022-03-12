/* Data format:
  ramos: {
    'id': { id: 'id', content: 'NAME', color: '#FFFFFF', credits: 0, code: 'courseCode', prerequisites: [] }
*/

const IngFisica = {

  Tasks: {
    'task-1': { id: 'task-1', content: 'Álgebra y Trigonometría', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-2': { id: 'task-2', content: 'Física I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-3': { id: 'task-3', content: 'Computación Científica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-4': { id: 'task-4', content: 'Cálculo Diferencial e Integral', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-5': { id: 'task-5', content: 'Álgebra Lineal', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-6': { id: 'task-6', content: 'Física II: Fundamentos de mecánica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-7': { id: 'task-7', content: 'Ecuaciones Diferenciales Ordinarias', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-8': { id: 'task-8', content: 'Cálculo III', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-9': { id: 'task-9', content: 'Física Matemática I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-10': { id: 'task-10', content: 'Física III-1: Electro-magnetismo I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-11': { id: 'task-11', content: 'Física Computacional I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-12': { id: 'task-12', content: 'Cálculo IV: Cálculo Complejo', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-13': { id: 'task-13', content: 'Física III-2: Electro-magnetismo II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-14': { id: 'task-14', content: 'Física IV: Termodinámica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-15': { id: 'task-15', content: 'Laboratorio I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-16': { id: 'task-16', content: 'Física Matemática II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-17': { id: 'task-17', content: 'Física V: Óptica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-18': { id: 'task-18', content: 'Mecánica Clásica I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-19': { id: 'task-19', content: 'Física VI: Oscilaciones y Ondas', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-20': { id: 'task-20', content: 'Teoría de Circuitos', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-21': { id: 'task-21', content: 'Física Matemática III', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-22': { id: 'task-22', content: 'Física VII: Introducción a la Mecánica Cuántica', color: "black", credits: "0", code: "000000-0", prerequisites: [], shrink: true },
    'task-23': { id: 'task-23', content: 'Electrodinámica I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-24': { id: 'task-24', content: 'Dispositivos Semi-conductores', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-25': { id: 'task-25', content: 'Laboratorio II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-26': { id: 'task-26', content: 'Mecánica de Fluidos', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-27': { id: 'task-27', content: 'Mecánica Cuántica I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-28': { id: 'task-28', content: 'Electrónica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-29': { id: 'task-29', content: 'Física Computacional III', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-30': { id: 'task-30', content: 'Asignatura Electiva', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-31': { id: 'task-31', content: 'Física Estadística', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-32': { id: 'task-32', content: 'Circuitos Digitales', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-33': { id: 'task-33', content: 'Física Estado Sólido', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-34': { id: 'task-34', content: 'Diseño de Prototipos I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-35': { id: 'task-35', content: 'Asignatura Electiva', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-36': { id: 'task-36', content: 'Asignatura Electiva', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-37': { id: 'task-37', content: 'Asignatura Electiva', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-38': { id: 'task-38', content: 'Asignatura Electiva', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-39': { id: 'task-39', content: 'Tópicos en Física I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-40': { id: 'task-40', content: 'Diseño de Prototipos II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-41': { id: 'task-41', content: 'Procesamiento de Señales e Imágenes', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-42': { id: 'task-42', content: 'Asignatura Electiva', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-43': { id: 'task-43', content: 'Asignatura Electiva', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-44': { id: 'task-44', content: 'Tópicos en Física II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-45': { id: 'task-45', content: 'Proyecto de Tésis', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-46': { id: 'task-46', content: 'Tésis I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-47': { id: 'task-47', content: 'Tésis II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
  },

  Columns: {
    'column-1': { id: 'column-1', title: 'I', taskIds: ['task-1', 'task-2', 'task-3'] },
    'column-2': { id: 'column-2', title: 'II', taskIds: ['task-4', 'task-5', 'task-6'] },
    'column-3': { id: 'column-3', title: 'III', taskIds: ['task-7', 'task-8', 'task-9', 'task-10'] },
    'column-4': { id: 'column-4', title: 'IV', taskIds: ['task-11', 'task-12', 'task-13', 'task-14', 'task-15'] },
    'column-5': { id: 'column-5', title: 'V', taskIds: ['task-16', 'task-17', 'task-18', 'task-19', 'task-20'] },
    'column-6': { id: 'column-6', title: 'VI', taskIds: ['task-21', 'task-22', 'task-23', 'task-24', 'task-25'] },
    'column-7': { id: 'column-7', title: 'VII', taskIds: ['task-26', 'task-27', 'task-28', 'task-29', 'task-30'] },
    'column-8': { id: 'column-8', title: 'VIII', taskIds: ['task-31', 'task-32', 'task-33', 'task-34', 'task-35'] },
    'column-9': { id: 'column-9', title: 'IX', taskIds: ['task-36', 'task-37', 'task-38', 'task-39', 'task-40'] },
    'column-10': { id: 'column-10', title: 'X', taskIds: ['task-41', 'task-42', 'task-43', 'task-44', 'task-45'] },
    'column-11': { id: 'column-11', title: 'XI', taskIds: ['task-46'] },
    'column-12': { id: 'column-12', title: 'XII', taskIds: ['task-47'] },
  },

  ColumnOrder: [
    'column-1', 'column-2',
    'column-3', 'column-4',
    'column-5', 'column-6',
    'column-7', 'column-8',
    'column-9', 'column-10',
    'column-11', 'column-12'
  ]
};

export default IngFisica;
