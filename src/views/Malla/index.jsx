import React, { useRef, useState, useEffect, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from "react-redux";
import { gsap } from 'gsap';
//
import { cartSelector } from "../../state/cartSlice";
import { Kickstart } from './Kickstart';
import SeekCareer from "../../components/Malla/Seeker";
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
  const [malla, setMalla] = useState(data);
  const mallaRef = useRef(null);

  useEffect(() => {
    setMalla(data);
    cart.career.name !== undefined &&
      gsap.fromTo(mallaRef.current,
        { opacity: 0, duration: 0.35 },
        { opacity: 1, duration: 0.6 }
      );
  }, [data, cart.career.name]);


  const handleDragEnd = useCallback(  
    function handleDragEnd(result) {
      const { destination, source, draggableId } = result;

      // Dropped outside the list
      if (!destination) return;
      if (destination.droppableId === source.droppableId &&
          destination.index === source.index) return;

      const start = malla.Columns[source.droppableId];
      const finish = malla.Columns[destination.droppableId];
      const destinationCredits = finish.taskIds.reduce((acc, task) => acc + parseInt(malla.Tasks[task].credits), 0);
      const taskCredits = parseInt(malla.Tasks[draggableId].credits);

      // Same column
      if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
          ...start,
          taskIds: newTaskIds,
        };
        const newMalla = {
          ...malla,
          Columns: {
            ...malla.Columns,
            [newColumn.id]: newColumn,
          },
        };

        setMalla(newMalla);
        fetchData(newMalla);

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
        const newMalla = {
          ...malla,
          Columns: {
            ...malla.Columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        };

        setMalla(newMalla);
        fetchData(newMalla);

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
    }, [malla]
  );

  return (
    <main id="body-malla">
        {cart.career.name !== undefined
          ? (
          <DragDropContext onDragEnd={handleDragEnd}>
            <div id='container-malla' ref={mallaRef}>
              {malla.ColumnOrder.map(columnId => {
                const column = malla.Columns[columnId];
                const tasks = column.taskIds.map(taskId => malla.Tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />
              })}
            </div>
          </DragDropContext>
          ) : (
          <Kickstart />
        )}
    </main>
  );
};
