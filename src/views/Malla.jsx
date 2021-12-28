import initialData from '../data/initial-data';
import dynamicData from '../data/dynamic-data';
import React, { useState } from 'react';  
import Column from '../components/column';
import { DragDropContext } from 'react-beautiful-dnd';
import '../css/Malla.css'

function fetchData(data) {
  dynamicData.columns = data.columns;
  dynamicData.tasks = data.tasks;
  console.log(dynamicData);
}

export default function Malla(props) {
  const [state, setState] = useState(initialData);

  const handleDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) { return; }
    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) { return; }
    
    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];
    const destinationCredits = finish.taskIds.reduce((acc, task) => acc + parseInt(state.tasks[task].credits), 0);
    const taskCredits = parseInt(state.tasks[draggableId].credits);

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };

      setState(newState);
      fetchData(newState);

      return;
    }


    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };


    if ((destinationCredits + taskCredits) <= 24) {
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };

      setState(newState);
      fetchData(newState);
    } else {
      alert('La columna de destino no puede tener más de 24 créditos.');
    }
  }

  return (
    <div id='body-malla'>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div id='container-malla'>
          {state.columnOrder.map(columnId => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

            return (
              <Column key={column.id} column={column} tasks={tasks} /> 
            );
          })}
          </div>
      </DragDropContext>
    </div>
  )
}
