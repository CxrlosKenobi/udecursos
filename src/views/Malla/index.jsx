import { useRef, useEffect, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from "react-redux";
//
import { getCareer, getCareerTasks } from "../../APIs/MongoDB";
import { mallaSelector, careerSelector, stateMalla } from "../../redux/careerSlice";
import { Kickstart } from './Kickstart';
import Semester from './components/Semester';
//
import './index.scss';

export function Malla() {
  const dispatch = useDispatch();
  const career = useSelector(careerSelector);
  const malla = useSelector(mallaSelector);
  const mallaRef = useRef(null);

  useEffect(() => {
    async function careerData() {
      const _career = await getCareer("INF");
      const _tasks = await getCareerTasks("INF");
      const _malla = buildMalla(_career, _tasks);
      dispatch(stateMalla(_malla));
    }
    careerData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleDragEnd = useCallback(
    function handleDragEnd(result) {
      console.log("handleDragEnd result", result);
      const { destination, source, draggableId } = result;

      // Dropped outside the list
      if (!destination) return;
      if (destination.droppableId === source.droppableId &&
          destination.index === source.index) return;

      const start = malla.semesters[source.droppableId];
      const finish = malla.semesters[destination.droppableId];

      // Same column
      if (start === finish) {
        const newTaskList = Array.from(start.tasks);
        newTaskList.splice(source.index, 1);
        
        const draggedTask = malla.semesters[source.droppableId].tasks.find(
          (task) => task.code === draggableId
        );

        newTaskList.splice(destination.index, 0, draggedTask);

        const updatedSemester = {
          ...start,
          tasks: newTaskList
        };
        const updatedMalla = {
          ...malla,
          semesters: {
            ...malla.semesters,
            [updatedSemester.id]: updatedSemester
          }
        };

        dispatch(stateMalla(updatedMalla));
        return;
      }

      // Moving from one list to another
      const startTaskList = Array.from(start.tasks);
      startTaskList.splice(source.index, 1);
      const newStart = {
        ...start,
        tasks: startTaskList,
      };

      const finishTaskList = Array.from(finish.tasks);
      const draggedTask = malla.semesters[source.droppableId].tasks.find(
        (task) => task.code === draggableId
      );

      finishTaskList.splice(destination.index, 0, draggedTask);
      const newFinish = {
        ...finish,
        tasks: finishTaskList
      };

      const updatedMalla = {
        ...malla,
        semesters: {
          ...malla.semesters,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      };

      dispatch(stateMalla(updatedMalla));
    }, [malla] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <main id="body-malla">
      {career.info.name !== undefined
        ? (
        <DragDropContext onDragEnd={handleDragEnd}>
          <div id='container-malla' ref={mallaRef}>
            {malla.semesters && Object.values(malla.semesters).map((semester) => {
              return (
                <Semester key={semester.id} content={semester} tasks={semester.tasks} />
              );
            })}
          </div>
        </DragDropContext>
        ) : (
        <Kickstart />
      )}
    </main>
  );
};

function buildMalla(career, _tasks) {
  let malla = { semesters: {} };
  Object.values(career.semesters).map((semester) => {
    const builtSemester = {
      ...semester,
      tasks: _tasks.filter((task) => semester.tasksCodes.includes(task.code))
    };

    delete builtSemester.tasksCodes;
    return malla.semesters[semester.id] = builtSemester;
  });
  
  return malla;
};
