/* Data format:
  ramos: {
    'id': { id: 'id', content: 'NAME', color: '#FFFFFF', credits: 00 code: '000000-0', 000000-0: [] }
*/

const Astronomia = {
  Tasks: {
    'task-1': { id: 'task-1', content: 'Astronomía I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-2': { id: 'task-2', content: 'Álgebra y Trigonometría', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-3': { id: 'task-3', content: 'Fronteras de la Astronomía', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-4': { id: 'task-4', content: 'Computación Científica', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    
    'task-5': { id: 'task-5', content: 'Astronomía II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-6': { id: 'task-6', content: 'Cálculo Diferencial e Integral', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-7': { id: 'task-7', content: 'Álgebra Lineal', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-8': { id: 'task-8', content: 'Física II: Fundamentos de Mecánica', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    
    'task-9': { id: 'task-9', content: 'Astronomía Práctica I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-10': { id: 'task-10', content: 'Cálculo III', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-11': { id: 'task-11', content: 'Física Matemática I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-12': { id: 'task-12', content: 'Física III-1: Electro-magnetismo I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-13': { id: 'task-13', content: 'Ecuaciones Diferenciales', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-14': { id: 'task-14', content: 'Inglés Comunicativo: Básico I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },

    'task-15': { id: 'task-15', content: 'Programación Astronómica', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-16': { id: 'task-16', content: 'Estadística', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-17': { id: 'task-17', content: 'Física IV: Termodinámica', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-18': { id: 'task-18', content: 'Física III-2: Electro-magnetismo II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-19': { id: 'task-19', content: 'Inglés Comunicativo: Básico II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },

    'task-20': { id: 'task-20', content: 'Astrofísica General', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-21': { id: 'task-21', content: 'Mecánica Clásica I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-22': { id: 'task-22', content: 'Física V', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-23': { id: 'task-23', content: 'Física VI', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-24': { id: 'task-24', content: 'Inglés Comunicativo: Intermedio I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },

    'task-25': { id: 'task-25', content: 'Astrofísica Estelar', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-26': { id: 'task-26', content: 'Física Atómica y Nuclear', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-27': { id: 'task-27', content: 'Astronomía Observacional', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-28': { id: 'task-28', content: 'Complementario I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-29': { id: 'task-29', content: 'Inglés Comunicativo: Intermedio II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },

    'task-30': { id: 'task-30', content: 'Astrofísica Galáctica', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-31': { id: 'task-31', content: 'Física Matemática II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-32': { id: 'task-32', content: 'Mecánica Cuántica I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-33': { id: 'task-33', content: 'Complementario II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-34': { id: 'task-34', content: 'Software y Análisis de Astro-datos', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-35': { id: 'task-35', content: 'Seminario', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },

    'task-36': { id: 'task-36', content: 'Astrofísica Extragaláctica', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-37': { id: 'task-37', content: 'Física Estadística', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-38': { id: 'task-38', content: 'Astronomía Teórica Computacional', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-39': { id: 'task-39', content: 'Complementario III', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-40': { id: 'task-40', content: 'Electrodinámica I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-41': { id: 'task-41', content: 'Radio-astronomía', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },

    'task-42': { id: 'task-42', content: 'Cosmología', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-43': { id: 'task-43', content: 'Asignatura Electiva I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-44': { id: 'task-44', content: 'Asignatura Electiva II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    'task-45': { id: 'task-45', content: 'Proyecto de Tesis', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },

    'task-46': { id: 'task-46', content: 'Tésis I', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
    
    'task-47': { id: 'task-47', content: 'Tésis II', color: "#FFD300", credits: "0", code: "000000-0", prerequisites: [] },
  },

  Columns: {
    'column-1': {
      id: 'column-1',
      title: 'I',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      credits: 0},
    'column-2': {
      id: 'column-2',
      title: 'II',
      taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
      credits: 0},
    'column-3': {
      id: 'column-3',
      title: 'III',
      taskIds: ['task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14'],
      credits: 0},
    'column-4': {
      id: 'column-4',
      title: 'IV',
      taskIds: ['task-15', 'task-16', 'task-17', 'task-18', 'task-19'],
      credits: 0},
    'column-5': {
      id: 'column-5',
      title: 'V',
      taskIds: ['task-20', 'task-21', 'task-22', 'task-23', 'task-24'],
      credits: 0},
    'column-6': {
      id: 'column-6',
      title: 'VI',
      taskIds: ['task-25', 'task-26', 'task-27', 'task-28', 'task-29'],
      credits: 0},
    'column-7': {
      id: 'column-7',
      title: 'VII',
      taskIds: ['task-30', 'task-31', 'task-32', 'task-33', 'task-34', 'task-35'],
      credits: 0},
    'column-8': {
      id: 'column-8',
      title: 'VIII',
      taskIds: ['task-36', 'task-37', 'task-38', 'task-39', 'task-40', 'task-41'],
      credits: 0},
    'column-9': {
      id: 'column-9',
      title: 'IX',
      taskIds: ['task-42', 'task-43', 'task-44', 'task-45'],
      credits: 0},
    'column-10': {
      id: 'column-10',
      title: 'X',
      taskIds: ['task-46'],
      credits: 0},
    'column-11': {
      id: 'column-11',
      title: 'XI',
      taskIds: ['task-47'],
      credits: 0}
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

export default Astronomia;
