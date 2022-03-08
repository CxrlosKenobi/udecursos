import initialData from '../../../data/initial-data';
import dynamicData from '../../../data/dynamic-data';
import React, { useState, useEffect } from 'react';  
import Column from '../components/column';
import { DragDropContext } from 'react-beautiful-dnd';
// import Alert from '@mui/material/Alert';
import '../css/Malla.css'

function fetchData(data) {
  dynamicData.columns = data.columns;
  dynamicData.tasks = data.tasks;
}

export default function Malla(props) {
  const [state, setState] = useState(initialData);
  // const [alert, setAlert] = useState(false);

  const handleDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) { return; }
    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) { return; }
    
    const start = state.columns[source.droppableId];
    const finish = state.columns[destination.droppableId];
    const destinationCredits = finish.taskIds.reduce((acc, task) => acc + parseInt(state.tasks[task].credits), 0);
    const taskCredits = parseInt(state.tasks[draggableId].credits);
    
    if (start === finish) { // Same column
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
    
    
    // then move the reqTask to the next column to the right.
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
    } else {
      // setAlert(true);
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
    }

    // List of prerequisites for the finish column
    const taskCode = state.tasks[draggableId].code;
    const finishTaskPrerequisites = {};
    finish.taskIds.forEach(finishTaskId => {
      const finishTask = state.tasks[finishTaskId];
      if (finishTask.prerequisites.length === 0) { return; }
      finishTaskPrerequisites[finishTask.code] = finishTask.prerequisites;
    });
    // Check if the taskCode is the value of any of the keys in finishTaskPrerequisites.
    if (Object.values(finishTaskPrerequisites).some(preReq => preReq.includes(taskCode))) {
      const preReqTaskCode =       
        Object.keys(finishTaskPrerequisites).find(
          preReqTaskCode => finishTaskPrerequisites[preReqTaskCode].includes(taskCode)
        );      
      const preReqTaskId = Object.keys(state.tasks).find(taskId => state.tasks[taskId].code === preReqTaskCode);
      const preReqTaskColumn = state.columns[
        Object.keys(state.columns).find(columnId => state.columns[columnId].taskIds.includes(preReqTaskId)) // Find the column that contains the prereq task
      ];
      let preReqColumnDestination = parseInt(preReqTaskColumn.id[preReqTaskColumn.id.length - 1]) + 1;
      const preReqColumnId = `column-${preReqColumnDestination}`;
      
      // Execute a drag and drop to move the prereq task to the finish column, being a predeterminated finish column.
      // Set the newStart of the task where is being dropped.
      const start = state.columns[source.droppableId];
      const finish = state.columns[preReqColumnId];

      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      // Append to the end of the finish column
      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.push(preReqTaskId);

      const newFinish = {
        ...finish,
        taskIds: finishTaskIds
      };
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
      // const preReqTaskCredits = parseInt(state.tasks[preReqTaskId].credits);
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
      {/* {alert ? <Alert severity="warning">This is a warning alert — check it out!</Alert> : null} */}
    </div>
  )
}
