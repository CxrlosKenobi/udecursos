import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 11.5px;
  font-color: #10162F;
  border: 1px solid lightgrey;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 80px;
  width: 90px;
  padding: 5px;
  margin-bottom: 10px;

  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};

`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
