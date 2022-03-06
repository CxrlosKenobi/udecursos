import React, { useState, useEffect, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
//
import Column from '../components/Column';
import initialData from '../data/initial-data';
import dynamicData from '../data/dynamic-data';
import astro from '../data/astroMalla';
//
import './Malla.css';


function fetchData(data) {
  dynamicData.columns = data.columns;
  dynamicData.tasks = data.tasks;
}
function colisionDetect(taskCode, sourceColumnId, destinationColumnId) {
  const state = initialData

  if (sourceColumnId === destinationColumnId) { return false; }

  // Get the prerequisites of the destinationColumnId
  const prerequisites = {}
  state.columns[destinationColumnId].taskIds.forEach(taskId => {
    if (state.tasks[taskId].prerequisites.length > 0) {
      prerequisites[taskId] = state.tasks[taskId].prerequisites
    }
  })

  // Check if the taskCode is in the prerequisites
  const colliders = []
  if (Object.values(prerequisites).some(task => task.includes(taskCode))) {
    Object.keys(prerequisites).forEach(taskId => {
      if (prerequisites[taskId].includes(taskCode)) {
        colliders.push(taskId)
      }
    })

    return colliders
  } else { return [] }
}


function delay(fn) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn()
      resolve()
    }, 300)
  })
}
// function animateMoveSensor(apiSensor) {
//   const start = useCallback(function start(event) {
//     const preDrag = api.tryGetLock('525140')
//   }, [])
// }

export function Malla(props) {
  const [state, setState] = useState(initialData);

  const handleDragEnd = useCallback(
    function handleDragEnd(result) {
      const { destination, source, draggableId } = result;

      // Dropped outside the list
      if (!destination) { return; }
      if (destination.droppableId === source.droppableId &&
          destination.index === source.index) { return; }
      
      const start = state.columns[source.droppableId];
      const finish = state.columns[destination.droppableId];
      const destinationCredits = finish.taskIds.reduce((acc, task) => acc + parseInt(state.tasks[task].credits), 0);
      const taskCredits = parseInt(state.tasks[draggableId].credits);
      
      // Same column
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

      // Moving from one list to another
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
      
      
      // If the destination credits + the task credits are greater than the max credits,
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
        
        return 
      } else {
        const element = document.getElementById('column-credits-' + destination.droppableId);
        element.classList.add('animated', 'ease-out', 'bounceIn');
        element.style.color = 'red';
        element.style.transform = 'scale(1.3)';
        setTimeout(() => {
          element.classList.remove('animated', 'ease-out', 'bounceIn');
          element.style.color = '#10162F';
          element.style.transform = 'scale(1)';
          element.style.transition = 'all 500ms';
        }, 500);
        
        return;
      }
    }, [state]
  );

  return (
    <main id='body-malla'>
      <DragDropContext onDragEnd={handleDragEnd} sensors={[]}>
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
    </main>
  )
}
