import { useEffect, useRef, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { gsap } from "gsap";
//
import SkeletonLoader from "./components/SkeletonLoader";
import { selectProcesses } from "../../redux/processesSlice";
import { careerSelector, stateMalla } from "../../redux/careerSlice";
import { Kickstart } from "./Kickstart";
import Semester from "./components/Semester";
import "./index.scss";

export function Malla() {
  const dispatch = useDispatch();
  const career = useSelector(careerSelector);
  const mallaRef = useRef(null);
  const processes = useSelector(selectProcesses);
  const mallaLoad = processes.find(p => p.id === "malla");

  useEffect(() => {
    career.info.name &&
      gsap.fromTo(mallaRef.current,
        { opacity: 0, duration: 0.35 },
        { opacity: 1, duration: 0.6 }
      )
  }, [career.info.name, mallaLoad.status])

  const handleDragEnd = useCallback(
    function handleDragEnd(result) {
      const { destination, source, draggableId } = result;
      
      // Dropped outside the list
      if (!destination) return;
      if (destination.droppableId === source.droppableId &&
          destination.index === source.index) return;

      const start = career.malla.semesters[source.droppableId];
      const finish = career.malla.semesters[destination.droppableId];

      // Same column
      if (start === finish) {
        const newTaskList = Array.from(start.tasks);
        newTaskList.splice(source.index, 1);
        
        const draggedTask = career.malla.semesters[source.droppableId].tasks.find(
          (task) => task.code === draggableId
        );

        newTaskList.splice(destination.index, 0, draggedTask);

        const updatedSemester = {
          ...start,
          tasks: newTaskList
        };
        const updatedMalla = {
          ...career.malla,
          semesters: {
            ...career.malla.semesters,
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
      const draggedTask = career.malla.semesters[source.droppableId].tasks.find(
        (task) => task.code === draggableId
      );

      finishTaskList.splice(destination.index, 0, draggedTask);
      const newFinish = {
        ...finish,
        tasks: finishTaskList
      };

      const updatedMalla = {
        ...career.malla,
        semesters: {
          ...career.malla.semesters,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      };

      dispatch(stateMalla(updatedMalla));
    }, [career.malla] // eslint-disable-line react-hooks/exhaustive-deps
  );

  return (
    <main id="body-malla" ref={mallaRef}>
      {mallaLoad && mallaLoad.status === "pending" ? (
        <SkeletonLoader />
      ) : (
        career.info.name
          ? (
          <DragDropContext onDragEnd={handleDragEnd}>
            <div id="container-malla">
              {Object.values(career.malla.semesters).map((semester) => {
                return (
                  <Semester key={semester.id} content={semester} tasks={semester.tasks} />
                );
              })}
            </div>
          </DragDropContext>
          ) : (
          <Kickstart />
        )
      )}
    </main>
  );
};
