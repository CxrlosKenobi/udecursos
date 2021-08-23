import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Code = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  font-color: #633FE5;

`;

const Container = styled.div`
  font-family: "Apercu Pro", sans-serif black;

  font-size: 12px;
  font-color: #10162F;
  font-weight: bold;
  border: 1px solid #10162F;
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

  background-color: ${props => (props.isDragging ? '#FFD300' : "white")};

`;
const Credits = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  font-color: #633FE5;
  
  display: flex;
  bottom: 8px;
  left: 8px;
  right: 8px;
  text-align: center;

`;
export default class Task extends React.Component {
  render() {
    return (
      // Display the credits from the task
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <Code>
              {this.props.task.code}
            </Code>
            {this.props.task.content}
            <Credits>
              {this.props.task.credits}
            </Credits>
          </Container>
        )}
      </Draggable>
    );
  }
}
