import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';

const Container = styled.div`
  font-family: "Apercu Pro", sans-serif black;
  font-color: #10162F;

  margin-top: 5px;
  background-color: white;
  border-radius: 10px;
  width: 110px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  `;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? 'lightgrey' : 'inherit'};
  flex-grow: 1;
  min-height: 100px;
`;

export default class Column extends React.Component {
    render() {
      return (
        <Container>
          <Title>{this.props.column.title}</Title>
          <Droppable droppableId={this.props.column.id}>
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {this.props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      );
    }
  }
  