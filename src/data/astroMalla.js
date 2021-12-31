/* Data format:
  ramos: {
    'id': { id: 'id', content: 'NAME', color: '#FFFFFF', credits: 0, code: 'courseCode', prerequisites: [] }
*/

const astro = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Astronomía I', color: "black", credits: "4", code: "510140", prerequisites: [] },
    'task-2': { id: 'task-2', content: 'Álgebra y Trigonometría', color: "#FFD300", credits: "5", code: "525140", prerequisites: [] },
    'task-3': { id: 'task-3', content: 'Fronteras de la Astronomía', color: "#FFD300", credits: "5", code: "527140", prerequisites: [] },
    'task-4': { id: 'task-4', content: 'Computación Científica', color: "#FFD300", credits: "5", code: "531140", prerequisites: [] },
    
    'task-5': { id: 'task-5', content: 'Astronomía II', color: "#FFD300", credits: "2", code: "503120", prerequisites: [] },
    'task-6': { id: 'task-6', content: 'Cálculo Diferencial e Integral', color: "#FFD300", credits: "4", code: "510150", prerequisites: ['510140'] },
    'task-7': { id: 'task-7', content: 'Álgebra Lineal', color: "#FFD300", credits: "5", code: "525150", prerequisites: ['525140'] },
    'task-8': { id: 'task-8', content: 'Física II: Fundamentos de Mecánica', color: "#FFD300", credits: "5", code: "527150", prerequisites: ['527140'] },
    
    'task-9': { id: 'task-9', content: 'Astronomía Práctica I', color: "#FFD300", credits: "3", code: "503152", prerequisites: [] },
    'task-10': { id: 'task-10', content: 'Cálculo III', color: "#FFD300", credits: "2", code: "500151", prerequisites: [] },
    'task-11': { id: 'task-11', content: 'Física Matemática I', color: "#FFD300", credits: "4", code: "503207", prerequisites: [] },
    'task-12': { id: 'task-12', content: 'Física III-1: Electro-magnetismo I', color: "#FFD300", credits: "4", code: "521218", prerequisites: ['525150', '527150'] },
    'task-13': { id: 'task-13', content: 'Ecuaciones Diferenciales', color: "#FFD300", credits: "5", code: "521227", prerequisites: ['525150', '527150'] },
    'task-14': { id: 'task-14', content: 'Inglés Comunicativo: Básico I', color: "#FFD300", credits: "4", code: "503208", prerequisites: [] },

    'task-15': { id: 'task-15', content: 'Programación Astronómica', color: "#FFD300", credits: "4", code: "521230", prerequisites: ['503208', '521227'] },
    'task-16': { id: 'task-16', content: 'Estadística', color: "#FFD300", credits: "4", code: "543206", prerequisites: ['521218'] },
    'task-17': { id: 'task-17', content: 'Física IV: Termodinámica', color: "#FFD300", credits: "4", code: "503213", prerequisites: [] },
    'task-18': { id: 'task-18', content: 'Física III-2: Electro-magnetismo II', color: "#FFD300", credits: "4", code: "503212", prerequisites: ['503208'] },
    'task-19': { id: 'task-19', content: 'Inglés Comunicativo: Básico II', color: "#FFD300", credits: "3", code: "201", prerequisites: [] },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'I',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
      credits: '',
    },
    'column-2': {
      id: 'column-2',
      title: 'II',
      taskIds: ['task-5', 'task-6', 'task-7', 'task-8'],
      credits: '',
    },
    'column-3': {
      id: 'column-3',
      title: 'III',
      taskIds: ['task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14'],
      credits: '',
    },
    'column-4': {
      id: 'column-4',
      title: 'IV',
      taskIds: ['task-15', 'task-16', 'task-17', 'task-18', 'task-19'],
      credits: '',
    }
},
columnOrder: [
    'column-1', 'column-2', 
    'column-3', 'column-4'
]
};

export default astro;
