import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
//
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
  padding: 8px;
  user-select: none;
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
  return (
    <Container>
      <Title>{content.name}</Title>
      <Droppable droppableId={content.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.code}
                index={index}
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
