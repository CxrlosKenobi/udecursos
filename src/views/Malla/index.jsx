import React, { useState, useEffect, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from "react-redux";
//
import { cartSelector } from "../../state/cartSlice";
import SeekCareer from "./Seeker";
import Column from '../../components/Malla/Column';
import dynamicData from '../../data/dynamic-data';
//
import './index.scss';



function fetchData(data) {
  dynamicData.columns = data.Columns;
  dynamicData.tasks = data.tasks;
}


export function Malla() {
  const cart = useSelector(cartSelector);
  const data = SeekCareer(cart.career.name);
  const [state, setState] = useState(data);

  useEffect(() => {
    setState(data);
  }, [data]);
  

  const handleDragEnd = useCallback(
    function handleDragEnd(result) {
      const { destination, source, draggableId } = result;

      // Dropped outside the list
      if (!destination) return;
      if (destination.droppableId === source.droppableId &&
          destination.index === source.index) return; 
      
      const start = state.Columns[source.droppableId];
      const finish = state.Columns[destination.droppableId];
      const destinationCredits = finish.taskIds.reduce((acc, task) => acc + parseInt(state.Tasks[task].credits), 0);
      const taskCredits = parseInt(state.Tasks[draggableId].credits);
      
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
          Columns: {
            ...state.Columns,
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
          Columns: {
            ...state.Columns,
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
          {state.ColumnOrder.map(columnId => {
            const column = state.Columns[columnId];
            const tasks = column.taskIds.map(taskId => state.Tasks[taskId]);

            return (
              <Column key={column.id} column={column} tasks={tasks} /> 
            );
          })}
          </div>
      </DragDropContext>
    </main>
  );
};
