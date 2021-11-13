import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid #10162F;
  border-radius: 9px;
  
  height: 80px;
  width: 90px;
  padding: 5px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  position: relative;

  /* Center the grid item */
  

  background-color: ${props => (props.isDragging ? '#FFD300' : "white")};

`;
const Code = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  font-weight: bold;
  font-color: #633FE5;

  position: absolute;
  padding: 10px;
  top: 0px;
  left: 0px;
  user-select: none;
`;
const Content = styled.div`
  font-family: "Apercu Pro", sans-serif black;
  font-size: 12px;
  font-color: #10162F;
  font-weight: bold;
  line-height: 1.2;

  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
const Credits = styled.div`
  font-family: "Suisse Int\'l Mono", monospace;
  font-size: 8.5px;
  font-color: #633FE5;

  position: absolute;
  bottom: 0px;
  left: 0px;
  padding: 10px;
  user-select: none;

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

            <Content>
              {this.props.task.content}
            </Content>

            <Credits>
              {this.props.task.credits}
            </Credits>

          </Container>
        )}
      </Draggable>
    );
  }
}
