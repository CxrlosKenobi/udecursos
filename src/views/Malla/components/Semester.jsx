import { useDispatch, useSelector } from "react-redux";
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
//
import { semestersSelector } from "../../../redux/slices/career";
import { passTask } from "../../../redux/slices/career";
import Task from './Task';


const Container = styled.div`
  font-family: "Apercu Pro", sans-serif black;
  color: var(--text-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: relative;
  margin-top: 5px;
  background-color: transparent;
  border-radius: 15px;
  width: 110px;

`;
const Title = styled.h3`
  width: 75%;
  height: fit-content;
  border-radius: 5px;
  padding: 4px 8px;
  border: 1px solid transparent;
  user-select: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 1px solid var(--border-color);
    cursor: pointer;
  }
`;
const TaskList = styled.div`
  margin: 4px;
  padding: 4px 4px 0 4px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'var(--border-color)' : 'inherit'};
  border-radius: 9px;

  flex-grow: 1;
  min-height: 100px;
`;

export default function Semester({ content, tasks }) {
  const dispatch = useDispatch();
  const semester = useSelector(semestersSelector);
  
  function onClick() {
    semester[content.id].tasks.forEach((task, index) => {
      dispatch(passTask({
        col: content.id,
        index: index,
        passed: !task.properties.done,
        credits: Number(task.credits),
      }));
    })
  };

  return (
    <Container>
      <Title onClick={onClick}>
        {content.name}
      </Title>
      <Droppable droppableId={content.id}>
        {(provided, snapshot) => (
          <TaskList
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task
                index={index}
                key={task.code}
                content={{ col: content.id, ...task }}
              />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};
