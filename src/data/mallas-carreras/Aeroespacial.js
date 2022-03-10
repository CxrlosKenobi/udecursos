/* Data format:
  ramos: {
    'id': { id: 'id', content: 'NAME', color: '#FFFFFF', credits: 0, code: 'courseCode', prerequisites: [] }
*/

const Aeroespacial = {

  Tasks: {
    'task-1': { id: 'task-1', content: 'Física I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-2': { id: 'task-2', content: 'Álgebra I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-3': { id: 'task-3', content: 'Cálculo I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-4': { id: 'task-4', content: 'Química General I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-5': { id: 'task-5', content: 'Intro. Ingeniería Aeroespacial', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-6': { id: 'task-6', content: 'Física II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-7': { id: 'task-7', content: 'Álgebra II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-8': { id: 'task-8', content: 'Cálculo II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-9': { id: 'task-9', content: 'Química General II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-10': { id: 'task-10', content: 'Intro. Innovación Ingeniería', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-11': { id: 'task-11', content: 'Ecuaciones Diferenciales', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-12': { id: 'task-12', content: 'Mediciones', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-13': { id: 'task-13', content: 'Cálculo III', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-14': { id: 'task-14', content: 'Estática', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-15': { id: 'task-15', content: 'Programación', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-16': { id: 'task-16', content: 'Comunicación Gráfica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-17': { id: 'task-17', content: 'Cálculo Numérico', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-18': { id: 'task-18', content: 'Termodinámica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-19': { id: 'task-19', content: 'Materiales', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-20': { id: 'task-20', content: 'Dinámica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-21': { id: 'task-21', content: 'Estadística y Probabilidades', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-22': { id: 'task-22', content: 'Intro. Procesos Manufactura', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-23': { id: 'task-23', content: 'Comunicación en Ingeniería', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-24': { id: 'task-24', content: 'Mecánica de Fluidos', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-25': { id: 'task-25', content: 'Mecánica de Sólidos I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-26': { id: 'task-26', content: 'Electro-magnetismo', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-27': { id: 'task-27', content: 'Sistemas Mecánicos', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-28': { id: 'task-28', content: 'Inglés Comunicativo básico I', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-29': { id: 'task-29', content: 'Complementario', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-30': { id: 'task-30', content: 'Integración a través de CDIO', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-31': { id: 'task-31', content: 'Transferencia de Calor', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-32': { id: 'task-32', content: 'Estructuras Aeroespaciales', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-33': { id: 'task-33', content: 'Análisis de Sistemas Dinámicos', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-34': { id: 'task-34', content: 'Inglés Comunicativo básico II', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-35': { id: 'task-35', content: 'Termodinámica Aplicada', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-36': { id: 'task-36', content: 'Electrotecnia', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-37': { id: 'task-37', content: 'Electrónica Industrial', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-38': { id: 'task-38', content: 'Aerodinámica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-39': { id: 'task-39', content: 'Procesos Industriales de Fabricación', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-40': { id: 'task-40', content: 'Técnicas de Simulacion', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-41': { id: 'task-41', content: 'Redacción Técnica y Científica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-42': { id: 'task-42', content: 'Integración a través de Investigación', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-43': { id: 'task-43', content: 'Mecánica de Vuelo', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-44': { id: 'task-44', content: 'Sistemas de Control', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-45': { id: 'task-45', content: 'Elementos de Máquinas', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-46': { id: 'task-46', content: 'Relaciones Humanas', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-47': { id: 'task-47', content: 'Economía', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-48': { id: 'task-48', content: 'Electivos o Estadías', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-49': { id: 'task-49', content: 'Diseño de Aeronaves', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-50': { id: 'task-50', content: 'Astronáutica', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-51': { id: 'task-51', content: 'Propulsión', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-52': { id: 'task-52', content: 'Formulación y Evaluación de Proyectos', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-53': { id: 'task-53', content: 'Integradora Solución de Problema Complejo', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-54': { id: 'task-54', content: 'Electivos o Estadías', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-55': { id: 'task-55', content: 'Gestión de Empresas', color: "black", credits: "0", code: "000000-0", prerequisites: [] },

    'task-56': { id: 'task-56', content: 'Práctica Profesional', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
    'task-57': { id: 'task-57', content: 'Memoria de Título', color: "black", credits: "0", code: "000000-0", prerequisites: [] },
  },

  Columns: {
    'column-1': { id: 'column-1', title: 'I', taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'] },
    'column-2': { id: 'column-2', title: 'II', taskIds: ['task-6', 'task-7', 'task-8', 'task-9', 'task-10'] },
    'column-3': { id: 'column-3', title: 'III', taskIds: ['task-11', 'task-12', 'task-13', 'task-14', 'task-15', 'task-16'] },
    'column-4': { id: 'column-4', title: 'IV', taskIds: ['task-17', 'task-18', 'task-19', 'task-20', 'task-21', 'task-22', 'task-23'] },
    'column-5': { id: 'column-5', title: 'V', taskIds: ['task-24', 'task-25', 'task-26', 'task-27', 'task-28', 'task-29'] },
    'column-6': { id: 'column-6', title: 'VI', taskIds: ['task-30', 'task-31', 'task-32', 'task-33', 'task-34'] },
    'column-7': { id: 'column-7', title: 'VII', taskIds: ['task-35', 'task-36', 'task-37', 'task-38', 'task-39', 'task-40', 'task-41'] },
    'column-8': { id: 'column-8', title: 'VIII', taskIds: ['task-42', 'task-43', 'task-44', 'task-45', 'task-46', 'task-47'] },
    'column-9': { id: 'column-9', title: 'IX', taskIds: ['task-48', 'task-49', 'task-50', 'task-51', 'task-52'] },
    'column-10': { id: 'column-10', title: 'X', taskIds: ['task-53', 'task-54', 'task-55'] },
    'column-11': { id: 'column-11', title: 'XI', taskIds: ['task-56', 'task-57'] },
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

export default Aeroespacial;
